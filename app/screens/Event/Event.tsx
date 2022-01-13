import React from 'react';
import {Text, View} from 'react-native';

export const EventScreen = ({route}) => {
  const {item} = route.params;

  return (
    <View>
      <Text>Event {item.id}</Text>
    </View>
  );
};
