import moment from 'moment';
import { FC } from 'react';
import { Layout } from '../components/Common/Layout/Layout';
import { Header, SubHeader } from '../components/Common/UI/headers';
import 'moment/locale/ru';
import { SCTimetable } from '../components/Timetable/timetable.styles';
import FullTimeTable from '../components/Timetable/FullTimeTable';
import Timetable from '../components/Common/Timetable/Timetable';
import VerticalTimeTable from '../components/Timetable/VerticalTimeTable';
const PageTimeTable: FC = () => {
  const today = moment().format('DD MMMM');
  const todayWeekParity = moment().week() % 2;

  return (
    <Layout.PageContent>
      <SCTimetable.THeader size="l" style={{ marginTop: 0 }}>
        Сегодня <span>{today}</span> <SubHeader>{todayWeekParity == 1 ? 'нечетная' : 'четная'}</SubHeader>
      </SCTimetable.THeader>
      <SCTimetable.Grid>
        <FullTimeTable />
        <VerticalTimeTable />
      </SCTimetable.Grid>
    </Layout.PageContent>
  );
};
export default PageTimeTable;
