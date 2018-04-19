<style lang="scss">
.form-content {
  padding: 40px 50px;
  color: #333;
	background-color: #ffffff;
	border-radius: 2px;
  h2 {
    font-size: 16px;
    color: #001529;
    margin-bottom: 15px;
  }
  .demo-ruleForm{
    margin-left: 29px;
  }
  .date-export {
    display: inline-block;
    margin-left: 25px;
    width: 138px;
    height: 26px;
    line-height: 26px;
    background: #1DA2C8;
    font-size: 12px;
    color: #fff;
    border-radius: 100px;
    text-align: center;
    cursor: pointer;
  }
  .el-form-item {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 65px;
    }
  }
  .el-table {
    border: 1px solid #e7e7e7;
    border-bottom: none;
    border-radius: 2px;
    font-size: 12px;
    color: #333;
    thead {
      color: #333;
    }
  }
  .el-radio, .el-checkbox {
    font-size: 12px;
    color: #333;
    font-weight: normal;
  }
  .el-form-item__label {
    padding-right: 60px;
  }
  .el-form-item__label, .el-radio__label, .el-checkbox__label, .el-date-editor .el-range-input{
    font-size: 12px;
    color: #333;
  }
  .el-pagination {
    text-align: right;
    margin: 35px -5px 0 0;
    padding: 0;
  }
  .el-pagination.is-background .el-pager li {
    color: #333;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    font-weight: normal;
  }
  .el-pagination.is-background .el-pager li.active, .el-pagination.is-background .el-pager li:hover {
    background: #1DA2C8;
    color: #fff;
  }
  .el-pager li, .el-pagination button, .el-pagination span:not([class*=suffix]) {
    font-size: 12px;
  }
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    background-color: #fff;
    border: 1px solid #e7e7e7;
  }
}
</style>

<template>
<div class="form-content overview-shadow">
  <h2>表单数据</h2>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="170px" class="demo-ruleForm">
    <el-form-item label="请选择要查看的表单" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="新年活动"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="请选择收集渠道" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="小程序" name="type"></el-checkbox>
        <el-checkbox label="H5" name="type"></el-checkbox>
        <el-checkbox label="落地宝" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="时间范围">
      <el-date-picker
        v-model="value3"
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <div class="date-export">数据导出</div>
    </el-form-item>
  </el-form>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%; margin-left: 29px;">
    <el-table-column
      prop="name"
    align="center"      
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column 
      align="center"             
      prop="phone"
      label="电话"
      width="280">
    </el-table-column>
    <el-table-column
      align="center"          
      prop="remark"
      label="备注（您的喜好、需求等）">
    </el-table-column>
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next, jumper"
    :page-size="1"
    :total="4">
  </el-pagination>
</div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          name: '辛伟1',
          phone: '138464100954',
          remark: 'hello 1'
        }, {
          name: '辛伟2',
          phone: '138464100954',
          remark: 'hello 2'
        },{
          name: '辛伟3',
          phone: '138464100954',
          remark: 'hello 3'
        }],
        ruleForm: {
          type: [],
          resource: '',
        },
        rules: {
          resource: [
            { message: '请选择要查看的表单', trigger: 'change' }
          ],
        },
        value3: [new Date(2018, 1, 20), new Date(2018, 2, 20)]
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created () {
      if (!this.$store.state._token) {
        this.$router.push({ name: 'login' })
      }
      
    }
  }
</script>
