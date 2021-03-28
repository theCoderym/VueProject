import VueCookies from 'vue-cookies'
import Vue from 'vue'

Vue.use(VueCookies)
// 30天后过期
VueCookies.config('30d')
export function getLoginStatus() {
  if(VueCookies.isKey('islogin')){
    const loginString = VueCookies.get('islogin');
    if (loginString === 'true'){
      return true;
    }else {
      return false;
    }

  }else{
    VueCookies.set('islogin', '', 30);
    return false;
  }
}

export function setLoginStatus(isLogin){
  VueCookies.set('islogin', isLogin, 30);
}
