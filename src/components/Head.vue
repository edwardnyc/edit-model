<template>
  <el-menu :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    text-color="#333"
    active-text-color="#1DA2C8"
    :router="isRoute"
  >
    <el-menu-item index="1" route="/home/overview">店铺认证</el-menu-item>
    <el-menu-item index="2" route="/home/overview">套餐升级</el-menu-item>
    <el-submenu index="3">
      <template slot="title">辛伟大</template>
      <el-menu-item index="3-1" route="/home/overview">选项1</el-menu-item>
      <el-menu-item index="3-2" route="/home/overview">选项2</el-menu-item>
      <el-menu-item index="3-3" @click="exithandle" route="/login">退出</el-menu-item>
    </el-submenu> 
  </el-menu>
</template>

<script>
import Token from '@/utils/token'
  export default {
    mixins: [Token],
    data () {
      return {
        activeIndex: '1',
        isRoute: true
      }
    },
    methods:{
      exithandle(){
        this.delCookie("_token")
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
.el-menu--horizontal{
  border: none;
  float: right;
}
.el-menu-item {
  font-family: PingFangSC-Regular;
  font-size: 14px;
}
.el-menu-item:hover {
  color: #1DA2C8 !important;
}
</style>
