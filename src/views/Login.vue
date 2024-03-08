<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="login-title">欢迎登录</div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0"
        class="main-content"
      >
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="username">
            <template #prepend>
              <el-button icon="el-icon-user" style="color: #fff"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="param.password"
            @keyup.enter="submitForm()"
          >
            <template #prepend>
              <el-button icon="el-icon-lock" style="color: #fff"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
      </el-form>
    </div>
    <vue-particles />
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: {
        username: "admin",
        password: "123123",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created() {
    this.$store.commit("clearTags");
  },
  methods: {
    submitForm() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.$message.success("登录成功");
          localStorage.setItem("ms_username", this.param.username);
          this.$router.push("/");
        } else {
          this.$message.error("请输入账号和密码");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="postcss">
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../assets/img/login-bg.jpg) center center no-repeat;
  background-size: cover;
  .login-content {
    position: absolute;
    right: 10%;
    top: 50%;
    border-radius: 5px;
    margin: -175px 0;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(48, 52, 54, 0.1) !important;
    min-width: 350px;
    &:hover {
      border: 1px solid rgba(48, 52, 54, 0.9) !important;
    }
    .login-title {
      line-height: 50px !important;
      font-size: 20px;
      color: #fff;
      text-align: left;
      padding: 0 30px;
      border-bottom: 1px solid #eee;
    }
    .main-content {
      padding: 30px;
      .el-input-group__prepend,
      .el-input__inner {
        background-color: rgba(28, 31, 32, 0.1);
        color: rgba(365, 365, 365, 0.85);
      }
      .login-btn {
        button {
          width: 100%;
          height: 36px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
