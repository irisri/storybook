import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '../stories/colors';
import { fontSize, padding, Size, Variant, buttonColor } from './button.type';

const disableStype = (disabled: boolean, variant: Variant) => {
  return (
    disabled &&
    css`
      cursor: auto;
      opacity: 0.5;
      border: none;
      color: ${buttonColor[variant]};
      :hover {
        transition: none;
        box-shadow: none;
        background-color: rgba(0, 0, 0, 0.25);
      }

      background-color: rgba(0, 0, 0, 0.25);
    `
  );
};

const seconderyStype = (variant: Variant) => {
  return (
    variant === 'secondary' &&
    css`
      background-color: ${buttonColor[variant]};
      color: ${colors.getColor('Gray.100')};

      :hover {
        background-color: ${buttonColor[variant]};
        transition: box-shadow 250ms;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
          0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      }

      color: ${buttonColor[variant]};
      border: 1px solid ${buttonColor[variant]};
      background-color: ${colors.getColor('Gray.100')};

      :hover {
        transition: none;
        box-shadow: none;
        background-color: ${colors.getColor('Gray.200')};
      }
    `
  );
};

const StyledButton = styled.button<{ size: Size; variant: Variant; disabled: boolean }>`
  cursor: pointer;
  height: fit-content;
  border-radius: 4px;
  padding: ${({ size }) => padding[size]};
  font-family: Afacad Flux, Arial, sans-serif;
  font-size: ${({ size }) => fontSize[size]};
  font-weight: 600;
  border: 1px solid ${({ variant }) => buttonColor[variant]};
  background-color: ${({ variant }) => buttonColor[variant]};
  color: ${colors.getColor('Gray.100')};

  :hover {
    transition: box-shadow 250ms;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  ${({ variant }) => seconderyStype(variant)};
  ${({ disabled, variant }) => disableStype(disabled, variant)}
`;

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ variant = 'secondary', size = 'm', label, disabled = false, ...props }: ButtonProps) => {
  console.log(disabled);
  return (
    <StyledButton type='button' size={size} variant={variant} disabled={disabled} {...props}>
      {label}
    </StyledButton>
  );
};
