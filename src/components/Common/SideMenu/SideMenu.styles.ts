import styled from 'styled-components';

const TopBlock = styled.div`
  background-image: url('/img/sidemenu-wave.svg');
  background-repeat: no-repeat;
  background-position: top right;
  height: 115px;
  margin-bottom: 79px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  & > a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 35px;
    height: 65px;

    font-size: var(--fz-medium);
    font-weight: 500;

    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: -8px;
      height: 100%;
      width: 8px;
      background: #5794da;
      border-radius: 0px 8px 8px 0px;
      transition: 0.2s;
    }

    &.active {
      color: var(--accent);
      font-weight: 700;

      &::before {
        left: 0;
      }
    }
  }
`;

export const SCSideMenu = { TopBlock, Nav };
