import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';
import { Text } from '../components/Text';
import { Flex } from '../components/Flex';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    return (
      <Card>
        <Flex margin='16px'>
          <Text>This is a card</Text>
        </Flex>
      </Card>
    );
  },
};
