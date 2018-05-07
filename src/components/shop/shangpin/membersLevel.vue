<!--商详模板-->
<template>
  <div>
      <div v-if="name==='hykdengji'">
           <div style="width:90px;height:30px; margin:15px 0;font-weight:bold;">会员卡等级</div>
        <el-col :span="24" style=" height:100%;background:#f2f1f6; padding:30px 0 0 167px;  border-radius:5px;">
        <el-form :model="form" class="demo-ruleForm" ref="form" label-width="200px" style='max-width:800px; min-width:400px;'>

            <el-form-item label="会员卡等级" prop="rank" :rules="[
      { required: true, message: '内容不能为空'},
      { type: 'number', message: '内容必须为数字值'}
    ]">
                <el-input v-model="form.rank" v-model.number="form.rank" auto-complete="off" placeholder="只可以填写数字"></el-input>
            </el-form-item>
            <el-form-item label="更改名称" prop="name" :rules="[
      { required: true, message: '内容不能为空'}
    ]">
                <el-input v-model="form.name"  auto-complete="off" placeholder="请填写等级名称"></el-input>
            </el-form-item>
        <el-form-item label="最小成长值" prop="minPrice" :rules="[
      { required: true, message: '内容不能为空'},
      { type: 'number', message: '内容必须为数字值'}
    ]">
                <el-input v-model="form.minPrice" v-model.number="form.minPrice" auto-complete="off" placeholder="请填写最小成长值"></el-input>
            </el-form-item>
            <el-form-item label="最大成长值" prop="maxPrice" :rules="[
      { required: true, message: '内容不能为空'},
      { type: 'number', message: '内容必须为数字值'}
    ]">
                <el-input v-model="form.maxPrice" v-model.number="form.maxPrice" auto-complete="off" placeholder="请填写最大成长值"></el-input>
            </el-form-item>
            <el-form-item label="当前等级和优惠" prop="discounts" :rules="[
      { required: true, message: '内容不能为空'},
      { type: 'number', message: '内容必须为数字值'}
    ]">
                <el-input v-model="form.discounts" v-model.number="form.discounts" auto-complete="off" placeholder="请填写当前等级折扣优惠"></el-input>
            </el-form-item>
            <el-form-item label="当前等级消费返还积分规则" prop="money" :rules="[
      { required: true, message: '内容不能为空'},
      { type: 'number', message: '内容必须为数字值'}
    ]">

                消费 <el-input v-model="form.money" v-model.number="form.money" auto-complete="off" style="width:65px;"></el-input> 获得一点积分

            </el-form-item>
            <el-form-item style="margin-top:100px;">
                <el-button type="primary" @click="onSubmit">保存</el-button>
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

  data(){
      return {
            form:{
                var_name:"会员卡等级",
                rank:'',
                name:'',
                minPrice:'',
                maxPrice:'',
                discounts:'',
                money:''
            }
      }
  },
  computed: {
      _name () {
        return this.name
      }
  },
  props: ['name'],
   methods: {
     onSubmit() {
       // console.log(this.data);
       let prams={
                    "grade":this.form.rank,
                    "_appid":this.$store.state.app_id,
                    "grade_name":this.form.name,
                    "begin_experience":this.form.minPrice,
                    "end_experience":this.form.maxPrice,
                    "grade_discount":this.form.discounts,
                    "grade_integral":this.form.money,
                    "_token":this.$store.state._token
                 };
       let la=qs.stringify(prams);
       axios.post(`${url}/catering/v1.publics/addviplv`, la).then(res => {
         if (res.data.code === 200) {
           this.$refs.form.resetFields()
         }

       }).catch(res => {
       })
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
  },

   created () {
    //  alert(this.name)
   }
}
</script>
<style lang="scss" scoped>
</style>
