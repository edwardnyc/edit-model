<template>
  <div class="swiper-main">
    <swiper :options="swiperOption_main">
      <swiper-slide v-for="(item, index) in imgUrl" :key="index">
        <img v-bind:src="item" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: ['imgUrl'],
  data () {
    return {
      swiperOption_main: {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
@import  "../../assets/scss/_baseFunction";
.swiper-main{
  width: 100%;
  .swiper-slide{
    img{
      width: 100%;
    }
  }
  .swiper-pagination-bullet-active{
    background: #52a2f4;
  }
  .swiper-button-next, .swiper-button-prev{
    width: 15px;
    height: 24px;
    margin-top: -12px;
    background-size: 15px 24px;
  }
}
@media (max-width:789px){
  .swiper-main{
    .swiper-slide{
      min-height: 180px;
      position: relative;
      text-align: center;
      img{
        width: auto;
        height: 100%;
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }
  }
}
@media (max-width: 500px){
  .swiper-main{
    .swiper-button-next, .swiper-button-prev{
      width: 12px;
      height: 20px;
      margin-top: -10px;
      background-size: 12px 20px;
    }
    .swiper-pagination-bullet{
      width: 6px;
      height: 6px;
    }
  }
}
</style>
