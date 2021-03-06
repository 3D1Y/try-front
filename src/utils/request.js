import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { Message } from "element-ui";
const instance = axios.create({
  baseURL: "http://182.92.128.115/api",
  hearders: {},
});

//设置请求拦截器
instance.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

//设置响应拦截器
instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    if (response.data.code === 200) {
      return response.data.data;
    }
    Message.error("用户信息不匹配");
    return Promise.reject(response.data.message);
  },

  //响应失败： 当响应状态码不是2xx
  (err) => {
    NProgress.done();
    Message.error("网络连接出错了");
    return Promise.reject(err);
  }
);

//暴露instance
export default instance;
