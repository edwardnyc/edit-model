<template>
  <div class="titlesub">
    <div><span class="line-lf"></span>{{title}}<span class="line-rt"></span></div>
    <p>{{subtitle}}</p>
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
@import  "../assets/scss/_baseFunction";
.titlesub{
  text-align: center;
  margin: 50px auto;
  color: $minColor;
  div{
    font-size: 28px;
    line-height: 40px;
  }
  span{
    height: 2px;
    width: 60px;
    background: #e5e5e5;
    display: inline-block;
    vertical-align: middle;
  }
  .line-lf{
    margin-right: 40px;
  }
  .line-rt{
    margin-left: 40px;
  }
  p{
    margin-top: 30px;
  }
}
</style>
