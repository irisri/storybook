import { useState, SyntheticEvent } from 'react';
import { Icon } from './Icon';
import { Text } from './Text';
import { Flex } from './Flex';
import styled from '@emotion/styled';
import { colors, type Color } from './colors';

type AccordionItmeType = {
  title: string;
  description: string;
  icon?: boolean;
  color?: Color;
};

const StyledDetails = styled.details<{ borderColor: Color }>`
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
  width: 100%;

  & summary {
    display: flex;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;

    ::marker {
      content: '';
    }
  }

  &[open] > div {
    padding: 0 8px;
    margin-bottom: 0.5rem;
  }
`;

const AccordionItem = ({
  title,
  icon = false,
  description,
  borderColor,
  shouldOpenOne,
}: AccordionItmeType & { borderColor: Color; shouldOpenOne: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (event: SyntheticEvent<HTMLDetailsElement>) => {
    setIsOpen(event.currentTarget.open);
  };

  return (
    <StyledDetails
      name={shouldOpenOne ? 'accordion-item' : ''}
      key={title}
      onToggle={handleToggle}
      borderColor={borderColor}
    >
      <summary>
        {icon ? <Icon size={'sm'} iconName={isOpen ? 'arrow-down' : 'arrow-right'} /> : null}
        <Text variant='p' fontWeight={700}>
          {title}
        </Text>
      </summary>
      <div>{description}</div>
    </StyledDetails>
  );
};

const StyledDiv = styled(Flex)<{ borderColor: Color }>`
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 4px;

  details:last-child {
    border-bottom: none;
  }
`;

export type AccordionListType = {
  accordionList: AccordionItmeType[];
  borderColor?: Color;
  shouldOpenOne?: boolean;
};

export const Accordion = ({ accordionList, borderColor, shouldOpenOne = true }: AccordionListType) => {
  const defaultBorderColor = colors.getColor('Gray.800') as Color;
  return (
    <StyledDiv borderColor={borderColor ?? defaultBorderColor} flexDirection='column'>
      {accordionList.map((accordion: AccordionItmeType) => (
        <AccordionItem
          key={accordion.title}
          {...accordion}
          shouldOpenOne={shouldOpenOne}
          borderColor={borderColor ?? defaultBorderColor}
        />
      ))}
    </StyledDiv>
  );
};
