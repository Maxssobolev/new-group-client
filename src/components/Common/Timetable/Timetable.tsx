import { Models } from '@stud-log/news-types';
import moment from 'moment';
import 'moment/locale/ru';
import { FC } from 'react';
import { Header, SubHeader } from '../UI/headers';
import { ScrollableX } from '../UI/wrappers';
import { SCCardsWrapper } from './Timetable.styles';
import TimetableCard from './TimetableCard/TimetableCard';

const timetable: Models.Timetable[] = [];

const Timetable: FC = () => {
  const today = moment().format('D MMMM, dddd');
  return (
    <div>
      <Header>
        Расписание <SubHeader>{today}</SubHeader>
      </Header>
      <SCCardsWrapper>
        <ScrollableX.Inner>
          {timetable.map(itm => (
            <TimetableCard {...itm} />
          ))}
        </ScrollableX.Inner>
      </SCCardsWrapper>
    </div>
  );
};

export default Timetable;
