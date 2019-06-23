<template>
    <div class="details-box">
        <div class="details-cover"></div>
        <div class="introduce">
            <h3>2位硅谷博士<span class="solids">·</span>5周直播教学<span class="solids">·</span>12个项目实操</h3>
            <div class="open-countdown">
                <h4>插班倒计时：</h4>
                 <countDown/>
            </div>
            <p class="tipS"><i>68</i>元仅限前<i>100</i>名 <span class="quota">剩余名额：<span class="nums">{{numPeople}}</span>人</span></p>
        </div>

        <!-- 详情页内容 -->
        <div class="content-details">
            <!-- <img src="../../assets/img/2.png" alt=""> -->
            <div class="details-title"><p>核心知识</p></div>
            <div class="rectangle"></div>
            <div class="branchs"><p></p></div>
            <div class="knowledge-list">
                <ul>
                    <li v-for="(item,index) in knowledgeList" :key="index">{{item}}</li>
                </ul>
            </div>
            <div class="practical">
                <p>12个实操项目</p>
            </div>
            <div class="p_border_sty"><span></span></div>
            <div class="practical-list">
                <ul>
                    <li v-for="(item,index) in practicalList" :key="index">{{item}}</li>
                </ul>
            </div>
            <div class="explain"><img src="../../assets/img/3.png" alt=""></div>
            <div class="times">
                <div class="times-title">学习时间</div>
                <div class="title-con">
                    <p>开课时间：2019年6月23日</p>
                    <p>周三直播：20:00-21:30</p>
                    <p>周日直播：13:00-14:30</p>
                </div>  
            </div>
             <div class="problem">
                <div class="times-title mg">常见问题</div>
                <div class="problem-list">
                    <div class="problem-list-to">
                        <dl>
                            <dt><span></span>1/担心课程质量或者对课程不满意怎么办？</dt>
                            <dd>开课后24小时内无理由退款，午任何后顾之忧！</dd>
                        </dl>
                        <dl>
                            <dt><span></span>2/平时工作忙或者学校课程紧，能顺利学完嘛？</dt>
                            <dd>课程采用直接教学+录播回放+作业练习+老师辅导的教学方式，可随时复习巩固。</dd>
                        </dl>
                        <dl>
                            <dt><span></span>3/学习过程中遇到不懂的烦恼或者遇到解决不了的问题怎么办？</dt>
                            <dd>VIP班级群，班主任，助教，导师全天在线，为您服务。</dd>
                        </dl>
                        <dl>
                            <dt><span></span>4/课程里可以学到真正的技术嘛？</dt>
                            <dd>通过12大实际案例教学，学完可针对不同行业的问题快速策划相应的机器学习解决方案。</dd>
                        </dl>
                        <dl>
                            <dt><span></span>5/课程可以学习多久啊？</dt>
                            <dd>直播教学5周，答疑辅导5周。</dd>
                        </dl>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="footer-details">
            <div class="price" v-show="btnHide">
                <p class="activity-price">￥活动价<span></span></p>
                <p class="cost-price"><span>￥68</span><i>￥1398</i></p>
            </div>
            <button class="btn" @click="btnShop()" v-show="btnHide">购买</button>
            <button class="btn btnClick" @click="btnInfo()" v-show="btnShow">开始学习</button>
        </div>
    </div>
