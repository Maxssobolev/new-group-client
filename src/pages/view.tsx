import { CircularProgress } from '@mui/material';
import { PostType } from '@stud-log/news-types/enums';
import { Post } from '@stud-log/news-types/models';
import { Interweave } from 'interweave';
import moment from 'moment';
import 'moment/locale/ru';
import { FC, useState } from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import useSWR, { SWRResponse } from 'swr';
import { Layout } from '../components/Common/Layout/Layout';
import { SCActionDone, SCActionLike } from '../components/Common/UI/buttons';
import { SCTaskCard } from '../components/Tasks/TaskCard/TaskCard.styles';
import { getRemainDeadline } from '../components/utils/getRemainTime';
import { SCView } from '../components/View/View.styles';
import { doneHandler, likeHandler } from '../http/api/likeHandler';
import { $authGet } from '../http/helpers/authGet';
import { ReactComponent as DoneIcon } from '../assets/img/clipboard-tick.svg';

const View: FC = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const id = params.get('id');
  const type = params.get('type') as keyof typeof PostType;
  const group = params.get('group');

  const {
    data: posts,
    error,
    mutate,
  }: SWRResponse<{ prevPost: Post | null; currentPost: Post | null; nextPost: Post | null }> = useSWR(
    `/api/posts/get?id=${id}&type=${type}&group=${group}`,
    $authGet,
  );

  if (!posts)
    return (
      <Layout.PageContent>
        <SCView.Wrapper>
          <CircularProgress />
        </SCView.Wrapper>
      </Layout.PageContent>
    );
  if (!id || !type || !group || error || !posts?.currentPost) return <Navigate to="404" />;

  const post = posts.currentPost;
  const { remainTime, progress, remainShort } = getRemainDeadline(post.createdAt, post.deadline);
  const isLiked = !!(post.usersLiked?.length && post.usersLiked.length > 0); //в данном запросе возвращается пустой массив, если текущий пользователь не лайкнул
  const isDone = !!(post.usersDone?.length && post.usersDone.length > 0);
  return (
    <Layout.PageContent>
      <SCView.Wrapper>
        <SCView.BackBtn onClick={() => navigate(type === PostType.news ? '/main' : '/tasks')}>вернуться назад</SCView.BackBtn>
        <SCView.Title>{post.title}</SCView.Title>
        {post.postType === PostType.homework && (
          <SCView.HWBlock>
            <SCTaskCard.Subject>{post.subject.title}</SCTaskCard.Subject>
            <SCTaskCard.RemainBlock style={{ marginTop: 10 }}>
              <SCTaskCard.RemainTime style={{ fontSize: 'var(--fz-extra-small)' }}>осталось {remainTime}</SCTaskCard.RemainTime>
              <SCTaskCard.RemainChart style={{ height: 10 }}>
                <SCTaskCard.RemainChartProgress progress={progress}></SCTaskCard.RemainChartProgress>
              </SCTaskCard.RemainChart>
            </SCTaskCard.RemainBlock>
          </SCView.HWBlock>
        )}
        <SCView.Content>
          <Interweave content={post.content} blockList={['figure']} />
        </SCView.Content>
        <SCView.Footer>
          <SCView.FooterActionBtns>
            {post.postType === PostType.homework && (
              <SCActionDone active={isDone} onClick={() => doneHandler(post.id).then(() => mutate())}>
                <DoneIcon /> {isDone ? 'Выполнено' : 'Выполнить'}
              </SCActionDone>
            )}
            <SCActionLike active={isLiked} type="button" onClick={() => likeHandler(post.id, type).then(() => mutate())}></SCActionLike>
          </SCView.FooterActionBtns>
          <SCView.FooterNavigationBtns>
            <SCView.FooterNavigationBtn
              way="left"
              disabled={posts.prevPost ? false : true}
              onClick={() => navigate(`/view?id=${posts.prevPost?.id}&type=${type}&group=${group}`)}
            >
              {type === PostType.news ? 'предыдущая новость' : 'предыдущee задание'}
            </SCView.FooterNavigationBtn>
            <SCView.FooterNavigationBtn
              way="right"
              disabled={posts.nextPost ? false : true}
              onClick={() => navigate(`/view?id=${posts.nextPost?.id}&type=${type}&group=${group}`)}
            >
              {type === PostType.news ? 'следующая новость' : 'следующее задание'}
            </SCView.FooterNavigationBtn>
          </SCView.FooterNavigationBtns>
          <SCView.FooterDate>{moment(post.createdAt).format('DD MMMM HH:mm')}</SCView.FooterDate>
        </SCView.Footer>
      </SCView.Wrapper>
    </Layout.PageContent>
  );
};

export default View;
