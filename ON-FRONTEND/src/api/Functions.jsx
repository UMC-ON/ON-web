import axios from 'axios';
const serverAddress = import.meta.env.VITE_SERVER_ADDRESS;

const apiClient = axios.create({
  baseURL: serverAddress + '/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const multipartApiClient = axios.create({
  baseURL: serverAddress + '/',
  headers: {
    'Content-Type': 'multipart/form-data;',
  },
});

///일반, content-type이 application/json인 post,get,put///
///url,formData만 필수///
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
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      return null;
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

////이미지 전송 등 multipart/form-data 형식의 post///
export const multiFilePostData = async (
  url,
  formData,
  headers = {},
  params = {},
) => {
  const response = await multipartApiClient
    .post(url, formData, { headers: { ...headers }, params: { ...params } })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};
