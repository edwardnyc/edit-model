<template>
  <div class="content-table overview-shadow">
    <h2>
      <img src="../assets/images/store.png" />
      <span>上午好！辛伟大的店铺</span>
    </h2>
    <div class="overview-table">
      <ul class="thead">
        <li><label>今日新增人数</label><p><span>10</span></p></li>
        <li><label>今日新增人数</label><p><span>10</span></p></li>
        <li><label>今日新增人数</label><p><span>10</span></p></li>
        <li><label>今日新增人数</label><p><span>10</span></p></li>
        <li><label>今日新增人数</label><p><span>10</span></p></li>
      </ul>
      <ul class="tbody">
        <li><label>昨日访问人数</label><p>5</p></li>
        <li><label>昨日访问人数</label><p>5</p></li>
        <li><label>昨日访问人数</label><p>5</p></li>
        <li><label>昨日访问人数</label><p>5</p></li>
        <li><label>昨日访问人数</label><p>5</p></li>
      </ul>
      <ul class="tbody">
        <li><label>累计用户数</label><p>5</p></li>
        <li><label>累计用户数</label><p>5</p></li>
        <li><label>累计用户数</label><p>5</p></li>
        <li><label>累计用户数</label><p>5</p></li>
        <li><label>累计用户数</label><p>5</p></li>
      </ul>
    </div>
    <!--<table class="overview-table">
      <thead>
        <tr>
          <td><label>今日新增人数</label><p><span>10</span></p></td>
          <td><label>今日新增人数</label><p><span>10</span></p></td>
          <td><label>今日新增人数</label><p><span>10</span></p></td>
          <td><label>今日新增人数</label><p><span>10</span></p></td>
          <td><label>今日新增人数</label><p><span>10</span></p></td>
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <td><label>昨日访问人数</label><p>5</p></td>
          <td><label>昨日访问人数</label><p>5</p></td>
          <td><label>昨日访问人数</label><p>5</p></td>
          <td><label>昨日访问人数</label><p>5</p></td>
          <td><label>昨日访问人数</label><p>5</p></td>
        </tr>
        <tr>
          <td><label>累计用户数</label><p>5</p></td>
          <td><label>累计用户数</label><p>5</p></td>
          <td><label>累计用户数</label><p>5</p></td>
          <td><label>累计用户数</label><p>5</p></td>
          <td><label>累计用户数</label><p>5</p></td>
        </tr>
      </tbody>
    </table>-->
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
.content-table{
  padding: 10px;
  background: #fff;
  h2 {
    font-size: 18px;
    color: #1DA2C8;
    margin: 20px 0 25px 20px;
    img {
      width: 30px;
      height: 27px;
      margin: 0 10px -6px 0;
    }
  }
}
.overview-table{
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
  label {
    width: 110px;
    display: inline-block;
  }
  .thead, .tbody {
    display: flex;
    li {
      display: inline-block;
      line-height: 30px;
      font-size: 12px;
      flex: 1;
      transform: scale(0.8333);
      color: #999;
      text-align: center;
      p {
        // margin-top: 0px;
      }
      span{
        color: #1DA2C8;
      }
    }
  }
  .thead li {
    transform: scale(1);
    color: #333;
    p {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

}
</style>
