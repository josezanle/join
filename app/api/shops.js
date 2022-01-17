import axios from 'axios';
import env from 'react-native-config';

export const getShops = () => {
  const config = {
    method: 'get',
    url: `${env.API_URL}/shops`,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios(config)
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
