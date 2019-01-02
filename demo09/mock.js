const Mock = require('mockjs');
const {
  parse
} = require('url');

Mock.mock('init.json', 'get' ,{
  'succese': true,
  // list 是 array，包含3-8个对象
  'list|3-8': [
    { 
      // id 是 number，从1开始，自动加1
      'id|+1': 1,
      // title，随机长度的标题
      'title': '@title(2, 4)',
    }
  ]
})

Mock.mock('chat.json', 'get', function(opts) {
  const { body } = opts;
  return Mock.mock({
    'succese': true,
    'answer': body
  })
})