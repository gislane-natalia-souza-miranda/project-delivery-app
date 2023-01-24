import axios from 'axios';

const api = axios.create({
  baseURL:
    `http://${process.env.REACT_APP_HOSTNAME || 'localhost'}:${process.env.REACT_APP_BACKEND_PORT || '3001'}`,
});

export const getRequest = async (endpoint) => {
  const res = await api.get(endpoint);

  return res.data;
};

export const postRequest = async (endpoint, body) => {
  const res = await api.post(endpoint, body);

  return res;
};

export const putRequest = async (endpoint, body) => {
  const res = await api.put(endpoint, body);

  return res;
};

export const deleteRequest = async (endpoint) => {
  await api.delete(endpoint);
};
