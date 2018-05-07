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
          <div class="imgs" v-for="(item,index) in imgList" @click="selectImg(item, index)" :key="index">
            <span class="del-img" @click="delImage(item)"><big>x</big></span>
            <img :src="$store.state.qiniu+ '/' + item.file_path" alt="" :style="{width:'100%',height:'100%'}" :class="{ 'currentImg' : currentImgIndex === index}">
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
      dialogimgSlider:{
        type: Boolean,
        default: false,
      },
      dialogShareImg:{
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        group_id: '',
        dialogVisible: this.dialogImages,
        uploader: {},
        imgList: [],
        currentImgIndex: '',
        headers:{
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
        if(this.dialogimgSlider) {
          this.$emit('newSilder');
        }else if(this.dialogShareImg) {
          this.$emit('shareImg');
        } else{
          this.$emit('newImg');
        }

      },
      getImgList() {
        let params = {
            _token: this.$store.state._token,
            app_id: this.$store.state.app_id,
            group_id: this.group_id,
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
          const {code, data, msg} = res.data;
          if (+code == 200) {
            this.imgList = Array.prototype.slice.call(data);
          }
        })
      },
      handleSuccess(res) {
        this.$message({
          message: '上传成功',
          type: 'success'
        });
        this.geilistHandle(this.group_id);
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
          }
        })
      },
      selectImg(item, index) {
        this.currentImgIndex = index;
        this.$store.commit('currentImgUrl', this.$store.state.qiniu+ '/' + item.file_path)
        },
      delImage(item){
        let params = {
          _token : this.$store.state._token,
          app_id : this.$store.state.app_id,
          file_id: item.file_id,
          group_id: this.group_id
        }
          axios({
          method: 'post',
          baseURL: baseurl,
          url: `${url}/user/upload.upload/delete`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;',
          },
          data: qs.stringify(params)
        }).then((res) => {
          let {code, data} = res.data;
          if(+ code == 200){
            this.$message({
              message: '删除成功',
              type:  'success'
            })
            this.geilistHandle(this.group_id);
          }

      })
    }
    },
    created() {
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
