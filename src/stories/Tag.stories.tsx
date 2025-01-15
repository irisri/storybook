import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../components/Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Basic: Story = {
  args: { text: 'Tag' },
};

export const WithIcon: Story = {
  args: { text: 'User', iconName: 'Person', onClick: () => console.log('click on tag') },
};
