<template>
  <div>
      <div v-if="name==='dayin'">
        <div style="width:80px;height:30px; margin:15px 0;font-weight:bold;">打印设置</div>
        <el-col :span="24" style=" height:680px;background:#f2f1f6; padding:30px 0 0 167px">
        <el-form ref="form" label-width="180px" style='width:470px; height:590px;background:#fff;overflow:hidden;'>
            <div style="margin:10px 0 28px 32px; font-size:14px; font-weight:bold;">
            请选择是否打印
            </div>

            <el-form-item label="商城订单">
                <el-radio-group v-model="form.resourceA" style="padding-left:62px">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="拼团订单">
                <el-radio-group v-model="form.resourceB" style="padding-left:62px">
                   <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="砍价订单">
                <el-radio-group v-model="form.resourceC" style="padding-left:62px">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="积分订单">
                <el-radio-group v-model="form.resourceD" style="padding-left:62px">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="营销订单">
                <el-radio-group v-model="form.resourceE" style="padding-left:62px">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="点餐订单">
                <el-radio-group v-model="form.resourceF" style="padding-left:62px">
                   <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="外卖订单">
                <el-radio-group v-model="form.resourceG" style="padding-left:62px">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="买单订单">
                <el-radio-group v-model="form.resourceH" style="padding-left:62px">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                </el-radio-group>
            </el-form-item>
             <el-form-item style="margin-top:100px; border:0;">
                <el-button type="primary" @click="onSubmit">保存</el-button>
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

  data(){
      return {
             form: {
               app_id:this.$store.state.app_id,
               _token: this.$store.state._token,
               var_name:"打印设置",
               resourceA: '',
               resourceB: '',
               resourceC: '',
               resourceD: '',
               resourceE: '',
               resourceF: '',
               resourceG: '',
               resourceH: '',

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
           onSubmit(){

             axios.post(`/api/manage/configgroup/addsetting`, this.form).then(res => {
               if (res.data.code === 200) {
                 this.$refs.form.resetFields()
               }

             }).catch(res => {
             })
           }
   },
   created () {
    //  alert(this.name)
   }
}
</script>
<style lang="scss" scoped>
.el-form-item{
    margin-bottom: 6px;
    border-bottom: 1px solid #efefef;
}
</style>
