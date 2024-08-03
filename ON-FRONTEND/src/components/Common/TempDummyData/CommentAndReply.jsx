import { userInfo } from './PostList';

export const Comment = {
  comment_id: null,
  post_id: null,
  writerInfo: {},
  replyList: [],
  is_anonymous: null,
  content: '',
};

export const Reply = {
  comment_id: '',
  writerInfo: { isAnonymous: true, order: null, name: '나실명' },
  content: '',
};
