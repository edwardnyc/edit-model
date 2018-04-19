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
        </div>
        <div class="form-input">
          <input type="text" v-model="phone" placeholder="请填写手机号码">
        </div>
      </div>
      <div class="form clear">
        <div class="form-label">短信验证码</div>
        <div class="form-input form-message">
          <input type="text" v-model="code" placeholder="请填写短信密码">
          <el-button type="text" size="mini" :disabled="isdisabled" @click="attrVerif">{{attrcode}}</el-button>
        </div>
      </div>
      <div class="form clear">
        <div class="form-label">设置密码</div>
        <div class="form-input">
          <input type="text" v-model="password" placeholder="请填写8~18位密码">
        </div>
      </div>
      <button class="form-btn form-btn-top" @click="forgetFn">确认</button>
    </div>
  </div>
</template>

<script>
import LoginBg from '@/components/website/LoginBg'
  export default {
    components: {LoginBg},
    data () {
      return {
        phone: '',
        password: '',
        code: '',
        isdisabled: false,
        attrcode:'获取验证码',
        timer: 30
      }
    },
    methods: {
      showModel(type){
        this.setType = type;
      }, 
       forgetFn() {
        let params = {
          phone: this.phone,
          password: this.password,
          code: this.code
        }
        this.$store.dispatch('forget', params).then(res => {
          const { code, message, msg } = res.data
           if(+code == 200) {
            this.$message({
              message: '注册成功',
              type: 'success'
            })
            this.$router.push({ name: 'login' })
          } else {
            this.$message({
              message: msg,
              type: 'error'
            })
          }
        })
      },
      attrVerif() {
        let params = {
          phone: this.phone,
        }
        if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(params.phone)){
          this.$message({
              message: '请输入正确手机号',
              type: 'error'
            }) 
          return 
        }
        this.$store.dispatch('code', params).then(res => {
          const { code, data, msg} = res.data
          if(+code === 200){
            this.isdisabled = true;
            var timerhandle = setInterval(()=>{
              this.attrcode = "重新发送("+ this.timer + "s)"              
              if(this.timer == 0){
                clearInterval(timerhandle)
                this.attrcode = "获取验证码";
                this.timer = 30;
                this.isdisabled = false; 
              }
              this.timer--;
            },1000)
            this.$message({
              message: '验证码发送成功',
              type: 'success'
            })
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
