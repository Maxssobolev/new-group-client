import styled from 'styled-components';

const Block = styled.div<{ active?: boolean }>`
  display: inline-block;
  margin-right: 15px;
  width: 220px;
  height: 95px;
  border-radius: 10px;
  background-color: ${props => (props.active ? 'var(--accent)' : 'var(--white)')};
  box-shadow: ${props => (props.active ? 'none' : 'var(--sc-box-shadow)')};
  color: ${props => (props.active ? 'var(--white)' : 'var(--accent)')};
  font-size: var(--fz-small);
  flex-shrink: 0;
  padding: 12px 22px;
  box-sizing: border-box;
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

const Time = styled.div`
  font-weight: 400;
`;
const Classroom = styled.div`
  font-weight: 400;
`;

const Title = styled.div`
  margin-top: 5px;
  font-weight: 700;
  font-size: var(--fz-extra-small);
`;

export const SCTimetableCard = { Block, Time, Classroom, Title };
