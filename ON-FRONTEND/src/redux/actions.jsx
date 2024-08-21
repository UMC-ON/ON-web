// redux/actions/authActions.js
import { GET_USER_INFO } from '../api/urls';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOAD_USER } from './actionTypes';
import { getData } from '../api/Functions';
import { useNavigate } from 'react-router-dom';

// 로그인 성공 액션
export const loginSuccess = (user, grantType, accessToken, refreshToken) => {
  localStorage.setItem('grantType', grantType);
  localStorage.setItem('AToken', accessToken); // accessToken을 localStorage에 저장
  localStorage.setItem('RToken', refreshToken); // refreshToken을 localStorage에 저장
  console.log(user);
  return {
    type: LOGIN_SUCCESS,
    payload: { user, accessToken, refreshToken },
  };
};

// 로그인 실패 액션
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// 로그아웃 액션
export const logout = () => {
  localStorage.removeItem('AToken'); // 로그아웃 시 토큰을 localStorage에서 제거
  localStorage.removeItem('RToken');
  return {
    type: LOGOUT,
  };
};

// 새로고침 시 토큰을 로드하고 유저 정보를 가져오는 액션
export const loadUser = () => {
  return async (dispatch) => {
    const accessToken = localStorage.getItem('AToken');
    if (accessToken) {
      try {
        const res = await getData(GET_USER_INFO, {
          Authorization: `Bearer ${accessToken}`,
        }); // 토큰을 사용해 유저 정보를 가져옴
        if (res) {
          let user = res.data.result;
          console.log(user);
          dispatch({
            type: LOAD_USER,
            payload: { user, accessToken },
          });
        }
      } catch (error) {
        console.log(error);
        console.log('로드유저에러');
        dispatch(loginFailure('Failed to fetch user info'));
        dispatch(logout()); // 에러 발생 시 로그아웃 처리
      }
    } else {
      dispatch(logout()); // 토큰이 없으면 로그아웃 상태로 설정
    }
  };
};
