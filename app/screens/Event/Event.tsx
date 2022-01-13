import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigatorParamList} from '_app/navigators/types';

export const EventScreen: React.FC = () => {
  const route = useRoute<RouteProp<NavigatorParamList, 'event'>>();

  const {item} = route.params;

  return (
    <View style={styles.event}>
      <Text>id: {item.id}</Text>
      <Text>created: {item.created_at}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  event: {
    paddingVertical: 10,
  },
});
