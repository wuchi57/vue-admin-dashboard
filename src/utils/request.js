import axios from 'axios'
import { getToken } from '@/utils/auth.js'
import { useUserStore } from '@/store/index.js'
import { ElMessage, ElMessageBox } from 'element-plus'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
})

instance.interceptors.request.use(
  (config) => {
    if (useUserStore().token) {
      config.headers['X-Token'] = getToken()
    }

    return config
  },
  (err) => {
    console.log('err on request: ', err)
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 20000) {
      // 对于后端不正确响应提供一个错误弹窗
      let errMsg = res.message || 'Unknown Error'
      ElMessage.error(errMsg)

      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 对于非法 token、其他客户端登录、token 过期，提供一个重新登录确认框
        ElMessageBox.confirm(
          'You have been logged out, you can cancel to stay on this page, or log in again',
          'Warning',
          {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
        ).then(() => {
          useUserStore()
            .resetToken()
            .then(() => {
              location.reload()
            })
        })
      }

      return Promise.reject(new Error(errMsg))
    } else {
      return res
    }
  },
  (err) => {
    // 对于未知错误也提供一个新的告警弹窗
    console.log('err on response: ', err)
    ElMessage.error(err.message)
    return Promise.reject(err)
  }
)

export default instance
