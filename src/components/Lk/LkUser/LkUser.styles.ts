import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 15px;
  background-color: var(--white);
  padding: 25px;

  & > div:first-child {
    //common part
    display: grid;
    grid-template-columns: 70px 1fr 76px;
    grid-gap: 20px;
    align-items: center;
  }

  & > div:nth-child(2) {
    //headman part
    margin-top: 20px;
    display: flex;
  }
`;

const Avatar = styled.div`
  background-color: var(--gray-blue);
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  justify-content: center;
  position: relative;
  & > svg {
    transform: scale(1.4);
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const InfoBlock = styled.div``;

const Username = styled.div`
  font-weight: 600;
  font-size: var(--fz-small);
  margin-bottom: 5px;
  color: var(--black);
`;

const Email = styled.div`
  font-weight: 400;
  font-size: var(--fz-small);
  color: var(--accent);
`;

const Block = styled.div`
  margin: 0 25px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const BtnsWrapper = styled.div`
  display: flex;
  align-items: center;
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

const Btn = styled.button.attrs({ type: 'button' })<{ withText?: boolean }>`
  width: ${props => (props.withText ? 'max-content' : '45px')};
  padding: ${props => (props.withText ? '0 18px' : '0')};
  height: 45px;
  background-color: var(--accent);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    margin-left: 5px;
    color: var(--white);
    font-weight: 600;
    font-size: var(--fz-extra-small);
  }
`;

export const SCLkUser = { Wrapper, Email, Username, InfoBlock, Avatar };
export const SCHeadman = { Tool: { Block, Btn, BtnsWrapper } };
