export const BASE_URL = 'http://13.209.255.118:8080';
export const SIGN_IN_URL = 'api/v1/user/sign-in';
export const CHECK_DUPLICATE_NICK = 'api/v1/user/duplicate_check/nickname';
export const CHECK_DUPLICATE_EMAIL = '/api/v1/user/duplicate_check/email';
export const SIGN_UP_URL = 'api/v1/user/sign-up';
export const GET_USER_STATUS = 'api/v1/user/current/status';
export const GET_USER_INFO = 'api/v1/user/current/info';
export const DISPATCH_CERTIFY_REQUEST = 'api/v1/dispatch-certify/apply';
export const GET_REQUESTS_OF = (permitStatus) =>
  `api/v1/dispatch-certify/info/:AWAIT`;
