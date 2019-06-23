<template>
    <div class="order-details">
        <div class="order-content">
            <dl class="order-coontert-whole">
                <dt></dt>
                <dd>
                    <ul>
                        <li><span>开课时间：本期开始时间为 6月23日</span></li>
                        <li><span>学习方式：全程直播授课+录播回放</span></li>
                        <li><span>项目应用：12个贴近生活项目案例教学</span></li>
                        <li><span>贴心服务：助教、班主任全程跟踪辅导</span></li>
                        <li><span>品质保障：开课后24小时内无条件退款</span></li>
                    </ul>
                </dd>
              
            </dl>
            <div class="cope"><span>应付：</span><i>￥68</i></div>
        </div>
        <div class="tips">
        </div>
        <div class="order-payment" @click="btnPayment()" v-show="paymet">支付</div>
        <div class="order-payment" v-show="paymetProgress">支付中···</div>
    </div>
</template>
<script>
import CountDown from '../Common/CountDown'
import qs from 'qs'
export default {
    data () {
        return {
            openid:'',
            nicknme:'',
            paymet: true,
            paymetProgress: false

        }
    },
    components: {
        countDown: CountDown
    },
    created() {
        //禁止分享的调用
        this.share()

        //在session上拿取
        this.openid = this.openid= sessionStorage.getItem("openid")
        this.nickname= decodeURIComponent(sessionStorage.getItem("nickname"))
        if (typeof (WeixinJSBridge) == "undefined"){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
        }else{
        this.onBridgeReady();
        }
    },
    mounted() { 
    },
    methods: {
        btnPayment() {
            this.paymet = false
            this.paymetProgress = true
            // debugger
            // 支付的调取
                 this.$axios.post('/api/wxpay/to_pay/',qs.stringify({
                    openid : this.openid,
                    nickname : this.nickname,
                    total_fee : "6800",
                    body : "机器学习特训营",
                    coursename: "machine-learning_1",
                })).then(res=>{
                    if(res.data == "您已经付款，请勿重复提交订单！如状态未更新，请退出后重新进入！") {
                         alert("您已经付款，请勿重复提交订单！如状态未更新，请退出后重新进入!")
                    }else{
                        this.onBridgeReady(res.data)
                    }
                })
            
        },
        missOut() {
            this.$router.push('/details')
        },
        onBridgeReady(data){
            var that = this
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                    "appId":data.appId,     //公众号名称，由商户传入     
                    "timeStamp":data.timeStamp,         //时间戳，自1970年以来的秒数     
                    "nonceStr":data.nonceStr, //随机串     
                    "package":data.package,     
                    "signType":"MD5",         //微信签名方式：     
                    "paySign":data.paySign //微信签名 
                },
                function(res){
                    console.log(res);
                    if(res.err_msg == "get_brand_wcpay_request:ok" ){
                        that.$axios.post('/api/wxpay/queryorder/',qs.stringify({
                            ordernum : data.ordernum
                        })).then(res=>{
                            if(res.data === "SUCCESS") {
                                window.location.href="http://dmoj.greedyai.com/#/payment/"
                            }
                        }).catch(s=> {
                        })

                        // window.location.href="http://dmoj.greedyai.com/#/payment/"
                    // 使用以上方式判断前端返回,微信团队郑重提示：
                            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                    } 
                    if(res.err_msg == "get_brand_wcpay_request:fail" ){
                    // 使用以上方式判断前端返回,微信团队郑重提示：
                            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                            alert(JSON.stringify(res));
                    } 
                }
            ); 
        }
       
    }
}
</script>
<style>
.order-details {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.order-title {
    display: flex;
    align-items: center;
    width:100%;
    height:98px;
    background:rgba(244,247,253,1);
    box-shadow:0px 2px 16px 0px rgba(219,219,219,0.5);/*no*/
    }
.order-title span {
    font-size: 22px;
    text-align: center;
    line-height: 22px;
    color: rgba(155,155,155,1);
    margin: 0 20px;
}
.order-title h1 {
    width:136px;
    height:48px;
    font-size:34px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(49,49,49,1);
    line-height:48px;
    margin-left: 25px;
}
.order-content {
    width:92%;
    background:rgba(255,255,255,1);
    border-radius:12px;/*no*/
    margin-top: 0px;
    padding: 20px;
}
.order-content dt {
    width:99%;
    height:260px;
    background:url('http://psvl17qbi.bkt.clouddn.com/%E8%AF%BE%E7%A8%8B1.png');
    background-size: 100% 100%;
    border-radius:12px;/*no*/
    margin-right: 21px;
    margin-bottom:10px;
}
.order-content dd {
    display: flex;
    flex-direction: column;
}
.order-coontert-whole {
    display: flex;
    flex-direction: column;
}
.order-coontert-whole li {
    margin-left:30px;
    margin-top:10px;
    list-style: disc;
    color: #532995;
    
}
.order-coontert-whole li span {
    color: black;
}
.timesp {
    font-size: 28px;
    font-weight: bold;
}
.cope {
    height: 78px;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    margin-top: 33px;
    text-align: right;
    line-height: 78px;
    padding-right: 20px
}
.cope span {
    font-size:24px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(107,107,107,1);
    line-height:33px;
    margin-left: 70px
}
.cope i {
    font-size:34px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,67,67,1);
    line-height:48px;
}
.order-payment {
    width:400px;
    height:80px;
    background:rgba(19,70,255,1);
    border-radius:12px;/*no*/
    font-size: 30px;
    color: #FFF;
    text-align: center;
    line-height: 80px;
    margin-top: 150px;
}
</style>