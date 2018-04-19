<template>
  <div class="template">
    <Head />
    <SwiperMain :imgUrl="templateBanner"/>
    <div class="template-box">
      <ul class="tab-bar clear">
        <li v-for="(item, i) in tabArr" :key="i"
          :class="{active: tabIndex == i}"
          @click="clickTab(i)"
        >{{item.title}}</li>
      </ul>
      <div class="content clear">
        <div class="content-lf lf" 
          :class="{active: leftContent}"
        >
          <img src="../../assets/images/template/template1.png" class="template-img">
          <div class="wrap"
            @click="toggleLeftContent"
          >
            <img src="../../assets/images/template/erweima.png" alt="">
            <p>医疗救助</p>
          </div>
        </div>
        <div class="content-rt rt"
          :class="{active: rightContent}"
          @click="toggleRightContent"
        >
          <img src="../../assets/images/template/template2.png" class="template-img">
          <div class="wrap">
            <img src="../../assets/images/template/erweima.png" alt="">
            <p>医疗救助</p>
          </div>
        </div>
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>
import Head from '@/components/website/Head'
import Slide from '@/components/website/Slide'
import Titlesub from '@/components/website/Titlesub'
import SwiperMain from '@/components/website/SwiperMain'
import AgentForm from '@/components/website/AgentForm'
import Foot from '@/components/website/Foot'
export default {
  components: {
    Head,
    Slide,
    Titlesub,
    AgentForm,
    Foot,
    SwiperMain
  },
  data () {
    return {
      templateBanner: [
        require('@/assets/images/league/league-banner1.jpg'),
        require('@/assets/images/league/league-banner1.jpg'),
        require('@/assets/images/league/league-banner1.jpg'),
        require('@/assets/images/league/league-banner1.jpg')
      ],
      tabArr: [
        {title: '全部'},
        {title: '电商'},
        {title: '医疗'},
        {title: '美容'},
        {title: '免费'},
        {title: '个人'},
        {title: '企业'}
      ],
      tabIndex: 0,
      leftContent: false,
      rightContent: false
    }
  },
  methods: {
    clickTab(index){
      this.tabIndex = index;
    },
    toggleLeftContent(){
      this.leftContent = !this.leftContent;
      if (this.leftContent) {
        this.rightContent = false;
      }
    },
    toggleRightContent(){
      this.rightContent = !this.rightContent;
      if (this.rightContent) {
        this.leftContent = false;
      }
    }
  }
}
</script>

<style lang="scss">
@import  "../../assets/scss/template";
</style>
