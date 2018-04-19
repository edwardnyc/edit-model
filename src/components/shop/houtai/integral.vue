<template>
  <div>
      <div v-if="name==='jifen'">
        <div style="width:80px;height:30px; margin:15px 0;font-weight:bold;">积分设置</div>
        <el-col :span="24" style=" height:288px;background:#f2f1f6; padding:30px 0 0 167px;  border-radius:5px;">
        <el-form ref="form" label-width="180px" style='max-width:800px; min-width:400px;'>

            <el-form-item label="消费积分" style="width: 500px">
                <el-input placeholder="请输入对应积分的消费金额" v-model="form.integralSum"></el-input>
            </el-form-item>
            <el-form-item label="消费积分" style="width: 500px">
                <el-input placeholder="请输入每条评论可获得积分数量" v-model="form.integralNum"></el-input>
            </el-form-item>
        <el-form-item label="首次登陆赠送">
                <el-input placeholder="请输入首次登录可获得积分数量" v-model="form.loginIntegralNum"></el-input>
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
  import axios from "axios"
  import config from '../../../store/config'
  const apiHost= config.proxy.apiHost;
export default {

  data() {
    return {
      form:{
        app_id:this.$store.state.app_id,
        var_name:"积分设置",
        _token: this.$store.state._token,
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
        axios.post(`/api/manage/configgroup/addsetting`, this.form).then(res => {
          if (res.data.code === 200) {
            this.$refs.form.resetFields()
          }

        }).catch(res => {
        })
      }
  },
  created() {

  }
};
</script>
<style lang="scss" scoped>

</style>
