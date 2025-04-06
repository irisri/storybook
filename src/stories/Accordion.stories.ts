import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../components/Accordion';
import { Color, colors } from '../components/colors';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    accordionList: [
      { title: 'Title', description: 'this is description', icon: true },
      { title: 'Second title', description: 'this is description' },
    ],
    borderColor: colors.getColor('Gray.1000') as Color,
    shouldOpenOne: true,
  },
};
