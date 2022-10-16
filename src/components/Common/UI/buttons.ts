import styled from 'styled-components';

const btnHeight = '40px';

export const SCButton = styled.button<{ kind?: 'primary' | 'secondary' | 'danger' | 'warning' }>`
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 160px;
  height: ${btnHeight};
  color: var(--white);
  background-color: ${props => {
    switch (props.kind) {
      case 'primary':
        return 'var(--accent)';
      case 'secondary':
        return 'var(--secondary)';
      case 'danger':
        return 'var(--danger)';
      case 'warning':
        return 'var(--warning)';
      default:
        return 'var(--accent)';
    }
  }};
`;

const actionBg = (url: string) => `var(--gray-blue) url(${url}) center no-repeat`;

export const SCActionLike = styled.button<{ active: boolean }>`
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 40px;
  height: ${btnHeight};
  background: ${props => (props.active ? actionBg('img/liked.svg') : actionBg('img/like.svg'))};
`;

export const SCActionDone = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  //border: ${props => (props.active ? '1px solid green' : '1px solid transparent')};
  border-radius: none;
  border-radius: 10px;
  cursor: pointer;
  width: 190px;
  font-weight: 600;
  color: ${props => (props.active ? '#3DC55D' : 'var(--white)')};
  font-size: var(--fz-small);
  height: ${btnHeight};
  background: ${props => (props.active ? 'rgba(61, 197, 93, 0.1)' : 'var(--accent)')};
  & > svg {
    margin-right: 3px;
    & > path {
      ${props => (props.active ? { stroke: '#3DC55D' } : {})}
    }
  }
`;

export const SCBtnSection = styled.div`
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

export const SCBackBtn = styled.button`
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 160px;
  height: ${btnHeight};
  color: var(--accent);
  background-color: white;
  border: 1px solid var(--accent);
`;

export const SCSortBtn = styled.button`
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: transparent;
  margin-left: 20px;
  background: url('img/candle.svg') center no-repeat;
`;
