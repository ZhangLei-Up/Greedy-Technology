// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//配置mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//配置自己的css
import './assets/css/global.css'
Vue.use(MintUI)

Vue.prototype.share = function () {
  function onBridgeReady() {
    WeixinJSBridge.call('hideOptionMenu');
  } 	
    if (typeof WeixinJSBridge == "undefined") {	
      if (document.addEventListener) {
              document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else if (document.attachEvent) {	
          document.attachEvent('WeixinJSBridgeReady', onBridgeReady);	
          document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }	
    } else {
    onBridgeReady();
    }
}

//px2rem插件
import 'lib-flexible/flexible.js'

//配置axios
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.interceptors.request
Vue.prototype.$axios = axios

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
//路由发生变化修改页面title
  if(to.meta.title) {
    document.title = to.meta.title
  } 
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
