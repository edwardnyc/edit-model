<template>
  <div class="el-main level-two">
    <div class="route-left">
      <el-menu
        default-active="1"
        text-color="#333"
        background-color="#f7f7f7"
        active-text-color="#1DA2C8"
        :router="isRoute"
        v-if="isAuth"
      >
        <el-menu-item index="1" route="/wxchat" @click="changeRoute('wxchat')">
          <span slot="title">授权</span>
        </el-menu-item>
        <el-menu-item index="2" route="/root" @click="changeRoute('root')">
          <span slot="title">预览</span>
        </el-menu-item>
        <el-menu-item index="3" route="/fabu" @click="changeRoute('fabu')">
          <span slot="title">发布</span>
        </el-menu-item>
        <el-menu-item index="4" route="/huifu"  @click="changeRoute('huifu')">
          <span slot="title">上线</span>
        </el-menu-item>
        <!--<el-menu-item index="5" route="/wxchat" @click="changeRoute('wxchat')">-->
          <!--<span slot="title">公众号管理</span>-->
        <!--</el-menu-item>-->
      </el-menu>

      <el-menu
        default-active="7"
        text-color="#333"
        background-color="#f7f7f7"
        active-text-color="#1DA2C8"
        :router="isRoute"
        v-else
      >
        <el-menu-item index="6" route="/wxchat">
          <span slot="title">小程序</span>
        </el-menu-item>
        <el-menu-item index="7" route="/wxchat">
          <span slot="title">授权管理</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="route-right ">
      <div class="grid-content bg-purple">
        <WechatBoard v-if="isAuth" />
        <WechatSuccess v-else />
      </div>
       <!--<router-view></router-view>-->
    </div>
  </div>
</template>

<script>
import Aside from '../components/Aside'
import Head from '../components/Head'
import WechatBoard from '../components/WechatBoard'
import WechatSuccess from './wechat/wechat-success'

export default {
  components: {
    Aside,
    Head,
    WechatBoard,
    WechatSuccess
  },
  data () {
    return {
      isRoute: true,
      isAuth: true
    }
  },
  methods: {
    changeRoute(index){
      // console.log(index)
      this.name = index;
      console.log(this.name);

      // const i = index.split('-')[1];
    }
  },
  created () {

    const query = this.$route.query
    const params = {
      u_token: this.$store.state._token,
      app_id: this.$store.state.app_id,
      auth_code: query.auth_code
    }
    console.log(this.$route);
    if (!query.auth_code) return false;
    let self = this
    this.$store.dispatch('huitiao', params).then(res => {
      const { code, message } = res.data
      // if (+code == 200) {
      //   this.$message({
      //     message: '授权成功',
      //     type: 'success',
      //     // onClose () {
      //     //   window.location.href = '/wxchat'
      //     // }
      //   })
      // } else {
      //   this.$message({
      //     message: '授权失败',
      //     type: 'error'
      //   })
      // }
    })
  }
}
</script>

<style lang="scss">
@import  "../assets/scss/baseFunction";
.el-main.level-two {
  padding-left: 0;
}
.level-two {
  display: flex;
  .route-right {
    flex: 1;
    .grid-content {
      margin-bottom: 20px;
      // background: #fff;
    }
  }
  .el-menu {
    border-right: none;
  }
  .el-menu-item {
    text-align: center;
    padding: 0 35px !important;
    font-size: 12px;
    position: relative;
    color: #fff;
    &:hover {
      background: #f7f7f7 !important;
      color: #1DA2C8 !important;
    }
  }
  .el-menu-item.is-active {
    background: #edeff4 !important;
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
  .el-icon-caret-right {
    color: #1DA2C8;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  // .v-menu-wechat {
  //   li {
  //     height: 56px;
  //     line-height: 56px;
  //     text-align: center;
  //     font-size: 12px;
  //     > a {
  //       height: 100%;
  //       padding: 0 35px;
  //       display: block;
  //       position: relative;
  //       &:hover {
  //         background: #f7f7f7;
  //         color: #1DA2C8;
  //       }
  //     }
  //     .router-link-active {
  //       background: #edeff4;
  //       color: #1DA2C8;
  //       &::before {
  //         content: '';
  //         position: absolute;
  //         left: 0;
  //         top: 0;
  //         width: 3.7px;
  //         height: 100%;
  //         background: #1DA2C8;
  //       }
  //       &:hover {
  //         background: #edeff4;
  //         color: #1DA2C8;
  //       }
  //     }
  //   }
  // }
}
.wechat-title{
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #58585a;
  margin-bottom: 10px;
}
.el-input__inner{
  // background: $blueColor;
  // border: none;
  // color: #fff;
  // &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  //     color: #fff; opacity:1;
  // }

  // &::-moz-placeholder { /* Mozilla Firefox 19+ */
  //     color: #fff;opacity:1;
  // }

  // &:-ms-input-placeholder{
  //     color: #fff; opacity:1;
  // }

  // &::-webkit-input-placeholder{
  //     color: #fff; opacity:1;
  // }
}
.el-select .el-input .el-select__caret{ color: #fff; }
</style>
