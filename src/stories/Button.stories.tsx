import styled from '@emotion/styled';
import { Button } from '../components/Button';
import type { Meta, StoryObj } from '@storybook/react';

const onClick = () => console.log('click');

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
        <Button variant='primary' label='Primary' onClick={onClick} />
        <Button variant='secondary' label='Secondary' onClick={onClick} />
        <Button variant='warning' label='Warning' onClick={onClick} />
      </StyledDiv>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <StyledDiv>
        <Button size='l' label='Large' onClick={onClick} />
        <Button size='m' label='Medium' onClick={onClick} />
        <Button size='s' label='Small' onClick={onClick} />
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

export const IconButtonVariants: Story = {
  render: () => {
    return (
      <StyledDiv>
        <Button variant='primary' iconName='xmark' />
        <Button variant='secondary' iconName='xmark' />
        <Button variant='warning' iconName='xmark' />
      </StyledDiv>
    );
  },
};

export const IconButtonSizes: Story = {
  render: () => {
    return (
      <StyledDiv>
        <Button variant='primary' iconName='xmark' size='s' />
        <Button variant='primary' iconName='xmark' size='m' />
        <Button variant='primary' iconName='xmark' size='l' />
      </StyledDiv>
    );
  },
};

export const IconButtonWithText: Story = {
  render: () => {
    return (
      <StyledDiv>
        <Button variant='primary' label='Primary' iconName='xmark' />
        <Button variant='secondary' label='Secondary' iconName='xmark' />
        <Button variant='warning' label='Warning' iconName='xmark' />
      </StyledDiv>
    );
  },
};
