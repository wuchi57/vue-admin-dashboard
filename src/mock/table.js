import Mock from 'mockjs'
import axios from 'axios'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

Mock.mock('/mock/table', 'get', config => {
  const items = data.items
  return {
    code: 20000,
    data: {
      total: items.length,
      items: items
    }
  }
})

axios.get('/mock/table').then(res => {
  console.log(res.data)
})
