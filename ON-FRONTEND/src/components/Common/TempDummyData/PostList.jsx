import { Post } from './Post';
import * as s from './CommentAndReply';
import Img from '../../../assets/images/postImgExample.svg';
import gradientRec from '../../../assets/images/accompany_img.svg';
import { useEffect } from 'react';

export const CommentList = [s.Comment];
export const ReplyList = [s.Reply];

export const UserList = [
  {
    user_id: 2,
    name: '이민용',
    age: 28,
    gender: 'male',
    nickName: '너구리',
    is_dispatch_confirmed: null,
    dispatched_univ: '풍파고등학교',
    univ_homepage: '',
    dispatched_country_id: '흑석동',
    dispatched_type: '',
    start_date: null,
    is_verified: true,
  },
  {
    user_id: 1,
    name: '서민정',
    age: 27,
    gender: 'female',
    nickName: '방방거사',
    is_dispatch_confirmed: true,
    dispatched_univ: 'MIT',
    univ_homepage: '',
    dispatched_country_id: '미국',
    dispatched_type: '',
    start_date: null,
    is_verified: true,
  },
];

export const PostList = [
  {
    board_id: 1,
    post_id: 3,
    is_anonymous: false,
    is_anonymous_univ: '',
    writerInfo: UserList[0],
    title: '영국 계속 비만 오고',
    content: '날씨 너무 안좋아요.... 우울합니다',
    img_id_list: [],
    createdDate: new Date(),
    numOfComment: 0,
    commentList: [],
  },
  {
    board_id: 1,
    post_id: 2,
    is_anonymous: false,
    is_anonymous_univ: '',
    writerInfo: UserList[1],
    title: '제가 지금 살고 있는 마을 사진이에요 너무 예쁘지 않나요',
    content: '미국 워싱턴입니다',
    img_id_list: [Img, gradientRec, Img, gradientRec],
    createdDate: new Date('2024-08-11 03:00'),
    numOfComment: 0,
    commentList: [],
  },
  Post,
];
