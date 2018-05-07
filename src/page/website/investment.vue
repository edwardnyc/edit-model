<template>
  <div class="investment">
    <Head />
    <SwiperMain :imgUrl="investBanner"/>
    <div class="college-box">
      <p class="title">东亚商学院，扶持创业，帮忙落地</p>
      <img src="../../assets/images/investment/college.png" alt="">
      <ul class="text-box clear">
        <li>
          <h5>0门槛合作</h5>
          <p>无需加盟费保证金</p>
        </li>
        <li>
          <h5>投入39800</h5>
          <p>40倍高收益回报</p>
        </li>
      </ul>
    </div>

    <div class="system-box">
      <p class="title">8大加盟体系</p>
      <ul class="clear">
        <li v-for="(item, i) in systemTextArr" :key="i" :class="{active: (i+1)==systemIndex}" @click="clickSystemIndex(i+1)">
          <div></div>
          <h6>{{item.title}}</h6>
          <p>{{item.topText}}<br/><span v-show="item.middleText">{{item.middleText}}<br></span>{{item.bottomText}}</p>
        </li>
      </ul>
    </div>
    <div class="pk-box">
      <div class="pk-wrap">
      <p class="title">小程序系统<span>火热招商</span>加盟中</p>
      <p class="title">区别于同行代理模式，高达<span>50-100</span>倍的利润空间</p>
      <ul class="clear pc-list">
        <li class="pk-content pk-lf">
          <div>
            <span class="pk-name">中天科技</span>
            <img src="../../assets/images/investment/good.png" alt="">
          </div>
          <p class="text-one">一次投入终身维护项目不断更新迭代囊括公众网页小程序三位一体</p>
          <p class="text-two">投入成本低于同行价格，按当前市场最低销售标准，50倍回报，利润可30-50倍</p>
          <p class="text-three">品牌独立，代理可自主定价和运营无需为利益担忧抢占互联网新机遇，机会稍纵即逝</p>
        </li>
        <li class="pk-img">
          <img src="../../assets/images/investment/vs.png" alt="">
        </li>
        <li class="pk-content pk-rt">
          <div>
            <img src="../../assets/images/investment/bad.png" alt="">
            <span class="pk-name">其它</span>
          </div>
          <p class="text-one">只出售账户，系统创造性，主动性收到限制，盈利空间受限</p>
          <p class="text-two">无独立品牌，容易被追溯源头，总部的利益优先于加盟商</p>
          <p class="text-three">加盟产品投资本高达幅增加利润额度有难度</p>
        </li>
      </ul>
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
      investBanner: [
        require('@/assets/images/investment/invest_banner1.jpg'),
        require('@/assets/images/investment/invest_banner1.jpg'),
        require('@/assets/images/investment/invest_banner1.jpg'),
        require('@/assets/images/investment/invest_banner1.jpg')
      ],
      systemTextArr: [
        {title: '小程序支持', topText: '小程序针对行业', bottomText: '特性专属定制'},
        {title: '培训支持', topText: '远程培训，电话指导', bottomText: '优秀代理现场支持'},
        {title: '投入回报', topText: '投入39800元', bottomText: '40倍高收益回报'},
        {title: '团建扶持', topText: '抢占互联网新机', bottomText: '遇机会稍纵即逝'},
        {title: '客服支持', topText: '专业中天商学院', middleText: '服务指导扶持', bottomText: '创业孩指导'},
        {title: '技术支持', topText: '一次投入终身维护项目', middleText: '不断更新迭代，囊括公', bottomText: '众网页小程序三位一体'},
        {title: '代理网络加盟', topText: '互联网风口创业新方向', middleText: '当前错过淘宝公众如今小', bottomText: '程序新风口你还要错过么'},
        {title: 'OEM定制', topText: '支持代理商系统', middleText: '后套OEM定制', bottomText: '不显示轻易达'}
      ],
      systemIndex: 1
    }
  },
  methods: {
    clickSystemIndex(index){
      this.systemIndex = index;
    }
  }
}
</script>

<style lang="scss">
@import  "../../assets/scss/investment";
</style>
