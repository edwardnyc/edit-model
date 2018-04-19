<template>
  <el-dialog  center  fullscreen 
    title="素材库"
    :visible.sync="dialogVisible"
    width="890px"
    style= "height:800px;margin-top:100px;"
    :before-close="handleClose"
    class="material">
    <div class="material-con">
      <div class="menu-left">
        <div class="menu-item">我的图片</div>
        <div class="up-pic" id="container">
          <el-upload style="position:absolute;bottom:50px;"
            class="upload-demo"
             action="https://jsonplaceholder.typicode.com/posts/"            
            :show-file-list="false"
            :on-success="handleSuccess"
            :before-upload="beforeUpload"
            :headers="{Authorization: $store.state.qiniuToken}"
            :data="{token: $store.state.qiniuToken}">
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
            <img :src="item.file" alt="" :class="{ 'currentImg' : currentImgIndex === index}">
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
import axios from 'axios'
  export default {
    props: {
      dialogImages: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        dialogVisible: this.dialogImages,
        uploader: {},
        imgList: [],
        currentImgIndex: 0
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
      },
      getImgList() {
        axios({
          method: 'post',
          url: '/wapi/admin/file/getlist',
          data: {
            _token: this.$store.state._token,
            _appid: this.$store.state.wx_open_id,
            type: 1,
          }
        }).then((res) => {
          if (res.data.code == '1') {
            this.imgList = res.data.message;
            this.$store.commit('currentImgUrl', this.imgList[0].file)
          }
        })
      },
      handleSuccess(res) {
        axios({
          method: 'post',
          url: '/wapi/admin/crud/create',
          data: {
            table: 'file',
            _token: this.$store.state._token,
            file: 'http://p35fb4ze5.bkt.clouddn.com/' + res.hash,
            _appid: this.$store.state.wx_open_id,
            type: 1,
            open_id: this.$store.state.wx_open_id
          }
        }).then((res) => {
            if (res.data.code == 1) {
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
      selectImg(index) {
        this.currentImgIndex = index;
        this.$store.commit('currentImgUrl', this.imgList[index].file)
      },
    },
    created() {
    //   axios({
    //     method: 'post',
    //     url: '/api/qiniu',
    //     data: {
    //       _token: this.$store.state._token,
    //     },
    //   }).then((res) => {
    //     this.$store.commit('writeQiniuToken', res.data.message);
    //   });
    //   this.getImgList();
    },

  };
</script>

<style scoped>
.currentImg {
  border:2px solid #00ffff !important;;
}
.material-btn{
    position: absolute;
    bottom: 50px;
    right: 50px;
}
</style>
