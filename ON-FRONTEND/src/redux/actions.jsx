// src/redux/actions.js
import { SET_USER, CLEAR_USER, SIGN_IN_USER } from './actionTypes';
import axios from 'axios';

export const signInUser = (user) => {
  const options = {
    method: 'POST',
    url: 'http://13.209.255.118:8080/api/v1/user/sign-in',
    headers: {
      'Content-Type': `application/json`, // application/json 타입 선언
    },
    data: user,
  };
  const fetchData = async () => {
    return await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem('grantType', response.data.result.grantType);
        localStorage.setItem('AToken', response.data.result.accessToken);
        localStorage.setItem('RToken', response.data.result.refreshToken);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const request = fetchData();

  return {
    type: SIGN_IN_USER,
    payload: request,
  };
};

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});
