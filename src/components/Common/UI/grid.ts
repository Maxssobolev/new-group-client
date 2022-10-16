import styled from 'styled-components';

const Row = styled.div<{ columns: number; gap?: number }>`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
  grid-gap: ${props => (props.gap ? `${props.gap}px` : '15px')};

  margin-bottom: 20px;
`;

export const SCGrid = { Row };
