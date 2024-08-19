//사용자
export const GET_USER_INFO = 'api/v1/user/current/info';
export const GET_USER_STATUS = 'api/v1/user/current/status';
export const SIGN_UP_URL = 'api/v1/user/sign-up';
export const CHECK_DUPLICATE_NICK = 'api/v1/user/duplicate_check/nickname';
export const CHECK_DUPLICATE_EMAIL = '/api/v1/user/duplicate_check/email';
export const SIGN_IN_URL = 'api/v1/user/sign-in';

//교환교 인증
export const DISPATCH_CERTIFY_REQUEST = 'api/v1/dispatch-certify/apply';
export const GET_REQUESTS_OF = (permitStatus) =>
  `api/v1/dispatch-certify/info/${permitStatus}`;

//커뮤니티 게시글
export const GET_POST_OF = (boardType) => `/api/v1/post/${boardType}`;

//댓글 작성

//채팅

//물품거래글

//스크랩

//일기 작성

//동행신청하기

//동행 구하기 글 작성
