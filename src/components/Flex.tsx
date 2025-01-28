import styled from '@emotion/styled';
import { Color, colors } from './colors';

type FlexDivType = {
  width?: string;
  height?: string;
  gap: number;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around ';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center';
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch';
  grow?: number;
  rowGap?: number;
  columnGap?: number;
  color?: Color;
  background?: Color;
};

const StyledDiv = styled.div<FlexDivType>`
  display: flex;
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  row-gap: ${({ rowGap }) => (rowGap ? `${rowGap}px` : '4px')};
  column-gap: ${({ columnGap }) => (columnGap ? `${columnGap}px` : '4px')};
  gap: ${({ gap }) => `${gap}px`};
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  flex-wrap: ${({ wrap }) => wrap ?? 'wrap'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  align-items: ${({ alignItems }) => alignItems ?? 'center'};
  align-self: ${({ alignSelf }) => alignSelf ?? 'auto'};
  flex-grow: ${({ grow }) => grow ?? 1};
  background: ${({ background }) => (background ? colors.getColor(background) : 'inherit')};
  color: ${({ color }) => (color ? colors.getColor(color) : 'inherit')};
`;

type FlexTyle = Omit<FlexDivType, 'gap'> & {
  children: React.ReactNode;
  gap?: number;
};

export const Flex = ({ children, gap = 4, ...props }: FlexTyle) => {
  return (
    <StyledDiv {...props} gap={gap}>
      {children}
    </StyledDiv>
  );
};
