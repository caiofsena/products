import React from 'react';
import * as S from './styles';
import { colors } from '../../../theme';
import { EnumTextMode } from '../../../enum';
import { noPicture } from '../../../constants';

export type CardProps = {
  thumbnail?: { value?: string; width?: number; height?: number };
  title?: string;
  detail?: string;
  value?: string;
  isFavorite?: boolean;
  onPressCard?: () => void;
}

export function Card({
  thumbnail = { value: noPicture, width: 140, height: 100 },
  title,
  detail,
  value,
  isFavorite,
  onPressCard
}: CardProps) {
  return (
    <S.Container onPress={onPressCard}>
      <S.ThumbnailContainer>
        <S.Thumbnail 
          source={{ uri: thumbnail.value }} 
          width={ thumbnail.width} 
          height={ thumbnail.height} 
        />
      </S.ThumbnailContainer>
      <S.InfoContainer>
        { title && <S.Title mode={EnumTextMode.DETAIL} text={title} color={colors.gray300} numberOfLines={1} />}
        { isFavorite && <S.Favorite name='heart' color={colors.red} size={22} /> }
      </S.InfoContainer>
      { detail && <S.Detail mode={EnumTextMode.TITLE_SMALL} text={detail} numberOfLines={3} /> }
      { value && <S.Value mode={EnumTextMode.MONEY} text={value} /> }
    </S.Container>
  );
}