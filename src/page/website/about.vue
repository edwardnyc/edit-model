<template>
  <div class="about">
    <Head />
    <SwiperMain :imgUrl="aboutBanner"/>
    <div class="num-box">
      <Titlesub title="了解东雅网络" subtitle="帮助全天下企业打造互联网营销、以务实、专业的态度，<br>依托强大的技术能力、线上线下推广能力、成功服务百万企业用户"/>
      <ul class="clear">
        <li>
          <h5>2000w+</h5>
          <p>网站用户量</p>
        </li>
        <li>
          <h5>8w+</h5>
          <p>网站用户量</p>
        </li>
        <li>
          <h5>400+</h5>
          <p>网站用户量</p>
        </li>
      </ul>
      <div class="num-btn btn">查看更多</div>
    </div>
    
    
    <div class="member-box">
      <Titlesub title="精英团队" subtitle="这里有一群对互联网爱到狂热的人，在追求完美的路上我们将披荆斩棘，永不退缩"/>
      <ul class="clear">
        <li>
          <div class="member-line">
            <h5>经验</h5>
            <h6>Experience</h6>
          </div>
          <div class="member-text">
            <p>丰富的产品</p>
            <p>案例实践</p>
            <p>玩转场景营销</p>
          </div>
        </li>
        <li>
          <div class="member-line">
            <h5>专业</h5>
            <h6>Professional</h6>
          </div>
          <div class="member-text">
            <p>专注于移动互联网</p>
            <p class="text-opacity">1</p>
            <p>开发数据导向用户</p>
          </div>
        </li>
        <li>
          <div class="member-line">
            <h5>信任</h5>
            <h6>Trust</h6>
          </div>
          <div class="member-text">
            <p>团队成员紧密配合</p>
            <p class="text-opacity">1</p>
            <p>合力推进工作</p>
          </div>
        </li>
        <li>
          <div class="member-line">
            <h5>执行力</h5>
            <h6>Execution</h6>
          </div>
          <div class="member-text">
            <p>绝不拖延立即行动</p>
            <p class="text-opacity">1</p>
            <p>保质完成任务</p>
          </div>
        </li>
        <li>
          <div class="member-line">
            <h5>创新</h5>
            <h6>Innovestion</h6>
          </div>
          <div class="member-text">
            <p>潜心研究应用生态</p>
            <p class="text-opacity">1</p>
            <p>精准把握产品</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="address-box">
      <div class="address-wrap clear">
        <div class="part-one lf">
          <h1>联系我们</h1>
          <p>周一至周五 9:30-18:30</p>
          <p>全国咨询电话（代理/服务/套餐）</p>
          <h6>400-078-9990</h6>
          <p>业务电话</p>
          <h6>13312967497</h6>
        </div>
        <div class="part-two lf">
          <p>在线客服系统<br>专业技术客服在线问答</p>
          <div class="server-btn btn">在线咨询</div>
        </div>
        <div class="part-three rt">
          <baidu-map :center="center" :zoom="zoom" @ready="handler" class="bm-view" ak="eXB0RSYGhpifMv3bG3mpNCxk">
          </baidu-map>
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
import Foot from '@/components/website/Foot'
import { BaiduMap } from 'vue-baidu-map'

export default {
  components: {
    Head,
    Slide,
    Titlesub,
    Foot,
    SwiperMain,
    BaiduMap
  },
  data () {
    return {
      aboutBanner: [
        require('@/assets/images/about/about-banner1.jpg'),
        require('@/assets/images/about/about-banner1.jpg'),
        require('@/assets/images/about/about-banner1.jpg'),
        require('@/assets/images/about/about-banner1.jpg')
      ],
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    showModel(type){
      this.setType = type;
    },
    handler ({BMap, map}) {
      this.center.lng = 113.324520
      this.center.lat = 23.099994
      this.zoom = 15
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import  "../../assets/scss/about";
</style>
