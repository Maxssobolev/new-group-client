import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px 20px;
  min-width: 50vw;
`;

const Title = styled.h1`
  color: var(--black);
  font-size: var(--fz-large);
  margin-bottom: 20px;
  text-align: left;
  font-weight: 600;
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
`;

const FilterBlock = styled.div`
  margin-bottom: 30px;
  font-size: var(--fz-extra-small);
`;

const FilterBlockTitle = styled.div`
  color: #000;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: var(--fz-small);
`;

export const SCOffset = { Wrapper, Title, FilterBlock, FilterBlockTitle };
