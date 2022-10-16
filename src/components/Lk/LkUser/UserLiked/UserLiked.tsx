import { CircularProgress } from '@mui/material';
import { PostType } from '@stud-log/news-types/enums';
import { FC } from 'react';
import { mutate } from 'swr';
import useUserService from '../../../../services/user.service';
import EmptyContent from '../../../Common/UI/EmptyContent';
import { Header } from '../../../Common/UI/headers';
import { SCNews } from '../../../News/News.styles';
import NewsCard from '../../../News/NewsCard/NewsCard';
import TaskCard from '../../../Tasks/TaskCard/TaskCard';
import { SCTasks } from '../../../Tasks/Tasks.styles';

const UserLiked: FC = () => {
  const { user } = useUserService();
  const liked = user!.postsLiked!;
  const likedNews = liked.filter(({ postType }) => postType == PostType.news);
  const likedHw = liked.filter(({ postType }) => postType == PostType.homework);
  return (
    <>
      <Header size="l" bold>
        Ваши новости
      </Header>
      <SCNews.Wrapper>
        {likedNews.length ? likedNews.map((itm, idx) => <NewsCard post={itm} key={idx} mutate={mutate} />) : <EmptyContent />}
      </SCNews.Wrapper>
      <Header size="l" bold>
        Ваши задания
      </Header>
      <SCTasks.Wrapper>
        {likedHw.length ? (
          likedHw.map((itm, idx) => {
            return <TaskCard post={itm} key={idx} mutate={mutate} />;
          })
        ) : (
          <EmptyContent />
        )}
      </SCTasks.Wrapper>
    </>
  );
};

export default UserLiked;
