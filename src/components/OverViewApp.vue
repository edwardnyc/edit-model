<style lang="scss" scoped>
@import  "../assets/scss/_baseFunction";
.overview-title {
  text-align: left;
  margin: 0 0 20px 15px;
  font-size: 16px;
}
.app {
  margin-top: 10px;
  text-align: center;
  padding: 20px 40px;
  background: #fff;

  .app-box{
    padding: 10px 0;
    display: flex;
    li {
      flex: 1;
      font-size: 12px;
      img {
        width: 74px;
        height: 74px;
      }
      p {
        margin-top: 5px;
      }
      p:last-child {
        font-family: PingFangSC-Regular;
        transform: scale(0.8333);
        color: #999;
      }
    }
  }
}
.guide {
  display: flex;
  font-size: 32.5px;
  margin-top: 10px;
  padding: 20px 50px;
  background: #fff;
  text-align: center;
  > div {
    flex: 1;
    margin-right: 20px;
    padding: 30px 0;
    background: #1DA2C8;
    color: #fff;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
<template>
  <div class="app-wrap">
    <div class="app overview-shadow">
      <div class="overview-title">常用应用</div>
      <ul class="app-box">
        <li>
          <img src="../assets/images/app-1.png" alt="">
          <p>素材库</p>
          <p>永久免费</p>
        </li>
        <li>
          <img src="../assets/images/app-2.png" alt="">
          <p>刮刮卡</p>
          <p>商务版专属</p>
        </li>
        <li>
          <img src="../assets/images/app-3.png" alt="">
          <p>砸金蛋</p>
          <p>商务版专属</p>
        </li>
        <li>
          <img src="../assets/images/app-4.png" alt="">
          <p>微助力</p>
          <p>商务版专属</p>
        </li>
        <li>
          <img src="../assets/images/app-5.png" alt="">
          <p>拆礼盒</p>
          <p>商务版专属</p>
        </li>
        <li>
          <img src="../assets/images/app-6.png" alt="">
          <p>大转盘</p>
          <p>商务版专属</p>
        </li>
      </ul>
    </div>
    <div class="guide overview-shadow">
      <div>产品指南</div>
      <div>使用指南</div>
      <div>常见问题</div>
    </div>
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

