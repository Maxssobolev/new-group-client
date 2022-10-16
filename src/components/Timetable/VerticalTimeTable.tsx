import moment from 'moment';
import { FC } from 'react';
import { timetable } from '../../http/mock/calendar';
import TimetableCard from '../Common/Timetable/TimetableCard/TimetableCard';
import { VerticalWrapper } from './timetable.styles';

const VerticalTimeTable: FC = () => {
  const weekParity = moment().week() % 2 === 1 ? 'odd' : 'even';
  const weekday = moment().lang('en').format('ddd');
  return (
    <VerticalWrapper>
      {timetable
        .filter(({ weekday: _weekday }) => _weekday == weekday)
        .map((itm, idx) => {
          const willToday = itm.weekparity === 'both' ? true : itm.weekparity === weekParity ? true : false;
          if (willToday) return <TimetableCard {...itm} key={idx} />;
        })}
    </VerticalWrapper>
  );
};

export default VerticalTimeTable;
