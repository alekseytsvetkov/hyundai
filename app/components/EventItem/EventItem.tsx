import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RenderEventItemProps} from './types';
import {NavigatorParamList} from '_app/navigators/types';
import {Avatar} from '_app/components';

export const EventItem: React.FC<RenderEventItemProps> = ({item}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigatorParamList>>();

  const onPress = () => {
    navigation.navigate('event', {item: item});
  };

  return (
    <TouchableOpacity style={styles.event} key={item.id} onPress={onPress}>
      <Text>{item.actor?.display_login}</Text>
      <Avatar item={item} />
      <Text>{item.type}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  event: {
    paddingVertical: 10,
  },
});
