import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: var(--sc-box-shadow);
  border-radius: 11px;
  padding: 40px 50px;
`;

const BackBtn = styled.div`
  color: var(--accent);
  font-size: var(--fz-extra-small);
  font-weight: 700;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: var(--fz-large);
  font-weight: 700;
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-size: var(--fz-small);
  line-height: 1.5;
  margin-bottom: 50px;
  max-width: 760px;
`;

const HWBlock = styled.div`
  margin: 15px 0;
`;

const Footer = styled.div`
  display: flex;
`;

const FooterDate = styled.div`
  text-align: right;
  color: var(--accent);
  flex-grow: 1;
  align-self: flex-end;
  font-weight: 400;
  font-size: var(--fz-extra-small);
`;

const FooterActionBtns = styled.div`
  display: flex;
  margin-right: 30px;
  & > button {
    margin: 0 7.5px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

const FooterNavigationBtns = styled.div`
  & > button {
    cursor: pointer;
    margin: 0 7.5px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

const FooterNavigationBtn = styled.button.attrs({ type: 'button' })<{ way: 'left' | 'right' }>`
  padding: ${props => (props.way == 'left' ? '0 10px 0 35px' : '0 35px 0 10px')};
  position: relative;
  height: 40px;
  border: 1.5px solid rgba(87, 148, 218, 0.2);
  border-radius: 10px;
  color: var(--accent);
  font-size: var(--fz-extra-small);
  font-weight: 700;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:after {
    display: ${props => (props.way == 'right' ? 'block' : 'none')};
    content: '';
    position: absolute;
    right: 8px;
    top: 0;
    width: 23px;
    height: 40px;
    background: url('img/arrow-right.svg') center no-repeat;
  }
  &:before {
    display: ${props => (props.way != 'right' ? 'block' : 'none')};
    content: '';
    position: absolute;
    left: 8px;
    top: 0;
    transform: rotate(-180deg);
    width: 23px;
    height: 40px;
    background: url('img/arrow-right.svg') center no-repeat;
  }
`;

export const SCView = {
  Wrapper,
  BackBtn,
  Title,
  Content,
  FooterNavigationBtn,
  FooterNavigationBtns,
  FooterActionBtns,
  Footer,
  FooterDate,
  HWBlock,
};
