<template>
  <div class="board">
    <div class="board-box" v-for="(item, index) in items" :key="index">
      <p class="board-title"><span>{{item.title}}</span></p>
      <ul class="grid-ul">
        <li class="grad-li" v-for="(child, i) in item.children" :key="i">
          <img :src="child.imgsrc" alt="" v-if="child.imgsrc">
          <div>
            <p>{{child.subtitle}}</p>
            <span>{{child.message}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            title: '工具',
            children: [
              { subtitle: '素材库', message: '素材库', imgsrc: require('@/assets/images/app-5.png')},
              { subtitle: '微客服', message: '素材库', imgsrc: require('@/assets/images/app-5.png')},
              { subtitle: '更多工具', message: '敬请期待'}
            ]
          },
          {
            title: '互动',
            children: [
              { subtitle: '微投票', message: '互动-微投票', imgsrc: require('@/assets/images/app-5.png')},
              { subtitle: '微预约', message: '互动-微预约', imgsrc: require('@/assets/images/app-5.png')},
              { subtitle: '更多工具', message: '敬请期待'}
            ]
          },
          {
            title: '营销活动',
            children: [
              { subtitle: '刮刮卡', message: '即刮即兑，简单有趣', imgsrc: require('@/assets/images/app-2.png')},
              { subtitle: '砸金蛋', message: '发福利送权益，刺激粉丝…', imgsrc: require('@/assets/images/app-3.png')},
              { subtitle: '拆礼盒', message: '邀请好友，帮拆礼盒传播...', imgsrc: require('@/assets/images/app-5.png')},
              { subtitle: '大转盘', message: '琳琅大奖满目显，营销刺...', imgsrc: require('@/assets/images/app-5.png')},
              { subtitle: '挖宝达人', message: '邀请好友，帮拆礼盒传播...', imgsrc: require('@/assets/images/app-6.png')},
              { subtitle: '奥运会', message: '全民运动兴趣高，小小游...', imgsrc: require('@/assets/images/app-5.png')},
              { subtitle: '睡神大作战', message: '争强好胜赢排名，好友分...', imgsrc: require('@/assets/images/app-5.png')},
              { subtitle: '微助力', message: '好友助力赢大奖，传播分...', imgsrc: require('@/assets/images/app-4.png')},
              { subtitle: '包粽子', message: '包粽子营销活动', imgsrc: require('@/assets/images/app-5.png')},
              { subtitle: '整蛊大师', message: '机智反套路，整蛊好友能…', imgsrc: require('@/assets/images/app-5.png')},
              { subtitle: '更多工具', message: '敬请期待'}
            ]
          }
        ]
      }
    },
    methods:{
      
    }
  }
</script>

<style lang="scss" scoped>
@import  "../assets/scss/_baseFunction";
.el-menu {
  border-right: none;
}
.board{
  padding: 30px 40px;
  .board-title{
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    color: #58585a;
    margin: 0 0 15px 10px;
    span{
      display: inline-block;
    }
  }
  .board-box{
    margin-bottom: 10px;
    &.board-box-active{
      .board-title span{
        border-bottom: 2px solid $blueColor;
      }
    }
  }
  .grid-ul {
    overflow: hidden;
    li {
      float: left;
      width: 250px;
      display: flex;
      font-size: 13px;
      border-radius: 100px;
      border: 1px solid #e5e5e5;
      padding: 10px 0;
      box-sizing: border-box;
      margin: 8px;
      margin-right: 22px;      
      img {
        width: 40px;
        height: 40px;
        margin: 0 10px 0 12px;
      }
      > div {
        flex: 1;
      }
      span{
        font-size: 12px;
        color: #999;
      }
      &:last-child {
        text-align: center;
        color: #999;
        p {
          font-size: 12px;
        }
        span {
          font-size: 16px;
        }
      }
    }
  }
  .grid-content{
    border-radius: 100px;
    border: 1px solid #e5e5e5;
    padding: 10px 0;
    font-size: 13px;
    // text-align: left;
    // text-indent: 15px;
    display: flex;
    max-width: 250px;
    &:hover{
      background: #f8f8f8;
    }
    img {
      vertical-align: middle;
      margin-right: 10px;
      width: 40px;
      height: 40px;
      margin-left: 12px;
      // max-width: 100px;
    }
    > div {
      flex: 1;
    }
    span{
      font-size: 12px;
      color: #999;
    }
  }
  .el-row .el-col {
    &:last-child {
      .grid-content {
        text-align: center;
        color: #999;
        p {
          font-size: 12px;
        }
        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
