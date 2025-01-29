import styled from '@emotion/styled';
import { Flex } from './Flex';
import { colors } from './colors';

const StyledFlex = styled(Flex)`
  border-radius: 4px;
  border: 1px solid ${colors.getColor('Gray.500')};
  box-shadow: 1px 1px 11px -7px rgba(0, 0, 0, 0.75);
`;

type CardType = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardType) => {
  return <StyledFlex width='fit-content'>{children}</StyledFlex>;
};
