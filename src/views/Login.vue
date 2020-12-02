<template>
  <div class="login-container">
    <el-tabs
      v-model="activeName"
      type="border-card"
      class="login-tabs"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane label="登录" name="login">
        <el-form
          ref="loginForm"
          :model="userInfo"
          status-icon
          :rules="rules"
          class="login-form"
        >
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="userInfo.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="userInfo.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册" name="register">
        <el-form
          ref="registerForm"
          :model="userInfo"
          status-icon
          :rules="rules"
          class="login-form"
        >
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="userInfo.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="userInfo.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="surePassword">
            <el-input
              type="password"
              v-model="userInfo.surePassword"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input type="email" v-model="userInfo.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitRegForm('registerForm')"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import api from "../api";
import jwt from "jwt-decode";
export default {
  name: "Login",
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      }
      if (value.length <= 3) {
        callback(new Error("长度不够"));
      }
      callback();
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };

    var validateSurePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };

    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      }
      callback();
    };
    return {
      activeName: "login",
      userInfo: {
        username: "",
        password: "",
        surePassword: "",
        email: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        surePassword: [{ validator: validateSurePassword, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
      },
    };
  },
  methods: {
    //登录
    ...mapMutations("loginModules", ["setUser"]),
    submitForm() {
      api
        .getLogin({
          username: this.userInfo.username,
          password: this.userInfo.password,
        })
        .then((res) => {
          if (res.status === 200) {
            this.setUser({
              username: jwt(res.data).username,
              token: res.data,
            });

            localStorage.setItem("ego", res.data);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
          this.$message({
            message: error.data.errors,
            type: "error",
          });
        });
    },
    submitRegForm() {
      api
        .getRegister({
          username: this.userInfo.username,
          password: this.userInfo.password,
          email: this.userInfo.email,
        })
        .then((res) => {
          if (res.status === 200) {
            this.$message({
              message: res.data.msg,
              type: "success",
            });
          }
        })
        .catch((error) => {
          this.$message({
            message: error.data.msg,
            type: "error",
          });
        });
    },
    handleClick() {},
  },
};
</script>

<style scoped lang="less">
.login-container {
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
  .login-form {
    padding: 40px 40px;
  }
  h3 {
    margin-top: 20px;
  }
  .login-tabs {
    border-radius: 5px;
  }
}
</style>