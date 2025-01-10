import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Accordion',
  },
};
