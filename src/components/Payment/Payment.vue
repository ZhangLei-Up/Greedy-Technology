<template>
    <div class="payment-box">
        <div class="weNum">tx900280</div>
        <div class="code-frame">
            <div class="we-code"><img src="../../assets/img/newcode.jpg" alt=""></div>
        </div>
        <div class="btn-tosty">
             <p class="sure">确定已经添加班主任!</p>
            <button class="btn-to-greedy" @click="btnToGreedy()">下一步</button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created() {
        //禁止分享调用
        this.share()
    },
    methods: {
        btnToGreedy() {
            window.location.href="https://www.greedyai.com/login?goto=https%3A//www.greedyai.com/my/course/76"
        }
    }
}
</script>
<style>
.we-code img {
    width: 100%;
    height: 100%;
    border-radius: 10px;/*no*/
}
.weNum {
    width: 32px;
    /* writing-mode:tb-rl; */
    font-size: 42px;
    color: #fff;
    position: absolute;
    left: 40%;
    top: 42%;
}
.code-frame {
    width: 350px;
    height: 350px;
    border: 8px solid #004c84;/*no*/
    border-radius: 10px;/*no*/
    background: #fff;
    position: absolute;
    left: 25%;
    top: 48%;
}
.pay-ment {
    width: 100%;
    height: 1334px;
}
.payment-box {
    width: 100%;
    height: 1334px;
    background: url('http://psvl17qbi.bkt.clouddn.com/bg-pay.jpg') no-repeat;
    background-size: 100% 1334px; 
    position: relative;
}
.btn-tosty {
    height: 60px;
    position: absolute;
    top: 77%;
    left: 33%;
    cursor: pointer;
}
.sure {
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 5px;
}
.btn-to-greedy {
    border: none;
    height: 80px;
    width: 110%;
    border-radius: 8px;
    font-size: 32px;
    background:#73abde;
    color: #fff;
    line-height: 60px;
}

</style>