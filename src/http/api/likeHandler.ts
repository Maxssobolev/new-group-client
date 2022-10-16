import { PostType } from '@stud-log/news-types/enums';
import { mutate } from 'swr';
import { $authHost } from '../host';

export const likeHandler = (postId: number, postType: keyof typeof PostType) => {
  return $authHost.post('api/posts/like', { postId, postType });
};

export const doneHandler = (postId: number) => {
  return $authHost.post('api/posts/done', { postId });
};
