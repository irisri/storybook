import styled from '@emotion/styled';

type GridDivType = {
  templateColumns?: string;
  templateRows?: string;
  columnGap: number;
  rowGap: number;
};

const StyledGrid = styled.div<GridDivType>`
  display: grid;
  column-gap: ${({ columnGap }) => `${columnGap}px`};
  row-gap: ${({ rowGap }) => `${rowGap}px`};
  grid-template-columns: ${({ templateColumns }) => templateColumns ?? 1};
  grid-template-rows: ${({ templateRows }) => templateRows ?? 'auto'};
`;

type GridTyle = Omit<GridDivType, 'columnGap' | 'rowGap'> & {
  children: React.ReactNode;
  columnGap?: number;
  rowGap?: number;
};

export const Grid = ({ children, columnGap = 0, rowGap = 0, ...props }: GridTyle) => {
  return (
    <StyledGrid columnGap={columnGap} rowGap={rowGap} {...props}>
      {children}
    </StyledGrid>
  );
};
