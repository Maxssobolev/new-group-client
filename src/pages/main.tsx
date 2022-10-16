import { FC } from 'react';
import { Layout } from '../components/Common/Layout/Layout';
import News from '../components/News/News';
import Timetable from '../components/Common/Timetable/Timetable';

const PageMain: FC = () => {
  return (
    <Layout.PageContent>
      <Timetable />
      <News />
    </Layout.PageContent>
  );
};
export default PageMain;
