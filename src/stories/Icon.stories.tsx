import type { Meta, StoryObj } from '@storybook/react';
import { Icon, type IconProps } from '../components/Icon';
import styled from '@emotion/styled';
import { colors } from './colors';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const StyledIconContaner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      'DeleteOutline',
      'RemoveCircleOutline',
      'KeyboardArrowDown',
      'KeyboardArrowUp',
      'KeyboardArrowRight',
      'KeyboardArrowLeft',
      'ModeEdit',
      'FilterAlt',
      'Close',
    ] as IconProps['iconName'][];

    return (
      <StyledDiv>
        {iconNames.map((iconName) => {
          return (
            <StyledIconContaner key={iconName}>
              <Icon iconName={iconName} size={20} />
              {iconName}
            </StyledIconContaner>
          );
        })}
      </StyledDiv>
    );
  },
};
