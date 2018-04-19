<style lang="scss" scoped>
.overview-shadow {
  -moz-box-shadow:0px 0px 10px #e3e3e3;
  -webkit-box-shadow:0px 0px 10px #e3e3e3;
  box-shadow:0px 0px 10px #e3e3e3;
  box-sizing: border-box;
  border-radius: 6px;
}
.v-edit-step3 {
  background: #fff;
  padding: 65px 150px;
  h2 {
    margin: 0 0 50px 40px; 
  }
  .edit-btn {
    border: 1px solid #1DA2C8;
    border-radius: 100px;
    width: 80%;
    margin: 30px 10%;
    height: 40px;
    background: #fff;
    color: #1DA2C8;
  }
  .upload {
    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
    }
    .el-form-item__content {
      // > div {
      //   float: right;
      //   margin-right: 30px;
      //   color: #1DA2C8;
      // }
    }
    .upload-img {
      float: right;
    }
    .upload-change {
      width: 30px;
      float: right;
      margin-right: 30px;
      color: #1DA2C8;
      cursor: pointer;
      input {
        width: 0;
      }
    }
  }
  .address {
    width: 15%
  }
}
</style>

<template>
<div>
  <ListHead />
  <el-main>
    <div class="v-edit-step3 overview-shadow">
      <h2>商品信息</h2>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="商品名称" prop="app_name">
          <el-input v-model="ruleForm.app_name" placeholder="请填写您的商户名"></el-input>
        </el-form-item>
        <!-- <el-form-item label="商品地址">
          <el-select v-model="ruleForm.province" placeholder="请选择省份">
            <el-option 
              v-for="(item, index) in province" 
              :key="index" 
              :label="item.name" 
              :value="item.id"
            ></el-option>
          </el-select>
          <el-select v-model="ruleForm.city" placeholder="请选择城市">
            <el-option 
              v-for="(item, index) in city" 
              :key="index"
              :label="item.name" 
              :value="item.id"
            ></el-option>
          </el-select>
          <el-select v-model="ruleForm.area" placeholder="请选择区域">
            <el-option 
              v-for="(item, index) in area" 
              :key="index" 
              :label="item.name" 
              :value="item.id"
            ></el-option>
          </el-select> -->
          <!-- <el-input v-model="ruleForm.province" placeholder="请填写省" class="address"></el-input>
          <el-input v-model="ruleForm.city" placeholder="请填写市" class="address"></el-input>
          <el-input v-model="ruleForm.area" placeholder="请填写区" class="address"></el-input> -->
        <!-- </el-form-item> -->
        <el-form-item label="商品行业" prop="industry">
          <el-select v-model="ruleForm.industry" placeholder="请选择商户行业">
            <el-option 
              v-for="(industry, index) in industrys" 
              :key="index" 
              :label="industry.industry_name" 
              :value="industry.open_id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品logo" prop="app_cover" class="upload">
          <img style="borderRadius: 50% 50%" ref = "show_img">
            <label class="upload-change">
              <input type="file" @change="changeUrl" ref="changeUrl" name="changeUrl">修改
            </label>
        </el-form-item>
        <el-form-item label="商品简介" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" :rows="6" placeholder="最多不超过500字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="edit-btn">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-main>
</div>
</template>

<script>
import Token from '@/utils/token'
import ListHead from '@/components/edit/ListHead'
import md5 from '@/utils/md5'
import aixos from 'axios'
import qs from 'qs'
export default {
  mixins: [Token],
  components: {
    ListHead
  },
  data() {
    return {
      group_id: '',
      file:'',
      industrys: [
        { industry_name: "网络", open_id: "4" }
      ],
      province: [
        // {}
      ],
      city: [
        // {}
      ],
      area: [
        // {}
      ],
      ruleForm: {
        app_name: '',
        app_cover: '',
        city: '',
        area: '',
        address: '',
        industry: '',
        desc: '',
        filed: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      },
      rules: {
        name: [
          { required: true, message: '请填写您的商户名', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请填写省／市／区', trigger: 'blur' },
          // { required: true, message: '请填写市', trigger: 'blur' },
          // { required: true, message: '请填写区', trigger: 'blur' },
          // { required: true, message: '请填写省／市／区', trigger: 'change' }
        ],
        industry: [
          { required: true, message: '请选择商户行业', trigger: 'blur' },
          // { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      uploadToken: ''
    };
  },
  watch: {
    'ruleForm.filed' (val) {
      // console.log(val);
    },
    'ruleForm.industry' (val) {
      // console.log(val);
    },
    'ruleForm.province' (val) {
      this.ruleForm.city = ''
      this.getcity(val, cityData => {
        this.city = cityData
      })
    },
    'ruleForm.city' (val) {
      this.ruleForm.area = ''
      this.getcity(val, areaData => {
        this.area = areaData
      })
    }
  },
  created () {
    if (!this.$store.state._token) {
      this.$router.push({ name: 'login' })
    }
    const params = {
      table: 'industry',
      _token: this.$store.state._token
    }
    if(!this.$route.params.group_id) {
      this.$router.push({ name: 'step2' })      
    }
    this.group_id = this.$route.params.group_id
    // this.province = this.getcity(0)
    this.getcity(0, (provinceData) => {
      this.province = provinceData
    });
  },
  methods: {
    getcity (id, cb) {
      let time = parseInt(new Date().getTime()/1000)
      let access_token = md5(time + 'eb0a191797624dd3a48fa681d3061212')
      let params = {
        parentid: id,
        time: time,
        access_token: access_token
      }
      this.$store.dispatch('getcity', params).then(res => {
        const { code, message } = res.data
        if (+code === 1) {
          cb && cb(message)
        } else {
          this.$message({
            message: '获取城市出错',
            type: 'error'
          })
        }
      })
    },
    changeUrl (e) {
      let self = this;
      var file = e.target.files[0];//获取File对象，这里是上传单张图片，[0]代表第一张图片。如果多张，就是一个var file = e.target.files;
      this.file= file;
      const fr= new FileReader();
      fr.readAsDataURL(file);
        fr.onloadend = function (e) {
        self.$refs.show_img.src= e.target.result;
      };
    },
    submitForm(formName) {
      function objectToFormData (obj, form, namespace) {
      const fd = form || new FormData();
      let formKey;
      for(var property in obj) {
        if(obj.hasOwnProperty(property)) {
          let key = Array.isArray(obj) ? '[]' : `[${property}]`;
          if(namespace) {
            formKey = namespace + key;
          } else {
            formKey = property;
          }
          if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
            objectToFormData(obj[property], fd, formKey);
          } else {
            fd.append(formKey, obj[property]);
          }
        }
      }
      return fd;
    }
      let userid = this.$store.state._token
      if (!userid) {
        this.$router.push({ name: 'login' })
         this.$message({
              message: "请先登录", 
              type: 'error'
          })
        return
      }
      var formdata= new FormData(this.$refs.ruleForm);
      formdata.append('_token', this.$store.state._token);
      formdata.append('group_id', this.group_id);
      formdata.append('status', 'authorized');
      formdata.append('app_cover', this.file);
      formdata.append('app_name', this.ruleForm.app_name);
      let self = this;
      this.$store.dispatch('step3', formdata).then((res)=>{
        let {data, code, msg} = res.data;
        if(code == 200){
          this.$router.push({name: 'step1'});
          this.$message({
              message: "创建成功",
              type: 'success'
          })          
        }else{
          this.$message({
              message: msg,
              type: 'error'
          })
        }
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>
