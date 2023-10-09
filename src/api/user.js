import request from '@/utils/request.js'

export default class User {
  static async login (data) {
    return request({
      url: 'vue-admin/user/login',
      method: 'post',
      data
    })
  }

  static async getInfo (token) {
    return request({
      url: 'vue-admin/user/info',
      method: 'get',
      params: { token }
    })
  }

  static async logout () {
    return request({
      url: 'vue-admin/user/logout',
      method: 'post',
    })
  }
}
