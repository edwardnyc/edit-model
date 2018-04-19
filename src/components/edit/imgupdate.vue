<template>
  <el-dialog
    title="素材库"
    :visible.sync="dialogVisible"
    width="898px"
    :before-close="handleClose"
    class="material">
    <div class="material-con">
      <div class="menu-left">
        <div class="menu-item">我的图片</div>
        <div class="menu-item" style="margin-top: 10px; background:#f8f8f8" v-for="(items, index) in rootlist" :key="index">
          {{items.group_name}}
        </div>
        <div class="up-pic" id="container">
          <el-upload
            class="upload-demo"
            action="http://api.ztwlxx.club/user/upload.upload/upload"
            :show-file-list="false"
            :on-success="handleSuccess"
            :before-upload="beforeUpload"
            :headers="headers"
            :data="{
              group_id: group_id,
              _token:$store.state._token,
            app_id: $store.state.app_id,
            file_type:1}">
            <el-button size="mini"><big>+</big>上传</el-button>
            <span class="desc">请上传小于2MB的图片</span>
            <input id="upPic" type="file" style="display: none">
          </el-upload>
        </div>
      </div>
      <div class="material-box">
        <div class="content">
          <div class="imgs" v-for="(item,index) in imgList" @click="selectImg(index)" :key="index">
            <span class="del-img"><big>x</big></span>
            <img :src="$store.state.qiniu+ '/' + item.file_path" alt="" :class="{ 'currentImg' : currentImgIndex === index}">
          </div>
        </div>
        <div class="material-btn">
          <el-button size="small" @click="handleClose">取 消</el-button>
          <el-button size="small" type="primary" @click="addImg">确 定</el-button>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  import config from  '../../store/config'  
  let baseurl = config.proxy.baseurl;
  let url = config.proxy.apiHost;
  
  export default {
    props: {
      dialogImages: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        group_id: '',
        dialogVisible: this.dialogImages,
        uploader: {},
        imgList: [],
        currentImgIndex: 0,
        headers:{
          'Content-Type':'multipart/form-data', 
          // 'Authorization': this.$store.state._token,
        },
        rootlist:[]
      };
    },
    watch: {
      dialogImages(val) {
        this.dialogVisible = val;
      },
    },
    methods: {
      handleClose() {
        this.dialogVisible = false;
        this.$emit('close');
      },
      addImg() {
        this.dialogVisible = false;
        this.$emit('close');
        this.$emit('newImg');
        this.$emit('lunboChangeImg',this.imgList[this.currentImgIndex]);
      },
      getImgList() {
        axios({
          method: 'post',
          baseURL: baseurl,
          url: `${url}/user/upload.upload/getlist`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;',
          },
          data: {
            _token: this.$store.state._token,
            app_id: this.$store.state.app_id,
            group_id: this.$store.state.group_id,            
            flie_type: 1,
          }
        }).then((res) => {
          console.log(res)
          if (res.data.code == '200') {
            this.imgList = res.data.data;
            // this.$store.commit('currentImgUrl', this.imgList[0].file)
          }
        })
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
      beforeUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG && !isPNG) {
          alert('上传图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isLt2M && (isPNG || isJPG);
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
      selectImg(index) {
        this.currentImgIndex = index;
        this.$store.commit('currentImgUrl', this.imgList[index].file)
      },
    },
    created() {
      console.log(this.$store.state.qiniu)
       let params = {
            _token: this.$store.state._token,
            app_id: this.$store.state.app_id,          
            file_type: 1,
          }
       axios({
          method: 'post',
          baseURL: baseurl,
          url: `${url}/user/upload.uploadgroup/getlist`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;',
          },
          data: qs.stringify(params)
        }).then((res) => {
          if (res.data.code == '200') {
            this.group_id = res.data.data[0][0].group_id;
           let groupid = this.group_id;
            // this.rootlist = res.data.data[0];
            this.geilistHandle(groupid);
          }
        })
    },
  };
</script>

<style scoped>
.currentImg {
  border:2px solid #00ffff !important;;
}
</style>
