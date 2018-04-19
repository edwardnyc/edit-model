<template>
  <div class="slider">
    <div class="slider-server">
      <img src="../../assets/images/slider-server.png" alt=""/>
      <p>客服</p>  
    </div>
    <div class="slider-editor">
      <img src="../../assets/images/slider-editor.png" alt=""/>
      <p>反馈</p>  
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

<style lang="scss" scoped>
@import  "../../assets/scss/_baseFunction";
.slider{
  position: fixed;
  right: 20px;
  top: 50%;
  margin-top: -120px;
  z-index: 10;
  div{
    width: 90px;
    height: 120px;
    box-sizing: border-box;
    text-align: center;
    padding-top: 20px;
    line-height: 30px;
  }
  .slider-server{
    background: $blueColor;
    color: #fff;
  }
  .slider-editor{
    color: $minColor;
    background: #fff;
    border: 1px solid #dcdcdc;
    border-top: none;
  }
}
@media (max-width:1199px){
  .slider{
    display: none;
  }
}
</style>
