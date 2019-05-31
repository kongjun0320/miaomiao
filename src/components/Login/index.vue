<template>
  <div>
    <div id="content">
      <div class="login_body">
        <div>
          <input class="login_text" type="text" placeholder="账户名/手机号/Email" v-model="username">
        </div>
        <div>
          <input class="login_text" type="password" placeholder="请输入您的密码" v-model="password">
        </div>
        <div class="login_btn">
          <input type="submit" value="登录" @click="HandleLogin">
        </div>
        <div class="login_link">
          <a href="#">立即注册</a>
          <a href="#">找回密码</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { messageBox } from "../js";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async HandleLogin() {
      let that = this;
      if (!this.username || !this.password) {
        messageBox({
          title: "登录",
          content: "请输入用户名/密码",
          cancel: "取消"
        });
        return false;
      } else {
        let result = await this.$axios.post("/api2/users/login", {
          username: this.username,
          password: this.password
        });
        let data = result.data;
        if (data.status == 0) {
          messageBox({
            title: "登录",
            content: "登录成功",
            ok: "确定",
            handleOk() {
              that.$router.push("/mine/center");
            }
          });
        }
      }
    }
  }
};
</script>
<style scoped>
#content .login_body {
  width: 100%;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
</style>
