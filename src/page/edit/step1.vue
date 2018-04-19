<style lang="scss" scoped>
.overview-shadow {
  -moz-box-shadow:0px 0px 10px #e3e3e3;
  -webkit-box-shadow:0px 0px 10px #e3e3e3;
  box-shadow:0px 0px 10px #e3e3e3;
  box-sizing: border-box;
  border-radius: 6px;
}
.v-edit-step1 {
  background: #fff;
  padding: 120px 2%;
  ul {
    overflow: hidden;
    li {
      width: 370px;
      height: 110px;
      float: left;
      border-radius: 100px;
      margin: 20px 10px;
      cursor: pointer;
      border: 1px solid #1DA2C8;
      img {
        width: 59px;
        height: 59px;
        float: left;
        margin: 25px 20px;
      }
      > div {
        font-size: 14px;
        p {
          font-size: 18px;
          font-weight: 500;
          margin: 25px 0 10px 0;
          position: relative;
          span {
            position: absolute;
            right: 35px;
            top: -2px;
            padding: 1px 19px;
            border-radius: 100px;
            background: #1DA2C8;
            color: #fff;
          }
        }
      }
      &:first-child {
        font-size: 20px;
        color: #1DA2C8;
        text-align: center;
        border: 1px dashed #1DA2C8;
        span {
          line-height: 110px;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>

<template>
<div>
  <ListHead />
  <el-main :xs="24" :sm="24" :md="24" :lg="24">
    <div class="v-edit-step1 overview-shadow">
      <ul>
        <li @click="createNow">+<span>立即创建</span></li>
        <li v-for="(product, index) in products" :key="index" @click="goApp(product)">
          <img style="borderRadius: 50% 50%;" :src="$store.state.qiniu + '/' + product.app_cover" alt=""></img>
          <div>
            <p>
              {{ product.app_name }}
              <span>{{product.group_name}}</span>
            </p>
            <span>{{product.app_name}}</span>
          </div>
        </li>
      </ul>
    </div>
  </el-main>
</div>
</template>

<script>
import Token from '@/utils/token'
import ListHead from '@/components/edit/ListHead'

export default {
  mixins: [Token],
  components: {
    ListHead
  },
  data () {
    return {
      imgsrc: require('@/assets/images/app-5.png'),
      products: []
    }
  },
  created () {
    if (!this.$store.state._token) {
      this.$message({
        message: "请先登录",
        type: 'error'
      })
      this.$router.push({ name: 'login' })
    }
    const params = {
      _token: this.$store.state._token
    }
    this.$store.dispatch('list', params).then(res => {
      const { code, data, msg} = res.data
      if (+code == 200) {
        this.products = Array.prototype.slice.call(data) ;
      }
    })
  },
  methods: {
    createNow () {
      this.$router.push({ name: 'step2' })
    },
    goApp (product) {
      console.log(product);
      this.setCookie('app_id', product.app_id),
      this.setCookie('group_id', product.group_id)
      this.$store.commit('app_id', product.app_id);
      this.$store.commit('group_id', product.group_id);    
      this.$store.commit('type', product.type);
      this.$store.commit('shopLogo',this.$store.state.qiniu + '/' + product.app_cover);  
      this.$store.commit('app_name',product.app_name);
      this.$router.push({ name: 'overview'})           
    }
  }
}
</script>
