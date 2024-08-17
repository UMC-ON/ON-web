import axios from 'axios';
import { BASE_URL } from './urls';

const apiClient = axios.create({
  baseURL: 'http://13.209.255.118:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postData = async (url, formData, headers = {}) => {
  const response = await apiClient
    .post(url, formData, { headers: { ...headers } })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};

export const getData = async (url, headers = {}) => {
  const response = await apiClient
    .get(url, { headers: { ...headers } })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};
