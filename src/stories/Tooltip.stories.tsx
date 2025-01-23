import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../components/Tooltip';
import { useState } from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  width: 300px;
`;

const StyledP = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  padding: 0;
`;

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <StyledDiv>
        <Tooltip text='this is a tooltip' open={isOpen} />
        <StyledP onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in
        </StyledP>
      </StyledDiv>
    );
  },
};

export const Top: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <StyledDiv>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in
        </p>
        <Tooltip text='this is a tooltip' open={isOpen} position='top' />
        <StyledP onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in
        </StyledP>
      </StyledDiv>
    );
  },
};

export const BottomRight: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <StyledDiv>
        <Tooltip text='this is a tooltip' open={isOpen} position='bottom-right' />
        <StyledP onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in
        </StyledP>
      </StyledDiv>
    );
  },
};

export const TopRight: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <StyledDiv>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in
        </p>
        <Tooltip text='this is a tooltip' open={isOpen} position='top-right' />
        <StyledP onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in
        </StyledP>
      </StyledDiv>
    );
  },
};
