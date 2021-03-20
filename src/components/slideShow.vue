<template>
  <div>
  <div>hello world {{x}}</div>
  <ant-button>提交</ant-button>
  </div>
</template>

<script>
import {Button} from 'ant-design-vue'
import Vue from 'vue'
Vue.use(Button)
export default {
  name: "slideShow",
  components:{
    AntButton:Button,
  },
  data(){
    return {
      x:1
    }
  }
}
</script>

<style scoped>
.slide-trans-enter-active{
  transition: all .5s;
}

.slide-trans-enter{
  transform: translateX(900px);
}

.slide-trans-old-leave-active{
  transition: all .5s;
}

.slide-show{
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
}

</style>
