import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '../components/Grid';
import { Flex } from '../components/Flex';
import { Text } from '../components/Text';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    return (
      <>
        <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(3, 1fr)'>
          {Array(9)
            .fill(0)
            .map((_, index) => {
              return (
                <Flex width={'30px'} height={'30px'} key={`flex-${index}`}>
                  <Text>{index + 1}</Text>
                </Flex>
              );
            })}
        </Grid>
      </>
    );
  },
};
