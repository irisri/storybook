import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ExampleStory: Story = {
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Button variant={'primary'} size={'m'} onClick={() => setIsOpen(true)} label='Click' />
        <Modal open={isOpen}>
          <h2>hihihihihihi</h2>
        </Modal>
      </div>
    );
  },
  args: {},
};
