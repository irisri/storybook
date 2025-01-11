import { forwardRef, MouseEvent } from 'react';
import * as MUIcon from '@mui/icons-material';

type DialogType = {
  children: React.ReactNode;
  toggleDialog: () => void;
  icon?: keyof typeof MUIcon;
};

export const Dialog = forwardRef<HTMLDialogElement, DialogType>(({ children, toggleDialog }, ref) => {
  const onClick = () => {};

  const Icon = MUIcon['Close'];

  return (
    <dialog
      ref={ref}
      onClick={(event: MouseEvent<HTMLDialogElement>) => {
        console.log('event', event.currentTarget, event.target);
        if (event.currentTarget === event.target) {
          toggleDialog();
        }
      }}
    >
      <div>
        {children}
        <Icon />

        <button onClick={toggleDialog}>Close</button>
      </div>
    </dialog>
  );
});
export default Dialog;
