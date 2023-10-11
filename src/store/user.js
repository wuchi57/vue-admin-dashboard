import { defineStore } from 'pinia'
import { getToken, setToken, removeToken } from '@/utils/auth.js'
import { User } from '@/api'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
}

export const useUserStore = defineStore('user', {
  state: () => state,
  actions: {
    login(userInfo) {
      return new Promise((resolve, reject) => {
        const { username, password } = userInfo
        User.login({ username: username.trim(), password })
          .then((res) => {
            console.log(res)
            const { data } = res
            // cookie store 同时设置token
            this.token = data.token
            setToken(data.token)
            console.log('登录成功： ', data.token)
            resolve()
          })
          .catch((err) => {
            console.error('err on store login')
            reject(err)
          })
      })
    },
    getInfo() {},
    logout() {
      return new Promise((resolve) => {
        this.clear()
        resolve()
      })
    },
    resetToken() {
      return new Promise((resolve) => {
        this.clear()
        resolve()
      })
    },
    clear() {
      this.token = ''
      this.name = ''
      this.avatar = ''
      removeToken()
    }
  },
})
