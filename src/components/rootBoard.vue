<!--预览界面-->
<template>
  <div class="board">
  <div class="board-box overview-shadow ">
    <p class="board-title" style="text-align: left"><span>微信授权</span></p>
    <div class="shouquanjindu" style="width: 80%;margin: 0 auto;">
      <el-steps :active="2" style="text-align: left">
        <el-step title="授权" icon=""></el-step>
        <el-step title="预览" icon=""></el-step>
        <el-step title="发布" icon=""></el-step>
        <el-step title="上线" icon=""></el-step>
      </el-steps>
    </div>
  </div>
  <div class="mine  clearfix" style="margin-top: 10px;background-color:#fff;width: 100%; height: 380px">
    <div class="mine-left " style="float: left;border: 3px solid #f2f1f6;background-color:#fff;width: 50%; height: 380px;overflow-y: scroll">
      <div class="mine-left-top" style="display: flex;background-color:#fff;text-align: center;height: 10%;line-height:44px;border-radius: 5px">
        <div style="flex: 1">微信ID</div><div style="flex: 1">操作</div></div>
      <div class="mine-left-top" style="margin-top: 5px; display: flex;background-color:#fff;text-align: center;height: 12%;line-height:44px;border-radius: 5px">
        <div style="flex: 1"><el-input style="width: 90%;height:100%;border: 0;outline:none;cursor: pointer;" v-model="input" placeholder="请输入微信号"></el-input></div><div style="flex: 1"><el-button @click="onSubmit" style="width: 100%;height:100%;" type="primary">添加</el-button></div></div>
      <div class="mine-left-top"  v-for="(item,index) in wechat_id" style=" margin-top: 5px;display: flex;background-color:#fff;text-align: center;height: 11%;line-height:44px;border-radius: 5px">
        <div style="flex: 1">{{item.wechat_id}}</div><div style="flex: 1;color:#67b0fd"><el-button @click="shanchu(item)" style="color: #2f85ff;border: 0;background-color:#fff;">删除</el-button> </div></div>
    </div>
    <div class="mine-right " style="float: right;border: 3px solid #f2f1f6;width: 50%; height: 380px"><div class="mine-right-top" style="width: 100%; height: 280px">
      <img style="display: block;width: 280px;height:280px;border: 0;margin: 20px auto" :src="qrcode_url" alt=""></div>
      <div class="mine-right-bottom" style="min-height: 80px;text-align: center;font-size: 30px">小程序浏览二维码</div></div>
  </div>
  <div class="grid-content bg-purple grid-rt " style="padding-top: 10px; margin-top: 10px;background-color:#fff;">
    <dl>
      <dt style="font-family: PingFangSC-Semibold;color: #001529;">授权说明</dt>
      <dd>1、一个微信小程序仅可授权给一个微盟商户（如小店、客来店、智店等）；</dd>
      <dd>2、位保证所有功能的正常使用，授权时请保持默认选择，把权限统一授权给微盟；</dd>
      <dd>3、新授权的小程序需与已授权的小程序及公众号主体一致；</dd>
      <dd>4、您在该入口授权的公众账号类型为小程序，请在授权页面正确选择。</dd>
    </dl>
    <dl style="margin-top: 40px; ">
      <dt  style="font-family: PingFangSC-Semibold;color: #001529;">小程序类型</dt>
      <dd>1、企业类型账号，可以根据需要确定是否申请微信认证 （认证入口：登录小程序——设置——基本设置——微信认证——详情）</dd>
      <dd>2、已认证账号可使用微信支付权限，个人类型账号暂不支持微信认证。</dd>
    </dl>
  </div>
  <div  >
    <el-button style="margin-top: 12px;" @click="up">上一步</el-button>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
  </div>
</template>

<script>
  import qs from "qs"
  import axios from "axios"
  import config from '../store/config'
  const url = config.proxy.apiHost;
    export default {
        name: "rootBoard",
      data(){
          return {
            input:"",
            qrcode_url:"http://o6wnztyd7.bkt.clouddn.com/ae7f420180501094140148.png",
            mag:"",
            wechat_id:""

          }
      },
      beforeCreate(){
        let prams={
          "app_id":this.$store.state.app_id,
          "_token":this.$store.state._token,
        };
        let la=qs.stringify(prams);
        axios.post(`http://api.ztwlxx.club/user/app/getone`, la).then(res => {
          // console.log(res);
          if (res.data.code === 200) {
            // this.$refs.form.resetFields()
            // console.log(this.qrcode_url);
            this.qrcode_url= this.getCookie("qiniu") +'/'+ res.data.data.qrcode_url
          }

        }).catch(res => {
        });
        let pram={
          "app_id":this.$store.state.app_id,
          "u_token":this.$store.state._token
        };
        let lala=qs.stringify(pram);
        axios.post(`http://api.ztwlxx.club/wechat/authorize/experlist`, lala).then(res => {
          // console.log(res);
          if (res.data.code === 200) {
            console.log(123);
            this.wechat_id = Array.prototype.slice.call(res.data.data);

          }
        }).catch(res => {
        })
      },
      methods: {
          jiazai(){
            let pram={
              "app_id":this.$store.state.app_id,
              "u_token":this.$store.state._token
            };
            let lala=qs.stringify(pram);
            axios.post(`http://api.ztwlxx.club/wechat/authorize/experlist`, lala).then(res => {
              // console.log(res);
              if (res.data.code === 200) {
                // console.log(123);
                this.wechat_id = Array.prototype.slice.call(res.data.data);
              }
            }).catch(res => {
            })
          },
          shanchu(item){
            let shan ={
              "app_id":this.$store.state.app_id,
              "u_token":this.$store.state._token,
              "wechatid":item.wechat_id
            };
            let lalala=qs.stringify(shan);
            axios.post(`http://api.ztwlxx.club/wechat/authorize/pullexper`, lalala).then(res => {
              // console.log(res);
              if (res.data.code === 200) {
                this.jiazai();
              }
            }).catch(res => {
            });
          },
        onSubmit(){
            let weixin ={
              "app_id":this.$store.state.app_id,
              "u_token":this.$store.state._token,
              "weichat":this.input
            };
            let lal=qs.stringify(weixin);
          axios.post(`http://api.ztwlxx.club/wechat/authorize/exper`, lal).then(res => {
            // console.log(res);
            if (res.data.code === 200) {
              console.log(123);
              this.jiazai();
              this.input="";
            }
            if (res.data.code !== 200) {
              this.input="";
              alert(res.data.msg);
            }

          }).catch(res => {
          });
        },
        getCookie(name) {
          var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

          if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
          } else {
            return null;
          }
        },
        up() {
          this.$router.push({path: '/wxchat', params:{root: true}})
        },
        next() {
          this.$router.push({path: '/fabu', params:{root: true}})
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
  .clearfix:after {content:"."; display:block; height:0; visibility:hidden; clear:both; }

  .clearfix { *zoom:1; }
</style>
