<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="login-title">不高兴就喝水</div>
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
              <el-button icon="el-icon-user"></el-button>
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
              <el-button icon="el-icon-lock"></el-button>
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
        password: "123123"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  created() {
    this.$store.commit("clearTags");
  },
  methods: {
    submitForm() {
      this.$refs.login.validate(valid => {
        if (valid) {
          this.$message.success("登录成功");
          localStorage.setItem("ms_username", this.param.username);
        //   this.$router.push("/");
        } else {
          this.$message.error("请输入账号和密码");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="sass">
.login-wrap 
  position: relative
  width: 100%
  height: 100%
  background: url(../assets/img/17.jpg) center center no-repeat
  background-size: cover
  .login-content 
    position: absolute
    left: 50%
    top: 50%
    width: 350px
    margin: -175px 20%
    border-radius: 5px
    background: rgba(255, 255, 255, 0.3)
    overflow: hidden
    border: 1px solid rgba(255, 255, 255, 0.3)
    &:hover
        border: 1px solid black
    .login-title 
      width: 100%
      line-height: 50px
      text-align: center
      font-size: 20px
      color: #fff
      text-align: left
      padding: 0 30px
      border-bottom: 1px solid black
    .main-content 
      padding: 30px 30px
      .el-input-group__prepend 
        background-color: rgba(28, 31, 32, 0.1)
      .el-input__inner
        background-color: rgba(28, 31, 32, 0.1)
      .login-btn 
        button 
          width: 100%
          height: 36px
          margin-bottom: 10px
</style>
