<template>
  <div class="feedback overview-shadow">
    <div class="overview-title">意见反馈</div>
    <el-form  class="feed-box">
      <el-form-item>
        <el-input type="textarea" :rows="6"></el-input>
      </el-form-item>
    </el-form>
    <p class="feedback-sub">提交反馈时请填写联系方式，以便我们能联系到您</p>
    <el-form :inline="true" class="feed-box">
      <el-form-item>
        <el-select placeholder="联系方式">
          <el-option label="手机号" value="phone"></el-option>
          <el-option label="邮箱" value="email"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input  placeholder="15908171783"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button >取消</el-button>
        <el-button type="primary" >提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods:{
      
    }
  }
</script>

<style lang="scss" scoped>
@import  "../assets/scss/_baseFunction";
$inpuBg: #fdfdfd;
.feedback{
  margin-top: 20px;
  .feedback-sub{
    line-height: 50px;
    font-size: 12px;
    padding-left: 20px;
  }
  .feed-box{
    padding: 0 20px;
    .el-textarea__inner{
      background: $inpuBg !important;
      min-height: 100px;
    }
  }
}
</style>
