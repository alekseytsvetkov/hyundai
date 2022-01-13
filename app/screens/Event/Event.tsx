import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Avatar} from '_app/components';
import {NavigatorParamList} from '_app/navigators/types';

export const EventScreen: React.FC = () => {
  const route = useRoute<RouteProp<NavigatorParamList, 'event'>>();

  const {item} = route.params;

  return (
    <View>
      <Text>{item.actor?.display_login}</Text>
      <Avatar item={item} />
      <Text>{item.type}</Text>
    </View>
  );
};
