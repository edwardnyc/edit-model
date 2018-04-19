<template>
  <el-container style="height:100vh;">
    <el-header><CenterHead /></el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :xs="12" :sm="8" :md="6" :lg="4">
          <div @click="clickHandle" class="grid-content bg-purple grid-add">
           + 立即创建
          </div>
        </el-col>
        <el-col :xs="12" :sm="8" :md="6" :lg="4">
          <div class="grid-content bg-purple grid-box">
            <img src="../assets/images/head.jpg" alt="">
            <p class="grid-name">畅新工作室</p>
            <div class="btn-box clear">
              <div class="lf btn btn-open">营业中</div>
              <div class="rt btn btn-close">已关闭</div>
            </div>
            <div class="coop-box">
              <p class="coop-change" @click="clickHandle">修改</p>
              <p class="coop-delete">删除</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Aside from '../components/Aside'
import CenterHead from '../components/CenterHead'
import WechatBoard from '../components/WechatBoard'

export default {
  components: {
    Aside,
    CenterHead,
    WechatBoard
  },
  data () {
    return {
      a :'sss'
    }
  },
  methods: {
    clickHandle() {
      
    }
  },
  mounted () {
    let params ={
      _token: this.$store._token
    }
    this.$store.dispatch('getlist', params).then(res => {
      const { code, message } = res.data
      // if (+code === 1) {
      console.log(res)
    })
  }
}
</script>

<style lang="scss">
@import  "../assets/scss/baseFunction";
.grid-content{
  box-sizing: border-box;
  border-radius: 6px;
  margin-bottom: 20px;
  text-align: center;
}
.grid-add{
  border: 1px dashed $blueColor;
  color: $blueColor;
  height: 200px;
  line-height: 200px;
  font-size: 18px;
}
.grid-box{
  border: 1px solid #dfdfdf;
  height: 200px;
  padding: 10px 20px;
  position: relative;
  img{
    width: 40%;
    min-width: 80px;
    max-width: 100px;
    border-radius: 50%;
  }
  .grid-name{
    color: #666;
    line-height: 40px;
  }
  .btn{
    width: 36%;
    box-sizing: border-box;
    line-height: 30px;
    height: 30px;
    border-radius: 4px;
  }
  .btn-open{
    border: 1px solid $blueColor;
    color: $blueColor;
  }
  .btn-close{
    color: #999;
  }
  .coop-box{
    position: absolute;
    top: 10px;
    left: 20px;
    line-height: 30px;
    color: #999;

  }
}
</style>
