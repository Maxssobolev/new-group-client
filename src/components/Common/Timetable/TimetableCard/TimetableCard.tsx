import { Timetable } from '@stud-log/news-types/models';
import moment from 'moment';
import { FC } from 'react';
import { openInNewTab } from '../../../utils/openInNewTab';
import { truncate } from '../../../utils/truncateString';
import { SCTimetableCard } from './TimetableCard.styles';

const TimetableCard: FC<Timetable> = subject => {
  const startTime = moment(subject.start, 'HH:mm'); //время начала пары
  const endTime = moment(startTime).add({ hours: 1, minutes: 25 }); //время окончания пары
  const isActive = moment().isBetween(startTime, endTime);
  return (
    <SCTimetableCard.Block active={isActive}>
      <div>
        <SCTimetableCard.Time>{`${startTime.format('HH:mm')} - ${endTime.format('HH:mm')}`}</SCTimetableCard.Time>
        <SCTimetableCard.Classroom>{subject.classroom}</SCTimetableCard.Classroom>
      </div>
      <div>
        <SCTimetableCard.Title {...(subject.link ? { onClick: () => openInNewTab(subject.link), style: { cursor: 'pointer' } } : {})}>
          {truncate.apply(subject.title, [34, true])}
        </SCTimetableCard.Title>
      </div>
    </SCTimetableCard.Block>
  );
};

export default TimetableCard;
