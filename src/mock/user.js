import Mock from 'mockjs'
import axios from 'axios'

Mock.mock('/mock/user', 'get', getList)
Mock.mock('/mock/user', 'post', addUser)

const data = Mock.mock({
  'list|1-10': [
    {
      'id': Mock.Random.guid(),
      'name': '@cname'
    }
  ]
})

// 获取用户列表
function getList() {
  return {
    code: 200,
    message: 'success',
    data: data.list
  }
}

// 添加用户
function addUser(params) {
  let newData = JSON.parse(params.body)
  data.list.push(newData)
  return {
    code: 200,
    message: 'success',
    data: data.list
  }
}

axios.get('/mock/user').then(res => {
  console.log(res.data)
})

axios.post('/mock/user', {id: 11, name: 'sendi'}).then(res => {
  console.log(res.data)
})
