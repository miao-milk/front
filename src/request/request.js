import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:18080',
  timeout: 5000,
  withCredentials: false, // 允许携带cookie
  headers: {
    "Content-Type": "text/plain;charset=utf-8"
  }
})

service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data) {
      return response.data
    } else {
      return Promise.reject(new Error('请求失败'))
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
