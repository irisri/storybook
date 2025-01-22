import { forwardRef, MouseEvent, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { colors } from '../stories/colors';
import { Button } from './Button';
import { IconProps } from './Icon';

const StyledDialog = styled.dialog`
  border-radius: 4px;
  border: 1px solid ${colors.getColor('Gray.400')};
  padding: 0;
  ::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

type DialogType = {
  children: React.ReactNode;
  closeDialog: () => void;
  shouldCloseDialod?: (event: MouseEvent<HTMLDialogElement>) => void;
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

const ModalDialog = forwardRef<HTMLDialogElement, DialogType>(({ children, closeDialog, shouldCloseDialod }, ref) => {
  return (
    <StyledDialog ref={ref} onClose={closeDialog} onClick={shouldCloseDialod}>
      <StyledDialogContainer>
        <Button variant='secondary' iconName={'Close'} onClick={closeDialog} />
        <StyledCustomContantContainer>{children}</StyledCustomContantContainer>
      </StyledDialogContainer>
    </StyledDialog>
  );
});

export const Modal = ({
  open,
  children,
  setIsOpen,
}: {
  open: boolean;
  setIsOpen: (value: boolean) => void;
  children: React.ReactNode;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    open ? dialogRef.current.showModal() : dialogRef.current.close();
  }, [open]);

  const shouldCloseDialod = (event: MouseEvent<HTMLDialogElement>) => {
    if (!dialogRef.current) return;

    const dialogDimensions = dialogRef.current.getBoundingClientRect();

    if (
      event.clientX < dialogDimensions.left ||
      event.clientX > dialogDimensions.right ||
      event.clientY < dialogDimensions.top ||
      event.clientY > dialogDimensions.bottom
    ) {
      setIsOpen(false);
    }
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ModalDialog ref={dialogRef} closeDialog={closeDialog} shouldCloseDialod={shouldCloseDialod}>
        {children}
      </ModalDialog>
    </>
  );
};
