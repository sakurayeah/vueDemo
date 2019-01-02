import axios from 'axios';

function ajax(url = '', opts = {}) {
  if (!url) {
    return;
  }

  const {
    method = 'get',
    data,
  } = opts;

  // return new Promise((resolve,reject) => {
  //   axios({
  //     method,
  //     url,
  //     data,
  //   }).then(function(res) {
  //     resolve(res.data);
  //   })
  //   .catch(err => {
  //     reject(err)
  //   })
  // })

  return axios({
    method,
    url,
    data,
  }).then(function(res) {
    return res.data;
  });
}

export default ajax;