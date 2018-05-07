<template>
  <el-dialog
    title="选择商品"
    :visible.sync="dialogVisible"
    width="898px"
    :before-close="handleClose"
    class="material">
        <div style= "padding-top:10px;position:relative;overflow-y:scroll;background:#f2f2f6;width:94%;margin-left:3%;">
                <el-select v-model="opovalue" placeholder="请选择" size="mini" class ="form-select">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                </el-select>
                <el-checkbox v-model="radio" label="1" size= "mini" class ="form-radio">只显示上架中</el-checkbox>
                
                    <el-form :inline="true" :model="formInline" class="demo-form-inline form-inline-form" size="mini">
                        <el-form-item label="" class ="form-inline-form-from" >
                            <el-input v-model="formInline.from" placeholder="$" class="form-input1"></el-input>
                        </el-form-item>
                        <el-form-item label="" class = "form-inline-form-to" >
                            <el-input v-model="formInline.to" placeholder="$"  class = "form-input2"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select form-search" size="mini">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                <div class ="img_box" style="background:#fff;margin:5px 2% 20px">
                    <div v-for= "(img_item,img_index) in getImgList" :key = "img_index" class ="img_item_border" @click="checkHandle(img_index)" :style="{borderColor:img_item.check?'#3587fc':''}">
                         <img :src="img_item.src">
                         <div style="height:63px;position:relative;">
                           <div style="">
                             {{img_item.goods_name}}
                           </div>
                           <div style="position:absolute;bottom:0px;">
                              {{img_item.goods_price}}
                           </div>
                           <div style="position:absolute;">
                                
                           </div>
                         </div>
                    </div>
                </div>
                    
                <div class="material-box from-page" style="z-index:0;">

                    <div class="material-btn" style="background:#fff;">
                    <el-pagination  style="position:absolute;right:20px;top:-38px;"
                                    small
                                    background
                                    layout="prev, pager, next"
                                    :page-size='15'
                                    @current-change="changeCurrentPage"
                                    :total="50">
                            </el-pagination>
                    <el-button size="small" @click="handleClose">取 消</el-button>
                    <el-button size="small" type="primary" @click="addImg">确 定</el-button>
                    </div>
                </div>
                  
        </div>
    <!-- </div> -->
  </el-dialog>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  import config from   '../../../store/config'
  let baseurl = config.proxy.baseurl;
  let url = config.proxy.apiHost;
  
  export default {
      name :'ware-alert',
    props: {
      ware: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        group_id: '',
        dialogVisible: this.ware,
        uploader: {},
        imgList: [],
        currentImgIndex: 0,
        headers:{
          'Content-Type':'multipart/form-data', 
          // 'Authorization': this.$store.state._token,
        },
         options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        opovalue: '',
        radio:'',
        formInline:{
                from:'',
                to:''
        },
        input5:'',
        getImgList:[
            // { src:require('../../../assets/images/4.png'),check:false},{ src:require('../../../assets/images/3.png'),check:false},
            // { src:require('../../../assets/images/2.png'),check:false},{ src:require('../../../assets/images/5.png'),check:false},        
            // { src:require('../../../assets/images/2.png'),check:false},{ src:require('../../../assets/images/5.png'),check:false},        
        ],
        rootlist:[],
         tableData: [{
            check: false,
            name: '上海市普陀区金沙江路 1518 弄'
          }, {
            check: false,
            name: '上海市普陀区金沙江路 1517 弄'
          }, {
            check: false,
            name: '上海市普陀区金沙江路 1519 弄'
          }, {
            check: false,
            name: '上海市普陀区金沙江路 1516 弄'
          }]
      };
    },
    watch: {
      ware(val) {
        // console.log(val);
        this.dialogVisible = val;
      },
    },
    methods: {
      changeCurrentPage(val){
            console.log(val);
                 let params = {
            _token: this.$store.state._token,
            app_id: this.$store.state.app_id,
            // group_id: this.$store.state.group_id,            
            flie_type: 1,
            page:val
          }
         axios({
          method: 'post',
          baseURL: baseurl,
          url: `${url}user/shop/goodslist`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;',
          },
          data: qs.stringify(params)
        }).then((res) => {
          console.log(res.data.code);
        if (res.status == 200) {
            const data = res.data.data;
            window.data=data;
            this.getImgList.length=0;
            [...data].forEach((item,index)=>{
              if(!item){
                return ;
              }
                this.getImgList.push({goods_name:item.goods_name,goods_price:item.goods_price,goods_origin_price:item.goods_origin_price,check:false,src:`${this.$store.state.qiniu}/${item.goods_cover}`,goods_id:item.goods_id})
            })
                  // console.log(this.rootlist);            
          // console.log(res);
        } else {

          }
        });
      },
      handleClose() {
        this.dialogVisible = false;
        this.$emit('close');
      },
      checkHandle(i){
              this.getImgList[i].check = !this.getImgList[i].check;
      },
      addImg() {
        let list =this.getImgList.filter((item,index)=>{
                return item.check==true;
        })
            console.log(list);
            this.$emit('postImgs',list)
            this.$emit('close');
              this.dialogVisible = false;                   
        // this.$emit('newImg');
      },
      handleSuccess(res) {
        let params = {
            _token: this.$store.state._token,
            app_id: this.$store.state.app_id,
            group_id: this.$store.state.group_id,            
            flie_type: 1,
          }
         axios({
          method: 'post',
          baseURL: baseurl,
          url: `${url}/user/upload.upload/getlist`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;',
          },
          data: qs.stringify(params)
        }).then((res) => {
          console.log(res);
        if (res.data.data.code == 200) {
            this.$message('上传成功');
            this.getImgList();
          console.log(res);
        } else {
            this.$message.error(res.data.message);
          }
        });
      },
      geilistHandle(group_id){
        let params = {
            _token: this.$store.state._token,
            app_id: this.$store.state.app_id,
            group_id,            
            file_type: 1,
          }
        axios({
          method: 'post',
          baseURL: baseurl,
          url: `${url}/user/upload.upload/getlist`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;',
          },
          data: qs.stringify(params)
        }).then((res) => {
          let {data, code, msg} = res.data;

          if (+code == 200) {
            this.imgList = Array.prototype.slice.call(data);
            this.$store.commit('currentImgUrl', this.imgList[0].file)
          }
        })
      },
    },
    created() {
     let params = {
            _token: this.$store.state._token,
            app_id: this.$store.state.app_id,
            // group_id: this.$store.state.group_id,            
            flie_type: 1,
          }
         axios({
          method: 'post',
          baseURL: baseurl,
          url: `${url}user/shop/goodslist`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;',
          },
          data: qs.stringify(params)
        }).then((res) => {
          console.log(res.data.code);
        if (res.status == 200) {
            const data = res.data.data;
            window.data=data;
            [...data].forEach((item,index)=>{
              if(!item){
                return ;
              }
                this.getImgList.push({goods_name:item.goods_name,goods_price:item.goods_price,goods_origin_price:item.goods_origin_price,check:false,src:`${this.$store.state.qiniu}/${item.goods_cover}`,goods_id:item.goods_id})
            })
                  // console.log(this.rootlist);            
          // console.log(res);
        } else {

          }
        });
           
    },
  };
