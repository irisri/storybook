import styled from '@emotion/styled';
import * as MUIcon from '@mui/icons-material';

type IconName = keyof typeof MUIcon;

export type IconProps = {
  iconName: IconName;
  size?: number;
};

const MatirialIcon = ({ iconName: icon, size = 12 }: IconProps) => {
  const Icon = MUIcon[icon];

  return <Icon style={{ fontSize: `${size}px` }} />;
};

const StyledIcon = styled(MatirialIcon)<{ size: number }>`
  font-size: ${({ size }) => size}px;
`;

export const Icon = ({ iconName: icon, size = 12 }: IconProps) => {
  return <StyledIcon iconName={icon} size={size} />;
};
