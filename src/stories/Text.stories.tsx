import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Basic: Story = {
  render: () => {
    return (
      <>
        <Text>This is span</Text>
        <Text fontWeight={700}>This is bold span</Text>
        <Text variant='p' color='Green.500'>
          This is p
        </Text>
        <Text variant='h3' color='Gray.500'>
          This is h3
        </Text>
        <Text variant='h2'>This is h2</Text>
        <Text variant='h1'>This is h1</Text>
      </>
    );
  },
};
