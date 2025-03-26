import styled from '@emotion/styled';

const StyledDiv = styled.div`
  cursor: pointer;
`;

export const CopyToClipBoard = ({ text, children }: { text: string; children: React.ReactNode }) => {
  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };
  return <StyledDiv onClick={() => copy(text)}>{children}</StyledDiv>;
};
