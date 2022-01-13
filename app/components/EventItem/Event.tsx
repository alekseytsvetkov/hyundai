import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RenderEventItemProps} from './types';
import {Avatar} from '_app/components';
import React from 'react';

export const Event: React.FC<RenderEventItemProps> = ({item}) => {
  return (
    <TouchableOpacity style={styles.event} key={item.id} onPress={onPress}>
      <View>
        <Text>{item.actor?.display_login}</Text>
        <Avatar item={item} />
        <Text>{item.type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  event: {
    paddingVertical: 10,
  },
});
