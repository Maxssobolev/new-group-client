import { Post } from '@stud-log/news-types/models';
import { ChangeEvent, FC, useState } from 'react';
import useSWR, { SWRResponse } from 'swr';
import { Header } from '../Common/UI/headers';
import { SCNews } from './News.styles';
import { PostType } from '@stud-log/news-types/enums';
import NewsCard from './NewsCard/NewsCard';
import EmptyContent from '../Common/UI/EmptyContent';
import { $authGet } from '../../http/helpers/authGet';
import { useSelector } from 'react-redux';
import { IReduxState } from '../../redux/state.interface';
import { CircularProgress, Drawer } from '@mui/material';
import { SCSortBtn } from '../Common/UI/buttons';
import { SCGrid } from '../Common/UI/grid';
import { SCOffset } from '../Common/UI/offset';

const News: FC = () => {
  const [filter, setFilter] = useState({ open: false, order: '' });
  const openFilters = () => setFilter(prev => ({ ...prev, open: true }));
  const closeFilters = () => setFilter(prev => ({ ...prev, open: false }));

  const group = useSelector<IReduxState, IReduxState['group']>(state => state.group);
  const [pagination, setPagination] = useState({ page: 1, limit: 25 });
  const {
    data: news,
    error,
    mutate,
  }: SWRResponse<{ rows: Post[]; count: number }> = useSWR(
    `/api/posts/all?page=${pagination.page}&type=${PostType.news}&group=${group.selected.value || group.userGroup}&order=${filter.order}`,
    $authGet,
  );

  return (
    <div>
      <Header size="l" /*withSort*/>Новости {/*<SCSortBtn onClick={openFilters} />*/}</Header>
      <SCNews.Wrapper>
        {!news ? (
          <CircularProgress />
        ) : news.rows.length ? (
          news.rows.map((itm, idx) => <NewsCard post={itm} key={idx} mutate={mutate} />)
        ) : (
          <EmptyContent />
        )}
      </SCNews.Wrapper>
    </div>
  );
};

export default News;
