<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer-nav">
      <router-link to="/home" class="footer-nav-list" exact>
        <div><img :src="curriculumUrl" alt="课程图片"></div>
        <span>课程</span>
      </router-link>
      <router-link :to="{name:'mycenter'}"  class="footer-nav-list">
        <div><img :src="myUrl" alt="我的图片"></div>
        <span>我的</span>
      </router-link>
    </div>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      curriculumUrl: require('../../assets/img/“学习”的副本 3.png'),
      myUrl: require('../../assets/img/“我 的”的副本.png'),
      seleted:''
    }
  },
  created() {
    this.myURL()
  },
  methods: {
    myURL() {
      var myUrls= this.$route.path
      if(myUrls==='/mycenter') {
        this.myUrl=require('../../assets/img/我 的.png')
        this.curriculumUrl=require('../../assets/img/学习.png')
      } 
    }
  }
}
</script>

<style>
.footer-nav{
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom:0;
  background:rgba(255,255,255,1);
  width: 100%;
  height: 98px;
  box-shadow:0px -2px 0px 0px rgba(206,206,206,0.5); /*no*/
  display: flex;
}
.footer-nav-list{
  display: flex;
  justify-content: center;
  flex: 1;
  text-align: center;
  color: #2A2D37;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  font-family:PingFangSC-Regular;
}
.footer-nav-list img{
  width: 47px;
  height: 46px;
}
.router-link-active {
  color: #5377FF;
}
</style>