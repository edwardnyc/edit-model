
<!--上线界面-->
<template>
  <div class="board">
    <div class="board-box overview-shadow ">
      <p class="board-title" style="text-align: left"><span>微信授权</span></p>
      <div class="shouquanjindu" style="width: 80%;margin: 0 auto;">
        <el-steps :active="4" style="text-align: left">
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
          <div style="flex: 1">修改时间</div><div style="flex: 1">提交类型</div></div>
        <div class="mine-left-top"  v-for="(item,index) in wechat_id" style=" margin-top: 5px;display: flex;background-color:#fff;text-align: center;height: 11%;line-height:44px;border-radius: 5px">
          <div style="flex: 1">{{item.create_at|formatDate}}</div><div style="flex: 1;"><span style="color: black" v-if="item.status==0">提交审核</span></div></div>
      </div>
      <!--将来要换的太阳图-->
      <div class="mine-right " style="float: right;border: 3px solid #f2f1f6;width: 50%; height: 380px"><div class="mine-right-top" style="width: 100%; height: 280px">
        <img style="display: block;width: 280px;height:280px;border: 0;margin: 20px auto" :src="qrcode_url" alt=""></div>
        <div class="mine-right-bottom" style="min-height: 80px;text-align: center;font-size: 30px">小程序浏览二维码</div></div>
    </div>
    <div class="grid-content bg-purple grid-rt " style="border-radius: 5px; border: 8px solid #ffffff; padding-top: 50px; padding-bottom: 50px;margin-top: 60px;background-color:#f2f1f6;">
      <div >
        <el-button style="margin-top: 12px;" @click="up">上一步</el-button>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from "qs"
  import axios from "axios"
  import config from '../store/config'
  import {formatDate} from './shijian'
  const url = config.proxy.apiHost;
  export default {
    filters: {
      formatDate(time) {
        var date = new Date((time)*1000);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      }
    },
    name: "huifuBoard",
    data(){
      return {
        input:"",
        qrcode_url:"http://o6wnztyd7.bkt.clouddn.com/ae7f420180501094140148.png",
        msg:"",
        wechat_id:"",
        create_at:"",
        status:""
      }
    },
    beforeCreate(){
      //页面加载请求的二维码
      let prams={
        "app_id":this.$store.state.app_id,
        "_token":this.$store.state._token,
      };
      let la=qs.stringify(prams);
      axios.post(`http://api.ztwlxx.club/user/app/getone`, la).then(res => {
        if (res.data.code === 200) {
          this.qrcode_url= this.getCookie("qiniu") +'/'+ res.data.data.qrcode_url
        }
      }).catch(res => {
      });
      let pram={
        "app_id":this.$store.state.app_id,
        "u_token":this.$store.state._token
      };
      let lala=qs.stringify(pram);
      axios.post(`http://api.ztwlxx.club/wechat/authorize/audit_list`, lala).then(res => {
        // ;
        if (res.data.code === 200) {
          this.wechat_id = Array.prototype.slice.call(res.data.data);
        }
      }).catch(res => {
      })
    },
    methods: {

      onSubmit(){

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
        this.$router.push({path: '/fabu', params:{root: true}})
      },
      next() {
        let prama={
          "app_id":this.$store.state.app_id,
          "u_token":this.$store.state._token
        };
        let lalala=qs.stringify(prama);
        axios.post(`http://api.ztwlxx.club/wechat/authorize/release`, lalala).then(res => {
          // ;
          if (res.data.code === 200) {
            console.log(res.data.data);
            alert(res.data.msg);
            //root:true代表预览页授权通过
            this.$router.push({path: '/huifu', params:{root: true}})
          }
          if(res.data.code!==200){
            alert(res.data.msg);
          }
        }).catch(res => {
        })
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
