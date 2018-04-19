<template>
  <el-menu :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    text-color="#36393b"
    active-text-color="#52a2f4"
    :router="isRoute"
  >
    <el-menu-item index="1" route="login">首页</el-menu-item>
    <el-menu-item index="2" route="login">加盟代理</el-menu-item>
    <el-menu-item index="3" route="login">关于我们</el-menu-item>
    <el-menu-item index="4" route="login">模板</el-menu-item>
    <el-submenu index="5">
      <template slot="title">15908171795</template>
      <el-menu-item index="5-1" route="login">选项1</el-menu-item>
      <el-menu-item index="5-2" route="login">选项2</el-menu-item>
      <el-menu-item index="5-3" route="login">选项3</el-menu-item>
    </el-submenu> 
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '4',
        isRoute: true
      }
    },
    methods:{
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
</style>
