<template>
  <router-view  v-if="!islogin"></router-view>
  <a-layout :key="nowTime" id="components-layout-demo-custom-trigger" v-else>
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <img :style="{width:collapsed?'50px':'150px'}" class="logo" />
      <a-menu
        mode="inline"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        :style="{ height: '100%', borderRight: 0 }"
        theme="dark"
      >
        <template v-for="item in navlist">
          <a-menu-item v-if="!item.hasChild" :key="item.key" @click="menuItemClick(item)">
            <router-link :to="item.routerLink">
            <a-icon :type="item.iconType" />
            <span>{{ item.menuTitle }}</span>
            </router-link>
          </a-menu-item>
          <sub-menu v-else :key="item.key" :menu-info="item" />
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div class="header-title-div">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-page-header
          class="header-title-content"
          :title="$store.state.headerTitle"
          sub-title=""
          backIcon = "false"
        />
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>

import { Menu } from 'ant-design-vue'
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.menuTitle" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon :type="menuInfo.iconType" /><span>{{ menuInfo.menuTitle }}</span>
        </span>
        <template v-for="(item,index) in menuInfo.child">
          <a-menu-item :key="index" @click="submenuItemClick(menuInfo.menuTitle+' > '+item.menuTitle)">
            <router-link :to="menuInfo.routerLink + item.routerLink">
            <a-icon :type="item.iconType" />
            <span>{{ item.menuTitle }}</span>
            </router-link>
          </a-menu-item>
        </template>
      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  methods:{
    submenuItemClick(title){
      console.log(title,this.$parent)
      this.$store.commit('changeTitle',title)
      // this.$pathirent.headertitle = title

      //   this.$parent.headerSubTitle = item.menuTile,
      // console.log(this.$parent.headertitle,this.$parent.headerSubTitle)
    }
  },
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
}

import axios from "axios";
import {getLoginStatus} from "../LoginAuth.js"
export default {

  components: {
    'sub-menu': SubMenu,
  },

  methods:{
    menuItemClick(item){
      console.log(item)

      this.$store.commit('changeTitle',item.menuTitle)
      // this.headertitle = item.menuTitle,
      // this.headerSubTitle = ""
    },
    getTime(){
      setInterval(()=>{
        //new Date() new一个data对象，当前日期和时间
        //toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
        this.nowtime = new Date().toLocaleString();
      },1000)
    }
  },

  beforeCreate() {
    this.islogin = getLoginStatus();
    console.log('登录状态' + this.islogin );
    if (!this.islogin){
      if (this.$route.path != '/Login'){
      this.$router.replace('/Login')
      }
    }
  },

  created() {
    this.getTime(),
      this.islogin = getLoginStatus();
  },

  mounted() {
    axios.get('api/getNavData')
      .then((res) => {
        console.log(res)
        this.navlist = res.data
      })
      .catch((error) => {
        console.log(error)
      })
  },

  data() {
    return {
      collapsed: false,
      headertitle:"",
      headerSubTitle:"",
      navlist:[],
      islogin:false,
      nowTime:""
    };
  },


};
</script>
<style>

.logo{
  content: url("../assets/dxclogo.png");
}

.header-title-content{
  padding-left: 5px;
}

.header-title-div{
  display: flex;
  flex-direction: row;
  align-items: center;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger{
  height: 100%;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