</script>

<style scoped lang="scss">
.currentImg {
  border:2px solid #00ffff !important;;
}
.form-select{
    width: 100px;
        transform-origin: left;
    // transform: scale(0.8);
    margin-left: 20px;
}
.form-radio{
    font-size: 12px;
    transform-origin: left;
    // transform: scale(0.8);
    // margin-left: -10px;
}
.form-inline-form{
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-around;
    display: inline-block;
    margin-left: 160px;
    .form-inline-form-from{
        width: 80px;
    }
    .form-inline-form-to{
        width:80px;
    }
}
.form-search{
    width: 200px;
    margin-left: 20px;
}
.form-input1{
    position: relative;
    &::before{
        content: '价格';
        font-size: 12px;
        left: -49px;
        position: absolute;
    }
}
.form-input2{
    position: relative;
    margin-left: 20px;
    &::before{
        content: '--';
        font-size: 12px;
        left: -25px;
        display: block;
        position: absolute;
        color:grey;
    }
}
.img_box{
    position: absolute;
    width: 96%;
    height: 360px;
    overflow-y: scroll;
    // display: flex;
    flex-wrap: wrap;
    // justify-content: flex-start;
    float: left;
    z-index:99;
  // margin: 5px auto;
  .img_item_border{
    float: left;    
    z-index: 999999999;
          border: 1px solid rgba(grey,0.4);
          height: 90px;
          width: 150px;
          margin: 5px 5px 0px;
            cursor: pointer;      
            z-index: 99;    
            border-radius: 5px;
            display: flex;
            align-items: center;
          img{
            width: 63px;
            height: 63px;
            // margin-top: 15%;
            border-radius: 5px;
            // border: 1px solid rgba(grey,0.4);
            margin-left: 5px;
          }
          div{
            user-select: none;
            margin-left: 3px;
            color: rgba(grey,0.8);
            text-align: left;
          }
  }
}
</style>
