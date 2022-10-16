import { CircularProgress, Drawer } from '@mui/material';
import { PostType } from '@stud-log/news-types/enums';
import { Post } from '@stud-log/news-types/models';
import { ChangeEvent, FC, useState } from 'react';
import { useSelector } from 'react-redux';
import useSWR, { SWRResponse } from 'swr';
import { $authGet } from '../../http/helpers/authGet';
import { IReduxState } from '../../redux/state.interface';
import { SCSortBtn } from '../Common/UI/buttons';
import EmptyContent from '../Common/UI/EmptyContent';
import { SCGrid } from '../Common/UI/grid';
import { Header } from '../Common/UI/headers';
import { SCOffset } from '../Common/UI/offset';
import useSubjects from '../Hooks/useSubjects';
import TaskCard from './TaskCard/TaskCard';
import { SCTasks } from './Tasks.styles';
import Select from 'react-select';
import { DropdownIndicator } from '../Common/UI/react-select__dropdown-indicator';
import { customSelectStyles } from './FilterSelect.styles';
const Tasks: FC = () => {
  const subjects = useSubjects({ subjectsOnly: false });
  const [filter, setFilter] = useState({ open: false, order: '', subjectId: -1 });
  const openFilters = () => setFilter(prev => ({ ...prev, open: true }));
  const closeFilters = () => setFilter(prev => ({ ...prev, open: false }));
  const group = useSelector<IReduxState, IReduxState['group']>(state => state.group);
  const [pagination, setPagination] = useState({ page: 1, limit: 25 });
  const {
    data: tasks,
    error,
    mutate,
  }: SWRResponse<{ rows: Post[]; count: number }> = useSWR(
    `/api/posts/all?page=${pagination.page}&type=${PostType.homework}&group=${group.selected.value || group.userGroup}&order=${
      filter.order
    }&subjectId=${filter.subjectId}`,
    $authGet,
  );

  return (
    <div>
      <Header size="l" style={{ marginTop: 0 }} withSort>
        Домашняя работа <SCSortBtn onClick={openFilters} />
      </Header>
      <SCTasks.Wrapper>
        {!tasks ? (
          <CircularProgress />
        ) : tasks.rows.length ? (
          tasks.rows.map((itm, idx) => <TaskCard post={itm} key={idx} mutate={mutate} />)
        ) : (
          <EmptyContent />
        )}
      </SCTasks.Wrapper>
      <Drawer open={filter.open} onClose={closeFilters} anchor="right">
        <SCOffset.Wrapper style={{ width: '20vw', minWidth: 'unset' }}>
          <SCOffset.Title>Фильтр</SCOffset.Title>
          <SCOffset.FilterBlock>
            <SCOffset.FilterBlockTitle>По дате</SCOffset.FilterBlockTitle>
            <SCGrid.Row
              columns={2}
              className="filters__radio-wrapper"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                switch (e.target.value) {
                  case 'createdAt':
                    setFilter(prev => ({ ...prev, order: JSON.stringify([['createdAt', 'ASC']]) }));
                    break;
                  case 'deadline':
                    setFilter(prev => ({ ...prev, order: JSON.stringify([['deadline', 'DESC']]) }));
                    break;
                }
              }}
            >
              <div className="radio">
                <label
                  style={{
                    display: 'flex',
                    cursor: 'pointer',
                  }}
                >
                  <input type="radio" name="sortBy" value="createdAt" defaultChecked />
                  <span>Сначала новые</span>
                </label>
              </div>
              <div className="radio">
                <label
                  style={{
                    display: 'flex',
                    cursor: 'pointer',
                  }}
                >
                  <input type="radio" name="sortBy" value="deadline" />
                  <span>По дедлайну</span>
                </label>
              </div>
            </SCGrid.Row>
          </SCOffset.FilterBlock>
          <SCOffset.FilterBlock>
            <SCOffset.FilterBlockTitle>По предмету</SCOffset.FilterBlockTitle>
            <SCGrid.Row columns={1}>
              <Select
                styles={customSelectStyles}
                options={subjects}
                onChange={selected => {
                  if (selected) {
                    setFilter(prev => ({ ...prev, subjectId: selected.id }));
                  }
                }}
                components={{ DropdownIndicator }}
                placeholder="Все предметы"
              />
            </SCGrid.Row>
          </SCOffset.FilterBlock>
        </SCOffset.Wrapper>
      </Drawer>
    </div>
  );
};

export default Tasks;
