<template>
  <el-main>
    <FormList v-if="hasFormData" />
    <FormNoList v-else />
  </el-main>
</template>

<script>
import Aside from '../components/Aside'
import Head from '../components/Head'
import FormList from '../components/FormList'
import FormNoList from '../components/FormNoList'

export default {
  components: {
    Aside,
    Head,
    FormList,
    FormNoList
  },
  data () {
    return {
      hasFormData: true
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
@import  "../assets/scss/baseFunction";
.wechat-title{
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #58585a;
  margin-bottom: 10px;
}
// .el-radio__input.is-checked .el-radio__inner {
//   border-color: #1DA2C8;
//   background: #1DA2C8;
// }
.el-radio__input.is-checked+.el-radio__label, .el-checkbox__input.is-checked+.el-checkbox__label {
  color: #333;
}
// .el-date-table td.end-date span, .el-date-table td.start-date span {
//   background-color: #1DA2C8;
// }
.el-input__inner{
  // background: $blueColor;
  // border: none;
  // color: #fff;
  // &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  //     color: #fff; opacity:1; 
  // }

  // &::-moz-placeholder { /* Mozilla Firefox 19+ */
  //     color: #fff;opacity:1;
  // }

  // &:-ms-input-placeholder{
  //     color: #fff; opacity:1;
  // }

  // &::-webkit-input-placeholder{
  //     color: #fff; opacity:1;
  // }
}
.el-select .el-input .el-select__caret{ color: #fff; }
</style>
