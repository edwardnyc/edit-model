<template>
  <div>
      <div v-if="name==='hykshezhe'">
       <div style="width:90px;height:30px; margin:15px 0;font-weight:bold;">会员卡设置</div>
        <el-col :span="24" style=" height:100%;background:#f2f1f6; padding:30px 0 0 167px;  border-radius:5px;">
        <el-form ref="form" label-width="180px" style='max-width:800px; min-width:400px;'>
            <el-form-item label="会员卡名称">
                <el-input placeholder="请输入名称" v-model="form.input1" ></el-input>
            </el-form-item>
            <el-form-item label="会员卡颜色">
                <div class="block">
                <el-color-picker v-model="form.color1"></el-color-picker>
              </div>
            </el-form-item>
        <el-form-item label="会员卡指定时间">
          <!--<el-radio v-model="form.radio" label="1">固定日期</el-radio>-->
                <div class="block">
                <el-date-picker
                  v-model="form.value1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期">
                </el-date-picker>
              </div>
              <!--<el-radio v-model="form.radio" label="2" style="display:block; margin:24px 0 8px 0">指定时间</el-radio>-->
              <!--领劵后 <el-input style="width: 100px; "></el-input> 天生效，有效期 <el-input style="width: 100px" ></el-input> 天-->
            </el-form-item>
            <el-form-item label="可用门店">
                <el-radio v-model="form.radio1" label="3">门店通用</el-radio>
                <el-radio v-model="form.radio1" label="4">指定门店</el-radio>

            </el-form-item>
            <!--<el-form-item label="门店列表" >-->
              <!--<div style="width:270px;height: 230px;background-color:#fff;padding-left: 20px;overflow: hidden">-->
                <!--<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>-->
                <!--<div style="margin: 15px 0;"></div>-->
                <!--<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">-->
                  <!--<el-checkbox style="display: block;margin-left: 20px;float: left" v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>-->
                <!--</el-checkbox-group>-->
              <!--</div>-->
            <!--</el-form-item>-->
           <el-form-item label="使用须知">
               <el-input
                type="textarea"
                :rows="5"
                :maxlength="200"
                placeholder="限制200字以内"
                v-model="form.textarea">
              </el-input>
            </el-form-item>
            <el-form-item label="成长值规则">

               消费 <el-input
                  placeholder="元"
                  prefix-icon=""
                  v-model="form.input21" style="width:65px">
                </el-input>  获得一点成长值

            </el-form-item>
             <!--<div v-model="form.vip_welfare"></div>-->
            <el-form-item style="margin-top:100px;">
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>

    </el-form>
     </el-col>
      </div>
  </div>
</template>
<script>
  import qs from "qs"
  import axios from "axios"
  import config from '../../../store/config'
  const url = config.proxy.apiHost;
  // const cityOptions = ['1门店名称', '2门店名称', '3门店名称', '4门店名称','5门店名称', '6门店名称', '7门店名称', '8门店名称'];
export default {
  data() {
    return {
          form:{
            input1:'',
            color1:'',
            value1:'',
            // radio2:'',
            input21:'',
            textarea: '',
            radio:'',
            radio1:'',
            // vip_welfare:" "
          },

          // checkAll: false,
          // checkedCities: [],
          // cities: cityOptions,
          // isIndeterminate: true
    };
  },
  computed: {
    _name() {
      return this.name;
    }
  },
  props: ["name"],
  methods: {

    onSubmit() {
      var date1 = new Date(this.form.value1[0]);
      var time1=date1.getTime();
      var date2 = new Date(this.form.value1[1]);
      var time2=date2.getTime();
      let prams={
        "card_name":this.form.input1,
        "_appid":this.$store.state.app_id,
        "card_color":this.form.color1,
        "card_start_time":time1,
        "card_end_time":time2,
        "apply_store":this.form.radio1,
        "card_notice":this.form.textarea,
        "vip_rule":this.form.input21,
        "vip_welfare":"",
        "_token":this.$store.state._token
      };
      let la=qs.stringify(prams);
      axios.post(`http://api.ztwlxx.club/user/Useconfig/addvipset`, la).then(res => {
        if (res.data.code === 200) {
          for (var prop in this.form) {
            this.form[prop] = '';

          }
        }
      }).catch(res => {
      })
    },
    created() {
      //  alert(this.name)
    }
   }
  }
//     handleCheckAllChange(val) {
//       this.checkedCities = val ? cityOptions : [];
//       this.isIndeterminate = false;
//     },
//     handleCheckedCitiesChange(value) {
//       let checkedCount = value.length;
//       this.checkAll = checkedCount === this.cities.length;
//       this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
//     }
//   },
//   created() {
//     //  alert(this.name)
//   }
// };
</script>
<style lang="scss" scoped>

</style>
