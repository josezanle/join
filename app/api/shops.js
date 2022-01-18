import axios from 'axios';
import env from 'react-native-config';

export const getShops = () => {
  return axios
    .get(`${env.API_URL}/shops`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(function (response) {
      return response.data.data;
    });
};

export const getShop = id => {
  return axios
    .get(`${env.API_URL}/shops/${encodeURIComponent(id)}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(function (response) {
      return response.data.data;
    });
};
