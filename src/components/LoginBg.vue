<template>
  <div class="loginbg">
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
.loginbg{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(../assets/images/login/login-bg.jpg)no-repeat;
  background-size: 100% auto;
  ul{
    float: right;
    padding: 30px 0 20px;
    margin-left: 20px;
    li{
      float: left;
      line-height: 50px;
      width: 120px;
      text-align: center;
      &:hover{
        a{
          color: $blueColor;
          &:after{
            width: 100%;
          }
        }
      }
    }
    a{
      display: inline-block;
      transition: all 0.3s;
      position: relative;
      &:after{
        content: "";
        display: block;
        position: absolute;
        bottom: 8px;
        width: 0;
        height: 2px;
        background: $blueColor;
        transition: all 0.3s;
      }
    }
    .active{
      color: $blueColor;
      &:after{
        width: 100%;
      }
    }
  }
}
</style>
