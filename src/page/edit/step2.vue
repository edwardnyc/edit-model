<style lang="scss" scoped>
.overview-shadow {
  -moz-box-shadow:0px 0px 10px #e3e3e3;
  -webkit-box-shadow:0px 0px 10px #e3e3e3;
  box-shadow:0px 0px 10px #e3e3e3;
  box-sizing: border-box;
  border-radius: 6px;
}
.v-edit-step2 {
  background: #fff;
  padding: 30px 70px;
  .product {
    h2 {
      font-size: 24px;
    }
    ul {
      overflow: hidden;
      li {
        float: left;
        margin: 30px 50px;
        font-size: 14px;
        width: 234px;
        cursor: pointer;
        .type {
          width: 234px;
          height: 152px;
          line-height: 152px;
          font-size: 36px;
          color: #FFFFFF;
          background: #1DA2C8;
          border-radius: 6px;
          text-align: center;
        }
        .message {
          margin: 30px 0 10px 2px;
          font-size: 12px;
        }
        .more {
          text-align: center;
          font-size: 14px;
          color: #1DA2C8;
        }
        .btn {
          height: 43px;
          line-height: 43px;
          margin: 20px 0;
          text-align: center;
          border: 1px solid #1DA2C8;
          color: #1DA2C8;
          border-radius: 100px;
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
    <div class="v-edit-step2 overview-shadow">
      <div class="product">
        <ul>
          <li v-for="(item, index) in product" :key="index">
            <p class="type" style="{background: 'red'}">{{ item.group_name }}</p>
            <p class="message">{{ item.description }}</p>
            <p class="more" :style="{color: '#fff'}">了解更多</p>
            <div class="btn" :style="{color: '#000', 'border-color': '#f40'}" @click="createNow(item.group_id)">立即创建</div>
          </li>
        </ul>
      </div>
    </div>
  </el-main>
</div>
</template>

<script>
import ListHead from '@/components/edit/ListHead'

export default {
  components: {
    ListHead
  },
  data () {
    return {
      product: []
    }
  },
  created () {
    if (!this.$store.state._token) {
      this.$router.push({ name: 'login' })
      this.$message({
        message: "请先登录",
        type: 'error'
      })
    }
    const params = {
      _token: this.$store.state._token
    }
    this.$store.dispatch('getgroup', params).then(res => {
      const { code, data, msg} = res.data
      if (+code === 200) {
        this.product = Array.prototype.slice.call(data)
      } else {
        this.$message({
        message: msg,
        type: 'error'
      })
      }
    })
  },
  methods: {
    createNow (group_id) {
      this.$router.push({ name: 'step3', params: {group_id} })
    }
  }
}
</script>
