<template>
  <div style="background-color:#fafafa;">
      <el-main class ="all-content" style="padding-top: 25px;">
          <el-aside class ="content-left" width='100px' style="background-color: #fafafa;overflow: hidden">
                <el-menu style="height:100%;width:100px;padding:0; background-color:#fafafa; font-size: 12px"
                    default-active="2"
                    class="el-menu-vertical-demo">
                        <el-menu-item index="1-1"  style=" position: relative" @click="changeRoute('zhifu')"> <div style="font-size: 12px;text-align: center" :class="name==='zhifu'?'router-link-active':''">支付设置</div > </el-menu-item>
                    <!--<el-menu-item-group>-->
                    <!--<template slot="title">打印机设置</template>-->
                    <!--<el-menu-item index="1-1" style="color: #58575d;  position: relative" @click="changeRoute('dayinji')"><div class="xianshi" :class="name==='dayinji'?'current':''">打印机配置<i :class="name==='dayinji'? 'el-icon-caret-right':''"></i></div></el-menu-item>-->
                        <!--<el-menu-item index="1-1" style="color: #58575d; position: relative" @click="changeRoute('dayin')"><div class="xianshi" :class="name==='dayin'?'current':''">打印设置 <i :class="name==='dayin'? 'el-icon-caret-right':''"></i></div></el-menu-item>-->
                      <!--<span style="display: block;height: 2px;border:1px solid #e3e3e3;margin-top: 5px"></span>-->
                    <!--</el-menu-item-group>-->
                    <!--<el-menu-item-group>-->
                    <!--<template slot="title">餐饮设置</template>-->
                        <!--<el-menu-item index="1-1" style=" color: #58575d; position: relative" @click="changeRoute('canyin')"><div class="xianshi" :class="name==='canyin'?'current':''">餐饮设置<i :class="name==='canyin'? 'el-icon-caret-right':''"></i></div></el-menu-item>-->
                      <!--<span style="display: block;height: 2px;border:1px solid #e3e3e3;margin-top: 5px"></span>-->
                    <!--</el-menu-item-group>-->
                        <el-menu-item index="1-2"  style="  position: relative" @click="changeRoute('jifen')"><div style="font-size: 12px;text-align: center"   :class="name==='jifen'?'router-link-active':''" >积分设置</div></el-menu-item>
                        <el-menu-item index="1-3"  style=" position: relative" @click="changeRoute('hykshezhe')"><div style="font-size: 12px;text-align: center"  :class="name==='hykshezhe'?'router-link-active':''" >会员卡设置</div></el-menu-item>
                        <el-menu-item index="1-4" style=" position: relative" @click="changeRoute('hykdengji')"><div style="font-size: 12px;text-align: center"  :class="name==='hykdengji'?'router-link-active':''" >会员卡等级</div></el-menu-item>

                </el-menu>
        </el-aside>
        <el-main style="background:#fff">
            <paySetting :name='name'/>
            <!--<print :name='name'/>-->
            <!--<meal :name='name'/>-->
           <integral :name='name'/>
           <membersSet :name='name'/>
           <membersLevel :name='name'/>
           <!--<printer :name='name'/>-->
        </el-main>
    </el-main>


    <main>
    </main>
  </div>
</template>
<script>
import paySetting from './paySetting'
// import print from './print'
// import meal from './meal'
import integral from './integral'
import membersSet from './membersSet'
import membersLevel from './membersLevel'
// import printer from './printer'
    export default{
        components:{
            paySetting,
            // print,
            // meal,
            integral,
            membersSet,
            membersLevel,
            // printer
        },
        data(){
            return{
                name: 'zhifu',
                rightRoutes:[{name:'paySetting'},{name:'haha'}],
            }
        },
        methods:{
            changeRoute(index){
              // console.log(index)
                this.name = index;

                // const i = index.split('-')[1];
            }
        }
    }
</script>
<style lang="scss" scoped>
.all-content{
    width: 100%;
    height: calc(100vh - 60px);
    // background: red;
    padding: 0 5px 0 0;
    display: flex;
    .content-left{
        height: 100%;
    }
  .router-link-active {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.13;
      background-image: linear-gradient(-90deg, #7E8EDA 0%, rgba(255,255,255,0.00) 92%);
      z-index: 0;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 3.7px;
      height: 100%;
      background: #1DA2C8;
    }
  }
  .el-menu-vertical-demo:hover {
    color:#1DA2C8 ;
    background-color: #7E8EDA;
  }

  /*.el-icon-caret-right {*/
    /*color:#000; position: absolute;right: 0;top: 12px*/
  /*}*/
  /*.current {*/
    /*position: relative;*/
    /*background-color: #e9eaef;*/
    /*border-radius: 10px;*/
  /*}*/
  /*<!--.xianshi{-->*/
    /*<!--padding-top: -10px;-->*/
    /*<!--height: 40px;-->*/
    /*<!--line-height: 40px;-->*/
    /*<!--text-align: left;-->*/
    /*<!--padding-left: 10px;-->*/
    /*<!--margin-left: -10px;-->*/
  /*<!--}-->*/
  /*.xianshi:hover {*/
    /*background-color: #e9eaef;*/
    /*border-radius: 10px;*/
  /*}*/
  /*.el-menu-item{*/
    /*background-color: #fff;*/
  /*}*/
}
</style>
