import axios from 'axios'
import { getToken } from 'utils/auth.js'
import { Message, MessageBox } from 'element-plus'

const instance = axios.create({
  baseURL: '/mock',
  timeout: 5000
})

instance.interceptors.request.use(config => {

})

instance.interceptors.response.use(config => {

})

export default instance
