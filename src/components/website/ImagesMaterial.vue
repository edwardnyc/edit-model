<template>
  <el-dialog
    title="素材库"
    :visible.sync="dialogVisible"
    width="898px"
    :before-close="handleClose"
    class="material">
    <div class="material-con">
      <div class="menu-left">
        <div class="menu-item">我的图片</div>
        <div class="up-pic">
          <el-button size="mini"><big>+</big>上传</el-button>
          <span class="desc">请上传小于2MB的图片</span>
          <input id="upPic" type="file" style="display: none">
        </div>
      </div>
      <div class="material-box">
        <div class="content">
          <div class="imgs">
            <span class="del-img"><big>x</big></span>
            <img src="https://image-c.weimobwmc.com/saas-wxbiz/4c9e6ccd08b94ce2b62a2b945bf57d93.png" alt="">
          </div>
        </div>
        <div class="material-btn">
          <el-button size="small" @click="handleClose">取 消</el-button>
          <el-button size="small" type="primary" @click="dialogVisible = false">确 定</el-button>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    props: {
      dialogImages: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        dialogVisible: this.dialogImages
      }
    },
    watch: {
      dialogImages(val){
        this.dialogVisible = val;
      }
    },
    methods:{
      handleClose(){
        this.dialogVisible = false;
        this.$emit("close");
      }
    },
    created () {
     this.attrHandle();
    }
  }
</script>

<style scoped>

</style>
