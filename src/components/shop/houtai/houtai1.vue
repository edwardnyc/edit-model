<template>
  <div>
      <el-main class ="all-content">
          <el-aside class ="content-left" width='150px' style="background-color: #fafafa;overflow: hidden">
                <el-menu style="height:100%;box-sizing:border-box;width:150px;padding:0;"
                    default-active="2"
                    class="el-menu-vertical-demo">
                    <el-menu-item-group>
                    <template slot="title">支付设置</template>
                        <el-menu-item index="1-1"  style="color: #58575d; position: relative" @click="changeRoute('zhifu')"> <div class="xianshi" :class="name==='zhifu'?'current':''">支付设置<i :class="name==='zhifu'? 'el-icon-caret-right':''"></i></div > </el-menu-item>
                      <span style="display: block;height: 2px;border:1px solid #e3e3e3;margin-top: 5px"></span>
                    </el-menu-item-group>
                    <el-menu-item-group>
                    <template slot="title">打印机设置</template>
                    <el-menu-item index="1-1" style="color: #58575d;  position: relative" @click="changeRoute('dayinji')"><div class="xianshi" :class="name==='dayinji'?'current':''">打印机配置<i :class="name==='dayinji'? 'el-icon-caret-right':''"></i></div></el-menu-item>
                        <el-menu-item index="1-1" style="color: #58575d; position: relative" @click="changeRoute('dayin')"><div class="xianshi" :class="name==='dayin'?'current':''">打印设置 <i :class="name==='dayin'? 'el-icon-caret-right':''"></i></div></el-menu-item>
                      <span style="display: block;height: 2px;border:1px solid #e3e3e3;margin-top: 5px"></span>
                    </el-menu-item-group>
                    <el-menu-item-group>
                    <template slot="title">餐饮设置</template>
                        <el-menu-item index="1-1" style=" color: #58575d; position: relative" @click="changeRoute('canyin')"><div class="xianshi" :class="name==='canyin'?'current':''">餐饮设置<i :class="name==='canyin'? 'el-icon-caret-right':''"></i></div></el-menu-item>
                      <span style="display: block;height: 2px;border:1px solid #e3e3e3;margin-top: 5px"></span>
                    </el-menu-item-group>
                    <el-menu-item-group>
                    <template slot="title">积分设置</template>
                        <el-menu-item index="1-1"  style=" color: #58575d; position: relative" @click="changeRoute('jifen')"><div class="xianshi" :class="name==='jifen'?'current':''">积分设置<i :class="name==='jifen'? 'el-icon-caret-right':''"></i></div></el-menu-item>
                      <span style="display: block;height: 2px;border:1px solid #e3e3e3;margin-top: 5px"></span>
                    </el-menu-item-group>
                    <el-menu-item-group>
                    <template slot="title">会员卡设置</template>
                        <el-menu-item index="1-1"  style="color: #58575d; position: relative" @click="changeRoute('hykshezhe')"><div class="xianshi" :class="name==='hykshezhe'?'current':''">会员卡设置<i :class="name==='hykshezhe'? 'el-icon-caret-right':''"></i></div></el-menu-item>
                      <span style="display: block;height: 2px;border:1px solid #e3e3e3;margin-top: 5px"></span>
                    </el-menu-item-group>
                    <el-menu-item-group>
                    <template slot="title">会员卡等级</template>
                        <el-menu-item index="1-1" style="color: #58575d; position: relative" @click="changeRoute('hykdengji')"><div class="xianshi" :class="name==='hykdengji'?'current':''">会员卡等级<i :class="name==='hykdengji'? 'el-icon-caret-right':''"></i></div></el-menu-item>
                      <span style="display: block;height: 2px;border:1px solid #e3e3e3;margin-top: 5px"></span>
                    </el-menu-item-group>
                    <el-menu-item-group>
                    <template slot="title">待开发...</template>
                        <el-menu-item index="1-1"  style="color: #58575d; position: relative" @click="changeRoute('daikaifa')"><div class="xianshi" :class="name==='daikaifa'?'current':''">待开发...<i :class="name==='daikaifa'? 'el-icon-caret-right':''"></i></div></el-menu-item>
                      <span style="display: block;height: 2px;border:1px solid #e3e3e3;margin-top: 5px"></span>
                    </el-menu-item-group>
                </el-menu>
        </el-aside>
        <el-main style="background:#fff">
            <paySetting :name='name'/>
            <print :name='name'/>
            <meal :name='name'/>
           <integral :name='name'/>
           <membersSet :name='name'/>
           <membersLevel :name='name'/>
           <printer :name='name'/>
           <daikaifa :name='name'/>
        </el-main>
    </el-main>


    <main>
    </main>
  </div>
</template>
<script>
import paySetting from './paySetting'
import print from './print'
import meal from './meal'
import integral from './integral'
import membersSet from './membersSet'
import membersLevel from './membersLevel'
import printer from './printer'
import daikaifa from './daikaifa'
    export default{
        components:{
            paySetting,
            print,
            meal,
            integral,
            membersSet,
            membersLevel,
            printer,
            daikaifa
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
  .el-icon-caret-right {
    color:#000; position: absolute;right: 0;top: 12px
  }
  .current {
    position: relative;
    background-color: #e9eaef;
    border-radius: 10px;
  }
  .xianshi{
    padding-top: -10px;
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding-left: 10px;
    margin-left: -10px;
  }
  .xianshi:hover {
    background-color: #e9eaef;
    border-radius: 10px;
  }
  .el-menu-item{
    background-color: #fff;
  }
}
</style>
