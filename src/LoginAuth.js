import VueCookies from 'vue-cookies'
import Vue from 'vue'

Vue.use(VueCookies)
// 30天后过期
VueCookies.config('30d')
export function getLoginStatus() {
  if(VueCookies.isKey('islogin')){
    return VueCookies.get('islogin');
  }else{
    VueCookies.set('islogin', false, 30);
    return false;
  }
}

export function setLoginStatus(isLogin){
  VueCookies.set('islogin', isLogin, 30);
}
