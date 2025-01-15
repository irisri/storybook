import styled from '@emotion/styled';
import { colors } from '../stories/colors';
import { IconProps } from './Icon';
import { Button } from './Button';

const StyledDiv = styled.div<{ iconName?: string }>`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: ${({ iconName }) => (iconName ? '4px 4px 4px 10px' : '4px 10px')};
  border-radius: 4px;
  background-color: ${colors.getColor('IridescentTurquoise.800')};
  transition: 0.13s ease-out;
  color: ${colors.getColor('Gray.100')};
  & button:hover {
    box-shadow: none;
  }
`;

export type TagType = {
  text: string;
  iconName?: IconProps['iconName'];
  onClick?: () => void;
};

export const Tag = ({ text, iconName, onClick }: TagType) => {
  return (
    <StyledDiv iconName={iconName}>
      {text}
      {iconName ? <Button variant='primary' iconName={iconName} onClick={onClick} /> : null}
    </StyledDiv>
  );
};