</template>
<script>
import CountDown from '../Common/CountDown'
import qs from 'qs' 
export default {
    data () {
        return {
            btnHide: true,
            btnShow: false,
            numPeople: '3',
            knowledgeList: [
                "K-NN 最近邻", 
                "线性回归", 
                "逻辑回归", 
                "凸优化", 
                "朴素贝叶斯",
                "支持向量机",
                "决策树",
                "随机森林",
                "GBDT",
                "XGBoost",
                "矩阵分解",
                "K-Means",
                "GMM",
                "主题模型",
                "MCMC"            
            ],
            practicalList: [
                "1、通过投放广告的金额预测销售额",
                "2、预测市场中二手车的价格",
                "3、识别图像中的数字",
                "4、预测A股哪些股票会涨",
                "5、预测是否银行客户会开设定期存款帐户",
                "6、把新闻按照不同主题做分类",
                "7、基于SVM的人脸识别引擎",
                "8、预测哪些员工可能会离职",
                "9、搭建金融评分卡模型做风险控制",
                "10、搭建电商商品的推荐系统",
                "11、通过用户分群优化营销流程",
                "12、搭建情感分析系统"
            ]
        }
    },
    components: {
        countDown: CountDown
    },
    mounted() {
        this.$axios.post('/api/wxpay/addpagenum/',qs.stringify({
             pageid: "2"
        })).then(res => {
           
        })
     
    },
    created() {  
        // alert(location.href) 
        if( sessionStorage.getItem("openid") == null || sessionStorage.getItem("openid") == '') {
            sessionStorage.setItem("openid",this.GetUrlParam("openid"))
            sessionStorage.setItem("iconurl",this.GetUrlParam("iconurl"))
            sessionStorage.setItem("nickname", this.GetUrlParam("nickname"))
        }else{
        }
        this.openid= sessionStorage.getItem("openid")
        this.nickname= decodeURIComponent(sessionStorage.getItem("nickname"))

        //判断是否购买及显示的状态
        this.$axios.post('/api/wxpay/check_in_course/',qs.stringify({
             openid : this.openid,
             coursename: "machine-learning_1",
        })).then(res => {
            console.log(res)
            if(res.data >0) {
                this.btnHide= false
                this.btnShow= true
            }else{
                this.btnHide= true
                this.btnShow= false
            }
        })
        //购买人数的统计
        this.$axios.post('/api/wxpay/count_course_num/',qs.stringify({
            coursename: "machine-learning_1"
        })).then(res => {
            console.log(res)
            this.numPeople = 71-Math.floor(res.data/2);
            if(this.numPeople <=10) {
                this.numPeople = 3
            }
        })
        //禁止分享的调用
        this.share()
    },
    methods: {
        //购买跳转订单
        btnShop (){
            this.$router.push('/order')
        },
        //开始学习跳转到我的助教
        btnInfo() {
            this.$router.push('/payment')
            this.id = this.Elements(['1','2'], 1)
            // console.log(this.id)
            if(this.id[0]==="1") {
                this.teachername = "zhujiaoA"
            }else if(this.id[0] ==="2"){
                this.teachername = "zhujiaoB"
            }
        // that.$axios.post('/api/wxpay/addteachernum/',qs.stringify({
        //     teachername: this.teachername,
        //     openid: this.openid
        // })).then(res => {
        //     if(res.data == "zhujiaoA") {
        //          this.$router.push('/payment')
        //     }else{
        //          this.$router.push('/payments')
        //     }    
        // })
        },
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
// 　　　　 var url = "http://dmoj.greedyai.com/#/?openid=oi9Ra1eOG3DqF2ym0NxGe4kVcJhI&iconurl=http%3A%2F%2Fthirdwx.qlogo.cn%2Fmmopen%2Fvi_32%2FdXJdibYFFIvgUhzsAQniaYWuTzhu3WKDUic4dpmyUmgVfUocwediav9C3R7hD7dlGW5yUXs7bM7kf0Lsm02UAJbkLw%2F132&nickname=%E9%9D%9E%E7%94%B2%E5%8D%B3%E4%B8%81";
            var arrObj = url.split("?");
            // console.log(arrObj[0])
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
.explain {
    width: 98%;
}
.explain img {
    width: 98%;
}
.problem-list-to dl dd {
    color: #000;
    margin-left: 28px;
    line-height: 40px;
}
.problem-list-to dl dt span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #f35852;
    margin-right: 10px;
}
.problem-list-to dl dt {
    color: #f35852;
    margin-bottom: 10px;
}
.problem-list-to dl {
    font-size: 20px;
    margin-left: 12px; 
    margin-bottom: 40px;
}
.problem-list-to {
    width: 100%;
    height: 100%;
    background: #fff;
    border: 5px solid #00008b;/*no*/
    position: absolute;
    transform: rotate(-8deg);
    border-radius: 15px;/*no*/
    padding-top: 50px;
    left: 0;
    top: 0; 
}
.mg {
    margin-bottom: 55px;
}
.problem-list {
    width: 98%;
    height: 735px;
    background: #f68080;
    transform: rotate(8deg);
    position: relative;
    border-radius: 15px;/*no*/
}
.problem {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1200px;
}
.title-con p {
    margin-bottom: 10px;
}
.title-con {
    width:669px;
    height:216px;
    border:5px solid rgba(5,0,142,1);
    border-radius:20px;
    font-size: 36px;
    margin-top: 53px;
    text-align: center;
    padding-top: 60px;
    margin-bottom: 75px;
}
.times {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 425px;
}
.times-title {
    width:472px;
    height:88px;
    background: #183186;
    color: #fff;
    font-size: 48px;
    line-height: 88px;
    text-align: center;
    border-radius: 10px;/*no*/
}
.practical {
    width: 100%;
}
.practical-list {
    width: 90%;
}
.practical-list li {
    width: 95%;
    height: 58px;
    line-height: 58px;
    font-size: 26px;
    color: #56555A;
    background: #f5f5ff;
    margin-bottom: 8px;
    padding-left: 35px;
}
.practical-list ul {
    width: 100%;
    margin-bottom: 30px;
}
.p_border_sty {
    display: flex;
    justify-content: center;
    width: 95px;
    height: 50px;
    border-top: 8px solid #EC056B;
    margin-top: 10px;
    margin-left: -45%;
}
.p_border_sty span {
    display: block;
    width: 5px;
    height: 35px;
    background: #EC056B;
    margin-top: 7px;
}
.practical p {
    font-size: 30px;
    color: #0F3AD6;
    margin-left: 58px;
    margin-top: 40px;
    font-weight: bolder;
}
.practical {
    width: 90%;
    height: 74px;
    background: url('../../assets/img/text-dec.png') no-repeat;
    background-size: 48px 74px;
}

.knowledge-list ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 25px;
}
.knowledge-list ul li {
    width: 25%;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    font-weight: 400;
    color: #56555A;
    margin-top: 10px;
    margin-right: 10px;
    background: #f5f5ff;
    text-align: center;
}
.branchs p {
    width: 6px;
    height: 43px;
    background: #EC056B;
}
.branchs {
    display: flex;
    justify-content: center;
    width:400px;
    height:43px;
    border: 5px solid #EC056B;
    border-bottom: none;
    margin-bottom: 5px;
}
.rectangle {
    width:62px;
    height:6px;
    background: #EC056B;
    margin-bottom: 30px;
}
.details-title p {
    margin: 30px 0;
    font-size: 30px;
    color: #0F3AD6;
    font-weight: bolder;
}
.tipS {
    margin-right: 20px;
    font-size: 26px;
    color:rgba(81,81,81,1);

}
.tipS i {
    color: red;
    font-weight: bolder;
    /* height: 28px; */
    background:rgba(236,241,246,1);    
    border-radius: 20px;/*no*/
    padding: 8px;
    text-align: center;
    margin: 0 10px;
}
.solids {
    font-size: 30px;
}
.details-box {
    overflow-y:scroll;
    width: 94%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
}
.details-cover {
    margin-top: 20px;
    width:100%;
    height:450px;
    background:url('http://psvl17qbi.bkt.clouddn.com/details.png');
    background-size: 100% 100%;
    border-radius:20px; /*no*/
    margin-bottom: 20px;
}  
.introduce {
    display: flex;
    flex-direction: column; 
    align-items: center;
    width:100%;
    height:330px;
    background:rgba(255,255,255,1);
    box-shadow:0px 4px 16px 0px rgba(218,218,218,0.5);/*no*/
    border-radius:20px;/*no*/
    margin-bottom: 20px;
}  
.introduce h3 {
    height:40px;
    font-size:30px;
    font-family:PingFangSC-Regular;
    font-weight:bolder;
    color:#0f3ad6;
    line-height:40px;
    margin: 31px 0 20px 0;
}
.open-countdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    width:558px;
    height:121px;
    background:rgba(243,243,243,1);
    border-radius:8px;/*no*/
    margin-bottom: 30px;
}
.open-countdown h4 {
    height:28px;
    font-size:20px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(135,135,135,1);
    line-height:28px;
    margin: 20px 0;
}
.open-countdown p span {
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
.open-countdown p i {
    display: inline-block;
    width:22px;
    height:30px;
    font-size:22px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(116,116,116,1);
    line-height:30px;
}
.quota {
    height:33px;
    font-size:26px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(81,81,81,1);
    line-height:33px;
    margin-left: 60px;
}
.quota span{
    display: inline-block;
    width:48px;
    height:48px;
    background:rgba(236,241,246,1);
    border-radius:24px;/*no*/
    text-align: center;
    line-height: 48px;
    margin: 0 10px;
    color: red;
    font-weight: bolder;
}
.content-details {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    background:rgba(255,255,255,1);
    border-radius: 20px ;/*no*/
    position: relative;
    overflow: hidden;
    
}

.content-details img {
    width: 100%;
}
.footer-details {
    border-top: 1px solid #CECECE; /*no*/
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 1px;
    background:rgba(255,255,255,1);
    width: 100%;
    height: 98px;
    box-shadow:0px -2px 0px 0px rgba(206,206,206,0.5); /*no*/
    display: flex;
    justify-content: space-between;
}
.btn {
    width:160px;
    height:98px;
    background:rgba(83,119,255,1);
    border: none;
    font-size: 34px;
    color: #FFFFFF;
}
.btnClick {
    width: 100%;
    height:98px;
    background:rgba(83,119,255,1);
    border: none;
    font-size: 34px;
    color: #FFFFFF;
}
.price {
    display: flex;
    width:310px;
    height:69px;
    background:rgba(207,225,243,1);
    border-radius:4px;/*no*/
    margin:15px 0 16px 24px;
    border:1px solid rgba(255,255,255,1);/*no*/
}
.activity-price {
    width:100px;
    height:69px;
    background:#5377FF;
    border-radius:4px 4px 0px 0px;
    font-size:21px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:29px;
    text-align: center;
    line-height: 69px;
    position: relative;
}
.activity-price span {
    display:block; 
    width:0; 
    height:0; 
    border-width:10px 0 10px 10px; 
    border-style:solid; 
    border-color:transparent transparent transparent rgba(83,119,255,1);
    position:absolute; 
    top:38%; 
    right: -10px;
}
.cost-price span {
    height:62px;
    font-size:44px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(83,119,255,1);
    line-height:62px;
    margin-left: 11px;
}
.cost-price i {
    height:30px;
    font-size:22px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(147,172,198,1);
    line-height:30px;
    text-decoration:line-through;
}
</style>