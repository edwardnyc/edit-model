<style lang="scss" scoped>
.grid-content {
  background: #fff;
}
.w-box-one {
  padding: 80px 0;
  font-size: 12px;
  h2 {
    font-size: 16px;
    color: #001529;
  }
  .title {
    margin-bottom: 40px;
    padding-left: 75px;
  }
  .sub-title {
    margin-bottom: 20px;
    padding-left: 35px;
  }
  .left-content {
    padding-left: 40px;
    ul {
      margin-bottom: 40px;
      li {
        margin-bottom: 20px;
        display: flex;
        text-align: center;
        position: relative;
        span {
          &:first-child {
            text-align: right;
            margin-right: 10px;
          }
        }
        .failed {
          position: absolute;
          top: -2px;
          right: -2px;
        }
      }
    }
  }
  .right-content {
    padding-left: 60px;
    ul {
      li {
        margin-bottom: 20px;
        color: #1DA2C8;
        cursor: pointer;
      }
    }
    .right-ul {
      margin: 62px 0 75px;
    }
    .title {
      padding: 0;
      span {
        color: #1DA2C8;
        cursor: pointer;
        &:last-child {
          margin-left: 20px;
        }
      }
    }
  }
}
.w-box-two {
  padding: 80px 0;
  margin-bottom: 10px;
  font-size: 12px;
  .overview-title{
    margin-bottom: 8px;
    padding-left: 15%;
  }
  img{
    width: 70%;
    max-width: 260px;
    max-height: 260px;
    display: block;
    margin: 20px auto;
  }
  ul {
    padding-left: 15%;
    li {
      line-height: 20px;
      margin-bottom: 3px;
    }
  }
}
.failed {
  color: #D0021B;
}
.flex-0 {
  flex: 0;
}
.flex-1 {
  flex: 1;
}
.flex-2 {
  flex: 2;
}
</style>

<template>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="18" :md="18" :lg="18">
      <div class="grid-content overview-shadow w-box-one">
        <h2 class="title">小程序设置</h2>
        <el-row :gutter="10">
          <el-col :xs="12" :sm="12" :md="12" :lg="12">
            <div class="left-content">
              <h2 class="sub-title">小程序名称</h2>
              <ul>
                <li><span class="flex-1">微信认证</span><span class="flex-2"></span></li>
                <li><span class="flex-1">微信支付</span><span class="flex-2">未配置</span></li>
                <li><span class="flex-1">体验者微信</span><span class="flex-2">未绑定</span></li>
                <li><span class="flex-1">小程序类目</span><span class="flex-2">—</span></li>
              </ul>
              <ul>
                <li><span class="flex-1">已绑定功能</span><span class="flex-2">智店</span></li>
                <li><span class="flex-1">版本号</span><span class="flex-2">v1.6</span>
                  <span class="failed">审核失败</span>
                </li>
                <li><span class="flex-1">版本二维码</span><span class="flex-2">仅限管理员体验者扫描</span></li>
                <li><span class="flex-1">更新时间</span><span class="flex-2">v1.6</span></li>
              </ul>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12">
            <div class="right-content">
              <p class="title">账号信息更新时，可<span>重新授权</span><span>取消授权</span></p>
              
              <ul class="right-ul">
                <li><span>配置</span><span></span></li>
                <li><span>绑定</span><span>解绑</span></li>
              </ul>
              <ul>
                <li>功能详情</li>
                <li>重新提交审核</li>
                <li>下载</li>
                <li>功能版本</li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :xs="24" :sm="6" :md="6" :lg="6">
      <div class="grid-content overview-shadow w-box-two">
        <div class="overview-title">已授权权限</div>
        <ul>
          <li>1、账号管理权限</li>
          <li>2、开发管理权限</li>
          <li>3、客服消息管理权限</li>
          <li>4、开放平台账号管理权限</li>
        </ul>
        <img src="../../assets/images/erweima.jpg" alt="">
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  
}
</script>
