<template>
  <div>
      <div v-if="name==='dayinji'">
         <div style="width:90px;height:30px; margin:15px 0;font-weight:bold;">打印机配置</div>
          <el-form ref="form" label-width="180px">
            <el-col :span="24" style=" height:176px;background:#f2f1f6; padding:30px 0 0 167px; border-radius:5px;">
          <el-form-item label="云打印ID">
                <el-input style="width:539px" v-model="form.id"></el-input>
            </el-form-item>
            <el-form-item label="云打印密钥">
                <el-input style="width:539px" v-model="form.my"></el-input>
            </el-form-item>
        </el-col>
          <el-col :span="24" style=" height:435px;background:#f2f1f6; padding:30px 0 0 167px; margin-top:5px; border-radius:5px;">
            <el-button type="primary" @click="onSubmit" style="margin-top: -15px">添加打印机</el-button>
            <div style="width:914px;height:38px; background:#fff;  border-radius:5px; margin-top: 20px">
                  <div style="float:left; width:50%;height:39px;text-align:center;line-height:39px;">设备号</div>
                  <div style="float:left; width:50%;height:39px;text-align:center;line-height:39px;">设备密钥</div>
              </div>
            <div style="width:914px;height:56px; background:#fff;  border-radius:5px; margin-top: 20px;padding-top: 8px">
                  <el-input v-model="form.input1" style="float:left; width:40%;height:39px;text-align:center;line-height:39px;margin-left: 5%;margin-right: 5%;border: 1px solid #cccccc;border-radius: 5px"></el-input>
                  <el-input v-model="form.input2" style="float:left; width:40%;height:39px;text-align:center;line-height:39px;margin-left: 5%;margin-right: 5%;border: 1px solid #cccccc;border-radius: 5px"></el-input>
              </div>
            <div style="width:914px;height:56px; background:#fff;  border-radius:5px;margin-top: 5px;padding-top: 8px ">
                  <el-input v-model="form.input3" style="float:left; width:40%;height:39px;text-align:center;line-height:39px;margin-left: 5%;margin-right: 5%;border: 1px solid #cccccc;border-radius: 5px"></el-input>
                  <el-input v-model="form.input4" style="float:left; width:40%;height:39px;text-align:center;line-height:39px;margin-left: 5%;margin-right: 5%;border: 1px solid #cccccc;border-radius: 5px"></el-input>
              </div>
            <div style="width:914px;height:56px; background:#fff;  border-radius:5px;margin-top: 5px;padding-top: 8px">
                  <el-input v-model="form.input5" style="float:left; width:40%;height:39px;text-align:center;line-height:39px;margin-left: 5%;margin-right: 5%;border: 1px solid #cccccc;border-radius: 5px"></el-input>
                  <el-input v-model="form.input6" style="float:left; width:40%;height:39px;text-align:center;line-height:39px;margin-left: 5%;margin-right: 5%;border: 1px solid #cccccc;border-radius: 5px"></el-input>
              </div>
            <div style="width:914px;height:56px; background:#fff;  border-radius:5px;margin-top: 5px;padding-top: 8px ">
                  <el-input v-model="form.input7" style="float:left; width:40%;height:39px;text-align:center;line-height:39px;margin-left: 5%;margin-right: 5%;border: 1px solid #cccccc;border-radius: 5px"></el-input>
                  <el-input v-model="form.input8" style="float:left; width:40%;height:39px;text-align:center;line-height:39px;margin-left: 5%;margin-right: 5%;border: 1px solid #cccccc;border-radius: 5px"></el-input>
              </div>


                <el-button type="primary" @click="onSubmit" style="position: absolute;bottom: 210px;left: 1045px">保存</el-button>

        </el-col>



        </el-form>
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
              id:'',
              my:'',
              input1:"",
              input2:"",
              input3:"",
              input4:"",
              input5:"",
              input6:"",
              input7:"",
              input8:"",
          },
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
        var shuju = new FormData();
        shuju.append('print_id',this.form.id);
        shuju.append('app_id',this.$store.state.app_id);
        shuju.append('appsecret',this.form.my);

        // console.log(this.$store.state._token);
        shuju.append('_token', this.$store.state._token);
        axios.post(`api.ztwlxx.club/user/app/print_config_update`, shuju, {
          // headers:{'Content-Type':'multipart/form-data'}
        }).then(res => {
          if (res.data.code === 200) {
            this.$refs.form.resetFields()
          }

        }).catch(res => {
        })

      }

   },
   created () {

   }
}
</script>
<style lang="scss" scoped>
</style>
