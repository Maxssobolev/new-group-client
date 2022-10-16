import { Card, CardContent, CardActions } from '@mui/material';
import { Post } from '@stud-log/news-types/models';
import { Interweave } from 'interweave';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyedMutator } from 'swr';
import { transform } from '../../Common/UI/replacements';
import { getRemainDeadline } from '../../utils/getRemainTime';
import { truncate } from '../../utils/truncateString';
import { SCTaskCard, SCTaskCardWrapper } from './TaskCard.styles';

const TaskCard: FC<{ post: Post; mutate: KeyedMutator<{ rows: Post[]; count: number }> }> = ({ post, mutate }) => {
  const navigate = useNavigate();
  const { remainTime, progress, remainShort } = getRemainDeadline(post.createdAt, post.deadline);
  const [openAdd, setOpenAdd] = useState(false);
  console.log(post);
  return (
    <SCTaskCardWrapper>
      <SCTaskCard.Block>
        <SCTaskCard.RemainBlock>
          <SCTaskCard.RemainTime>осталось {remainTime}</SCTaskCard.RemainTime>
          <SCTaskCard.RemainChart>
            <SCTaskCard.RemainChartProgress progress={progress}></SCTaskCard.RemainChartProgress>
          </SCTaskCard.RemainChart>
        </SCTaskCard.RemainBlock>
        <SCTaskCard.Subject>{truncate.apply(post.subject.title, [40, true])}</SCTaskCard.Subject>
        <SCTaskCard.Title>{truncate.apply(post.title, [38, true])}</SCTaskCard.Title>
        <SCTaskCard.Content>
          <Interweave content={truncate.apply(post.content, [70, true])} transform={transform} />
        </SCTaskCard.Content>
        <SCTaskCard.Footer>
          <SCTaskCard.BtnOpen onClick={() => navigate(`/view?id=${post.id}&type=${post.postType}&group=${post.group}`)}>
            Открыть
          </SCTaskCard.BtnOpen>
          <SCTaskCard.BtnAdditional open={openAdd} onClick={() => setOpenAdd(!openAdd)} />
        </SCTaskCard.Footer>
      </SCTaskCard.Block>
    </SCTaskCardWrapper>
  );
};

export default TaskCard;
