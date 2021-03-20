<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <h3>PC产品</h3>
        <ul>
          <li v-for="item in productList.game">
            <a :href="item.url">{{item.name}}</a>
          </li>
        </ul>
        <div class="hr"></div>
        <h3>应用类</h3>
        <ul>
          <li v-for="item in productList.app">
            <a :href="item.url">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in productList.game">
            <a :href="item.url">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides"></slide-show>
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item,index) in boardList" :class="[
        {'line-last':(index+1)%2 === 0}]">
          <div :class="['index-board-item-inner','index-board-' + index]">
            <img>
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path:'detail'}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import slideShow from "../components/slideShow";
export default {

  name: "indexPage",
  components:{
    slideShow,
  },
  mounted() {
    axios.get('api/getNewsList')
    .then((res) => {
      console.log(res)
      this.newsList = res.data.list
    })
    .catch((error) => {
      console.log(error)
    })

    axios.post('api/getBoardList',{params:'input post params'})
      .then((res) => {
        console.log(res)
        this.boardList = res.data.list
      })
      .catch((error) => {
        console.log(error)
      })
  },

  data(){
    return {
      productList:{
        game:[
          {
            name:'守望先锋',
            url:"https://ow.blizzard.cn/home"
          },
          {
            name:'魔兽世界',
            url:"https://wow.blizzard.cn/landing"
          },
          {
            name: '暗黑破坏神',
            url:"http://di.blizzard.cn/"
          },
          {
            name: '炉石传说',
            url:"https://hs.blizzard.cn/landing"
          }
        ],
        app:[
          {
            name:'腾讯QQ',
            url:"https://www.qq.com/"
          },
          {
            name:'微信',
            url:"https://weixin.qq.com/"
          },
          {
            name: '钉钉',
            url:"https://www.dingtalk.com/?lwfrom=2017120202091367000000111&source=1001/"
          },
          {
            name: '抖音',
            url:"https://www.douyin.com/"
          }
        ],
      },
      newsList:[],
      boardList:[
        {
          title:'哈哈哈',
          description:'哈哈哈个锤子',
        },
        {
          title:'嘻嘻嘻',
          description:'嘻嘻嘻个锤子',
        },
        {
          title:'呼呼呼',
          description:'呼呼呼个锤子',
        },
        {
          title:'嘿嘿嘿',
          description:'嘿嘿嘿个锤子',
        },
      ]
    }
  }
}
</script>

<style scoped>
.index-wrap{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.index-left{
  float: left;
  width: 300px;
  text-align: left;
}

.index-right{
  float: left;
  width: 900px;
  margin-top: 15px;
}

.index-left-block{
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}

.index-left-block .hr{
  margin-bottom: 20px;
}

.index-left-block h2{
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}

.index-left-block h3{
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}

.index-left-block ul{
  padding: 10px 15px;
}

.index-left-block li{
  padding: 5px;
}

.index-board-list{
  overflow: hidden;
}

.index-board-item{
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.index-board-item-inner{
  min-height: 125px;
  padding-left: 20px;
}

.index-board-0 img{
  content: url("../assets/images/1.png");
}

.index-board-1 img{
  content: url("../assets/images/2.png");
}

.index-board-2 img{
  content: url("../assets/images/3.png");
}

.index-board-3 img{
  content: url("../assets/images/4.png");
}

.index-board-item h2{
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
  margin-left: 120px;
}

.index-board-item p{
  margin-left: 120px;
}

.index-board-button{
  margin-top: 20px;
  margin-left: 120px;
}

.index-board-item img{
  float: left;
  margin-left: 0px;
  width: 100px;
  height: 100px;
}

.line-last{
  margin-right: 0;
}


.lastest-news{
  min-height: 512px;
}


</style>
