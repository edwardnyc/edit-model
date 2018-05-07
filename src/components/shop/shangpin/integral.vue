<!--商品分组对应其他信息-->
<template>
  <div>
      <div v-if="name==='hykshezhe'">
        <div style="width:80px;height:30px; margin:15px 20px;font-weight:bold;">新建商品</div>
        <div class="jindu" style="width: 80%;margin: 0 auto;">
          <el-steps :active="3">
            <el-step title="商品基本信息" icon="" style="text-align: left"></el-step>
            <el-step title="商品详情信息 " icon="" style="text-align: left"></el-step>
            <el-step title="其他信息" icon="" style="text-align: left"></el-step>
          </el-steps>
        </div>
        <el-col :span="24" style="  min-height:380px;background:#f2f1f6; padding:30px 0 0 167px;  border-radius:5px;">
          <div style="width:80px;height:30px; margin:5px -145px;">其他信息</div>
          <el-form ref="form" :model="form" class="demo-ruleForm" label-width="180px" style='max-width:800px; min-width:400px;position: relative'>
            <el-form-item label="初始销量"  prop="input1"
                          :rules="[
      { required: true, message: '内容不能为空'},
    ]">
              <el-input  placeholder="默认为0" v-model="form.input1" v-model.number="form.input1" auto-complete="off"></el-input><span style="color: #c3c3c5;position: absolute;top: 1px;right:-300px">设置后，您的用户看到的销量=初始销量+下单量</span>
            </el-form-item>
            <el-form-item label="每人限购" style="width: 500px">
            <span style="color: #727279" >特价限购商品请使用 <a href="#" style="color:#409EFF">限时折扣</a> 来实现</span>
            </el-form-item>
            <el-form-item :label=" '商品分组'+ ++index" v-for="(item, index) in listarr" :key="index">
              <el-input v-model="form['input'+ counter]"  placeholder="请输入检索关键词" clearable></el-input>
            </el-form-item>
            <el-button type="primary" v-on:click="addKey" style="border: 0;background-color:#f1f2f6;color: #409EFF;position: absolute;top: 125px;right:-100px">新增分组</el-button>
            <el-form-item label="会员价">
              <el-radio v-model="form.radio" label="1">启用会员价</el-radio>

            </el-form-item>
            <el-form-item label="库存计算方式">
              <el-radio v-model="form.radio1" label="3">下单减库存</el-radio>
              <el-radio v-model="form.radio1" label="4">支付减库存</el-radio><span style="color: #727279">&nbsp;&nbsp;&nbsp;&nbsp;下单减库存,存在 <a href="#" style="color: red">恶拍风险</a></span>
            </el-form-item>
            <el-form-item label="库存计算方式">
              <el-radio v-model="form.radio2" label="5">立即上架&nbsp;</el-radio>
              <el-radio v-model="form.radio2" label="6">暂不上架</el-radio>
            </el-form-item>
          </el-form>
        </el-col>
        <div class="shouquan" style="padding-left: 40%;">
          <el-button style="margin-top: 240px;width: 100px" >上一步</el-button>
          <el-button style="margin-top: 240px;width: 100px" >下一步</el-button>
        </div>
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
      counter: 3,
      listarr: [1],
      form:{
        input1:"",
        radio:"",
        radio1:"",
        radio2:"",
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
          // "pay_consume":this.form.integralSum,
          // "app_id":this.$store.state.app_id,
          // "comment_consume":this.form.integralNum,
          // "login_consume":this.form.loginIntegralNum,
          // "_token":this.$store.state._token
        };
        let la=qs.stringify(prams);
        axios.post(`${url}/user/Useconfig/addconsumeset`, la).then(res => {
          if (res.data.code === 200) {
            this.$refs.form.resetFields()
          }

        }).catch(res => {
        })
      },
    addKey() {
      if (this.counter <= 4) {
        this.listarr.push(1);
        this.counter++;
        this.form['input' + this.counter] = "";
      }

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
