<template>
  <div class="foot">
    <div class="foot-pc">
      <p class="copy">Copyright2017 Takecloud Inc.All Rights Reserved沪ICP备 17002272-1号</p>
      <p class="company">上海微庚信息科技有限公司</p>
      <ul class="channle">
        <li>
          <img src="../../assets/images/weibo.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/wechat.png" alt="">
        </li>
        <li>
          <img src="../../assets/images/qq.png" alt="">
        </li>
      </ul>
    </div>
    <div class="foot-mobile">
      <ul class="lf">
        <li>
          <img src="../../assets/images/mobile/foot-tel.png" alt="">
          <span>10105188</span>
        </li>
        <li>
          <img src="../../assets/images/mobile/foot-message.png" alt="">
          <span>booke@weimbo.com</span>
        </li>
        <li>
          <img src="../../assets/images/mobile/foot-map.png" alt="">
          <span>上海市宝山区258号微特大厦</span>
        </li>
      </ul>
      <div  class="rt">
        <img src="../../assets/images/mobile/foot-erweima.png" alt="">
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    props:['title', 'subtitle'],
    data () {
      return {}
    },
    methods:{
      
    }
  }
</script>

<style lang="scss" scoped>
@import  "../../assets/scss/_baseFunction";
.foot{
  height: 222px;
  background: #303235;
  width: 100%;
  text-align: center;
  color: $fdColor;
}
.foot-pc{
  .copy{
    padding-top: 44px;
  }
  .company{
    padding: 26px 0 40px;
  }
  .channle{
    width: 600px;
    margin: 0 auto;
    li{
      float: left;
      width: 33.33%;
      text-align: center;
    }
  }
}
.foot-mobile{
  display: none;
  overflow: hidden;
  white-space: nowrap;
  .lf{
    padding: 20px 0 0 14px;
    line-height: 40px;
    text-align: left;
    font-size: 12px;
    img{
      height: 20px;
      vertical-align: middle;
    }
  }
  .rt{
    width: 30%;
    padding: 20px 14px 0 0;
    img{
      width: auto;
      height: 100px;
    }
  }
}
@media (max-width:1199px){
  .foot{
    height: 160px;
  }
  .foot-pc{
    display: none;
  }
  .foot-mobile{
    display: block;
  }
}
</style>
