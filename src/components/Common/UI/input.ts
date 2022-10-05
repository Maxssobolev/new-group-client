import styled from 'styled-components';

const Text = styled.input`
  border: none;
  border-radius: 10px;

  width: 100%;
  height: 100%;
  color: var(--black);
  &::placeholder {
    color: var(--blue-light);
    font-size: var(--fz-medium);
  }
`;

const Search = styled(Text)`
  padding-left: 55px;
  padding-right: 20px;
`;

export const Inputs = { Text, Search };
