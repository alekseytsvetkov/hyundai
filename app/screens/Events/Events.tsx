import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import {EventItem} from '_app/components';
import {useAppDispatch, useAppSelector} from '_app/hooks';
import {RootState} from '_app/store';
import {fetchEvents, selectAllEvents} from '_app/store/reducers/events';

export const EventsScreen = () => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector((state: RootState) => state.events);
  const events = useAppSelector(selectAllEvents);

  const isFocused = useIsFocused();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    isFocused && getEvents();
  }, [isFocused]);

  useFocusEffect(
    React.useCallback(() => {
      if (isRefreshing && !isScrolling) {
        console.log('start interval');
        const intervalId = setInterval(() => {
          getEvents();
        }, 60000);
        return () => clearInterval(intervalId);
      } else {
        const intervalId = setTimeout(() => {
          setIsRefreshing(true);
        }, 15000);
        return () => clearTimeout(intervalId);
      }
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
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
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
