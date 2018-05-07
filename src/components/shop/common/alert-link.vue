<template>
  <!-- <div style="position:absolute;"> -->
        <!-- Form -->
        <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>/ -->
        <el-dialog title="选择链接" :visible.sync="show" width="950px" :before-close="close" style="position:absolute;">  
            <ul>
              <li @click="()=>{activeNum=0}" :class="{active: 0==activeNum}">选择功能链接</li>
              <li @click="()=>{activeNum=0}" :class="{active: 1==activeNum}">选择页面链接</li>
              <li @click="()=>{activeNum=2}" :class="{active: 2==activeNum}">选择商品链接</li>
            </ul>
            <div class="msg-box" >
                  <div class="img-box" v-if="activeNum==0">
                      <div v-for="(item,index) in functionList" :key="index" class="img-item" @click="chooseHandle(item)">
                            <img :src="item.linkSrc" class="img"><div class="descipe">
                                  {{item.jump_name}}
                            </div>
                      </div>
                  </div>
             <!-- <el-tree v-if="activeNum==1" :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>             -->
<div class="tree-menu" v-if="activeNum==1">
      <ul v-for="(menuItem,menuIndex) in theModel" :key="menuIndex" style="width:100%;text-align:left;margin-left:-300px;margin-top:-30px;">
            <my-tree :model="menuItem"></my-tree>
      </ul>
 </div>
            </div>
        <!-- <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div> -->
        </el-dialog>
  <!-- </div> -->
</template>
<script>
var myData = [
 {
 'id': '1',
 'menuName': '基础管理',
 'menuCode': '10',
 'children': [
 {
 'menuName': '用户管理',
 'menuCode': '11',
 'src' :require('../../../assets/images/shop/logo/shop.png')
 },
 {
 'menuName': '角色管理',
 'menuCode': '12',
 'children': [
 {
 'menuName': '管理员',
 'menuCode': '121'
 },
 {
 'menuName': 'CEO',
 'menuCode': '122'
 },
 {
 'menuName': 'CFO',
 'menuCode': '123'
 },
 {
 'menuName': 'COO',
 'menuCode': '124'
 },
 {
 'menuName': '普通人',
 'menuCode': '124'
 }
 ]
 },
 {
 'menuName': '权限管理',
 'menuCode': '13'
 }
 ]
 }
];
  import axios from 'axios';
  import qs from 'qs';
  import config from   '../../../store/config';
  // import treeMenu from './treeMenu';
  let baseurl = config.proxy.baseurl;
  let url = config.proxy.apiHost;
  import myTree from './treeMenu'
export default {
  components:{
     myTree
  },
    name :'alert-link',
    props:{
          dialogFormVisible:{
            type :Boolean,
          }
    },
    data(){
        return{
        dialogTableVisible: true,
        // dialogFormVisible: true,
         tabPosition: 'left',
         activeNum:0,
         theModel: myData,
         functionList:[],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    computed:{
        show:{
          get(){
           return  this.dialogFormVisible;  
          },
          set(val){
              this.dialogTableVisible = val;
          }
        }      
    },
    methods:{
      handleNodeClick(data) {
        console.log(data);
      },
      chooseHandle(obj){
          this.$emit('linked',obj)
      },
      close(){
          this.$emit('linked')        
      }
    },
    created(){
           let params = {
            _token: this.$store.state._token,
            app_id: this.$store.state.app_id,
            // group_id: this.$store.state.group_id,            
            flie_type: 1,
          }
         axios({
          method: 'post',
          baseURL: baseurl,
          url: `${url}/user/jump/getlist`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;',
          },
          data: qs.stringify(params)
        }).then((res) => {
          console.log(res.data.data);
        if (res.status == 200) {
            const data = res.data.data;
            [...data].forEach((item,index)=>{
              if(!item){
                return ;
              }
                this.functionList.push({linkSrc:this.$store.state.qiniu+'/'+item.icon,link_url:item.link_url,status:item.status,jump_name:item.jump_name,jump_id:item.jump_id})
                console.log(this.functionList);
            })
        } else {

          }
        });
    }
}
</script>
<style lang="scss" scoped>
ul{
  width:140px;
  display: inline-block;
  vertical-align: top;
  li{
    text-align: center;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    // padding-left:30px;
    font-size: 16px;
    color: #595961;
    margin-top: 80px;
    margin-bottom: 100px;
    cursor: pointer;
    transition: all 500ms linear ;
  } 
  .active{
    border-right:5px solid #409EFF;
    color: #409EFF;
  }
}
.msg-box{
  display: inline-block;  
  border: 2px solid #e9e9e9;
  width:713px;
  margin-left: 10px;
  height: 500px;
  align-content: flex-start;
  justify-content: flex-start;
}
.img-box{
  width: 100%;
  // height: 100%;
  display: flex;
  flex-wrap: wrap;
  .img-item{
    cursor: pointer;
    width: 88px;
    height: 111px;
    background-color: #ffffff;
    box-shadow: 1px 1px 3px 0px 
      rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    margin-left: 25px;
    margin-top: 25px;
      .img{
        width:100%;
        height: 80px;
      }
      .descipe{
        width: 100%;
        text-align: center;
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        margin-top: -6px;
      }
  }
}

</style>
