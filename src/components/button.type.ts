import { colors, Color } from './colors';
import { IconProps } from './Icon';

export type Size = 's' | 'm' | 'l';

export type Variant = 'primary' | 'secondary' | 'warning';

export const padding: Record<Size, string> = {
  s: '2px 4px',
  m: '4px 8px',
  l: '8px 16px',
};

export const fontSize: Record<Size, string> = {
  s: '12px',
  m: '14px',
  l: '16px',
};

export const iconSize: Record<Size, IconProps['size']> = {
  s: 'xs',
  m: 'sm',
  l: 'lg',
};

export const buttonColor: Record<Variant, string> = {
  primary: colors.getColor('Green.800'),
  secondary: colors.getColor('Purple.500'),
  warning: colors.getColor('Red.600'),
};

export const colorForIcon: Record<Variant, Color> = {
  primary: 'Gray.100',
  warning: 'Gray.100',
  secondary: 'Purple.500',
};
