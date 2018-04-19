<template>
  <div>
      <div v-if="name==='canyin'">
        <div style="width:80px;height:30px; margin:15px 0;font-weight:bold;">模块设置</div>

        <el-form ref="form" label-width="180px" style='max-width:1500px; min-width:400px; margin-bottom:15px;'>
            <el-col :span="24" style=" height:280px;background:#f2f1f6; padding:30px 0 0 167px;  border-radius:5px; margin-bottom:15px">
            <!-- <el-form-item > -->
              <div style="margin-left:-120px;padding-left: 90px;margin-top: 25px">
                <div style="margin-left: 80px;font-size:12px;color: black;width: 100px;height: 16px;padding-top: 20px">请选择是否开启</div>
            <el-form-item label="堂食" style="padding-top: 20px">
                <el-radio-group v-model="form.resourceA" style="padding-left:62px">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="外带">
                <el-radio-group v-model="form.resourceB" style="padding-left:62px">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="外卖">
                <el-radio-group v-model="form.resourceC" style="padding-left:62px">
                  <el-radio :label="1" >是</el-radio>
                    <el-radio :label="2" >否</el-radio>
                </el-radio-group>
            </el-form-item>
                <el-form-item style="margin-top:100px;">
                  <el-button type="primary" @click="onSubmit"  v-if='form.resourceC  !==1 ' style="margin-left: 150px;display: block">保存</el-button>
                </el-form-item>
              </div>
            <!-- </el-form-item> -->
        </el-col>
          <div>


            <div style="margin-top: 20px; height: 200px;">
              <el-collapse-transition>
                <div v-if="form.resourceC === 1">
                  <div class="transition-box"><div   style=" width:80px;height:30px; margin:15px 0;font-weight:bold;">外卖设置</div></div>
                  <div class="transition-box"> <div>
                    <el-col :span="24"  style=" height:100%;background:#f2f1f6; padding:30px 0 0 167px;  border-radius:5px; margin-top:40px">
                      <el-form-item label="营业状态">
                        <el-radio-group v-model="form.resourceD" style="padding-left:62px">
                          <el-radio :label="1">是</el-radio>
                          <el-radio :label="2">否</el-radio>
                        </el-radio-group>
                      </el-form-item>
                      <el-form-item label="起送价格">
                        <el-input v-model="form.startSum" style="width:40%;height:23px"></el-input>
                      </el-form-item>
                      <el-form-item label="配送费用">
                        <el-input v-model="form.sendSum" style="width:40%;height:23px"></el-input>
                      </el-form-item>
                      <el-form-item style="margin-top:100px;">
                        <el-button type="primary" @click="onSubmit" style="margin-left: 150px;">保存</el-button>
                      </el-form-item>
                    </el-col>
                  </div></div>
                </div>
              </el-collapse-transition>

            </div>
          </div>


  </el-form>

  </div>
  </div>
</template>
<script>
  import axios from "axios"
  import config from '../../../store/config'
  const apiHost= config.proxy.apiHost;
export default {
  data() {
    return {
      form: {
        app_id:this.$store.state.app_id,
        _token: this.$store.state._token,
        var_name:"模块设置",
        resourceA: "",
        resourceB: "",
        resourceC: "",
        resourceD: "",
        startSum:'',
        sendSum:''
      }
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
      axios.post(`/api/manage/configgroup/addsetting`, this.form).then(res => {
        if (res.data.code === 200) {
          this.$refs.form.resetFields()
        }

      }).catch(res => {
      })
    }
  },
  created() {

  }
};
</script>
<style lang="scss" scoped>

</style>
