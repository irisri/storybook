import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return <Input placeHolder='search' value={value} onChange={setValue} />;
  },
};

export const WithIcon: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return <Input iconName={'magnifying-glass'} placeHolder='search' value={value} onChange={setValue} />;
  },
};
