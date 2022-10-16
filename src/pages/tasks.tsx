import { FC } from 'react';
import { Layout } from '../components/Common/Layout/Layout';
import { Header } from '../components/Common/UI/headers';
import Tasks from '../components/Tasks/Tasks';

const PageTasks: FC = () => {
  return (
    <Layout.PageContent>
      <Tasks />
    </Layout.PageContent>
  );
};
export default PageTasks;
