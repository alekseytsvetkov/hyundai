import React from 'react';
import {Text} from 'react-native';

export const EventScreen = ({route}) => {
  const {item} = route.params;

  return <Text>Event {item.id}</Text>;
};
