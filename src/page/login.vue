<template>
  <div class="login">
    <LoginBg />
    <div class="form-box">
      <div class="form-first clear">
        <p class="form-title lf">登录</p>
        <p class="form-skip rt">
          <router-link :to="{ name: 'register'}" exact class="active" tag="a">注册</router-link>
        </p>
      </div>
      <div class="form clear">
        <div class="form-label">
          <p>手机号码 + 86 </p>
          <!-- <ul>
            <li>86</li>
          </ul> -->
        </div>
        <div class="form-input">
          <input type="text" placeholder="请填写手机号码">
        </div>
      </div>
      <div class="form clear">
        <div class="form-label">登录密码</div>
        <div class="form-input">
          <input type="text" placeholder="请填写8~18位密码">
        </div>
      </div>
      <p class="forget-pwd">
        <router-link :to="{ name: 'forget'}" exact class="active" tag="a">忘记密码</router-link>
      </p>

      <button class="form-btn">登录</button>
      <p class="form-notice">老用户登录</p>
    </div>
  </div>
</template>

<script>
import LoginBg from '../components/LoginBg'
  export default {
    components: {LoginBg},
    data () {
      return {}
    },
    methods: {
      showModel(type){
        this.setType = type;
      }
    }
  }
</script>

<style lang="scss">
@import  "../assets/scss/login";
</style>
