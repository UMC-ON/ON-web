export const Comment = {
  comment_id: 1,
  post_id: 1,
  writerInfo: { userId: -1, nickName: '실험용' },
  replyList: [],
  is_anonymous: null,
  content: '시험용 예제 댓글',
};

export const Reply = {
  comment_id: '',
  writerInfo: { isAnonymous: true, order: null, name: '나실명' },
  content: '',
};
