import styled from '@emotion/styled';
import * as MUIcon from '@mui/icons-material';
import { Color, colors } from './colors';

type IconName = keyof typeof MUIcon;

export type IconType = {
  iconName: IconName;
  size: number;
  color: Color;
};

const MatirialIcon = ({ iconName: icon, size, color }: IconType) => {
  const Icon = MUIcon[icon];

  const style = {
    fontSize: `${size}px`,
    color: colors.getColor(color),
  };

  return <Icon style={style} />;
};

export type IconProps = {
  iconName: IconName;
  size?: number;
  color?: Color;
};

export const Icon = ({ iconName: icon, size = 12, color = 'Gray.1000' }: IconProps) => {
  return <MatirialIcon iconName={icon} size={size} color={color} />;
};
