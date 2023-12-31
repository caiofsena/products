import React from 'react';
import { ColorValue, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Picture, PictureProps } from '../Picture';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from '../Text';
import { EnumTextMode } from '../../../enum';

export type ButtonProps = TouchableOpacityProps & {
  text?: { value: string, color: ColorValue };
  picture?: PictureProps;
  icon?: { name: string; size: number; color: string };
}

export function Button(
  {
    text,
    picture,
    icon,
    ...rest
  }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} >
      {text && <Text mode={EnumTextMode.LABEL} text={text.value} color={text.color} />}
      {picture && <Picture source={picture.source} width={picture.width} height={picture.height} />}
      {icon && <Icon name={icon.name} size={icon.size} color={icon.color} />}
    </TouchableOpacity>
  );
}