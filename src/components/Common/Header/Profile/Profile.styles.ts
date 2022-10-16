import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div:first-child {
    text-align: left;
    padding-left: 20px;
  }
`;

const Username = styled.div`
  font-size: var(--fz-extra-small);
  cursor: auto;
  font-weight: 400;
`;

const Btn = styled.button.attrs(() => ({ type: 'button' }))<{ isActive: boolean }>`
  font-size: var(--fz-extra-small);
  cursor: pointer;
  padding: 0;
  font-weight: 700;
  color: ${props => (props.isActive ? 'var(--accent)' : 'rgba(87, 148, 218, 0.4)')};
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background: var(--accent) url('img/user.svg') center no-repeat;
`;

export const SCHeaderProfile = { Wrapper, Username, Btn, Icon };
