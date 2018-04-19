<template>
  <el-dialog  
    title="素材库"
    :visible.sync="dialogVisible"
    width="898px"
    :before-close="handleClose"
    class="material">
    <div style="color:#ababb2;position:absolute;left:75px;top:21px;">
       （建议3-4张，请在营销-营销中心-优惠券中添加优惠券）
    </div>
    <div class="metarial-table">
              <el-table 
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  label="优惠券名称"
                  width="200">
                  <template slot-scope="scope">{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                  prop="type"
                  label="代金券类型"
                  width="220">
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="有效时间"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>

    </div>
        <div class="material-btn">
          <el-button size="small" @click="handleClose" class ="btn1 btn">取 消</el-button>
          <el-button size="small" type="primary" @click="addImg" class ="btn2 btn">确 定</el-button>
        </div>
      
   
  </el-dialog>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  import config from   '../../../store/config'
  let baseurl = config.proxy.baseurl;
  let url = config.proxy.apiHost;
  function timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var   M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
         var  D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
         var  s = date.getSeconds();
        return Y+M+D+h+m+s;
    }
  export default {
    props: {
      alert_coupon: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        group_id: '',
        dialogVisible: this.alert_coupon,
        uploader: {},
        imgList: [],
        tableData3: [],
        multipleSelection: [],
        currentImgIndex: 0,
        headers:{
          'Content-Type':'multipart/form-data', 
          // 'Authorization': this.$store.state._token,
        },
        
      };
    },
    watch: {
      alert_coupon(val) {
        this.dialogVisible = val;
      },
      // propsArray(arr){
      //   this.tableData3.forEach((item,index)=>{
      //       if(this.propsArray.includes(item.key)){
      //         console.log(item.key);
      //       }
      //   })
      // }
    },
    methods: {
            handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      handleClose() {
        this.dialogVisible = false;
        this.$emit('close');
      },
      addImg() {
        // console.log(this.multipleSelection);
        this.$emit('couponChange',this.multipleSelection);        
        this.dialogVisible = false;
        this.$emit('close');
    
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
         this.$store.dispatch('coupon',{
               _token: this.$store.state._token,
               app_id:this.$store.state.app_id
            }).then((res)=>{
               const {data} = res.data;
               console.log(data);
              [...data].forEach((item,index)=>{
                  let obj =new Object();
                    obj.money = item.stock;
                    obj.offer = item.discount;
                    obj.key= index;
                    obj.time1 =  timestampToTime(item.apply_time.time.start),
                    obj.time2=timestampToTime(item.apply_time.time.end);
                    obj.id=item.id
                    obj.type=  item.coupon_type=="full_cut"?'满减劵':'折扣劵';
                    obj.name = item.name;
                    obj.time= obj.time1+'至'+obj.time2;
                    this.tableData3.push(obj);
              })
            })
    },
  };
</script>

<style scoped lang="scss">
.currentImg {
  border:2px solid #00ffff !important;;
}
.material .el-dialog__header{
  border-bottom-color: transparent !important;
}
.material-btn{
  height: 100px;
  position: relative;
  .btn{
    position: absolute;
    right:16px;
    top: 40px;
  }
  .btn1{
    right: 100px;
  }
}
.metarial-table{
  border: 1px solid #e9e9e9;
    transform: scale(0.98);
    transform-origin: left top;
    margin-left:20px;
    margin-top: 30px;
}
</style>
