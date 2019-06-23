<template>
    <div class="case">
        <div  class="home-box" @click="btnDetails">
            <dl class="curriculum-list">
                <dt class="curriculum-cover cover-one"></dt>
                <dd class="curriculum-countdown">
                    <p class="countdown-title">插班倒计时:<span class="colorT"><i>68</i>元仅限前<i>100</i>名</span></p>
                    <div class="positions">
                        <p><countDown/></p>
                        <p class="surplus">剩余名额：<span>{{numPeople}}</span>人</p>
                    </div>
                </dd>
            </dl>
        </div>
        <div  class="home-box">
            <dl class="curriculum-list curriculum-list-lock">
                <dt class="curriculum-cover cover-two">
                    <img src="http://psvl17qbi.bkt.clouddn.com/%E9%94%81%201.png" alt="">
                </dt>
                <dd class="curriculum-countdown">
                    <p class="soon"><span>即将上线</span><span>敬请期待</span></p>
                </dd>
            </dl>
        </div>
        <div  class="home-box">
            <dl class="curriculum-list curriculum-list-lock">
                <dt class="curriculum-cover cover-three">
                    <img src="http://psvl17qbi.bkt.clouddn.com/%E9%94%81%201.png" alt="">
                </dt>
                <dd class="curriculum-countdown">
                    <i class="soon"><span>即将上线</span><span>敬请期待</span></i>
                </dd>
            </dl>
        </div>
        <Menu></Menu>
    </div>
</template>
<script>
import Menu from '../Menu/Menu'
import CountDown from '../Common/CountDown'
import qs from 'qs'
export default {
    data() {
        return {
            openid: '',
            iconurl: '',
            nickname: '',
            numPeople: '3'
        }
    },
    components:{
        Menu: Menu,
        countDown: CountDown
    },
    created () {
        //判断session是否有数据
        // console.log(sessionStorage.getItem("openid"))
        if(sessionStorage.getItem("openid") == null) {
            sessionStorage.setItem("openid",this.GetUrlParam("openid"))
            sessionStorage.setItem("iconurl",this.GetUrlParam("iconurl"))
            sessionStorage.setItem("nickname", this.GetUrlParam("nickname"))
        }else{
        }
        //获取购买的次数
        this.$axios.post('/api/wxpay/count_course_num/',qs.stringify({
             coursename: "machine-learning_1"
        })).then(res => {
            console.log(res.data)
            this.numPeople =  71-Math.floor(res.data/2);
            if(this.numPeople <=10) {
                this.numPeople = 3
            }
        })
        //进入页面的次数
        this.$axios.post('/api/wxpay/addpagenum/',qs.stringify({
             pageid: "1"
        })).then(res => {
           
        })
        //禁止分享的调用
        this.share()
    },
    mounted() {  
    },
    methods:{
        //详情的跳转
        btnDetails(){
            this.$router.push('/details')
        },
　　　　 GetUrlParam(paraName) {
　　　　    var url = document.location.toString();
        // var url = "http://dmoj.greedyai.com/#/?openid=oi9Ra1eOG3DqF2ym0NxGe4kVcJhI&iconurl=http%3A%2F%2Fthirdwx.qlogo.cn%2Fmmopen%2Fvi_32%2FdXJdibYFFIvgUhzsAQniaYWuTzhu3WKDUic4dpmyUmgVfUocwediav9C3R7hD7dlGW5yUXs7bM7kf0Lsm02UAJbkLw%2F132&nickname=%E9%9D%9E%E7%94%B2%E5%8D%B3%E4%B8%81";
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
.colorT i {
    color: red;
    font-weight: bolder;
}
.colorT {
    font-size: 26px;
    margin-left: 43%;
    color:rgba(135,135,135,1);
}
.case {
    display: flex;
    flex-direction: column;
}
.home-box {
    /* width: 670px; */
    height: 312px; 
    padding: 30px 20px;
    margin-bottom: 30px; 
}
.curriculum-cover{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:270px;
    border-radius:20px 20px 0px 0px; /*no*/
}
.cover-one {
    background:url('http://psvl17qbi.bkt.clouddn.com/%E8%AF%BE%E7%A8%8B1.png');
    background-size: 100% 100%;
}
.cover-two {
    background:url('http://psvl17qbi.bkt.clouddn.com/%E8%AF%BE%E7%A8%8B2.png');
    background-size: 100% 100%;
    position: relative;
}
.cover-two img,.cover-three img{
    width: 74px;
    height: 94px;
    position: absolute;
    left: 8%;
    top: 88px;
}
.cover-three {
    background:url('http://psvl17qbi.bkt.clouddn.com/%E8%AF%BE%E7%A8%8B3.png');
    background-size: 100% 100%; 
    position: relative;
}
.curriculum-countdown{
    width:100%;
    height:102px;
    background:rgba(255,255,255,1);
    box-shadow:0px 4px 16px 0px rgba(218,218,218,0.5);/*no*/
    border-radius:0px 0px 20px 20px; /*no*/
    position: relative;
}
.countdown-title{
    /* width:120px; */
    height:28px;
    font-size:26px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(135,135,135,1);
    line-height:28px;
    margin:0 20px;
    padding: 15px 0 0 0 ;
}
.curriculum-time>i{
    display: inline-block;
    width:22px;
    height:30px;
    font-size:22px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(116,116,116,1);
    line-height:30px;
}
.curriculum-time>span{
    display: inline-block;
    width:64px;
    height:36px;
    background:rgba(246,236,242,1);
    border-radius:18px;/*no*/
    font-size: 24px;
    text-align: center;
    color: #954465;
    margin:0 10px;
}
.surplus{
    height:36px;
    font-size:24px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(81,81,81,1);
    margin-left: 4%;
    padding-bottom: 15px;
}
.surplus-time{
    display:inline-block;
    width:48px;
    height:48px;
    background:rgba(236,241,246,1);
    border-radius:24px;/*no*/
    margin-bottom: 11px;
    font-size:28px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(27,71,115,1);
    line-height:48px;
    text-align: center
}
.positions {
    height: 40px;
    display: flex;
    margin-left: 20px;
    margin-top: 8px
}
.surplus span {
    display:inline-block;
    width:48px;
    height:48px;
    background:rgba(236,241,246,1);
    border-radius:24px;/*no*/
    margin-bottom: 11px;
    font-size:28px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(27,71,115,1);
    line-height:48px;
    text-align: center
}
.soon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 260px;
    height: 48px;
    font-size: 24px;
    color: #1b4773;
    background: #ecf1f6;
    border-radius: 24px;/*no*/
    position: absolute;
    left: 35%;
    top: 30%;
}
.soon span {
    margin: 0 10px;
}
</style>