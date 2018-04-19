<template>
  <el-dialog
    title="图标"
    :visible.sync="dialogVisible"
    width="906px"
    :before-close="handleClose"
    class="material">
    <div class="icon-head">
      <el-radio-group v-model="radio3" size="mini">
        <el-radio-button label="最新"></el-radio-button>
        <el-radio-button label="首页"></el-radio-button>
        <el-radio-button label="地址电话"></el-radio-button>
        <el-radio-button label="关于我们"></el-radio-button>
        <el-radio-button label="常规"></el-radio-button>
        <el-radio-button label="汽车"></el-radio-button>
        <el-radio-button label="婚庆摄影"></el-radio-button>
        <el-radio-button label="房产"></el-radio-button>
        <el-radio-button label="保险"></el-radio-button>
        <el-radio-button label="教育培训"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="icon-content">
      <div v-for="item in 10" class="icon-item">
        <img src="http://stc.vc.weimob.cn/attachment/1000000007/9b4d866bfb1512453938515.svg" alt="">
      </div>
    </div>
    <div class="icon-footer">
      <el-button size="small" @click="handleClose">取 消</el-button>
      <el-button size="small" type="primary" @click="dialogIcon = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    props: {
      dialogIcon: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        dialogVisible: this.dialogIcon,
        radio3:""
      }
    },
    watch: {
      dialogIcon(val){
        this.dialogVisible = val;
      }
    },
    methods:{
      handleClose(){
        this.dialogVisible = false;
        this.$emit("close");
      }
    }
  }
</script>

<style scoped>

</style>
