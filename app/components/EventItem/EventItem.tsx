import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RenderEventItemProps} from './types';
import {NavigatorParamList} from '_app/navigators/types';

export const EventItem: React.FC<RenderEventItemProps> = ({item}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigatorParamList>>();

  const onPress = () => {
    navigation.navigate('event', {item: item});
  };

  return (
    <TouchableOpacity style={styles.event} key={item.id} onPress={onPress}>
      <View>
        <Text>id: {item.id}</Text>
        <Text>created: {item.created_at}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  event: {
    paddingVertical: 10,
  },
});
