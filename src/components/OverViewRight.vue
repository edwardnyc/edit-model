<style lang="scss" scoped>
@import  "../assets/scss/overviewright";

.box-one, .box-two, .box-three, .box-four {
  background: #fff;
}
.box-one .overview-title{
  line-height: 40px;
  font-size: 20px;
  padding-left: 10px;
}

</style>
<template>
  <div>
    <div class="box-one overview-shadow">
      <div class="grid-content bg-purple version-box version-lf">
        <h2 class="title">目前版本：基础版</h2>
        <dl class="info">
          <dd>升级到商务版将解锁使用一下服务：</dd>
          <dd>— 装修：全部官方模板、更改版权</dd>
          <dd>— 表单：全部表单线索</dd>
          <dd>— 数据：全方位数据分析</dd>
          <dd>— 应用：全部常用应用</dd>
          <dd>— 素材库：不限图片数</dd>
        </dl>
        
        <div class="btn">
          <p>为了您能获得更好的体验，我们建议您</p>
          <div>购买商务版</div>
        </div>
      </div>
    </div>
    <div class="box-two overview-shadow">
      <img src="../assets/images/erweima.jpg" alt="">
      <div class="overview-title">微站官方公众号</div>
      <p>官方电话：10105188</p>
      <p>客服QQ：4006305400</p>
      <p>优秀案例、答疑反馈、敬请关注</p>
    </div>
    
    <div class="box-three overview-shadow">
      <div class="overview-title">更新公告</div>
      <ul>
        <li>
          <p>微站v1.2.0更新公告</p>
          <span>2018-01-16</span>
        </li>
        <li>
          <p>微站v1.2.0更新公告</p>
          <span>2018-01-16</span>
        </li>
        <li>
          <p>微站v1.2.0更新公告</p>
          <span>2018-01-16</span>
        </li>
        <li>
          <p>微站v1.2.0更新公告</p>
          <span>2018-01-16</span>
        </li>
        <li>
          <p>微站v1.2.0更新公告</p>
          <span>2018-01-16</span>
        </li>
        <li>
          <p>微站v1.2.0更新公告</p>
          <span>2018-01-16</span>
        </li>
      </ul>
    </div>  

    <div class="box-four overview-shadow">
      <div class="overview-title">意见反馈</div>
      <el-form class="feed-box">
        <el-form-item>
          <el-input type="textarea" :rows="1" placeholder="请输入您的宝贵意见..." v-model="message"></el-input>
        </el-form-item>
      </el-form>
      <p class="feedback-sub">提交反馈时请填写联系方式，以便我们能联系到您</p>
      <el-form :inline="true" class="feed-box">
        <el-form-item>
          <el-select v-model="value" placeholder="联系方式">
            <el-option label="手机号" value="phone"></el-option>
            <el-option label="邮箱" value="email"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input :placeholder="placeholder" v-model="contact_way"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button >取消</el-button>
          <el-button type="primary" @click="onClick">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: '',
        contact_way: '',
        value: 'phone',
        placeholder: '请输入电话号码'
      }
    },
    watch: {
      value (val) {
        console.log(val);
        if (val === 'phone') {
          this.placeholder = '请输入电话号码'
        } else if (val === 'email') {
          this.placeholder = '请输入邮箱地址'
        }
      }
    },
    methods:{
      onClick () {
        const parmas = {
          tel: this.contact_way,
          type: this.value === 'phone' ? 1 : 2,
          message: this.message,
          table: 'message',
          _token: this.$store.state._token
        }
        this.$store.dispatch('feedback', parmas).then(res => {
          const { code, message } = res.data

          if (~~ code) {
            this.$message({message: '意见反馈成功', type: 'success'})
          } else {
            this.$message.error(message);
          }
        })
        // console.log(message, value, contact_way)
      }
    }
  }
</script>
