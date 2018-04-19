<template>
    <div class="form_data">
        <el-form  size="mini" :model="formInline">
            <el-col :span="7">
              <el-form-item size="mini">
                <el-select v-model="formInline.province" >
                  <el-option v-for="(item, index) in province_data" :key="index" :label="item.province" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="1" style="font-size:12px;height:28px;line-height:28px;">
              {{pro}}
            </el-col>
            <el-col :span="7">
              <el-form-item size="mini" >
                <el-select v-model="formInline.city" >
                  <el-option v-for="(item, index) in city_data" :key="index" :label="item.city" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            </el-col>
            <el-col :span="1" style="font-size:12px;height:28px;line-height:28px;">
              {{city}}
            </el-col>
            <el-col :span="7">
              <el-form-item size="mini" >
                <el-select v-model="formInline.area" >
                  <el-option v-for="(item, index) in area_data" :key="index" :label="item.area" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            </el-col>
            <el-col :span="1" style="font-size:12px;height:28px;line-height:28px;">
              {{area}}
            </el-col>
        </el-form>
    </div>
</template>
<script>
    export default {
        props:['formInline', 'pro', 'city', 'area'],
        data(){
            return {
            }
        }
    }
</script>
<style>


</style>
