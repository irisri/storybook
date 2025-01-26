import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { colors, type Color } from './colors';

type TextStyleType = {
  color?: Color;
  fontWeight?: number;
};

const generalTextStyle: ({ color, fontWeight }: TextStyleType) => SerializedStyles = ({
  color,
  fontWeight,
}: TextStyleType) => {
  return css`
    font-family: Afacad Flux, Arial, sans-serif;
    padding: 0;
    margin: 0;
    color: ${color ? colors.getColor(color) : 'inherit'};
    font-weight: ${fontWeight ?? 500};
  `;
};

const StyledSpan = styled.span<TextStyleType>`
  ${({ color, fontWeight }) => generalTextStyle({ color, fontWeight })}
`;

const StyledP = styled.p<TextStyleType>`
  ${({ color, fontWeight }) => generalTextStyle({ color, fontWeight })}
`;

const StyledH3 = styled.h3<TextStyleType>`
  ${({ color, fontWeight }) => generalTextStyle({ color, fontWeight })}
`;

const StyledH2 = styled.h2<TextStyleType>`
  ${({ color, fontWeight }) => generalTextStyle({ color, fontWeight })}
`;

const StyledH1 = styled.h1<TextStyleType>`
  ${({ color, fontWeight }) => generalTextStyle({ color, fontWeight })}
`;

type TextVariant = 'span' | 'p' | 'h3' | 'h2' | 'h1';

export type TextType = {
  variant?: TextVariant;
  children: React.ReactNode;
  color?: Color;
  fontWeight?: number;
};

const getText: Record<TextVariant, React.ElementType> = {
  span: StyledSpan,
  p: StyledP,
  h3: StyledH3,
  h2: StyledH2,
  h1: StyledH1,
};

export const Text = ({ children, variant = 'p', ...props }: TextType) => {
  const Component = getText[variant];
  return <Component {...props}>{children}</Component>;
};
