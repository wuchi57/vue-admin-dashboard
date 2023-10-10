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
        // User.login({ username: username.trim(), password}).then(res => {
        //   console.log(res);
        // })
      })
    },
    getInfo() {},
    logout() {},
    resetToken() {},
  },
})
