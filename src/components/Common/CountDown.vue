<template>
    <div class="countDown">
        <p>
            <span>{{day}}</span><i>天</i>
            <span>{{hr}}</span><i>时</i>
            <span>{{min}}</span><i>分</i>
            <span>{{sec}}</span><i>秒</i>
            <!-- <span>{{msg}}</span> -->
        </p>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      day: 0, hr: 0, min: 0, sec: 0
      // msg: '时间已经结束'
    }
  },
  mounted: function () {
    this.countdown()
  },
  methods: {
    countdown: function () {
      // new Date(str.replace(/-/g))
      const end = Date.parse(new Date('2019-06-26'))
      const now = Date.parse(new Date())
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      setTimeout(function () {
        that.countdown()
      }, 1000)
      if(msec <= 0) {
        clearInterval(this.day=0,this.hr=0,this.min=0,this.sec=0)
      }
    }
  }
}

function countdown () {
  // 目标日期时间戳
  const end = Date.parse(new Date('2019-06-26'))
  // 当前时间戳
  const now = Date.parse(new Date())
  // 相差的毫秒数
  const msec = end - now
  // 计算时分秒数
  let day = parseInt(msec / 1000 / 60 / 60 / 24)
  let hr = parseInt(msec / 1000 / 60 / 60 % 24)
  let min = parseInt(msec / 1000 / 60 % 60)
  let sec = parseInt(msec / 1000 % 60)
  // 个位数前补零
  hr = hr > 9 ? hr : '0' + hr
  min = min > 9 ? min : '0' + min
  sec = sec > 9 ? sec : '0' + sec
  // 控制台打印
  console.log(`${day}天 ${hr}小时 ${min}分钟 ${sec}秒`)
  // 一秒后递归
  setTimeout(function () {
    countdown()
  }, 1000)
}
</script>
<style>
.countDown{
  width: 400px;
  padding-top: 5px;
}
.countDown p span {
    display: inline-block;
    width:64px;
    height:36px;
    background:rgba(246,236,242,1);
    border-radius:18px;/*no*/
    text-align: center;
    font-size:24px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(149,68,101,1);
    line-height:36px;
}   
.countDown p i {
    display: inline-block;
    width:22px;
    height:30px;
    font-size:22px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(116,116,116,1);
    line-height:30px;
}
</style>