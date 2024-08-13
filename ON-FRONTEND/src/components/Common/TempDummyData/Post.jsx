import Img from '../../../assets/images/postImgExample.svg';
export const Post = {
  boardType: 'INFO',
  postId: 1,
  anonymous: false,
  anonymousUniv: '',
  writerInfo: {
    userId: 0, //백이랑 연결시 삭제
    email: 'realname@default.com',
    password: 'realname01!',
    nickName: '나별명',
    name: '나실명',
    age: '38',
    gender: 'FEMALE',
    phone: '',
    is_dispatch_confirmed: true,
    dispatchedUniversity: '저학교',
    univ_homepage: '',
    country: '그나라',
    dispatchedType: '',
    userState: 'DENIED',
  },
  title: '[🇩🇪 독일 교환학생 준비] ep.1 테아민 잡기',
  content:
    '따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉\n독일로 교환학생을 앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약!\n저는 3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?) 유럽 여행을 위해 비자를 발급받으려 합니다!\n이를 위해서는,,,, 피켓팅.. 치열하다.. 힘들다.. 세상 부정적인 단어들로 불리는 테아민을 잡아야 하는데요!',
  imgIdList: [Img],
  createdDate: new Date('2024-08-05 14:00'),
  numOfComment: '0',
};
