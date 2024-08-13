import { Post } from './Post';
import * as s from './CommentAndReply';
import Img from '../../../assets/images/postImgExample.svg';
import gradientRec from '../../../assets/images/accompany_img.svg';
import { useEffect } from 'react';

export const CommentList = [s.Comment];
export const ReplyList = [];

export const UserList = [
  {
    userId: 2, //백이랑 연결시 삭제
    email: 'lmy@highkick.com',
    password: 'bradpitt01!',
    nickName: '너구리',
    name: '이민용',
    age: '28',
    gender: 'MALE',
    phone: '',
    is_dispatch_confirmed: true,
    dispatchedUniversity: '풍파고',
    univ_homepage: '',
    country: '흑석동',
    dispatchedType: '',
    userState: 'ACTIVE',
  },
  {
    userId: 1, //백이랑 연결시 삭제
    email: 'smj@highkick.com',
    password: 'rappermj01!',
    nickName: '방방거사',
    name: '서민정',
    age: '27',
    gender: 'FEMALE',
    phone: '',
    is_dispatch_confirmed: true,
    dispatchedUniversity: 'EHWA',
    univ_homepage: '',
    country: '미국',
    dispatchedType: '',
    userState: 'ACTIVE',
  },
];

export const PostList = [
  {
    boardType: 'INFO',
    postId: 3,
    is_anonymous: false,
    is_anonymous_univ: '',
    writerInfo: UserList[0],
    title: '영국 계속 비만 오고',
    content: '날씨 너무 안좋아요.... 우울합니다',
    imgIdList: [],
    createdDate: new Date(),
    numOfComment: 0,
  },
  {
    boardType: 'INFO',
    postId: 2,
    anonymous: false,
    anonymousUniv: '',
    writerInfo: UserList[1],
    title: '제가 지금 살고 있는 마을 사진이에요 너무 예쁘지 않나요',
    content: '미국 워싱턴입니다',
    imgIdList: [Img, gradientRec, Img, gradientRec],
    createdDate: new Date('2024-08-11 03:00'),
    numOfComment: 0,
  },
  Post,
];
