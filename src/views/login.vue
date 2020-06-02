<template>
  <div class="login-bg">
    <div class="login-head">
      <div class="login-head-box">
        <h3>欢迎登录</h3>
      </div>
    </div>
    <div class="login-login">
      <h4 class="login-login-title"></h4>
      <div>
        <div class="login_info">
          <span>账&#12288;号：</span>
          <input v-model="obj.username" />
        </div>
        <div class="login_info">
          <span>密&#12288;码：</span>
          <input
            v-model="obj.password"
            :type="ishowPaw ? 'text' : 'password'"
          />
          <van-icon
            :name="ishowPaw ? 'eye-o' : 'closed-eye'"
            @click="switchClick()"
          />
        </div>
        <div class="login-btn">
          <button @click="loginIn">登 录</button>
        </div>
      </div>

      <p class="login-login-tips">模板项目归dreamcfl版权所有</p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Field, Toast, Icon } from "vant";
import Cookie from "@u/cookie";
Vue.use(Toast);
Vue.use(Icon);
Vue.use(Field);
export default {
  name: "login",
  data() {
    return {
      ishowPaw: false,
      obj: {
        username: "",
        password: ""
      }
    };
  },
  components: {},
  mounted() {},
  methods: {
    switchClick() {
      this.ishowPaw = !this.ishowPaw;
    },
    loginIn() {
      // 账号正则
      var nameReg = /^.{1,20}$/;

      var msg = "";
      if (!nameReg.test(this.obj.password)) {
        msg = "请输入正确的密码";
      }
      if (!nameReg.test(this.obj.username)) {
        msg = "请输入正确的账号";
      }
      if (msg == "") {
        Toast.loading({
          message: "加载中...",
          forbidClick: true,
          onClose: () => {
            // 关闭时的回调
            // 存token
            Cookie.set("token", this.obj.username);
            this.$router.push({ path: "/home" });
          }
        });
      } else {
        Toast(msg);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.login-bg {
  height: 100vh;
  width: 100%;
  background: linear-gradient(45deg, #6e97dd, #2b91af);
}
.login-head {
  overflow: hidden;
  h3 {
    margin-top: 62px;
    margin-bottom: 14px;
    width: 150px;
    height: 38px;
    /* background: rgba(239, 97, 248, 1); */
    border-radius: 5px;
    font-size: 25px;
    color: #fff;
    text-align: center;
    line-height: 38px;
    font-weight: bold;
    position: relative;
    z-index: 3;
    letter-spacing: 3px;
  }
}

.login-head-box {
  margin: 0 auto;
  width: 150px;
  height: 38px;
  position: relative;
}

.login-login {
  padding-bottom: 10px;
  width: 347px;
  /* height: 336px; */
  margin: 0 auto;
  margin-top: 33px;
  margin-bottom: 12px;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  .login-login-title {
    padding: 20px 0 12px 0;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    /* color: rgba(255, 53, 61, 1); */
    color: #3f8ef7;
  }
  .login-login-tips {
    font-weight: 400;
    /* color: rgba(252, 10, 10, 1); */
    font-size: 16px;
    margin: 29px 0 31px 0;
    text-align: center;
  }
}

.login_info {
  display: flex;
  align-items: center;
  margin: 17px 25px 21px 25px;
  position: relative;
  span {
    width: 92px;
    font-size: 18px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  input {
    width: 204px;
    height: 33px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(218, 218, 218, 1);
    border-radius: 3px;
    font-size: 18px;
    text-indent: 8px;
  }

  i {
    background: #fff;
    font-size: 18px;
    position: absolute;
    width: 34px;
    right: 1px;
    line-height: 33px;
    text-align: center;
    height: 33px;
    z-index: 9;
  }
}

.login_info:nth-of-type(2) input {
  padding-right: 40px;
  width: 164px;
}
.login-btn {
  text-align: center;
  button {
    width: 294px;
    height: 40px;
    background: #19b9e7;
    border-radius: 3px;
    text-align: center;
    margin-top: 18px;
    font-size: 20px;
    outline: none;
    border: 0;
    color: #fff;
  }
}
.login-login-sq-tips {
  margin-top: 10px;
  font-size: 12px;
  padding: 0 28px;
  margin-bottom: -15px;
  color: rgb(231, 117, 24);
}
</style>
