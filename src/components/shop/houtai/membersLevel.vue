<template>
  <div>
      <div v-if="name==='hykdengji'">
           <div style="width:90px;height:30px; margin:15px 0;font-weight:bold;">会员卡等级</div>
        <el-col :span="24" style=" height:100%;background:#f2f1f6; padding:30px 0 0 167px;  border-radius:5px;">
        <el-form ref="form" label-width="180px" style='max-width:800px; min-width:400px;'>

            <el-form-item label="会员卡等级">
                <el-input v-model="form.rank" placeholder="只可以填写数字"></el-input>
            </el-form-item>
            <el-form-item label="更改名称">
                <el-input v-model="form.name" placeholder="请填写等级名称"></el-input>
            </el-form-item>
        <el-form-item label="最小成长值">
                <el-input v-model="form.minPrice" placeholder="请填写最小成长值"></el-input>
            </el-form-item>
            <el-form-item label="最大成长值">
                <el-input v-model="form.maxPrice" placeholder="请填写最大成长值"></el-input>
            </el-form-item>
            <el-form-item label="当前等级和优惠">
                <el-input v-model="form.discounts" placeholder="请填写当前等级折扣优惠"></el-input>
            </el-form-item>
            <el-form-item label="当前等级消费返还积分规则">

                消费 <el-input v-model="form.money" style="width:65px;"></el-input> 获得一点积分

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
  import axios from "axios"
  import config from '../../../store/config'
  const apiHost= config.proxy.apiHost;
export default {

  data(){
      return {
            form:{
                app_id:this.$store.state.app_id,
                _token: this.$store.state._token,
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
</style>
