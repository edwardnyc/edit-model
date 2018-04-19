<template>
  <div id="home">
    <el-container style="height:100vh;">
      <el-aside style="background-image: linear-gradient(0deg, #485173 0%, #24283E 100%);"
        text-color="#fff"
        width="auto"
      >
        <Aside />
      </el-aside>
      <el-container>
        <el-header style="background-color: #fff"><Head /></el-header>
        <router-view ></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from '@/components/Aside'
import Head from '../components/Head'
export default {
  name: 'Home',
  components: {
    Head,
    Aside
  },
  created () {
    let token = this.$store.state._token
    if (!token) {
      this.$router.push({name: 'login'})
      return
    } else {
      // console.log(123);
    }
    // let params = {
    //   username: 18720984265,
    //   password: 111111
    // }
    // this.$store.dispatch('login', params).then(res => {
    //   const { code, message } = res.data
    //   if (~~code) {
    //     console.log(message);
    //     // console.log(document.cookie);
    //     // document.cookie = message._token;
    //     // this.$store.commit('_token', document.cookie)
    //     // console.log(this.$store.state._token);
    //   }
    // })
  }
}
</script>

<style lang="scss">
#home {
  background: #f7f7f7;
}
.overview-shadow {
  -moz-box-shadow:0px 0px 10px #e3e3e3;
  -webkit-box-shadow:0px 0px 10px #e3e3e3;
  box-shadow:0px 0px 10px #e3e3e3;
  box-sizing: border-box;
  border-radius: 6px;
}
</style>
