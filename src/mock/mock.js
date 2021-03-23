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

Mock.mock(/getNavData/,[
  {
    menuTitle:"首页",
    iconType:"user",
    routerLink:"/HomePage",
    hasChild:false,
  },
  {
    menuTitle:"表单",
    iconType:"table",
    routerLink:"/Form",
    hasChild:true,
    child:[
      {
        menuTitle:"提交",
        routerLink:"/upload",
        hasChild:false,
      },
      {
        menuTitle:"列表",
        routerLink:"/show",
        hasChild:false,
      }
    ]
  },
  {
    menuTitle: "组件",
    iconType:"block",
    hasChild: true,
    routerLink:"/Component",
    child:[
      {
        menuTitle:"组件一",
        routerLink:"/one",
        hasChild:false,
      },
      {
        menuTitle:"组件二",
        routerLink:"/two",
        hasChild:false,
        child:[
          {
            menuTile:"子组件一",
            hasChild:false
          }
        ]
      },
    ]
  }
])
