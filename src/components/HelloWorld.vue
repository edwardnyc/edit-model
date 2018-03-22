<template>
  <div>
    <Uploadimg  :dialogImages="dialogImages" @close="closeImages"/>
    <div class= "main-content">
        <div class="opotions-box">
          <div class="ports">
            <div class= "btn-box" >
              <button :class="{'gBtnactive':gActive==1}" @click="()=>{gActive=1}">组件</button>
              <button :class="{'gBtnactive':gActive==2}" @click="()=>{gActive=2}">页面</button>
            </div>
            <div class= "tags-content" v-show ="gActive===1">
              <div v-for="(every,i) in all" :key="i"  class="tag-item">
                      <img v-if="every.img" :src='"../assets/images/" + every.img + ".png"'
                       @click="lipush(every)" draggable="true"
                         @dragstart="dragstarthandle(every,`origin${i}`,$event)">
                      <span v-if="checknum>-1&&every.text">{{every.text}}</span>
              </div>
            </div>
          </div>
       </div>
        <div  class= "drag-box" @drop.self="boxDropHandle($event)" @dragover.prevent="dragoverhandle()">
        <list-item v-for="(item,index) in draglist" :key ='index' :item='item' :alleclect="all" :index="index"
         @select="select" :draglist.sync="draglist" :class ="[checknum==index ?  'active':'','drag-item']"></list-item>
       </div>
    </div>
     <div class="setting-box">
        <div class="setting-title" v-if="draglist.length!==0">
              <span>
                    组件设置
              </span>
              <span style = "font-size:10px;vertical-align:bottom;color:#c4c4c4;padding-left:20px" v-if="checknum>-1">
                  {{draglist[checknum].text}}
              </span>
        </div>
          <div class= "config-box">
            <!--    轮播图·组件 -->
            <div v-if = "checknum>-1&&draglist[checknum].type===1">
                 <img src="../assets/images/1.png" style = "width:100%;height:200px;">
                 <button  style="width:100%;border-radius:5px;border:1px solid #EDEDED;height:30px;background:#fff;">修改样式</button>
                  <div class="img-item" v-for="(img_item,img_index) in draglist[checknum].imagelist" :key = 'img_index'>
                        <div class="item-title">
                              <span style ="float:left;margin-left:10px;">图片{{img_index+1}}</span>
                              <span @click="deleteCurItemImg(img_index)" style="float:right;margin-right:10px;color:#5CD6FF;cursor:pointer">删除</span>
                        </div>
                        <div style="display:flex;justify-content:space-around;margin-top:10px;">
                            <span style="font-size:12px;align-self:center">选择图片</span>
                            <img src="../assets/images/1.png" style="width:100px;height:60px;">
                            <span @click="showdialog" style="cursor:pointer;font-size:12px;border:1px solid #EDEDED;border-radius:2px;align-self:center;transform:scale(0.75,0.75)">上传图片</span>
                        </div>
                        <div style="margin-top:20px;">
                             <span style="float:left;margin-left:10px;">图片链接</span>
                             <span style="font-size:12px;cursor:pointer;border:1px solid #EDEDED;border-radius:2px;float:left;margin-left:10px;transform:scale(0.75,0.75)">选择链接</span>
                        </div>
                  </div>
                   <div @click="addimg" style="border:1px solid rgb(237, 237, 237);border-radius:5px;height:40px;display:flex;align-items:center;">
                          <span style="font-size:12px;border:1px solid rgb(237, 237, 237);cursor:pointer;margin-left:10px;">添加图片</span>
                          <span style="font-size:12px;color:#4c4c4c;float:right;transform:scale(0.6,0.6) translateX(40px);">最多十张，上下拖动可排序</span>
                    </div>
                  <button class="lunbo-submit">提交</button>
            </div>

            <!-- 店铺头部 -->
              <div v-if = "checknum>-1&&draglist[checknum].type===3">
                 <img src="../assets/images/1.png" style = "width:100%;height:200px;">
                 <button  style="width:100%;border-radius:5px;border:1px solid #EDEDED;height:30px;background:#fff;">修改样式</button>
                  <div class="img-item" >
                        <div class="item-title">
                              <span style ="float:left;margin-left:10px;">图片</span>
                        </div>
                        <div style="display:flex;justify-content:space-around;margin-top:10px;">
                            <span style="font-size:12px;align-self:center">选择图片</span>
                            <img src="../assets/images/1.png" style="width:100px;height:60px;">
                            <span @click="showdialog" style="cursor:pointer;font-size:12px;border:1px solid #EDEDED;border-radius:2px;align-self:center;transform:scale(0.75,0.75)">上传图片</span>
                        </div>
                        <div>
                              <span>名称颜色</span>
        
                              <el-color-picker v-model="picker_color" size="mini"></el-color-picker>
        
                        </div>
                  </div>
                   <div @click="addimg" style="border:1px solid rgb(237, 237, 237);border-radius:5px;height:40px;display:flex;align-items:center;">
                          <span style="font-size:12px;border:1px solid rgb(237, 237, 237);cursor:pointer;margin-left:10px;">添加图片</span>
                          <span style="font-size:12px;color:#4c4c4c;float:right;transform:scale(0.6,0.6) translateX(40px);">最多十张，上下拖动可排序</span>
                    </div>
                  <button class="lunbo-submit">提交</button>
            </div>
          </div>
     </div>
  </div>
