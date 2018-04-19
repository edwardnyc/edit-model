<template>
  <div class="agent">
    <Head />
    <SwiperMain :imgUrl="agentBanner"/>
    <Titlesub title="代理扶持" subtitle="目前代理已覆盖：北京、上海、深圳、广州、天津、重庆、杭州、南京<br/>宁波、青岛、苏州、武汉、成都、大连、无锡、佛山、东莞、泉州、厦门..."/>
    <ul class="table-box clear">
      <li class="margin-none">
        <img src="../../assets/images/agent/table1.png" alt="">
        <p>物料支持</p>
      </li>
      <li>
        <img src="../../assets/images/agent/table2.png" alt="">
        <p>培训支持</p>
      </li>
      <li>
        <img src="../../assets/images/agent/table3.png" alt="">
        <p>市场支持</p>
      </li>
      <li>
        <img src="../../assets/images/agent/table4.png" alt="">
        <p>团队建设</p>
      </li>
      <li class="margin-none">
        <img src="../../assets/images/agent/table5.png" alt="">
        <p>技术支持</p>
      </li>
      <li>
        <img src="../../assets/images/agent/table6.png" alt="">
        <p>代理商交流会</p>
      </li>
      <li>
        <img src="../../assets/images/agent/table7.png" alt="">
        <p>现场扶持</p>
      </li>
      <li>
        <img src="../../assets/images/agent/table8.png" alt="">
        <p>客服支持</p>
      </li>
    </ul>
    <Titlesub title="加盟代理" subtitle=""/>
    <AgentForm />
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
      agentBanner: [
        require('@/assets/images/league/league-banner1.jpg'),
        require('@/assets/images/league/league-banner1.jpg'),
        require('@/assets/images/league/league-banner1.jpg'),
        require('@/assets/images/league/league-banner1.jpg')
      ]
    }
  },
  methods: {
    showModel(type){
      this.setType = type;
    }
  }
}
</script>

<style lang="scss">
@import  "../../assets/scss/agent";
</style>
