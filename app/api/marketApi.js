// https://join-market-point.herokuapp.com/allPost

import axios from "axios";

export const apiDataMarketPoint = () => {
  const config = {
    method: 'get',
    // url: `${process.env.API_MARKET_POINT}/allPost`,
    url: `https://join-market-point.herokuapp.com/allPost`,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};