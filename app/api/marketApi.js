// https://join-market-point.herokuapp.com/


export const apiDataFixture = () => {
  const config = {
    method: 'get',
    url: `${process.env.API_MARKET_POINT}/allPosts`,
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