import Mock from 'mockjs'
import axios from 'axios'

const data = Mock.mock({
  'list|1-10': [
    {
      'id': Mock.Random.guid(),
      'name': '@cname'
    }
  ]
})

// 获取用户列表
Mock.mock('/mock/user', 'get', params => {
  return {
    code: 200,
    message: 'success',
    data: data.list
  }
})

// 添加用户
Mock.mock('/mock/user', 'post', params => {
  let newData = JSON.parse(params.body)
  data.list.push(newData)
  return {
    code: 200,
    message: 'success',
    data: data.list
  }
})

axios.get('/mock/user').then(res => {
  console.log(res.data)
})

axios.post('/mock/user', {id: 11, name: 'sendi'}).then(res => {
  console.log(res.data)
})
