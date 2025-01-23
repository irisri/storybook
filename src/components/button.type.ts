import { colors } from './colors';

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

export const iconSize: Record<Size, number> = {
  s: 12,
  m: 14,
  l: 16,
};

export const buttonColor: Record<Variant, string> = {
  primary: colors.getColor('IridescentTurquoise.800'),
  secondary: colors.getColor('Purple.500'),
  warning: colors.getColor('Red.600'),
};
