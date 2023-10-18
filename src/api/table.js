import request from '@/utils/request.js'

export default class Table {
  static async getList (params) {
    return request({
      url: '/table/list',
      method: 'get',
      params
    })
  }
}
