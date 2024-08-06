import { Post } from './Post';
import * as s from './CommentAndReply';
import Img from '../../../assets/images/postImgExample.svg';
import gradientRec from '../../../assets/images/accompany_img.svg';

export const PostList = [
  {
    board_id: 1,
    post_id: 2,
    is_anonymous: false,
    is_anonymous_univ: '',
    writerInfo: {
      user_id: 1,
      order: null,
      name: '나실명',
      nickName: '방방거사',
      from: 'KR',
      dispatched_country_id: 'US',
      dispatched_univ: 'MIT',
      is_verified: false,
    },
    title: '제가 지금 살고 있는 마을 사진이에요 너무너무 예쁘지 않나요',
    content: '미국 워싱턴입니다',
    img_id_list: [Img, gradientRec, Img, gradientRec],
    createdDate: new Date(),
    numOfComment: '0',
    commentList: [],
  },
  Post,
];
export const CommentList = [s.Comment];
export const ReplyList = [s.Reply];
export const userInfo = {
  user_id: 2,
  name: '이민용',
  age: 28,
  gender: 'male',
  nickName: '너구리',
  is_dispatch_confirmed: null,
  dispatched_univ: '풍파고등학교',
  univ_homepage: '',
  dispatched_country_id: 'KR',
  dispatched_type: '',
  start_date: null,
  is_verified: true,
};
export const UserList = [];
