import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';
import { Text } from '../components/Text';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <StyledDiv>
        <Button variant={'primary'} size={'m'} onClick={() => setIsOpen(true)} label='Click' />
        <Modal open={isOpen} setIsOpen={setIsOpen}>
          <Text variant='h2'>hihihihihihi</Text>
        </Modal>
      </StyledDiv>
    );
  },
  args: {
    open: false,
  },
};
