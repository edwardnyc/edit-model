<template>
  <div id="vedio" class="vedio" @click="closeVedio">
    <div class="video_fixed">
        <!-- <video src="../../assets/media/league.mp4" controls="controls" width="100%" id="video_Play">
            您的浏览器不支持 video 标签。
        </video> -->
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods:{
      closeVedio(e) {
        if (e.target.id == 'vedio') {
          this.$emit('clickShowVedio');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.vedio{
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  z-index: 15000;
  .video_fixed {
    width: 1000px;
    height: 500px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -500px;
    margin-top: -250px;
    z-index: 10000;
  }
}
@media (max-width:1199px){
  .vedio {
    .video_fixed {
      width: 100%;
      height: 50vw;
      left: 0;
      top: 50%;
      margin-left: 0px;
      margin-top: 0px;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
}
</style>
