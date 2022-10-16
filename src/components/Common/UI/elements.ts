import styled from 'styled-components';

export const TagCross = styled.button`
  position: relative;
  border: none;
  width: 20px;
  height: 10px;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 2px;
    top: 47%;
    background: var(--red);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
