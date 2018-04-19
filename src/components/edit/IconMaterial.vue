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
      <div v-for="(item, index) in 10" class="icon-item" :key="index" @click="selectIcon(index)"  :class="{ 'currentIcon' : currentIconIndex === index}">
        <img src="http://stc.vc.weimob.cn/attachment/1000000007/9b4d866bfb1512453938515.svg" alt="">
        <!-- <i class="el-icon el-icon-edit"></i> -->
      </div>
    </div>
    <div class="icon-footer">
      <el-button size="small" @click="handleClose">取 消</el-button>
      <el-button size="small" type="primary" @click="addIco">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import axios from 'axios';
  export default {
    props: {
      dialogIcon: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        dialogVisible: this.dialogIcon,
        radio3: '',
        currentIconIndex: '',
      };
    },
    watch: {
      dialogIcon(val) {
        this.dialogVisible = val;
      },
    },
    methods: {
      handleClose() {
        this.dialogVisible = false;
        this.$emit('close');
      },
      addIco() {
        this.dialogVisible = false;
        this.$emit('close');
        this.$emit('newIco');
      },
      selectIcon(index) {
        this.currentIconIndex = index;
      },
    },
  };
</script>

<style scoped>
  .currentIcon {
    border:1px solid #00ffff;
  }
</style>
