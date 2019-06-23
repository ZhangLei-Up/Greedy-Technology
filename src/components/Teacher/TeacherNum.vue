<template>
    <div class="num-box">
       <table border="2" width="80%" height="100%" bordercolor="cornflowerblue">
    
            <caption><h3>老师数据的统计及识别二维码的计数</h3></caption>
            <!-- <br/> -->
                <tr align="center"> 
                    <td>Total</td>
                    <td colspan="2">Teacher</td>
                    <td colspan="2">识别</td>
                </tr>
                <tr align="center" bgcolor="pink">
                    <th>总数</th>
                    <th>Teacher1</th>
                    <th>Teacher2</th>
                    <th>A</th>
                    <th>B</th>
                </tr>
                <tr align="center">
                    <td rowspan="1">{{teacher}}</td>
                    <td>{{teacherA}}</td>
                    <td>{{teacherB}}</td>
                    <td>{{A}}</td>
                    <td rowspan="4">{{B}}</td>
                </tr>
       </table>
       <br/>
       <button @click="seach()">查询</button>
    </div>
</template>
<script>
import qs from 'qs' 
export default {
    data() {
        return {
            teacher: '0',
            teacherA: '0',
            teacherB: '0',
            A: '0',
            B: '0'
        }
    },
     created() {
         this.share()
     },
     mounted() {

     },
     methods: {
         seach() {
            //  this.$axios.post('/api/wxpay/addteachernum/',qs.stringify({
            //  teachername: "teacherA"
            // })).then(res => {   
            //     this.teacherA = res.data
            // })
         }
     }
}
</script>
<style>
.num-box {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    align-items: center;
    flex-direction: column;

}
</style>