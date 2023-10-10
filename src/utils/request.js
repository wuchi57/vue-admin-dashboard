import axios from 'axios'
import { getToken } from '@/utils/auth.js'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
})

instance.interceptors.request.use(config => {
  return config
})

// instance.interceptors.response.use(config => {
//
// })

export default instance
