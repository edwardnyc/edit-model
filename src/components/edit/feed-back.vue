<!-- coded by Rae -->
<template>
  <el-dialog
    title="意见反馈"
    :visible.sync="dialogVisible"
    :before-close="handleClose"
    class="material">
    <el-form :model="form">
      <el-form-item label="联系方式">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio-group v-model="form.type">
          <el-radio label="1">手机</el-radio>
          <el-radio label="2">邮箱</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="反馈内容">
        <el-input type="textarea" v-model="form.message"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitFeedBack">确 定</el-button>
    </div>
  </el-dialog>
</template>


<script>
import axios from 'axios';
export default {
  props: {
    dialogFB: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogVisible: this.dialogImages,
      form: {
        tel: '',
        type: '',
        message: '',
      },
    };
  },
  watch: {
    dialogFB(val) {
      this.dialogVisible = val;
    },
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
      this.$emit('close');
    },
    submitFeedBack() {
      this.dialogVisible = false;
      let tform = JSON.parse(JSON.stringify(this.form));
      tform._token = this.$store.state._token;
      tform.table = 'message';
      axios({
        method: 'post',
        url: '/master/admin/crud/create',
        data: tform,
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>


<style scoped>
form {
  padding:0 30px;
}
</style>
