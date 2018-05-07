<template>
  <div class="sign overview-shadow">
    <ul>
      <li>
        <div class="sign-title step-one">绑定小程序</div>
        <p>在<span class="blue">微信注册</span>小程序/公众号，并在为站内添加，撒码授权即可</p>
      </li>
      <li>
        <div class="sign-title step-two">微站小程序装修</div>
        <p>各式各样<span class="blue">装修模板</span>可一键使用，使用后替换组件内容即可成为您的定制小程序/H5也可任意拖拽组件自定义搭建小程序/H5</p>
      </li>
      <li>
        <div class="sign-title step-three">开始绑定</div>
        <p>将搭建好的小程序/H5一键保存发布中天即可代您打包提交微信审核无需再去微信操作</p>
      </li>
    </ul>
    <div class="btns">
      <div class="btn btn-look">先体验</div>
      <div class="btn btn-bind" @click="goWechat">开始绑定</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods:{
      goWechat () {
        this.$router.push({ name: 'wechat' })
      }
    }
  }
</script>

<style lang="scss" scoped>
@import  "../assets/scss/_baseFunction";
.sign {
  padding: 30px 10px;
  margin-top: 10px;
  background: #fff;
  font-size: 12px;
  ul {
    overflow: hidden;
    li {
      float: left;
      width: 33.33%;
      text-align: center;
      p {
        font-family: PingFangSC-Regular;
        color: #999;
      }
    }
    .sign-title {
      font-size: 16px;
      margin-bottom: 50px;
      position: relative;
      &::before {
        position: absolute;
        width: 23px;
        height: 23px;
        line-height: 23px;
        border-radius: 100%;
        background: #1DA2C8;
        color: #fff;
        left: 50%;
        margin-left: -11.5px;
        top: 34px;
      }
    }
    .step-one, .step-two {
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 80%;
        left: 60%;
        top: 45px;
        background: #1DA2C8;
      }
    }
    .step-one {
      &::before {
        content: '1'
      }
    }
    .step-two {
      &::before {
        content: '2'
      }
    }
    .step-three {
      &::before {
        content: '3'
      }
    }
  }
  .btns {
    margin: 30px 0;
    text-align: center;
    .btn {
      display: inline-block;
      width: 142px;
      height: 36px;
      line-height: 36px;
      margin: 0 15px;
      border-radius: 100px;
      border: 1px solid #1DA2C8;
      box-sizing: border-box;
      cursor: pointer;
    }
    .btn-look {
      background: #fff;
      color: #1DA2C8;
    }
    .btn-bind {
      background: #1DA2C8;
      color: #fff;
    }
  }
}
.blue {
  color: #1DA2C8;
}
</style>
