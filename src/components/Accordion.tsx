import { useState, SyntheticEvent } from 'react';
import { Icon } from './Icon';
import styled from '@emotion/styled';
import { colors, type Color } from '../stories/colors';

type AccordionItmeType = {
  title: string;
  description: string;
  icon?: boolean;
  color?: Color;
};

const StyledDetails = styled.details<{ borderColor: Color }>`
  border-bottom: 1px solid ${({ borderColor }) => borderColor};

  & summary {
    display: flex;
    align-items: center;
    padding: 12px 8px;

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
}: AccordionItmeType & { borderColor: Color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (event: SyntheticEvent<HTMLDetailsElement>) => {
    setIsOpen(event.currentTarget.open);
  };

  return (
    <StyledDetails name='accordion-item' key={title} onToggle={handleToggle} borderColor={borderColor}>
      <summary>
        {icon ? <Icon size={14} iconName={isOpen ? 'KeyboardArrowDown' : 'KeyboardArrowRight'} /> : null}
        {title}
      </summary>
      <div>{description}</div>
    </StyledDetails>
  );
};

const StyledDiv = styled.div<{ borderColor: Color }>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 4px;

  details:last-child {
    border-bottom: none;
  }
`;

export type AccordionListType = {
  accordionList: AccordionItmeType[];
  borderColor?: Color;
};

export const Accordion = ({ accordionList, borderColor }: AccordionListType) => {
  const defaultBorderColor = colors.getColor('Gray.800') as Color;
  return (
    <StyledDiv borderColor={borderColor ?? defaultBorderColor}>
      {accordionList.map((accordion: AccordionItmeType) => (
        <AccordionItem key={accordion.title} {...accordion} borderColor={borderColor ?? defaultBorderColor} />
      ))}
    </StyledDiv>
  );
};
