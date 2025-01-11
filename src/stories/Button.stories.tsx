import styled from '@emotion/styled';
import { Button } from '../components/Button';
import type { Meta, StoryObj } from '@storybook/react';

const StyledDiv = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => {
    return (
      <StyledDiv>
        <Button variant='primary' label='Primary' />
        <Button variant='secondary' label='Secondary' />
        <Button variant='warning' label='Warning' />
      </StyledDiv>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <StyledDiv>
        <Button size='l' label='Large' />
        <Button size='m' label='Medium' />
        <Button size='s' label='Small' />
      </StyledDiv>
    );
  },
};

export const Disable: Story = {
  render: () => {
    return (
      <StyledDiv>
        <Button variant='primary' label='Primary' disabled />
        <Button variant='secondary' label='Secondary' disabled />
        <Button variant='warning' label='Warning' disabled />
      </StyledDiv>
    );
  },
};
