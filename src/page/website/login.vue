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
          <input type="text" placeholder="请填写手机号码" v-model="phone">
        </div>
      </div>
      <div class="form clear">
        <div class="form-label">登录密码</div>
        <div class="form-input">
          <input type="password" placeholder="请填写6~18位密码" v-model="password">
        </div>
      </div>
      <p class="forget-pwd">
        <router-link :to="{ name: 'forget'}" exact class="active" tag="a">忘记密码</router-link>
      </p>

      <button class="form-btn" @click="loginFn">登录</button>
      <!-- <p class="form-notice">老用户登录</p> -->
    </div>
  </div>
</template>

<script>
import LoginBg from '@/components/website/LoginBg'
import Token from '@/utils/token'

export default {
  components: {LoginBg},
  mixins: [Token],
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  created () {
    if (this.$store.state._token) {
      this.$router.push({ name: 'league' })
       this.$message({
            message: "已登录",
            type: 'success'
          })
    }
  },
  methods: {
    showModel(type){
      this.setType = type;
    },
    loginFn () {
      let params = {
        phone: this.phone,
        password: this.password
      }
      if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(params.phone)){
         this.$message({
            message: '请输入正确手机号',
            type: 'error'
          })
          return
      }
      if(params.password.length < 6 || params.password.length> 18){
         this.$message({
            message: '请输入密码',
            type: 'error'
          })
          return
      }
      this.$store.dispatch('login', params).then(res => {
        const { code, data, msg,} = res.data
        if(+code == 200) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          this.setCookie('qiniu', data.qiniu_host)
          this.$store.commit('qiniu', data.qiniu_host)
          this.setCookie('_token', data.id)
          this.$store.commit('_token',  data.id)
          this.$router.push({ name: 'league'})
        } else {
          this.$message({
            message: msg,
            type: 'error'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import  "../../assets/scss/login";
</style>
