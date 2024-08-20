//사용자
export const GET_USER_INFO = 'api/v1/user/current/info';
export const GET_USER_STATUS = 'api/v1/user/current/status';
export const SIGN_UP_URL = 'api/v1/user/sign-up';
export const CHECK_DUPLICATE_NICK = 'api/v1/user/duplicate_check/nickname';
export const CHECK_DUPLICATE_EMAIL = '/api/v1/user/duplicate_check/email';
export const SIGN_IN_URL = 'api/v1/user/sign-in';
export const GET_CURRENT_INFO = '/api/v1/user/current/info';
export const PUT_UNIV = '/api/v1/user/current/update/univ_url';
export const PUT_NICKNAME = '/api/v1/user/current/update/nickname';

//교환교 인증
export const DISPATCH_CERTIFY_REQUEST = 'api/v1/dispatch-certify/apply';
export const GET_REQUESTS_OF = (permitStatus) =>
  `api/v1/dispatch-certify/info/${permitStatus}`;

//커뮤니티 게시글
export const GET_POST_OF = (boardType) => `/api/v1/post/${boardType}`;
export const GET_RECENT_POST_OF = (boardType) =>
  `/api/v1/post/recent/${boardType}`;
export const WRITE_POST_IN = (boardType) => `/api/v1/post/${boardType}`;
export const GET_TWO_INFOPOST = '/api/v1/home/info/list';
export const GET_TWO_FREEPOST = '/api/v1/home/free/list';
export const GET_SEARCH_RESULT = '/api/v1/post/search';

//댓글 작성

//채팅
export const GET_TRADE_LIST = '/api/v1/chat/market/list';
export const GET_ACCOMPANY_LIST = '/api/v1/chat/market/list';
export const GET_TRADE_INFO = (roomId) => `/api/v1/chat/market/${roomId}`;
export const GET_ACCOMPANY_INFO = (roomId) => `/api/v1/chat/company/${roomId}`;

//물품거래글

//스크랩

//일기 작성

//동행 글 조회
export const GET_NEAR_ACCOMPANY = '/api/v1/home/company/list';
export const GET_ALL_ACCOMPANY = '/api/v1/company-post';
export const GET_FILTER_ACCOMPANY = '/api/v1/company-post/filter';
export const GET_RECENT_ACCOMPANY = '/api/v1/company-post/recent';
export const GET_DETAIL_ACCOMPANY = (companyPostId) =>
  `/api/v1/company-post/${companyPostId}`;

//동행 구하기 글 작성
export const WRITE_ACCOMPANY = `/api/v1/company-post`;
