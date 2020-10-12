import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'NEED BACK END URL',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};