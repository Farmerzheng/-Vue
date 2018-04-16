import jsonp from '../assets/js/jsonp';
import { commonParams, options } from './config';
import axios from 'axios';

function mine_jsonp(src, callbackName, callback) {
  let script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);
  window[callbackName] = function(data) {
    callback(data);
  }
}

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 1072085294,
    needNewCode: 1
  })
  // console.log(url, data,options)
  return jsonp(url, data, options)
}

export function getDiscList(fn) {

  return mine_jsonp('https://c.y.qq.com/v8/fcg-bin/getmv_by_tag?g_tk=5381&jsonpCallback=MusicJsonCallback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=GB2312&notice=0&platform=yqq&needNewCode=0&cmd=shoubo&lan=all', 'MusicJsonCallback', function(res) {
    // service_data.service_rmd = res.result;
    // data = res
    fn(res);

  });
  // return data;

}

// export function getDiscList() {
//   const url = '/api/getDiscList'

//   const data = Object.assign({}, commonParams, {
//     platform: 'yqq',
//     hostUin: 0,
//     sin: 0,
//     ein: 29,
//     sortId: 5,
//     needNewCode: 0,
//     categoryId: 10000000,
//     rnd: Math.random(),
//     format: 'json'
//   })

//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }

// export function getSongList(disstid) {
//   const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

//   const data = Object.assign({}, commonParams, {
//     disstid,
//     type: 1,
//     json: 1,
//     utf8: 1,
//     onlysong: 0,
//     platform: 'yqq',
//     hostUin: 0,
//     needNewCode: 0
//   })

//   return jsonp(url, data, options)
// }
