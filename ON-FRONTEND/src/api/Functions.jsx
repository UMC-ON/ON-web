import axios from 'axios';
import { BASE_URL } from './urls';

const apiClient = axios.create({
  baseURL: 'http://13.209.255.118:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const multipartApiClient = axios.create({
  baseURL: 'http://13.209.255.118:8080/',
  headers: {
    'Content-Type': 'multipart/form-data;',
  },
  withCredentials: true,
});

export const postData = async (url, formData, headers = {}, params = {}) => {
  const response = await apiClient
    .post(url, formData, { headers: { ...headers }, params: { ...params } })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const getData = async (url, headers = {}, params = {}) => {
  const response = await apiClient
    .get(url, { headers: { ...headers }, params: { ...params } })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};
export const putData = async (url, formData, headers = {}, params = {}) => {
  const response = await apiClient
    .put(url, formData, { headers: { ...headers }, params: { ...params } })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};
export const multiFilePostData = async (url, formData, headers = {}) => {
  const response = await multipartApiClient
    .post(url, formData, { headers: { ...headers } })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};
