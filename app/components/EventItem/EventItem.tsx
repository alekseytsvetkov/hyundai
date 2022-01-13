import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface RenderEventItemProps {
  item: TEvent;
}

export type TEvent = {
  id: number;
  type: string; // Enum
  actor: any; // TActor
  repo: any; // TRepo
  payload: any; // TPayload
  public: boolean;
  created_at: string;
};

export const EventItem: React.FC<RenderEventItemProps> = ({item}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('event', {item: item});
  };

  return (
    <TouchableOpacity style={styles.event} key={item.id} onPress={onPress}>
      <View>
        <Text>id: {item.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  event: {
    paddingVertical: 10,
  },
});
