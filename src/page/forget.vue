<template>
  <div class="forget">
    <LoginBg />
    <div class="form-box">
      <div class="form-first clear">
        <p class="form-title lf">忘记密码</p>
        <p class="form-skip rt">
          <router-link :to="{ name: 'login'}" exact class="active" tag="a">登录</router-link>
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
        <div class="form-label">短信验证码</div>
        <div class="form-input form-message">
          <input type="text" placeholder="请填写短信密码">
          <span>获取验证码</span>
        </div>
      </div>
      <div class="form clear">
        <div class="form-label">设置密码</div>
        <div class="form-input">
          <input type="text" placeholder="请填写8~18位密码">
        </div>
      </div>

      <button class="form-btn form-btn-top">确认</button>
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
