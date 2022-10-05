import styled from 'styled-components';

const Wrapper = styled.header`
  margin-top: auto;
  height: 60px;
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
`;

const Search = styled.div`
  box-shadow: var(--sc-box-shadow);
  border-radius: 10px;
  background: #ffffff;
  position: relative;
`;

const SerachIcon = styled.div`
  position: absolute;

  background-image: url('/img/search.svg');
  background-position: center center;
  left: 20px;
  top: 50%;
  transform: translate(0, calc(-50% - 3px));
  width: 25px;
  height: 25px;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 60px 60px 150px;
  grid-gap: 15px;
  justify-content: flex-end;
`;

const Btn = styled.button.attrs(() => ({ type: 'button' }))`
  background: #ffffff;
  box-shadow: var(--sc-box-shadow);
  border-radius: 10px;
  cursor: pointer;
`;

export const SCHeader = { Wrapper, Buttons, Search, Btn, SerachIcon };
