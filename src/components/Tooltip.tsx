import { forwardRef, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { colors } from './colors';
import { Text } from './Text';

const bottomStype = () => {
  return css`
    left: 50%;
    transform: translateX(50%) translateY(100%);
  `;
};

const topStype = () => {
  return css`
    left: 50%;
    transform: translateX(50%) translateY(-100%);
  `;
};

const bottomRightStype = () => {
  return css`
    right: 0;
    transform: translateX(0%) translateY(100%);
  `;
};

const topRightStype = () => {
  return css`
    right: 0;
    transform: translateX(0%) translateY(-100%);
  `;
};

const styleMap: Record<TooltipPositionType, () => SerializedStyles> = {
  bottom: () => bottomStype(),
  top: () => topStype(),
  'bottom-right': () => bottomRightStype(),
  'top-right': () => topRightStype(),
};

const StyledDiv = styled.div`
  position: relative;
`;

const StyledDialog = styled.dialog<{ position: TooltipPositionType }>`
  margin: 0;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 4px 8px;
  background-color: ${colors.getColor('Gray.600')};
  color: ${colors.getColor('Gray.100')};
  position: absolute;
  ${({ position }) => styleMap[position]()};

  ::backdrop {
    background-color: none;
  }
`;

type TooltipPositionType = 'bottom' | 'top' | 'bottom-right' | 'top-right';

type TooltipDialogType = Omit<TooltipType, 'open' | 'position'> & {
  position: TooltipPositionType;
};

const TooltipDialog = forwardRef<HTMLDialogElement, TooltipDialogType>(({ text, position }, ref) => {
  return (
    <StyledDialog ref={ref} position={position}>
      <Text variant='span' color='Gray.100'>
        {text}
      </Text>
    </StyledDialog>
  );
});

type TooltipType = {
  text: string;
  position?: TooltipPositionType;
  open: boolean;
};

export const Tooltip = ({ text, open, position = 'bottom' }: TooltipType) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    open ? dialogRef.current.show() : dialogRef.current.close();
  }, [open]);

  return (
    <StyledDiv>
      <TooltipDialog ref={dialogRef} text={text} position={position} />
    </StyledDiv>
  );
};
