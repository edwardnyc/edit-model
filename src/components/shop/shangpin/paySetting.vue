<!--商品管理页对应商品基本信息-->
<template>
  <div>
    <div v-if="name==='zhifu'">
      <div style="width:80px;height:30px; margin:15px 20px;font-weight:bold;">新建商品</div>
      <div class="jindu" style="width: 80%;margin: 0 auto;">
        <el-steps :active="1" >
          <el-step title="商品基本信息" icon="" style="text-align: left"></el-step>
          <el-step title="商品详情信息 " icon="" style="text-align: left"></el-step>
          <el-step title="其他信息" icon="" style="text-align: left"></el-step>
        </el-steps>
      </div>
      <el-col :span="24" style="  min-height:380px;background:#f2f1f6; padding:30px 0 0 167px;  border-radius:5px;">
        <div style="width:80px;height:30px; margin:5px -145px;">基本信息</div>
        <el-form ref="form" :model="form" class="demo-ruleForm" label-width="180px" style='max-width:800px; min-width:400px;position: relative'>
          <el-form-item label="商品名称" prop="input1"
                        :rules="[
      { required: true, message: '内容不能为空'},
    ]">
            <el-input  placeholder="请输入商品名称" v-model="form.input1" v-model.number="form.input1" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品类目" style="max-width: 400px" prop="input2"
                        :rules="[
      { required: true, message: '内容不能为空'},
    ]">
            <el-input  placeholder="选择商品类目" v-model="form.input2" v-model.number="form.input2" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item :label=" '商品分组'+ ++index" v-for="(item, index) in listarr" :key="index">
            <el-input v-model="item.value"  placeholder="请输入分组名" clearable></el-input>
          </el-form-item>
          <el-button type="primary" v-on:click="addKey" style="float: right;border: 0;background-color:#f1f2f6;color: #409EFF;position: absolute;top: 125px;right:-100px">新增分组</el-button>
          <el-form-item label="商品类型">
            <el-radio v-model="form.radio1" label="3">实物商品 <span style="color: #acacb4;">(物流发货)</span> </el-radio>
            <el-radio v-model="form.radio1" label="4">海淘商品 <span style="color: #acacb4;">(买家必填身份证)</span> </el-radio>
          </el-form-item>
          <el-form-item label="商品图片">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove" >
            <i class="el-icon-plus"></i>
          </el-upload>
            <span style="color: #acacb4;">尺寸750x750像素以上，大小2M以下，最多10张</span>
          </el-form-item>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form>
      </el-col>
      <el-col :span="24" style="margin-top: 10px;min-height:350px;background:#f2f1f6; padding:30px 0 0 167px;  border-radius:5px;">
        <div style="width:120px;height:30px; margin:5px -145px;">运费/价格设置</div>
        <el-form ref="form" :model="form" class="demo-ruleForm" label-width="180px" style='max-width:800px; min-width:400px;position: relative'>
          <el-form-item label="运费设置" style="width: 600px" prop="input5"
                        :rules="[
      { required: true, message: '内容不能为空'},
      { type: 'number', message: '内容必须为数字值'}
    ]">
            <el-input  placeholder="123456" v-model="form.input5" v-model.number="form.input5" auto-complete="off"></el-input>
          </el-form-item>
          <el-button type="primary" v-on:click="" style="border: 0;background-color:#f1f2f6;color: #409EFF;position: absolute;top: 1%;right:120px">刷新</el-button>
          <el-button type="primary" v-on:click="" style="border: 0;background-color:#f1f2f6;color: #409EFF;position: absolute;top: 1%;right:50px">新增</el-button>
          <el-dropdown trigger="click" style="position: relative">
      <span class="el-dropdown-link" style=" border: 0;background-color:#f1f2f6;color: #409EFF;position: absolute;top: -69px;right:-810px">
        收起模板
      </span>
            <el-dropdown-menu slot="dropdown" style="width: 60%;min-height: 50px;margin-left: 30%;padding: 0">
              <el-dropdown-item><div style="background-color:#f2f2f6; width: 100%; height: 50px"><ul class="peisong"><li>配送区域</li><li>首饰(件)</li><li>运费(元)</li><li>续件(件)</li><li>续费(元)</li></ul></div></el-dropdown-item>
              <el-dropdown-item><div style="width: 100%;height: 50px"><ul class="peisong"><li>所有地区</li><li>1</li><li>1</li><li>1</li><li>1</li></ul></div></el-dropdown-item>
              <el-dropdown-item><div style="background-color:#f2f2f6;width: 100%;height: 50px"><ul class="peisong"><li>所有地区</li><li>1</li><li>1</li><li>1</li><li>1</li></ul></div></el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
        </el-form>
      </el-col>
      <div class="shouquan" style="padding-left: 40%;">
        <el-button style="margin-top: 12px;width: 100px" >取消</el-button>
        <el-button style="margin-top: 12px;width: 100px" >下一步</el-button>
      </div>
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
        dialogImageUrl: '',
        dialogVisible: false,
        fileList: [
        ],
        counter: 1,
        listarr: [{
          value: ''
        }],
        form: {
          input1: '',
          input2: '',
          input3: '',
          input4: '',
          input5: '',
          radio1:''
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
      onSubmit() {

        axios.post(`${url}`, {
          // headers:{'Content-Type':'multipart/form-data'}
        }).then(res => {
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
      },
      addKey() {
        if (this.counter < 3) {
          this.listarr.push({
            value: ''
          });
          this.counter++;
        }

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
    created () {
      //  alert(this.name)
    }
  }
</script>
<style lang="scss" scoped>
 .peisong {
   width: 100%;
   height: 100%;
   display: flex;
 }
 .peisong li {
   padding-left: 5px;
  float: left;
   flex: 1;
}
  .el-dropdown-menu__item {
    margin: 0;
    padding: 0;
  }
</style>
