import styled from 'styled-components';
import { Header } from '../Common/UI/headers';

const THeader = styled(Header)`
  & > span {
    font-weight: 700;
  }
`;

const Wrapper = styled.div`
  padding: 10px 50px 40px 50px;
  box-shadow: var(--sc-box-shadow);
  border-radius: 12px;
  max-width: 1000px;
`;

const Table = styled.table`
  width: 100%;
`;
const TableBody = styled.tbody``;

const Tr = styled.tr<{ notThisWeekend?: boolean }>`
  & > td {
    color: ${props => (props.notThisWeekend ? ' rgba(0, 0, 0, 0.2) ' : 'var(--black)')};
  }
`;

const Td = styled.td<{ weekday?: boolean; classroom?: boolean }>`
  color: ${props => (props.weekday ? 'var(--accent) !important' : 'var(--black)')};
  font-weight: ${props => (props.weekday ? '600' : 'normal')};
  padding-top: ${props => (props.weekday ? '30px' : '0')};
  padding-bottom: ${props => (props.weekday ? '15px' : '0')};
  font-size: ${props => (props.weekday ? 'var(--fz-small)' : 'var(--fz-extra-small)')};
  line-height: ${props => (props.weekday ? 'inherit' : '1.5')};
  text-align: ${props => (props.classroom ? 'right' : 'left')};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 50px;
`;

export const VerticalWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, 95px);
  grid-gap: 15px;
`;

export const SCTimetable = { THeader, Grid };
export const SCFullTimeTable = { Wrapper, Table, Tr, Td, TableBody };
