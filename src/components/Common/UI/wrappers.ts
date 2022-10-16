import styled from 'styled-components';

const Main = styled.div<{ maxWidth?: string }>`
  overflow-x: auto;

  max-width: ${props => (props.maxWidth ? props.maxWidth : 'var(--page-width)')};
  width: ${props => (props.maxWidth ? props.maxWidth : 'var(--page-width)')};
`;

const Inner = styled.div<{ maxWidth?: string }>`
  max-width: ${props => (props.maxWidth ? props.maxWidth : 'var(--page-width)')};
  width: ${props => (props.maxWidth ? props.maxWidth : 'var(--page-width)')};
  display: flex;
  overflow-x: auto;
  padding: 17px 0 20px 0;

  &::-webkit-scrollbar {
    background-color: var(--blue);
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--accent);
    width: 10px;
    border-radius: 10px;
  }
`;

export const ScrollableX = { Main, Inner };
