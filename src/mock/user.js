import Mock from 'mockjs'
import { param2Obj } from '@/utils/tools.js'

const tokens = {
  admin: {
    token: 'admin-token',
  },
  editor: {
    token: 'editor-token',
  },
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
  },
}

// 登录获取用户 token
Mock.mock('/mock/user/login', 'post', (params) => {
  const { username, password } = JSON.parse(params.body)
  const token = tokens[username]

  if (!token) {
    return {
      code: 60204,
      message: 'Account and password are incorrect.',
    }
  }

  return {
    code: 20000,
    data: token,
  }
})

// 退出登录
Mock.mock('/mock/user/logout', 'post', (params) => {
  return {
    code: 20000,
    data: 'success',
  }
})

// 获取用户信息
Mock.mock(/\/mock\/user\/info\.*/, 'get', (params) => {
  const { token } = param2Obj(params.url)
  const info = users[token]

  if (!info) {
    return {
      code: 50008,
      message: 'Login failed, unable to get user details.',
    }
  }

  return {
    code: 20000,
    data: info,
  }
})
