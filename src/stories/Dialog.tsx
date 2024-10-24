import { forwardRef, MouseEvent } from "react"
import * as MUIcon from "@mui/icons-material";


interface IconProps {
    icon?: keyof typeof MUIcon;
}
// import Icon from '@material-ui/core/Icon';
// import * as MuiIcons from '@mui/material/Icon'


interface DialogProps {
    children: React.ReactNode;
    toggleDialog: () => void;
};

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
    ({ children, toggleDialog }, ref) => {

        const onClick = () => {

        }


        const Icon = MUIcon['Close'];


        return (
            <dialog
                ref={ref}
                onClick={(event: MouseEvent<HTMLDialogElement>) => {
                    console.log('event', event.currentTarget, event.target)
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
    }
);
export default Dialog;