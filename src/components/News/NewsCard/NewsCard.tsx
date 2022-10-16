import { PostType } from '@stud-log/news-types/enums';
import { Post } from '@stud-log/news-types/models';
import moment from 'moment';
import { FC } from 'react';
import { KeyedMutator, useSWRConfig } from 'swr';
import { likeHandler } from '../../../http/api/likeHandler';
import { SCActionLike, SCBtnSection, SCButton } from '../../Common/UI/buttons';
import { SCNewsCard } from './NewsCard.styles';
import { Interweave } from 'interweave';
import { transform } from '../../Common/UI/replacements';
import useUserService from '../../../services/user.service';
import { truncate } from '../../utils/truncateString';
import { useNavigate } from 'react-router-dom';

const NewsCard: FC<{ post: Post; mutate: KeyedMutator<{ rows: Post[]; count: number }> }> = ({ post, mutate }) => {
  const { mutate: userMutate } = useSWRConfig();
  const navigate = useNavigate();
  const { user } = useUserService();
  const isLiked = !!post.usersLiked?.length;
  return (
    <SCNewsCard.Block>
      <SCNewsCard.Title>{truncate.apply(post.title, [45, true])}</SCNewsCard.Title>
      <SCNewsCard.Content>
        <Interweave content={`${post.content.slice(0, 176)}${post.content.length > 176 ? '...' : ''}`} transform={transform} />
      </SCNewsCard.Content>
      <SCNewsCard.Footer>
        <SCBtnSection>
          <SCButton kind="primary" type="button" onClick={() => navigate(`/view?id=${post.id}&type=${post.postType}&group=${post.group}`)}>
            Читать
          </SCButton>
          {user && (
            <SCActionLike
              active={isLiked}
              type="button"
              onClick={() =>
                likeHandler(post.id, PostType.news).then(() => {
                  mutate();
                  userMutate('/api/user/get');
                })
              }
            ></SCActionLike>
          )}
        </SCBtnSection>
        <SCNewsCard.Date>{moment(post.createdAt).format('D MMMM HH:mm')}</SCNewsCard.Date>
      </SCNewsCard.Footer>
    </SCNewsCard.Block>
  );
};

export default NewsCard;
