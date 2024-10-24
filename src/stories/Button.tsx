import React from 'react';
import { grayPllater, iridescentTurquoisePalette } from './colors'

import { styled } from 'storybook/internal/theming';

const StyledButton = styled.button`
  border-radius: 8px;
  padding: 4px 10px;
  font-family: Afacad Flux, Arial, sans-serif;
  font-size: 14px;
  font-weight: 600 ;
  background-color: ${grayPllater[100]};
  color: ${iridescentTurquoisePalette[800]};
  border: 1px solid ${iridescentTurquoisePalette[800]};

`

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'secondary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = `storybook-button--${variant}`;
  return (
    <StyledButton
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
