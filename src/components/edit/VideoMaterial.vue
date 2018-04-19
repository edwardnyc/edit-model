<template>
  <el-dialog
    title="素材库"
    :visible.sync="dialogVisible"
    width="898px"
    :before-close="handleClose"
    class="material">
    <div class="material-con">
      <div class="menu-left">
        <div class="menu-item">我的视频</div>
        <div class="up-pic">
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
            file_type:2}">
            <el-button size="mini"><big>+</big>上传</el-button>
            <span class="desc">请上传小于10MB的视频</span>
            <input id="upPic" type="file" style="display: none">
          </el-upload>
        </div>
      </div>
      <div class="material-box">
        <div class="content">
          <div class="videos" v-for="(item, index) in videoList " :key="index" @click="selectVideo(item, index)" :class="{'currentVideo': currentVideoIndex === index}">
            <span class="del-video" @click="delVideosrc(item)"><big>x</big></span>
            <video :src="$store.state.qiniu+ '/' + item.file_path" :style="{width:'100%',height:'100%'}" alt=""></video>
          </div>
        </div>
        <div class="material-btn">
          <el-button size="small" @click="handleClose">取 消</el-button>
          <el-button size="small" type="primary" @click="addVideo">确 定</el-button>
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
      dialogVideo: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        dialogVisible: this.dialogVideo,
        currentVideoIndex: '',
        videoList: [],
        group_id: '',
        headers:{
        }
      };
    },
    watch: {
      dialogVideo(val) {
        this.dialogVisible = val;
      },
    },
    methods: {
      handleClose() {
        this.dialogVisible = false;
        this.$emit('close');
      },
      addVideo() {
        this.dialogVisible = false;
        this.$emit('close');
        this.$emit('newVideo');
      },
      handleSuccess(res) {
        this.$message({
          message: '上传成功', 
          type: 'success'
        });
        this.getVideoList(this.group_id); 
      },
      beforeUpload(file) {
        console.log(file.type);
        const isMP4 = file.type === 'video/mp4';
        const isLt10M = file.size / 1024 / 1024 < 10;

        if (!isMP4) {
          alert('上传视频只能是 MP4 格式!');
        }
        if (!isLt10M) {
          this.$message.error('上传视频大小不能超过 10MB!');
        }
        return isLt10M && isMP4;
      },
      getVideoList(group_id){
        let params = {
            _token: this.$store.state._token,
            app_id: this.$store.state.app_id,
            group_id,            
            file_type: 2,
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
            this.videoList = Array.prototype.slice.call(data);
          }
        })
      },
      selectVideo(item, index) {
        this.currentVideoIndex = index;
        this.$store.commit('currentVideoUrl', this.$store.state.qiniu+ '/' + item.file_path)
      },
      delVideosrc(item) {
        console.log('sss')
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
            this.getVideoList(this.group_id);      
          }
        })
      },
    },
    created() {
       let params = {
            _token: this.$store.state._token,
            app_id: this.$store.state.app_id,          
            file_type: 2,
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
            this.getVideoList(groupid);
          }
        })
      
      }
    }
</script>

<style scoped>
.currentVideo {
  border: 1px solid #00ffff !important;
}
</style>
