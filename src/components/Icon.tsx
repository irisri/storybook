import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { Color, colors } from './colors';

library.add(fab, far, fas);

export type IconProps = {
  iconName: [IconPrefix, IconName] | IconName;
  size?: FontAwesomeIconProps['size'];
  color?: Color;
};

export const Icon = ({ iconName: icon, size = 'sm', color = 'Gray.1000' }: IconProps) => {
  const customStyle = color ? { color: colors.getColor(color) } : {};

  return <FontAwesomeIcon icon={icon} size={size} style={customStyle} />;
};
