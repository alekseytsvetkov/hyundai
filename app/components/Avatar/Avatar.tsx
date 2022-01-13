import React from 'react';
import {Image} from 'react-native';
import {RenderEventItemProps} from '../EventItem/types';

export const Avatar = ({item}: RenderEventItemProps) => {
  const {avatar_url} = item.actor;

  return (
    <Image
      source={{
        uri: avatar_url,
        height: 50,
        width: 50,
      }}
    />
  );
};
