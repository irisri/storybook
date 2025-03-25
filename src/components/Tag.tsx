import styled from '@emotion/styled';
import { colors } from './colors';
import { IconProps } from './Icon';
import { Button } from './Button';
import { Text } from './Text';
import { Flex } from './Flex';

const StyledDiv = styled(Flex)<{ iconName?: IconProps['iconName'] }>`
  padding: ${({ iconName }) => (iconName ? '4px 4px 4px 10px' : '4px 10px')};
  border-radius: 4px;
  background-color: ${colors.getColor('Green.800')};
  transition: 0.13s ease-out;
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
    <StyledDiv iconName={iconName} alignItems='center' width='fit-content' gap={0}>
      <Text variant='span' color='Gray.100'>
        {text}
      </Text>
      {iconName ? <Button variant='primary' iconName={iconName} onClick={onClick} /> : null}
    </StyledDiv>
  );
};
