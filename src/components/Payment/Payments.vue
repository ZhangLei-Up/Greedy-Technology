<template>
    <div class="payment-box">
        <div class="weNum">greedytech004</div>
        <div class="code-frame">
            <div class="we-code"><img src="../../assets/img/newcode.jpg" alt=""></div>
        </div>
         <!-- <div class="btn-tosty">
            <button class="btn-to-greedy" disabled="disabled" @click="btnToGreedy()">确定已添加，开启学习之路！</button>
        </div> -->
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
            window.location.href="https://www.greedyai.com/my/course/62"
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
/* .btn-tosty {
    position: absolute;
    top: 73%;
    left: 20%;
}
.btn-to-greedy {
    border: none;
    height: 80px;
    width: 110%;
    border-radius: 8px;
    font-size: 32px;
    background:#73abde;
    color: #fff;
} */

</style>