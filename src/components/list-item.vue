<template>
  <div draggable="true" @dragstart="dragstarthandle(item,index,$event)" @dragover.prevent="dragoverhandle(item,index,$event)"
           @drop.stop="drophandle(item,index,$event)" @click ="selcethandle(index)" @mouseover="btn_delete_show" @mouseout="btn_delete_show"
           style="position:relative;">
            <div v-if="showDelete" class ="fix-delete" @click.stop="deleteCurItem(index)">删除</div>
        <div class="block" v-if="item.type===1">
            <span class="demonstration">默认 Hover 指示器触发</span>
            <el-carousel height="150px">
            <el-carousel-item v-for="(carousel_item,carousel_index) in item.imagelist" :key="carousel_index">
               <img :src="require('../assets/images/1.png')" style="width:100%;height:100%;">
               <!-- <img src="../assets/images/1.png"> -->
            </el-carousel-item>
            </el-carousel>
        </div>
        <el-tabs v-model="activeName" v-if="item.type===2">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
        <el-card class="box-card" v-if="item.type ===3">
            <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" item.type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
          <el-alert
            title="成功提示的文案"
            type="success" v-if="item.type===4">
         </el-alert>
  </div>
</template>
<script>
    export default{
        name :"list-item",
        props:{
            index:{
                default:''                
            },            
            item:{
                required:false,
                default:''
            },
            draglist:{
                default:''
            },
            alleclect:{
                required :true,
                type:Array
            }
        },
        data(){
            return{
                   activeName: 'second',    //ele的
                   showDelete:false,   //展示删除
                //    imgList:[require('../assets/images/1.png'),]
            }
        },
        methods:{
            dragstarthandle(item,index,e){
            e.dataTransfer.setData('data', index);
            },
            drophandle(item,index,e){
                var getIndex = e.dataTransfer.getData('data');
                console.log(getIndex);
                if(getIndex.startsWith('origin')){
                  const i =   getIndex.substring(6);
                  this.draglist.splice(++index,0,this.alleclect[i])
                  return;
               }else {
                    const needpushitem= this.draglist.splice(getIndex,1)[0];
                    this.draglist.splice(index,0,needpushitem);    
               }
            },
            dragoverhandle(item,index,e){},
            selcethandle(index){
                this.$emit('select',index)
            },
            btn_delete_show(){
                    this.showDelete =!this.showDelete;
            },
            deleteCurItem(index){
                    this.$emit('select',index,true);
                    this.draglist.splice(index,1);
            }
        },
        watch:{
            draglist(){
                this.$emit('update:draglist',this.draglist);
            }
        }
    }

</script>
<style lang="scss" scoped>
.fix-delete{
    position: absolute;
    top: 10px;
    right: 10px;
    color: aqua;
    cursor: pointer;
    z-index: 999;
}
</style>
