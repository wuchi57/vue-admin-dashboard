import request from '@/utils/request.js'

export default class Table {
  static async getList (params) {
    return request({
      url: '/mock/table/list',
      method: 'get',
      params
    })
  }
}
