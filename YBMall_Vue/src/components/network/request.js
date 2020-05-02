import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8080',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 请求前拦截
  instance.interceptors.request.user(config => {
    return config;
  }, error => {
    return error;
  })

  // 响应后拦截
  instance.interceptors.response.user(result => {
    return result.data;
  }, error => {
    return error;
  })

  return instance(config)
}