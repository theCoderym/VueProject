<template>
  <div class="loginContent">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <h1 style="color: white">欢迎,请登录!</h1>
      </a-form-item>
      <a-form-item class="loginInput">
        <a-input
          v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入用户名!' }] },
        ]"
          placeholder="用户名"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码!' }] },
        ]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
<!--        <a-checkbox-->
<!--          v-decorator="[-->
<!--          'remember',-->
<!--          {-->
<!--            valuePropName: 'checked',-->
<!--            initialValue: true,-->
<!--          },-->
<!--        ]"-->
<!--        >-->
<!--          记住密码-->
<!--        </a-checkbox>-->
<!--        <a class="login-form-forgot" href="">-->
<!--          Forgot password-->
<!--        </a>-->
        <a-button type="primary" html-type="submit" class="login-form-button">
          登  录
        </a-button>
<!--        Or-->
<!--        <a href="">-->
<!--          register now!-->
<!--        </a>-->
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
}
</script>

<style scoped>

.loginContent{
  height: 100%;
  background-color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;

}

.loginInput{
  flex-grow: 2;
}

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
