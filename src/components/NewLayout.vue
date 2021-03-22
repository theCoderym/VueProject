<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <img :style="{width:collapsed?'50px':'150px'}" class="logo" />
      <a-menu
        mode="inline"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        :style="{ height: '100%', borderRight: 0 }"
        theme="dark"
      >
        <component v-for="(item,index) in navlist" :key="'subfirst' + index" :is="item.hasChild?'a-sub-menu':'a-menu-item' ">
<!--          {{item.menuTile}}-->
          <a-icon v-if="!item.hasChild" :type="item.iconType" />
          <span v-if="!item.hasChild">{{item.menuTitle}}</span>
          <span v-else slot="title"><a-icon :type="item.iconType" />{{item.menuTitle}}</span>
          <component v-for="(itemChild,indexChild) in item.child" :key="'subsecond' + indexChild" :is="itemChild.hasChild?'a-sub-menu':'a-menu-item'">
<!--            {{itemChild.menuTile}}-->
            <span v-if="!itemChild.hasChild">{{itemChild.menuTitle}}</span>
            <span v-else slot="title">{{itemChild.menuTitle}}</span>
<!--            <a-menu-item v-for="(itemChildTwo,indexChildTwo) in itemChild.child" :key="'subthird' + indexChild" v-if="itemChildTwo.hasChild">-->
<!--              &lt;!&ndash;            {{itemChild.menuTile}}&ndash;&gt;-->
<!--              <span>{{itemChild.menuTitle}}</span>-->
<!--            </a-menu-item>-->
          </component>
        </component>
<!--          <a-menu-item v-for="(itemChild,indexChild) in item.child" v-if="!itemChild.hasChild" :key="'subsecond' + index">{{itemChild.menuTitle}}</a-menu-item>-->
<!--          <a-sub-menu key="sub88">-->
<!--            <span slot="title"><a-icon type="notification" />subnav 3</span>-->
<!--            <a-menu-item key="9">-->
<!--              option9-->
<!--            </a-menu-item>-->
<!--            <a-menu-item key="10">-->
<!--              option10-->
<!--            </a-menu-item>-->
<!--            <a-menu-item key="11">-->
<!--              option11-->
<!--            </a-menu-item>-->
<!--            <a-menu-item key="12">-->
<!--              option12-->
<!--            </a-menu-item>-->
<!--          </a-sub-menu>-->
<!--          <a-menu-item key="1">-->
<!--            option1-->
<!--          </a-menu-item>-->
<!--          <a-menu-item key="2">-->
<!--            option2-->
<!--          </a-menu-item>-->
<!--          <a-menu-item key="3">-->
<!--            option3-->
<!--          </a-menu-item>-->
<!--          <a-menu-item key="4">-->
<!--            option4-->
<!--          </a-menu-item>-->
<!--        </component>-->
<!--        <a-menu-item v-for="(item,index) in navlist" :key="'itemfirst' + index">-->
<!--          <a-icon type="user" />-->
<!--          <span>{{item.menuTile}}</span>-->
<!--        </a-menu-item>-->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import axios from "axios";
export default {

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
      navlist:[],
    };
  },
};
</script>
<style>

.logo{
  content: url("../assets/dxclogo.png");
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

