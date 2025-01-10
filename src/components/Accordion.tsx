import { useState, SyntheticEvent } from 'react';
import { Icon } from './Icon';
import styled from '@emotion/styled';

type AccordionItmeType = {
  title: string;
  description: string;
  icon?: boolean;
};

const StyledDetails = styled.details`
  border: 1px solid gray;
  border-radius: 8px;

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

const AccordionItem = ({ title, icon = false, description }: AccordionItmeType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (event: SyntheticEvent<HTMLDetailsElement>) => {
    setIsOpen(event.currentTarget.open);
  };

  return (
    <StyledDetails name='accordion-item' key={title} onToggle={handleToggle}>
      <summary>
        {icon ? <Icon size={14} icon={isOpen ? 'KeyboardArrowDown' : 'KeyboardArrowRight'} /> : null}
        {title}
      </summary>
      <div>{description}</div>
    </StyledDetails>
  );
};

const StyledDiv = styled.div`
  font-family: Afacad Flux, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export type AccordionListType = {
  accordionList: AccordionItmeType[];
};

export const Accordion = ({ accordionList }: AccordionListType) => {
  return (
    <StyledDiv>
      {accordionList.map((accordion: AccordionItmeType) => (
        <AccordionItem key={accordion.title} {...accordion} />
      ))}
    </StyledDiv>
  );
};
