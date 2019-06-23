<template>
    <div>
  <div v-show="show">
    <div class="payment-box_1">
      <div class="payment-notice">
        <p class="payment-notice-one">扫描二维码</p>
        <p class="payment-notice-two"><span></span>与您的专属学习顾问聊一下吧</p>
        <p class="payment-notice-three">微信：greedytech002</p>
      </div>
      <div class="box-code">
        <img class="figure" src="http://psvl17qbi.bkt.clouddn.com/%E4%BA%BA%E7%89%A9.png" alt="">
        <img class="bitmap" src="http://psvl17qbi.bkt.clouddn.com/%E4%BD%8D%E5%9B%BE%E5%A4%8D%E5%88%B6.png" alt="">
        <img class="frame" src="http://psvl17qbi.bkt.clouddn.com/%E7%BC%96%E7%BB%84%203.png" alt="">
        <img class="code" src="../../assets/img/greedy.jpg" alt="">
      </div>
    </div>
  </div>

  <!-- 2 -->
  <div v-show="hide">
    <div class="payment-box_1">
      <div class="payment-notice">
        <p class="payment-notice-one">扫描二维码</p>
        <p class="payment-notice-two"><span></span>与您的专属学习顾问聊一下吧</p>
        <p class="payment-notice-three">微信：tx900180</p>
      </div>
      <div class="box-code">
        <img class="figure" src="http://psvl17qbi.bkt.clouddn.com/%E4%BA%BA%E7%89%A9.png" alt="">
        <img class="bitmap" src="http://psvl17qbi.bkt.clouddn.com/%E4%BD%8D%E5%9B%BE%E5%A4%8D%E5%88%B6.png" alt="">
        <img class="frame" src="http://psvl17qbi.bkt.clouddn.com/%E7%BC%96%E7%BB%84%203.png" alt="">
        <img class="code" src="../../assets/img/tx.jpg" alt="">
      </div>
    </div>
  </div>
</div>
</template>
<script>
import qs from 'qs' 
export default {
    data () {
        return {
            show:'',
            hide:'',
            openid: '',
            thacherA:0,
            teacherB:0
        }
    },
    created() {
        var that= this
        this.openid = this.GetUrlParam("openid")
        //禁止分享调用
        this.share()
        //随机数
        this.id = this.Elements(['1','1','2','1','2','1','1','2','1','1'], 1)
        if(this.id[0]==="1") {
            this.teachername = "teacherA"
           
        }else if(this.id[0] ==="2"){
            this.teachername = "teacherB"
        }
        that.$axios.post('/api/wxpay/addteachernum/',qs.stringify({
            teachername: this.teachername,
            openid: this.openid
        })).then(res => {
            if(res.data == "teacherA") {
                this.show = true
                this.hide = false
            }else{
                this.show =false,
                this.hide =true
            }    
        })

    },
    mounted() {
        
    },
    methods: {
        Elements(arr, count) {
            var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
            while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
            }   
        return shuffled.slice(min); 
        },
        GetUrlParam(paraName) {
　　　　    var url = document.location.toString();
// 　　　　 var url = "http://dmoj.greedyai.com/#/?openid=oi9Ra1eOG3DqF2ym0NxGe4kVcJhP&iconurl=http%3A%2F%2Fthirdwx.qlogo.cn%2Fmmopen%2Fvi_32%2FdXJdibYFFIvgUhzsAQniaYWuTzhu3WKDUic4dpmyUmgVfUocwediav9C3R7hD7dlGW5yUXs7bM7kf0Lsm02UAJbkLw%2F132&nickname=%E9%9D%9E%E7%94%B2%E5%8D%B3%E4%B8%81";
            var arrObj = url.split("?");
　　　　    if (arrObj.length > 1) {
    　　　　　　var arrPara = arrObj[1].split("&");
    　　　　　　var arr;
　　　　　　    for (var i = 0; i < arrPara.length; i++) {
　　　　　　　　    arr = arrPara[i].split("=");
　　　　　　　　    if (arr != null && arr[0] == paraName) {
　　　　　　　　　　return arr[1];
　　　　　　　　    }
　　　　　　    }
　　　　　　    return "";
　　　　    }else {
    　　　　　　return "";
　　　　    }
        }
    }
}
</script>
<style>
.payment-notice-three {
    height:59px;
    font-size:42px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:59px;
    margin: 20px 0 29px 045px; 
}
.payment-box_1 {
    width: 100%;
    height: 1334px;
    background: url('http://psvl17qbi.bkt.clouddn.com/%E8%83%8C%E6%99%AF.png');
    background-size: 750px 1314px;
    position: relative;
}
.payment-notice {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.payment-notice-one {
    width:504px;
    height:59px;
    font-size:42px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:59px;
    margin: 120px 0 29px -30px;
}
.payment-notice-two {
    height:59px;
    font-size:42px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:59px;
}
.payment-notice-two span {
    color: #FFF142;
}
.figure  {
    width: 251px;
    position: absolute;
    left: 125px;
    top: 353px;
}
.bitmap {
    width: 124px;
    position: absolute;
    right: 144px;
    top: 409px;
}
.frame {
    width: 670px;
    position: absolute;
    top: 550px;
    left: 42px;
}
.code {
    width:480px;
    height:483px;
    border-radius:22px;/*no*/
    position: absolute;
    top: 620px;
    left: 143px;
}
</style>