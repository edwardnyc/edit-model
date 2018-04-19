<template>
  <div class="form-nolist">
    <img src="../assets/images/nodata.png" alt="">
    <p>暂无表单数据，请在微站内添加表单</p>
    <el-button type="primary" >添加表单</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods:{
      
    }
  }
</script>

<style lang="scss" scoped>
@import  "../assets/scss/_baseFunction";
.form-nolist{
  text-align: center;
  padding-top: 80px;
  img{
    width: 30%;
    max-width: 432px;
  }
  p{
    font-size: 14px;
    line-height: 60px;
  }
  .el-button{
    width: 30%;
  }
  .el-button--primary {
    background: #1DA2C8;
  }
}
</style>
