import moment from 'moment';
import 'moment/locale/ru';
import { FC } from 'react';
import { timetable } from '../../../http/mock/calendar';
import { Header, SubHeader } from '../UI/headers';
import { ScrollableX } from '../UI/wrappers';
import TimetableCard from './TimetableCard/TimetableCard';

const Timetable: FC = () => {
  const weekParity = moment().week() % 2 === 1 ? 'odd' : 'even';
  const today = moment().format('D MMMM, dddd');
  const weekday = moment().lang('en').format('ddd');

  return (
    <div>
      <Header>
        Расписание <SubHeader>{today}</SubHeader>
      </Header>
      <ScrollableX.Main>
        <ScrollableX.Inner>
          {timetable
            .filter(({ weekday: _weekday }) => _weekday == weekday)
            .map((itm, idx) => {
              const willToday = itm.weekparity === 'both' ? true : itm.weekparity === weekParity ? true : false;
              if (willToday) return <TimetableCard {...itm} key={idx} />;
            })}
        </ScrollableX.Inner>
      </ScrollableX.Main>
    </div>
  );
};

export default Timetable;
