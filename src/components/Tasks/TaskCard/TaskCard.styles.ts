import { Card } from '@mui/material';
import styled from 'styled-components';
import { SCButton } from '../../Common/UI/buttons';

export const SCTaskCardWrapper = styled(Card)`
  min-width: 240px;
  width: 240px;
  max-width: 240px;
  height: 280px;
  box-shadow: var(--sc-box-shadow) !important;
  border-radius: 11px !important;
`;

const Block = styled.div`
  padding: 15px 20px;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 28px 35px 40px 85px 40px;
  grid-gap: 5px;
`;

const RemainBlock = styled.div``;

const RemainTime = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 3px;
`;

const RemainChart = styled.div`
  background-color: var(--gray-blue);
  border-radius: 40px;
  height: 8px;
`;

const RemainChartProgress = styled.div<{ progress: number }>`
  width: ${props => (props.progress < 5 ? `0px` : `${props.progress}%`)};
  height: 100%;
  border-radius: 40px;
  background-color: ${props => {
    if (props.progress < 40) {
      return '#3DC55D';
    } else if (props.progress < 75) {
      return '#FECB2F';
    } else {
      return '#FD6A66';
    }
  }};
`;

const Subject = styled.div`
  color: var(--accent);
  font-size: var(--fz-extra-small);
  line-height: 1;
`;

const Title = styled.div`
  color: var(--black);
  font-size: var(--fz-small);
  line-height: 1;
  font-weight: 700;
`;

const Content = styled.div`
  color: var(--black);
  font-size: var(--fz-extra-small);
  line-height: 1.2;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BtnOpen = styled(SCButton)`
  width: 150px;
  height: 40px;
  font-weight: 600;
  border-radius: 9px;
  font-size: var(--fz-small);
`;

const BtnAdditional = styled.button.attrs({ type: 'button' })<{ open: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 9px;
  font-weight: 600;
  font-size: var(--fz-small);
  background: var(--gray-blue);
  position: relative;
  &:after {
    position: absolute;
    content: '';
    background: url('img/arrow.svg') center no-repeat;
    top: 0;
    left: 0;
    height: 40px;
    width: 40px;
    transition: 0.1s;
    transform: ${props => (props.open ? 'rotate(180deg)' : 'none')};
  }
  cursor: pointer;
`;

export const SCTaskCard = {
  RemainChartProgress,
  RemainChart,
  RemainTime,
  RemainBlock,
  Subject,
  Block,
  Title,
  Content,
  BtnOpen,
  Footer,
  BtnAdditional,
};
