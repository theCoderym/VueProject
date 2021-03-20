import Mock from 'mockjs'
Mock.mock(/getNewsList/,{
  'list|5':[
    {
      url:'@url',
      title:'@ctitle(5,20)'
    }
  ]
})

function  getRImg(){
  return Mock.Random.image('700x300',Mock.Random.hex()) //获取随机图片 传入图片大小 以及背景色
}

// Mock.mock(/getBoardList/,[
//   {
//     src:getRImg(),
//     title:'@ctitle(4,12)',
//     ky:1,
//     toKey:'analysis'
//   },
//   {
//     src:getRImg(),
//     title:'@ctitle(4,12)',
//     ky:1,
//     toKey:'count'
//   }
// ])

Mock.mock(/getPrice/,{
  'number|1-100':100
})
