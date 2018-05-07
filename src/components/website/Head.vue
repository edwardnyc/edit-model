<template>
  <div class="header">
    <div class="header-mobile" :class="{ 'header-mobile-active': mobileSlide }">
      <h2 class="logo lf">
        <router-link :to="{ name: 'league'}" exact tag="a">
          <img src="../../assets/images/logo.png" alt="">
        </router-link>
      </h2>
      <div class="breaks" @click="clickBreak">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu">
        <div class="menu-wrap">
          <ul class="nav">
            <li v-for="(item, i) in routeArr" :key="i">
              <router-link :to="{ name: item.routeName}" exact :class="{active: item.routeName==$route.name}" tag="a">{{item.title}}</router-link>
            </li>
          </ul>
          <div class="form">
            <router-link :to="{ name: login_router}" exact class="logon-btn" tag="a">{{login_name}}</router-link>
            <router-link :to="{ name: 'register'}" exact class="register-btn" tag="a">注册</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="header-pc">
      <h2 class="logo">
        <router-link :to="{ name: 'league'}" exact tag="a">
          <img src="../../assets/images/logo.png" alt="">
        </router-link>
      </h2>
      <img src="" alt="" class="">
      <ul class="nav">
        <li v-for="(item, i) in routeArr" :key="i">
          <router-link :to="{ name: item.routeName}" exact :class="{active: item.routeName==$route.name}" tag="a">{{item.title}}</router-link>
        </li>
      </ul>
      <div class="form">
        <router-link :to="{ name:  login_router}" exact class="logon-btn" tag="a">{{login_name}}</router-link>
        <router-link :to="{ name: 'register'}" exact class="register-btn" tag="a">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mobileSlide: false,
        routeArr: [
          {title: '中天', routeName: 'league'},
          {title: '代理商', routeName: 'agent'},
          {title: '模板', routeName: 'template'},
          {title: '招商加盟', routeName: 'investment'},
          {title: '关于我们', routeName: 'about'}
        ],
        login_router: 'login',
        login_name: '登录'
      }
    },
    methods:{
      clickBreak(){
        this.mobileSlide = !this.mobileSlide;
      }
    }, 
    created () {
      if(this.$store.state._token) {
        this.login_router = 'step1',
        this.login_name = '控制台'
      }
    }
  }
</script>

<style lang="scss" scoped>
@import  "../../assets/scss/head";
</style>
