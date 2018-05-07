<template>
  <div>
    <div v-if="name==='zhifu'" >
      <div style="width:80px;height:30px; margin:15px 0;font-weight:bold;">支付设置</div>
      <el-col :span="24" style=" height:680px;background:#f2f1f6; padding:30px 0 0 167px;  border-radius:5px;">
        <el-form ref="form" :model="form" label-width="180px" style='max-width:800px; min-width:400px;'>
          <el-form-item  label="appid" prop="input1">
            <el-input v-model="form.input1" placeholder="请输入appid"></el-input>
          </el-form-item>
          <el-form-item label="appsecret" prop="input2">
            <el-input v-model="form.input2" placeholder="请输入app密码"></el-input>
          </el-form-item>
          <el-form-item label="商户ID" prop="input3" >
            <el-input v-model="form.input3"  placeholder="请输入商户id"></el-input>
          </el-form-item>
          <el-form-item label="商户秘钥" prop="input4">
            <el-input v-model="form.input4" placeholder="请输入商户秘钥" ></el-input>
          </el-form-item>
          <el-form-item label="支付证书pem格式" prop="input5">
            <el-button type="primary" @click="chufa('upload_file0')" style="background-color:#fff;color: black;border: 1px solid #cccccc">上传</el-button>
            <span style="font-size: 12px" v-if="form.input5 && form.input5.name.length>0">{{form.input5.name}}</span>
            <input accept=".pem" name="img" id="upload_file0" type="file" style="display: none;" @change="l($event)">
          </el-form-item>
          <el-form-item label="证书密钥pem格式" prop="input6">
            <el-button type="primary" @click="chufa('upload_file1')" style="background-color:#fff;color: black;border: 1px solid #cccccc">上传成功&nbsp;&nbsp;请继续上传</el-button>
            <span style="font-size: 12px" v-if="form.input6 && form.input6.name.length>0">{{form.input6.name}}</span>
            <input accept=".pem" name="img" id="upload_file1" type="file" style="display: none;" @change ='l1($event)'>
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
  // import qs from "qs"
  import axios from "axios"
  import config from '../../../store/config'
  const url = config.proxy.apiHost;
  export default {

    data(){
      return {
        fileList: [
        ],
        form: {
          input1: '',
          input2: '',
          input3: '',
          input4: '',
          input5: '',
          input6: ''
        },
        delivery: false,
      }
    },
    computed: {
      _name () {
        return this.name
      }
    },
    props: ['name'],
    methods: {

      l (e) {
       this.form.input5 = e.target.files[0];
      },
      l1 (e) {
        this.form.input6 = e.target.files[0]
      },
      chufa (index) {
        document.getElementById(index).click();
      },
      onSubmit() {
        var shuju = new FormData();
        shuju.append('appid',this.form.input1);
        shuju.append('app_id',this.$store.state.app_id);
        shuju.append('appsecret',this.form.input2);
        shuju.append('shop_id',this.form.input3);
        shuju.append('shop_key',this.form.input4);
        shuju.append('peminput',this.form.input5);
        shuju.append('peminputs',this.form.input6);
        // console.log(this.$store.state._token);
        shuju.append('_token', this.$store.state._token);
        axios.post(`http://api.ztwlxx.club/user/Useconfig/add`, shuju, {
          headers:{'Content-Type':'multipart/form-data'}
        }).then(res => {
         if (res.data.code === 200) {
           this.$refs.form.resetFields()
         }

        }).catch(res => {
        })
      },
    },
    created () {
      //  alert(this.name)
    }
  }
</script>
<style lang="scss" scoped>

</style>
