<template>
  <div>
      <div v-if="name==='jifen'">
        <div style="width:80px;height:30px; margin:15px 0;font-weight:bold;">积分设置</div>
        <el-col :span="24" style=" height:288px;background:#f2f1f6; padding:30px 0 0 167px;  border-radius:5px;">
        <el-form  :model="form"  ref="form" class="demo-ruleForm" label-width="180px" style='max-width:800px; min-width:400px;'>

            <el-form-item label="消费积分" style="max-width: 500px" prop="integralSum"
                          :rules="[
      { required: true, message: '内容不能为空'},
      { type: 'number', message: '内容必须为数字值'}
    ]">
                <el-input  placeholder="请输入对应积分的消费金额" v-model="form.integralSum" v-model.number="form.integralSum" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="消费积分" style="max-width: 500px" prop="integralNum"
                          :rules="[
      { required: true, message: '内容不能为空'},
      { type: 'number', message: '内容必须为数字值'}
    ]">
                <el-input  placeholder="请输入每条评论可获得积分数量" v-model="form.integralNum" v-model.number="form.integralNum" auto-complete="off"></el-input>
            </el-form-item>
        <el-form-item label="首次登陆赠送" prop="loginIntegralNum"
                      :rules="[
      { required: true, message: '内容不能为空'},
      { type: 'number', message: '内容必须为数字值'}
    ]">
                <el-input placeholder="请输入首次登录可获得积分数量" v-model="form.loginIntegralNum" v-model.number="form.loginIntegralNum" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item style="margin-top:20px;">
                <el-button type="primary" @click="onSubmit" style="margin-left: 100px">保存</el-button>
            </el-form-item>

    </el-form>
     </el-col>
</div>
  </div>
</template>
<script>
  import qs from "qs"
  import axios from "axios"
  import config from '../../../store/config'
  const url = config.proxy.apiHost;
export default {

  data() {
    return {
      form:{
        var_name:"积分设置",
        integralSum:'',
        integralNum:'',
        loginIntegralNum:''
      }
    };
  },
  computed: {
    _name() {
      return this.name;
    }
  },
  props: ["name"],
  methods: {
      onSubmit(){
        let prams={
          "pay_consume":this.form.integralSum,
          "app_id":this.$store.state.app_id,
          "comment_consume":this.form.integralNum,
          "login_consume":this.form.loginIntegralNum,
          "_token":this.$store.state._token
        };
        let la=qs.stringify(prams);
        axios.post(`http://api.ztwlxx.club/user/Useconfig/addconsumeset`, la).then(res => {
          if (res.data.code === 200) {
            this.$refs.form.resetFields()
          }

        }).catch(res => {
        })
      },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {

  }
};
</script>
<style lang="scss" scoped>

</style>
