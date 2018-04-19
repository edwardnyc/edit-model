<style lang="scss" scoped>
@import  "../assets/scss/baseFunction";
aside {
  position: relative;
  .v-menu {
    width: 235px;
    .v-menu-item {
      text-align: center;
      font-size: 14px;
      color: #fff;
      height: 56px;
      line-height: 56px;
      > a {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 103px 0 74px;
        position: relative;
        img{
          width: 22px;
          height: 22px;
          margin-right:8px;
        }
        span{
          display: inline-block;
          font-size: 14px;
          width: 28px;
          line-height: 20px;
          height: 20px;
        }
      }
      .v-menu-item {
        width: 100%;
        height: 100%;
      }
      img {
        width: 22px;
        display: inline-block;
        margin-right: 10px;
      }
    }
    .v-menu-item > a:hover, .v-menu-item > .router-link-active {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.13;
        background-image: linear-gradient(-90deg, #7E8EDA 0%, rgba(255,255,255,0.00) 92%);
        z-index: 0;
      }
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3.7px;
        height: 100%;
        background: #1DA2C8;
      }
    }
  }
  .menu-head-img{
    margin: 40px 80px 75px 65px;;
    text-align: center;
    img {
      width: 70px;
      border-radius: 50%;
    }
    // .sx-img{
    //   width: 30px;
    // }
  }
  .menu-footer {
    position: absolute;
    left: 20px;
    bottom: 20px;
    font-size: 12px;
    color: #8992CA;
    line-height: 38px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 40px;
      width: 100%;
      height: 1px;
      background: #8992CA;
    }
  }
}
</style>
<template>
  <el-col :span="24">
    <div class="menu-head-img">
      <img :class="{'sx-img': isCollapse}" @click="toggleMenu" src="../assets/images/head.jpg" alt="">
    </div>
    <ul class="v-menu">
      <li class="v-menu-item" v-for="(menu, index) in menus" :key="index">
        <router-link :to="menu.path" >
          <img :src="menu.icon" alt="">
          <span>{{ menu.title}}</span>
        </router-link>
      </li>
    </ul>
    <!-- <footer class="menu-footer">
      © 2018 Sierra. All Rights Reserved.
    </footer> -->
    <!-- <el-menu  default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color=" #222430"
      text-color="#fff"
      active-text-color="#fff"
      :router="isRoute"
    >
      <el-menu-item index="1" route="overview">
        <img src="../assets/images/slider1.png" alt="">
        <span slot="title">概述</span>
      </el-menu-item>
      <el-menu-item index="2" route="login">
        <img src="../assets/images/slider2.png" alt="">
        <span slot="title">装修</span>
      </el-menu-item>
      <el-menu-item index="3" route="form">
        <img src="../assets/images/slider3.png" alt="">
        <span slot="title">表单</span>
      </el-menu-item>
      <el-menu-item index="4" route="market">
        <img src="../assets/images/slider4.png" alt="">
        <span slot="title">营销</span>
      </el-menu-item>
      <el-menu-item index="5" route="login">
        <img src="../assets/images/slider5.png" alt="">
        <span slot="title">数据</span>
      </el-menu-item>
      <el-menu-item index="6" route="wechat">
        <img src="../assets/images/slider7.png" alt="">
        <span slot="title">微信</span>
      </el-menu-item>
    </el-menu> -->
  </el-col>
</template>

<script>
  export default {
    data () {
      return {
        lianglong:true,
        isCollapse: false,
        isRoute: true,
        screenWidth: document.body.clientWidth,
        activeIndex: 1,
      }
    },
    computed: {
        type(){return  this.$store.state.type},
      menus () {
        let items = [
          { name: 'overview', path:'/overview',icon: require('@/assets/images/gaikuang.png'), title: '概述' },
          { name: 'editor', path:'/market/shop',icon: require('@/assets/images/fixstore.png'), title: '装修' },
          { name: 'form', path:'/form',icon: require('@/assets/images/form.png'), title: '表单' },
          { name: 'market1', path:'/market/page2', icon: require('@/assets/images/sale.png'), title: '营销' },
          { name: 'wechat', path:'/wxchat',icon: require('@/assets/images/wechat.png'), title: '微信' },
          {name :'',path:'/backstage/houtai1',icon :require('@/assets/images/shezhi.svg'),title:'设置'}
        ]
        // let path = this.$route.path
        // let reg = /^\/edit\//
        // if (reg.test(path)) {
        //   // items[1].name = path.split('/edit/')[1]
        // }
        return items
      }
    },
    created(){
        console.log(this.type);
        if(this.type==1){
          this.menus[1].path= '/editor'
        }
        else if(this.type==0){
          this.$router.push({name:'step1'});
        }
    },
    mounted () {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    },
    methods: {
      toggleMenu() {
        // this.isCollapse = !this.isCollapse;
      }
    },
    watch: {
      screenWidth (val) {
        this.screenWidth = val
        if (this.screenWidth <= 768) {
          this.isCollapse = true;
        } else {
          this.isCollapse = false;
        }
      }
    }
  }
</script>
