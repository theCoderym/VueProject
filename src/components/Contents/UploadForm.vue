<template>
  <div>
    <p class="form-title">提交活动</p>
    <a-form :form="form" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
      <a-form-item label="活动名称">
        <a-input
          v-decorator="['name', { rules: [{ required: true, message: '请输入活动名称!' }] }]"
          placeholder="请输入活动名称"
        />
      </a-form-item>
      <a-form-item label="活动类型">
        <a-select
          v-decorator="[
          'type',
          { rules: [{ required: true, message: '请选择活动类型!' }] },
        ]"
          placeholder="选择活动类型"
          @change="handleSelectChange"
        >
          <a-select-option value="活动类型一">
            活动类型一
          </a-select-option>
          <a-select-option value="活动类型二">
            活动类型二
          </a-select-option>
          <a-select-option value="活动类型三">
            活动类型二
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="活动描述">
        <a-input
          type="textarea"
          v-decorator="['desc', { rules: [{ required: false, message: '请输入活动描述!' }] }]"
          placeholder="请输入活动描述"
        />
      </a-form-item>
      <a-form-item label="活动时间" style="margin-bottom:0;">
          <a-date-picker
                         v-decorator="['actdate', { rules: [{ required: true, message: '请选择活动时间!' }] }]"
                         placeholder="活动时间" style="width: 100%"
                         format="YYYY-MM-DD"
                         @change="startDateChange" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 1, offset: 5 }">
        <a-button type="primary" html-type="submit">
          提交
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "UploadForm",

  data(){
    return {
      formLayout: 'horizontal',
      dateValidateStatus:'',
      dateValidateHelp:'',
      form: this.$form.createForm(this, { name: 'activity' }),

    }
  },
  methods: {

    startDateChange: function (moment, dateString) {
      console.log(moment, dateString)

    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {

          values.actdate = values.actdate.format('YYYY-MM-DD');
          // console.log('Received values of form: ', values);
          var formarr = JSON.parse(localStorage.getItem('formArray'));
          if(formarr === undefined)
          {
            formarr = [];
          }
          formarr.push(values);
          // localStorage.setItem('formArray',formarr);
          localStorage.setItem('formArray',JSON.stringify(formarr));
          // console.log('localstorgedata:',formarr);
          this.form.setFieldsValue({
            name:'',
            type:'',
            desc:'',
            actdate:'',
          });
          this.$message.success('提交成功');

        }else{
          this.$message.error('提交失败');

        }
      });
    },
    handleSelectChange(value) {
      console.log(value);

      //设置其他组件的值
      // this.form.setFieldsValue({
      //   name: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      // });
    },
  },
}
</script>

<style scoped>
.form-title{
  font-size: 20px;
  font-weight: bold;
  color: #000;
}
</style>
