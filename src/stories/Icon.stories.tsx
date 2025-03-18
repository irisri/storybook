import type { Meta, StoryObj } from '@storybook/react';
import { Icon, type IconProps } from '../components/Icon';
import styled from '@emotion/styled';
import { colors } from '../components/colors';
import { Flex } from '../components/Flex';

const StyledIconContaner = styled(Flex)`
  padding: 8px;
  border: 1px solid ${colors.getColor('Gray.500')};
  border-radius: 4px;
`;

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const AllIcons: Story = {
  render: () => {
    const iconNames = [
      'trash',
      'xmark',
      'arrow-down',
      'arrow-up',
      'arrow-right',
      'arrow-left',
      'edit',
      'filter',
      'star',
      ['fab', 'youtube'],
      ['far', 'bell'],
    ] as IconProps['iconName'][];

    return (
      <Flex gap={8}>
        {iconNames.map((iconName) => {
          return (
            <StyledIconContaner flexDirection='column' alignItems='center' width='fit-content' key={iconName}>
              <Icon iconName={iconName} size={'xl'} />
              {iconName}
            </StyledIconContaner>
          );
        })}
      </Flex>
    );
  },
};
