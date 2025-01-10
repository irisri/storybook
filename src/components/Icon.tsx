import styled from '@emotion/styled';
import * as MUIcon from '@mui/icons-material';

interface IconProps {
  icon: keyof typeof MUIcon;
  size?: number;
}

const MatirialIcon = ({ icon, size = 12 }: IconProps) => {
  const Icon = MUIcon[icon];

  return <Icon style={{ fontSize: `${size}px` }} />;
};

const StyledIcon = styled(MatirialIcon)<{ size: number }>`
  font-size: ${({ size }) => size}px;
`;

export const Icon = ({ icon, size = 12 }: IconProps) => {
  return <StyledIcon icon={icon} size={size} />;
};
