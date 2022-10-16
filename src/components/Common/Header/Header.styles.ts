import styled from 'styled-components';

const Wrapper = styled.header`
  margin-top: auto;
  height: 60px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 6fr 4fr;
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
  grid-template-columns: 253px 150px;
  grid-gap: 15px;
  justify-content: flex-end;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: var(--sc-box-shadow);
  border-radius: 10px;
  cursor: pointer;
  & > div {
    width: 100%;
  }
`;

export const SCHeader = { Wrapper, Buttons, Search, Btn, SerachIcon };
