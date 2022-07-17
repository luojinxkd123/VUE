<template>
  <div class="bg">
    <div class="login">
      <h2>登录</h2>
      <el-form ref="loginForm" :model="user" :rules="rules">
        <el-form-item label="用户名" class="item" prop="username">
          <el-input  v-model="user.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" class="item" prop="password">
          <el-input  v-model="user.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="onSubmit('loginForm')" >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('index')
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style>
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("/static/img/login.jpg");
    background-position: center;
    background-size:100%;
  }
  .login {
    padding: 3% 3% 3% 3%;
    /*圆润*/
    -webkit-border-radius: 10px;
    /*影效*/
    box-shadow: 0 0 25px #c1a0ff;
    width: 18%;
    margin: auto;
    margin-top: 10%;
    text-align: center;
  }
  .item .el-form-item__label {
    color: red;
    font-size: 15px;
  }
</style>
