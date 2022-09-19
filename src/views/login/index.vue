<template>
<div class='page'>
    <div class="login-bg">
      <div class="login-logo">
        <img src="../../assets/img/login.jpg" v-if="isLogin" />
        <img src="../../assets/img/register.jpg" v-else />
      </div>
      <div class="form itemBox" v-if="isLogin">
        <div class="item">
          <div class="L"><img src="../../assets/img/icon4.png" /></div>
          <div class="R">
            <input
              name=""
              v-model="loginObj.username"
              type="text"
              id="loginTelphone"
              placeholder="请输入手机号"
            />
          </div>
        </div>
        <div class="item">
          <div class="L"><img src="../../assets/img/icon5.png" /></div>
          <div class="R">
            <input
              name=""
              v-model="loginObj.password"
              :type="ishowPaw ? 'text' : 'password'"
              id="loginPassword"
              placeholder="请输入密码"
            />
            <van-icon
              class="psw-icon"
              :name="ishowPaw ? 'eye-o' : 'closed-eye'"
              @click="switchClick()"
            />
          </div>
        </div>
        <div class="item2">
          <input
            name=""
            type="button"
            class="btn"
            id="loginInput"
            value="登录"
            @click="subLogin"
          />
        </div>
        <div class="item3">
          <input
            name=""
            type="button"
            class="btn"
            value="注册"
            @click="goRegister"
          />
        </div>
      </div>
      <div class="form" v-else>
        <div class="itemBox">
          <div class="item">
            <div class="L"><img src="../../assets/img/icon4.png" /></div>
            <div class="R">
              <input
                name=""
                type="text"
                id="registerTelphone"
                placeholder="请输入手机号"
              />
            </div>
          </div>
          <div class="item">
            <div class="L"><img src="../../assets/img/icon5.png" /></div>
            <div class="R">
              <input
                name=""
                :type="ishowPaw ? 'text' : 'password'"
                id="registerPassword"
                placeholder="请输入密码"
              />
              <van-icon
                class="psw-icon"
                :name="ishowPaw ? 'eye-o' : 'closed-eye'"
                @click="switchClick()"
              />
            </div>
          </div>
          <div class="item">
            <div class="L"><img src="../../assets/img/icon6.png" /></div>
            <div class="C">
              <input
                name=""
                type="text"
                id="registerCode"
                placeholder="请输入验证码"
              />
            </div>
            <div class="yzm">
              <button id="registerGetCode" class="get-code-btn" @click="getCode">
                获取验证码
              </button>
            </div>
          </div>
          <div class="item2">
            <input
              name=""
              type="button"
              id="registerBtn"
              class="btn"
              value="注册"
              @click="subRegister"
            />
          </div>
        </div>
        <div class="txtBox_3">
          <span @click="goLogin">已注册，直接登录</span>
        </div>
      </div>
      </div>
    </div>
  </template>
  <script>
  import Vue from "vue";
  import merge from "webpack-merge";
  import Cookie from "@u/cookie";
  import { Field, Toast, Icon } from "vant";
  Vue.use(Toast);
  Vue.use(Icon);
  Vue.use(Field);
  export default {
    name: "index",
    data() {
      return {
        isLogin: true,
        ishowPaw: false,
        loginObj: {
          username: "",
          password: ""
        },
        registerloginObj: {
          username: "",
          password: "",
          code: ""
        }
      };
    },
    components: {},
    mounted() {
      let type = this.$route.query.type;
      if (type == "reg") {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    },
    methods: {
      goRegister() {
        this.isLogin = false;
        this.$router.push({
          query: merge(this.$route.query, {
            type: "reg"
          })
        });
      },
      goLogin() {
        this.isLogin = true;
        this.$router.push({
          query: merge(this.$route.query, {
            type: "log"
          })
        });
      },
      switchClick() {
        this.ishowPaw = !this.ishowPaw;
      },
      subLogin() {
        console.log("登录");
        // 手机号正则
        var nameReg = /^.{1,20}$/;
        // 判断手机号是否正确
        let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        var msg = "";
        if (!nameReg.test(this.loginObj.password)) {
          msg = "请输入正确的密码";
        }
        if (!regPhone.test(this.loginObj.username)) {
          msg = "请输入正确的手机号";
        }
        if (msg == "") {
          Toast.loading({
            message: "加载中...",
            forbidClick: true,
            onClose: () => {
              // 关闭时的回调
              // 存token
              Cookie.set("token", this.loginObj.username);
              this.$router.push({ path: "/home" });
            }
          });
        } else {
          Toast(msg);
        }
      },
      subRegister() {
        console.log("注册");
        // 手机号正则
        let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        var nameReg = /^.{1,20}$/;
        // 验证码正则
        var codeReg = /^[0-9A-Za-z]{4}$/;
        var msg = "";
        if (!codeReg.test(this.registerloginObj.code)) {
          msg = "请输入四位验证码";
        }
        if (!nameReg.test(this.registerloginObj.password)) {
          msg = "请输入正确的密码";
        }
        if (!regPhone.test(this.registerloginObj.username)) {
          msg = "请输入正确的手机号";
        }
        if (msg == "") {
          Toast.loading({
            message: "加载中...",
            forbidClick: true,
            onClose: () => {
              // 关闭时的回调
              // 存token
              Cookie.set("token", this.registerloginObj.username);
              this.$router.push({ path: "/home" });
            }
          });
        } else {
          Toast(msg);
        }
      },
      getCode() {
        console.log("获取验证码");
        Toast.success("验证码已发送，请注意查收！");
      }
    }
  };
  </script>
  <style scoped lang="scss">
  .page{
    min-height:100vh;
    background:#fff;
  }
  .login-logo {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .form {
    margin: 0 40px 30px;
  }
  
  .itemBox {
    overflow: hidden;
    padding-bottom: 0;
  }
  .itemBox .item {
    border-bottom: 1px solid #cdcdcd;
    color: #a7a7a7;
    height: 40px;
    line-height: 40px;
    margin-bottom: 15px;
    display: flex;
  }
  .itemBox .item .L {
    float: left;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }
  .itemBox .item .L img {
    display: block;
    width: 20px;
    margin: 10px;
  }
  .itemBox .item .R {
    display: flex;
    align-items: center;
    flex: 1;
  }
  .itemBox .item .R input {
    width: 90%;
    background: none;
    height: 40px;
    line-height: 40px;
    border: 0;
    outline: none;
    letter-spacing: 1px;
    font-size: 14px;
  }
  .itemBox .item .C {
    display: flex;
    align-items: center;
    flex: 1;
  }
  .itemBox .item .C input {
    width: 90%;
    background: none;
    height: 40px;
    line-height: 40px;
    border: 0;
    outline: none;
    letter-spacing: 1px;
    font-size: 14px;
  }
  .itemBox .item .yzm {
    float: right;
  }
  .itemBox .item .yzm img {
    display: block;
    height: 38px;
  }
  
  .itemBox .item2 {
    /* height: 42px; */
    overflow: hidden;
    margin-bottom: 10px;
    margin-top: 40px;
  }
  .itemBox .item2 .btn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background: #3278f9;
    color: #fff;
    border-radius: 6px;
    outline: none;
    border: 1px solid #3278f9;
    letter-spacing: 2px;
    cursor: pointer;
    font-size: 12px;
  }
  .itemBox .item3 {
    /* height: 42px; */
    overflow: hidden;
  }
  .itemBox .item3 .btn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background: #fff;
    color: #3278f9;
    border-radius: 6px;
    outline: none;
    border: 1px solid #3278f9;
    letter-spacing: 2px;
    cursor: pointer;
    font-size: 12px;
  }
  
  .txtBox_3 {
    overflow: hidden;
  }
  .txtBox_3 span {
    display: block;
    color: #3278f9;
    text-align: center;
    letter-spacing: 1px;
    font-size: 12px;
  }
  .get-code-btn {
    width: 104px;
    background-color: #12b7f5;
    color: #fff;
    height: 30px;
    line-height: 30px;
    padding: 0px 16px;
    display: block;
    text-align: center;
    font-size: 14px;
    border-radius: 2px;
    overflow: hidden;
    position: relative;
    border: 0;
    outline: 0;
  }
  .get-code-btn::after {
    content: "";
    position: absolute;
    top: -7px;
    bottom: -7px;
    left: 0;
    right: 0;
  }
  .psw-icon {
    font-size: 16px;
  }
  </style>
  
