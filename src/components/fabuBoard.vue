<!--发布界面-->
<template>
  <div class="board">
    <div class="board-box overview-shadow ">
      <p class="board-title" style="text-align: left"><span>微信授权</span></p>
      <div class="shouquanjindu" style="width: 80%;margin: 0 auto;">
        <el-steps :active="3" style="text-align: left">
          <el-step title="授权" icon=""></el-step>
          <el-step title="预览" icon=""></el-step>
          <el-step title="发布" icon=""></el-step>
          <el-step title="上线" icon=""></el-step>
        </el-steps>
      </div>
    </div>
    <div class="mine shouquan clearfix" style="margin-top: 10px;background-color:#fff;width: 100%;min-height: 300px;" >
      <el-col :span="24" style=" height:100%;background:#fff; padding:30px 0 0 167px;  border-radius:5px;">
        <el-form :model="form" class="demo-ruleForm"  ref="form" label-width="200px" style='max-width:850px; min-width:420px;'>
      <el-form-item label="标题" prop="name" :rules="[
      { required: true, message: '内容不能为空'}
    ]">
        <el-input v-model="form.name"  auto-complete="off" placeholder="请输入小程序标题"></el-input>
      </el-form-item>

          <el-form-item label="选择类目" >
            <el-select v-model="one" style="display: block;float: left; height: 40px;min-width: 150px;border-radius: 3px;border: 1px solid #e0e0e2">
              <el-option v-for="item in UnitRows"  :value="item.name" :key="item.key">
                {{item.name}}
              </el-option>
            </el-select>
            <el-select v-model="two" style="display: block;float: left;margin-left: 5px; height: 40px; min-width: 150px;border-radius: 3px;border: 1px solid #e0e0e2">
              <el-option v-for="item in DepartmentRows" :value="item.name" :key="item.key" >
                {{item.name}}
              </el-option>
            </el-select>
            <el-select v-model="three" style="display: block;margin-left: 5px;float: left; height: 40px;min-width: 150px;border-radius: 3px;border: 1px solid #e0e0e2">
              <el-option   v-for="item in UserList" :value="item.name" :key="item.key">
                {{item.name}}
              </el-option>
            </el-select>
          </el-form-item>
      <el-form-item :label=" '关键词'+ ++index" v-for="(item, index) in listarr" :key="index">
        <el-input v-model="item.value"  placeholder="请输入检索关键词不超过20个字" clearable max="20"></el-input>
      </el-form-item>
          <el-button style="margin-bottom: 40px" type="primary" v-on:click="addKey" >添加检索关键词</el-button>
        </el-form>
      </el-col>
    </div>
    <!--<div class="grid-content bg-purple grid-rt shouquan" style="padding-top: 10px; margin-top: 10px;background-color:#fff;">-->

    <!--</div>-->
    <div style="padding-bottom: 10%;padding-top: 5%">
      <el-button @click="up" style="margin-top: 12px;" >上一步</el-button>
      <el-button @click="next" style="margin-top: 12px;" >下一步</el-button>
    </div>

  </div>
</template>

<script>
  import qs from "qs"
  import axios from "axios"
  import config from '../store/config'
  const url = config.proxy.apiHost;
  export default {
    name: "fabuBoard",
    data() {
      return {
        UnitRows:[],
        DepartmentRows:[],
        UserList:[],
        counter: 1,
        one:'',
        two:'',
        three:'',
        msg:"",
        listarr: [{
          value: ''
        }],
        form: {
          name: ''
        },
      }
    },
    //加载页面获取的类目
    beforeCreate(){
      let prams={
        "app_id":this.$store.state.app_id,
        "u_token":this.$store.state._token,
      };
      let la=qs.stringify(prams);
      axios.post(`http://api.ztwlxx.club/wechat/authorize/get_category`, la).then(res => {
        // console.log(res);
        if (res.data.code === 200) {
          this.UnitRows = res.data.data[0];
          this.DepartmentRows = res.data.data[1];
          this.UserList = res.data.data[2];
        }
      }).catch(res => {
      });
    },
        //标题的验证方法
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
        methods: {
          addKey() {
            if (this.counter < 10) {
              this.listarr.push({
                value: ''
              });
              this.counter++;
            }
          },
          up(){
            this.$router.push({path: '/root', params:{root: true}})
          },
          //提交发布页面
          next() {

            var arr= new Array();
            for (var i=0;i<this.listarr.length;i++){
              arr.push(this.listarr[i].value);
            }
            //遍历选中的类目,给后台发送id(key)和name
            let ii= 0;
            [...this.UnitRows].forEach((item,index)=>{
              if(item.name==this.one){
                    ii = index;
              }
            });
            let a= 0;
            [...this.UnitRows].forEach((item,index)=>{
              if(item.name==this.two){
                a = index;
              }
            });
            let b= 0;
            [...this.UnitRows].forEach((item,index)=>{
              if(item.name==this.three){
                b = index;
              }
            });
            // console.log(this.UnitRows[ii].name);
            let pram={
              "app_id":this.$store.state.app_id,
              "u_token":this.$store.state._token,
              "keyword":arr,
              "title":this.form.name,
              "first_id":this.UnitRows[ii].key,
              "first_class":this.UnitRows[ii].name,
              "second_id":this.DepartmentRows[a].key,
              "second_class":this.DepartmentRows[a].name,
              "third_id":this.UserList[b].key,
              "third_class":this.UserList[b].name,
            };
            let lala=qs.stringify(pram);
            axios.post(`http://api.ztwlxx.club/wechat/authorize/submit_audit`, lala, 'charset=utf-8',).then(res => {
              // console.log(this.UnitRows[ii].name);
              if (res.data.code == 200) {
                this.$router.push({path: '/huifu', params:{root: true}});
                alert(res.data.msg);
              }else {
                alert(res.data.msg);
              }
            }).catch(res => {
            });
          },
        },
      }
</script>

<style lang="scss" scoped>
  @import  "../assets/scss/_baseFunction";
  .el-menu {
    border-right: none;
  }
  .board{
    background-color: #f2f1f6;
    // border: 1px solid #dcdcdc;
    // padding: 80px;
    font-size: 12px;
    .board-title{
      font-size: 16px;
      margin-bottom: 20px;
      span{
        font-family: PingFangSC-Semibold;
        color: #001529;
        display: inline-block;
      }
    }
    .board-box{
      margin-bottom: 10px;
      padding: 20px;
      background: #fff;
      &.board-box-active{
        .board-title span{
          border-bottom: 2px solid #1DA2C8;
        }
      }
      &:last-child {
        margin: 0;
      }
    }
    .grid-rt{
      text-align: center;
      dd{
        padding: 5px 0;
      }
    }
    .process-box{
      font-size: 12px;
      // text-align: left;
      .process-title{
        font-family: PingFangSC-Semibold;
        color: #001529;
        margin: 40px auto 20px;
      }
      .btn-submit {
        display: inline-block;
        // transform: scale(0.9166);
        width: 172px;
        height: 26px;
        line-height: 26px;
        background: #1DA2C8;
        border-radius: 100px;
        color: #fff;
      }
      .process-notice{
        line-height: 60px;
        span{
          color: #1DA2C8;
        }
      }
    }
  }
  .sign-wechat {
    text-align: center;
  }
  input.el-input__inner {
    border: 0;outline:none;cursor: pointer
  }
  .weishouquan {
    display: none;
  }
  .clearfix:after {content:"."; display:block; height:0; visibility:hidden; clear:both; }

  .clearfix { *zoom:1; }
</style>
