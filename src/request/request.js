import axios from 'axios'
import router from './../router'

const service = axios.create({
  baseURL: 'http://localhost:18080',
  timeout: 5000,
  withCredentials: true, // 允许携带cookie
  headers: {
    "Content-Type": "text/plain;charset=utf-8"
  }
})


// http request 拦截器
// axios.interceptors.request.use(
//   function(config) {
//     if (localStorage.getItem('token')) {
//       config.headers.Authorization = localStorage.getItem('token')
//     }
//     return config
//   },
//   function(err) {
//     return Promise.reject(err)
//   }
// )

// http response 拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data) {
      return response.data
    } else {
      return Promise.reject(new Error('请求失败'))
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除 token 信息并跳转到登录页面
          localStorage.removeItem('token')   //  清除本地的token
          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== '/login' &&
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.path
            }
          })
      }
    }
    return Promise.reject(error.response.data)
  }
)

export default service
