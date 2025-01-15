import { forwardRef, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { colors } from '../stories/colors';
import { Button } from './Button';
import { IconProps } from './Icon';

const StyledDialog = styled.dialog`
  border-radius: 4px;
  border: 1px solid ${colors.getColor('Gray.400')};
  padding: 0;
`;

type DialogType = {
  children: React.ReactNode;
  toggleDialog: () => void;
  icon?: IconProps['iconName'];
};

const StyledDialogContainer = styled.div`
  margin: 16px;
  margin-bottom: 38px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const StyledCustomContantContainer = styled.div`
  margin: 4px 0;
  align-self: center;
`;

export const Dialog = forwardRef<HTMLDialogElement, DialogType>(({ children, toggleDialog }, ref) => {
  return (
    <StyledDialog
      ref={ref}
      onClick={(event: MouseEvent<HTMLDialogElement>) => {
        console.log('event', event.currentTarget, event.target);
        if (event.currentTarget === event.target) {
          toggleDialog();
        }
      }}
    >
      <StyledDialogContainer>
        <Button variant='secondary' iconName={'Close'} onClick={toggleDialog} />

        <StyledCustomContantContainer>{children}</StyledCustomContantContainer>
      </StyledDialogContainer>
    </StyledDialog>
  );
});
export default Dialog;
