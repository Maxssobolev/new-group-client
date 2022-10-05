import { FC } from 'react';
import { Layout } from '../components/Common/Layout/Layout';
import Timetable from '../components/Common/Timetable/Timetable';

const PageMain: FC = () => {
  return (
    <Layout.PageContent>
      <Timetable />
    </Layout.PageContent>
  );
};
export default PageMain;
