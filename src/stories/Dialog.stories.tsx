import { useRef } from "react"
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../components/Dialog'

const meta: Meta<typeof Dialog> = {
    title: 'Components/Dialog',
    component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const ExampleStory: Story = {
    render: ({ ...args }) => {
        const dialogRef = useRef<HTMLDialogElement>(null)

        const toggleDialog = () => {
            if (!dialogRef.current) return;

            dialogRef.current.hasAttribute("open")
                ? dialogRef.current.close()
                : dialogRef.current.showModal();
        }

        return (
            <div style={{
                width: '100%', height: '100%'
            }}>
                <button onClick={toggleDialog}>Click</button>
                <Dialog ref={dialogRef} toggleDialog={toggleDialog}>
                    <h2>hihihihihihi</h2>
                </Dialog>
            </div>
        )
    },
    args: {
    },
};