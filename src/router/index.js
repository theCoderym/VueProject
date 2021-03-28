import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '../components/Contents/HomePage'
import Form from "../components/Contents/Form";
import One from "../components/Contents/One";
import Two from "../components/Contents/Two";
import ComLib from "../components/Contents/ComLib"
import ShowForm from "../components/Contents/ShowForm";
import UploadForm from "../components/Contents/UploadForm";
import Login from "../components/Contents/Login";

Vue.use(Router)
// var islogin => (){
//
// };

// const islogin = getLoginStatus();


export default new Router({
  mode:"history",
  routes: [
    {
      path:'/',
      redirect:'/HomePage',
    },
    {
      path: '/',
      name: 'Root',
      component: HomePage


    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage,
      meta:{
        requireAuth:true,
      }

    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,

    },
    {
      path: '/Form',
      name: 'Form',
      component: Form,
      children:[
        {
          path: 'upload',
          component: UploadForm,
        },
        {
          path: 'show',
          component: ShowForm,
        }
      ]
    },
    {
      path: '/Component',
      name: 'Components',
      component: ComLib,
      children:[
        {
          path: 'one',
          component: One,
        },
        {
          path: 'two',
          component: Two,
        }
      ]
    }
  ]
})
