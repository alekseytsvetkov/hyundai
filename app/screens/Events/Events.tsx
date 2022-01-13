import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {EventItem, Loading} from '_app/components';
import {useAppDispatch, useAppSelector} from '_app/hooks';
import {RootState} from '_app/store';
import {fetchEvents, selectAllEvents} from '_app/store/reducers/events';

export const EventsScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector((state: RootState) => state.events);
  const events = useAppSelector(selectAllEvents);

  const isFocused = useIsFocused();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    isFocused && getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  useFocusEffect(
    useCallback(() => {
      if (isRefreshing && !isScrolling) {
        const intervalId = setInterval(() => {
          getEvents();
        }, 60000);
        return () => clearInterval(intervalId);
      } else {
        const timeoutId = setTimeout(() => {
          setIsRefreshing(true);
        }, 15000);
        return () => clearTimeout(timeoutId);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRefreshing, isScrolling]),
  );

  const getEvents = async () => {
    try {
      dispatch(fetchEvents());
      setIsRefreshing(false);
      return null;
    } catch (error) {
      console.log({error}); // something in ui, maybe toast
    }
    return null;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={events}
      renderItem={({item}) => {
        return <EventItem item={item} key={item.id} />;
      }}
      keyExtractor={item => item.id}
      onRefresh={!isRefreshing ? () => getEvents() : undefined}
      refreshing={loading}
      onScroll={event => setIsScrolling(!event ? false : true)}
    />
  );
};
