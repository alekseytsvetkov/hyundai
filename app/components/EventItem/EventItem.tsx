import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface RenderEventItemProps {
  item: TEvent;
}

type TEvent = {
  id: string;
};

export const EventItem: React.FC<RenderEventItemProps> = ({item}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('event', {item: item});
  };

  return (
    <TouchableOpacity key={item.id} onPress={onPress}>
      <View>
        <Text>id: {item.id}</Text>
      </View>
    </TouchableOpacity>
  );
};
