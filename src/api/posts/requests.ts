import {CreatePost, Post} from '../../types/post';
import client from '../client';
import {PostsQueryKey} from './types';

export const fetchPosts = ({
  queryKey,
}: {
  queryKey: PostsQueryKey;
}): Promise<Post[]> => {
  const params = queryKey[1];
  return client.get('/posts', {
    params: {
      ...params,
    },
  });
};

export const createPost = (data: CreatePost) => client.post('/posts', data);
