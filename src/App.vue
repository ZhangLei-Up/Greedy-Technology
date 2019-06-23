<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

      //禁止在网页打开，只能微信中打开
      // var ua = navigator.userAgent.toLowerCase();   
      // var isWeixin = ua.indexOf('micromessenger') != -1;    
      //    if (!isWeixin) {
      //           window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=888"       
      //    }

import Home from './components/Home/Home'
export default {
  name: 'app',
  components: {

  },
  data() {
    return {

    }
  },
  created() {

  }
}
</script>
  
<style>

</style>