</template>
<script>
import ListItem from './list-item';
import {mapGetters} from "vuex";
import Uploadimg from './common/uploadimg';
export default {
  name: 'HelloWorld',
  components:{ 
      ListItem,
      Uploadimg
  },
  data () {
    return {
      draglist:[],//最终的组件列表
      all:[
      {img:1,text:'轮播广告',type:1,imagelist:[{href:'www.baidu.com',src:'../assets/images/1.png'}]}
      ,{img:2,text:'商品模块',type:2},{img:3,text:'店铺头部',type:3},
      {img:4,text:'物品栏',type:4},{img:5,text:'文字模块',type:5},{img:6,text:'优惠卷',type:6},
      {text:'更多组件'}],//能点击的type列表
      checknum:-1,            //选中的组件
      dialogImages: false,  //弹出框
      gActive:1,//组件button变蓝
      picker_color: '#409EFF'   //   选择颜色
    }
  },
  created(){
  },
  methods:{
    lipush(item){
      console.log(item)
      // this.draglist.push({'type':item.type});
    },
     dragstarthandle(item,index,e){
          e.dataTransfer.setData('data', index);
      },
      select(i,lock){
        if(lock){
          console.log(this.draglist.length,i)
          if(this.draglist.length===i+1){
              this.checknum=i-1;
              return ;
          }
        }
            this.checknum =i;
      },
      boxDropHandle(e){
            var getIndex = e.dataTransfer.getData('data');     
              if(getIndex.length<5){
                return ;
              }          
              const i =   getIndex.substring(6);
              this.draglist.push(JSON.parse(JSON.stringify(this.all[i])));
      },
     dragoverhandle(){},      
     closeImages(){
        this.dialogImages = false;
      },
      showdialog(){
          this.dialogImages =true;
      },
      addimg(){
       if(this.draglist[this.checknum].imagelist.length==10){
              this.$message('最多保存十张照片','warn');
              return ;
        }
      setTimeout(()=>{ console.log(this.draglist[this.checknum]==this.draglist[this.checknum+1])},3000)  ;
        this.draglist[this.checknum].imagelist.push(this.draglist[this.checknum].imagelist[0]);
      },
      deleteCurItemImg(i){
        if(this.draglist[this.checknum].imagelist.length==1){
              this.$message('最少保存一张照片','error');
              return ;
        }
            this.draglist[this.checknum].imagelist.splice(i,1);
      }
  },
  watch:{
    draglist(){
      this.$store.commit('updateData',this.draglist);
    }
  },
}
</script>
<style scoped lang="scss">
*{
  padding: 0px;
  margin: 0px;
}
.main-content{
  border: 1px solid rgba(#4c4c4c,0.1);
  box-sizing: border-box;
  float: left;
  overflow: hidden;
  margin-top: 20vh;
  margin-left: 200px;
  height: 70vh;
}
        .opotions-box{
          float: left;
          width: 400px;
          height: 100vh;
          margin-right: 100px;
          .ports{
            width: 100%;
              .btn-box{
                width: 100%;
                display: flex;
                justify-content: space-around;    
                margin-top: 20px;            
                button{
                    width: 118px;
                    height: 46px;
                    border-radius: 30px;
                    border: 0;

                    cursor: pointer;
                    &:focus{
                      border: unset;
                      outline: none;
                    }
                }
                .gBtnactive{
                    background: #5CD6FF;
                    color: #ffffff;
                }
              }
              .tags-content{
               .tag-item{
                 display: inline-block;
                  width: 30%;                 
                  height: 90px;
                  box-sizing: border-box;
                  border: 1px solid rgba(#4c4c4c,0.5);
                  border-radius: 5px;
                   margin: 10px 10%
                }
              }
          }
        }
        .drag-box{
          width: 375px;
          border: 1px solid rgba(#4c4c4c,0.1);
          float: left;
          left: 50%;
          height: 100%;
          overflow-y: scroll;

          .drag-item{
            width: 100%;
          }
        }
        .setting-box{
          overflow-y: scroll;
            // float: right;
            position: absolute;
            right: 50px;
            top: 100px;
            width: 360px;
            box-sizing: border-box;
            border:1px solid rgba(#4c4c4c,0.1);
            margin-right: 10px;
            margin-top: 30px;
            border-radius: 5px;
            height: 80vh;
            .setting-title{
              width: 80%;
              margin: 20px 10% 0;
            }
             .config-box{
              width: 80%;
              margin: 20px 10% 0;
              .img-item{
                width: 100%;
                height: 160px;
                border: 1px solid #EDEDED;
                font-size: 12px;
                border-radius: 5px;
                margin: 10px 0px;
                .item-title{
                  height: 30px;
                  overflow: hidden;
                }
              }
               .lunbo-submit{
                 transform: translateX(-50%);
                 margin-left: 50%;
                 text-align: center;
                 width:100px;
                 height: 40px;
                  color: #5CD6FF;
                  border: 1px solid #5CD6FF;
                  border-radius: 4px;
                  text-align: center;
                  border: 1px solid #5CD6FF;
                  margin-top: 10px;
                  cursor: pointer;
                  &:focus{
                    outline: none;
                  }
                }
             }
        }

        .active{
          border: 1px dashed #5CD6FF;
          box-sizing: border-box;
        }
      


</style>
