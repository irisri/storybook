import { ChangeEvent } from 'react';
import { Flex } from './Flex';
import { Icon, IconProps } from './Icon';
import styled from '@emotion/styled';
import { colors } from './colors';

const StyledFlex = styled(Flex)`
  background-color: ${colors.getColor('Gray.200')};
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid ${colors.getColor('Gray.500')};
`;

const StyledInput = styled.input`
  padding: 4px;
  border: none;
  outline: none;
  font-family: Afacad Flux, Arial, sans-serif;
  font-size: 14px;
  background-color: ${colors.getColor('Gray.200')};
  color: ${colors.getColor('Gray.1000')};
  ::placeholder {
    color: ${colors.getColor('Gray.900')};
  }
`;

type InputType = {
  placeHolder: string;
  iconName?: IconProps['iconName'];
  value: string;
  onChange: (valse: string) => void;
};

export const Input = ({ placeHolder, value, onChange, iconName }: InputType) => {
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <StyledFlex wrap='nowrap' alignItems='center'>
      {iconName ? <Icon iconName={iconName} color={'Gray.1000'} size='xs' /> : null}
      <StyledInput value={value} placeholder={placeHolder} onChange={onChangeInput} />
    </StyledFlex>
  );
};
