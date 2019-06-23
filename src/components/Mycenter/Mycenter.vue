<template>
    <div class="myCenter" >
        <!-- 遮罩层 -->
        <div class="mask" v-show="mask"></div>
        <div class="myCenter-header">
            <div><img src="http://psvl17qbi.bkt.clouddn.com/%E6%A4%AD%E5%9C%86%E5%BD%A2.png" alt=""></div>
            <div class="head-portrait"><img v-bind:src="iconurl" alt=""></div>
        </div>
        <div class="record">
            <dl class="record-left">
                <dt>成就</dt>
                <dd>0</dd>
            </dl>
            <dl class="record-right">
                <dt>课程门数</dt>
                <dd v-show="nums">0</dd>
                <dd v-show="num">1</dd>
            </dl>
        </div>
        <div class="myOrder styleList" @click="eject()"><span><img src="http://psvl17qbi.bkt.clouddn.com/%E8%AE%A2%E5%8D%95.png" alt=""></span><i>我的课程</i></div>
        <div class="myAssistant styleList" @click="myAssistantEject()"><span><img src="http://psvl17qbi.bkt.clouddn.com/%E8%80%81%E5%B8%88.png" alt=""></span><i>我的客服</i></div>
        <!-- 弹出框 -->
        <div class="myOrder-eject" v-if="bug">
             <div class="textcon" v-show="contents">
                <dl class="eject-content" >
                    <p>你还未购买！</p>
                </dl>
            </div>
            <div v-show="contentsS" @click="btnToDetails()">
                <dl class="eject-content">
                    <dt></dt>
                    <dd>机器学习特训营</dd>
                </dl>
            </div>
            <div class="close-eject" @click="closeEject()">X</div>
        </div>
        <div class="myAssistant-eject" v-if="WX">
            <div class="close-eject" @click="myAssistantcloseEject()">X</div>
            <img class="KF" src="../../assets/img/KF.jpg" alt="">
            <img class="AI" src="../../assets/img/AI.png" alt="">
        </div>
        <Menu></Menu>
    </div>
</template>
<script>
import Menu from '../Menu/Menu'
import qs from 'qs'
export default {
    data () {
        return {
            bug: false,
            WX: false,
            mask: false,
            iconurl:'',
            num : false,
            nums : true,
            contents:  true,
            contentsS: false
        }
    },
    components: {
        Menu: Menu
    },
    created() {
    this.iconurl = decodeURIComponent(sessionStorage.getItem("iconurl"))
    this.openid= sessionStorage.getItem("openid")
    //禁止分享的调用
    this.share()
    //是否购买 显示的课程
    this.$axios.post('/api/wxpay/check_in_course/',qs.stringify({
             openid : this.openid,
             coursename: "machine-learning_1",
        })).then(res => {
            console.log(res)
            if(res.data >0) {
                this.num= true
                this.nums= false
                this.contents = false
                this.contentsS = true
            }else{
                this.num= false
                this.nums= true
                this.contents = true
                this.contentsS = false
            }
        })
    },
    mounted() {
    },
    methods: {
        eject() {
            this.bug = !this.bug
            this.mask = !this.mask
        },
        closeEject() {
            this.bug = !this.bug
            this.mask = !this.mask
        },
        myAssistantEject() {
            this.WX = !this.WX
            this.mask = !this.mask
        },
        myAssistantcloseEject() {
            this.WX = !this.WX
            this.mask = !this.mask
        },
        btnToDetails() {
            this.$router.push('/details')
        }
    }
}
</script>
<style>
.KF {
    border-radius: 12px;/*no*/
}
.AI {
    width: 195px;
    height: 195px;
    position: absolute;
    left: 210px;
    top: 240px;
    border-radius: 15px;/*no*/
}
.textcon {
    font-size: 40px;
    margin-top: 60px;
    margin-left: 150px;
}
.textcon p {
    text-align: center;
}
.myCenter {
    position: relative;
}
.myCenter-header {
    font-size: 0;
    width:100%;
    height:60%;
    border-radius:0px 0px 30px 30px;/*no*/
    position: relative;
}
.myCenter-header img {
    width: 100%;
    height: 100%;
}
.head-portrait {
    width:160px;
    height:160px;
    background:url('http://psvl17qbi.bkt.clouddn.com/tou.png');
    background-size: 100% 100%;
    position: absolute;
    left: 42%;
    top: 80%;
    border-radius: 50%;
}
.record {
    /* width:750px; */
    height:191px;
    background:rgba(255,255,255,1);
    display: flex;
    justify-content:space-between;
    align-items:center;
    text-align: center;
}
.record-left {
    width: 50%;
}
.record-right {
    width: 50%;
}
.record dt {
    font-size: 22px;
    color: #616161;
    padding-bottom: 20px;
}
.record dd {
    font-size: 34px;
    color: #212121;
}
.styleList {
    display: flex;
    justify-content:left;   
    align-items: center;
    height:88px;
    background:rgba(244,247,253,1);
    padding-left: 20px;
    box-shadow:0px -1px 0px 0px rgba(222,224,229,1);/*no*/
    border-bottom: 1px solid #DEE0E5;/*no*/
}
.styleList span img {
    width: 30px;
}
.styleList span {
    display: inline-block;
    width:62px;
    height:62px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:rgba(220,226,255,1);
    border-radius:8px;/*no*/
}
.styleList i {
    /* width:136px; */
    height:48px;
    font-size:34px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(33,33,33,1);
    line-height:48px;
    margin-left: 30px;
}
.myOrder-eject {
    width:610px;
    height:215px;
    background:rgba(255,255,255,1);
    border-radius:8px;/*no*/
    position: absolute;
    left: 10%;
    top: 55%;
    z-index: 110;
}
.close-eject {
    width:50px;
    height:50px;
    background:rgba(19,70,255,1);
    border-radius: 50%;
    position: absolute;
    right: -25px;
    top: -25px;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    color: #FFFF;
    font-weight: bolder;
}
.myAssistant-eject {
    z-index: 110;
    display: flex;
    justify-content: center;
    width: 610px;
    height: 522px;
    background-size: 100% 100%;
    position: absolute;
    left: 10%;
    top: 55%;
    border-radius: 20px;/*no*/
}
.myAssistant-eject .KF {
    width: 100%;
    height: 100%;
}
.eject-content {
    display: flex;
    align-items: center;
    margin: 31px 0 0 25px;
}
.eject-content dt {
    width:175px;
    height:160px;
    background:url('http://psvl17qbi.bkt.clouddn.com/%E8%AF%BE%E7%A8%8B%E5%90%8D.png');
    background-size: 100% 100%;
    border-radius:12px;/*no*/
    margin-right: 15px;
}
.eject-content dd {
    font-size:24px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(49,49,49,1);
    line-height:33px;
}
.mask {
    width: 100%;
    height: 1334px;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 101;
}
.code {
    width:195px;
    height:196px;
    border-radius:22px;/*no*/
    position: absolute;
    top: 239px;
    left: 210px;
}
.head-portrait img{
    border-radius: 50%;
}
</style>