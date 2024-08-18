import { Post } from './Post';
import * as s from './CommentAndReply';
import Img from '../../../assets/images/postImgExample.svg';
import gradientRec from '../../../assets/images/accompany_img.svg';
import { useEffect } from 'react';

export const CommentList = [s.Comment];
export const ReplyList = [];

export const UserList = [
  {
    id: 2, //백이랑 연결시 삭제
    email: 'lmy@highkick.com',
    password: 'bradpitt01!',
    nickname: '너구리',
    name: '이민용',
    age: '28',
    gender: 'MALE',
    phone: '',
    isDispatchConfirmed: true,
    dispatchedUniversity: '풍파고',
    universityUrl: '',
    country: '흑석동',
    dispatchType: '',
    userStatus: 'NON_CERTIFY',
  },
  {
    id: 1, //백이랑 연결시 삭제
    email: 'smj@highkick.com',
    password: 'rappermj01!',
    nickname: '방방거사',
    name: '서민정',
    age: '27',
    gender: 'FEMALE',
    phone: '',
    isDispatchConfirmed: true,
    dispatchedUniversity: 'EHWA',
    universityUrl: '',
    country: '미국',
    dispatchType: '',
    userStaus: 'ACTIVE',
  },
];

export const PostList = [
  {
    boardType: 'FREE',
    postId: 4,
    is_anonymous: false,
    is_anonymous_univ: '',
    writerInfo: UserList[0],
    title: '한식 먹고싶다',
    content: '근데 한식 너무 비쌈 ㅜㅜㅜㅜ',
    imgIdList: [],
    createdDate: new Date(),
    numOfComment: 0,
  },
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

export const AuthRequests = [];
