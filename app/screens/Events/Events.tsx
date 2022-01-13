import React, {useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';
import {EventItem} from '_app/components';
import {useAppDispatch, useAppSelector} from '_app/hooks';
import {RootState} from '_app/store';
import {fetchEvents, selectAllEvents} from '_app/store/reducers/events';

export const EventsScreen = () => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector((state: RootState) => state.events);
  const events = useAppSelector(selectAllEvents);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

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
      onRefresh={!loading ? () => dispatch(fetchEvents()) : undefined}
      refreshing={loading}
    />
  );
};
