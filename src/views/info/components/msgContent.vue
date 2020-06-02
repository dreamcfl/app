<template>
  <div class="bg-content content msgConfirm-index">
    <div class="import-info">
      <div class="mb-20"></div>
      <van-cell-group>
        <van-field
          v-model="form.username"
          center
          label="姓名"
          placeholder="请输入姓名"
          class="code-input"
        />
        <!-- <van-field
          v-model="form.code"
          center
          clearable
          label="验证码"
          placeholder="请输入验证码"
          class="code-input"
        /> -->
        <van-field name="radio" label="性别">
          <template #input>
            <van-radio-group v-model="form.sex" direction="horizontal">
              <van-radio name="1">男</van-radio>
              <van-radio name="2">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-model="form.userTelephone"
          center
          clearable
          label="手机号"
          placeholder="请输入手机号"
        >
          <van-button
            slot="button"
            size="small"
            type="info"
            @click="codeBtnClick"
            :disabled="isDisbaled"
            >{{ codeBtnContent }}</van-button
          >
        </van-field>
        <van-field
          v-model="form.code"
          center
          clearable
          label="验证码"
          placeholder="请输入验证码"
          class="code-input"
        />
      </van-cell-group>
    </div>
    <div class="btn">
      <button @click="goConfirmAppoint">确认</button>
    </div>
  </div>
</template>
<script>
import { CARDTYPE } from "@u/wordbook";
import Vue from "vue";
import { Field, cellGroup, Toast, Button, Radio, RadioGroup } from "vant";

Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Field);
Vue.use(cellGroup);
export default {
  name: "msgContent",
  data() {
    return {
      countdown: 60,
      codeBtnContent: "发送验证码",
      isDisbaled: false,
      form: {
        username: "",
        sex: "1",
        userTelephone: "",
        code: ""
      },
      obj: this.$store.state.userInfo
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 过滤证件类型
    cardTypeFilter(val) {
      return CARDTYPE[val];
    },
    // 获取用户信息
    getData() {},
    // 延时器倒计时
    setTime() {
      if (this.countdown == 0) {
        this.isDisbaled = false;
        this.codeBtnContent = "发送验证码";
        this.countdown = 60; //60秒过后button上的文字初始化,计时器初始化;
        return;
      } else {
        this.isDisbaled = true;
        this.codeBtnContent = this.countdown + "s";
        this.countdown--;
      }
      setTimeout(() => {
        this.setTime();
      }, 1000); //每1000毫秒执行一次
    },
    codeBtnClick() {
      // 判断手机号是否正确
      let regPhone = /^[1][3,4,5,6,7,8][0-9]{9}$/;
      let msg = "";
      if (!regPhone.test(this.userTelephone)) {
        msg = "请输入正确的手机号";
      }
      if (msg == "") {
        // this.isDisbaled = true;
        // 执行接口发送短信

        // 执行接口
        Toast("验证码已发送，请注意查收！");
        // 调研延迟读秒函数
        this.setTime();
      } else {
        Toast(msg);
      }
    },
    goConfirmAppoint() {
      // 验证码正则
      var codeReg = /^[0-9A-Za-z]{4}$/;
      // 姓名正则
      var nameReg = /^.{1,20}$/;
      // 判断手机号是否正确
      let regPhone = /^[1][3,4,5,6,7,8][0-9]{9}$/;
      var msg = "";
      if (!codeReg.test(this.form.code)) {
        msg = "请输入四位验证码";
      }
      if (!regPhone.test(this.form.userTelephone)) {
        msg = "请输入正确的手机";
      }
      if (!nameReg.test(this.form.username)) {
        msg = "请输入正确的姓名";
      }
      if (msg == "") {
        this.$store.dispatch("setUserInfo", this.form);
        this.$router.push({ path: "/mine" });
      } else {
        Toast(msg);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.msgConfirm-index {
  h4 {
    margin-left: 11px;
    margin-top: 22px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 144, 24, 1);
    line-height: 12px;
  }
  p {
    font-size: 12px;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 12px;
    margin-left: 11px;
    margin-top: 17px;
    margin-bottom: 12px;
  }
  .btn {
    text-align: center;
    button {
      width: 345px;
      height: 40px;
      background: rgba(63, 142, 247, 0.99);
      border: 1px solid rgba(63, 142, 247, 1);
      border-radius: 5px;
      margin: 20px 0;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      font-size: 16px;
    }
  }

  .tips {
    font-size: 12px;
    font-weight: bold;
    color: rgba(252, 10, 10, 1);
    margin: 0 21px 24px 17px;
    line-height: 1.4;
  }
}
.import-info {
  background: #fff;
  position: relative;
}
.code-con {
  width: 52px;
  height: 24px;
  border-radius: 3px;
  background: #ddd;
  position: absolute;
  bottom: 12px;
  right: 102px;
  font-size: 12px;
  img {
    width: 52px;
    height: 24px;
  }
}
.code-input {
  /* width: 220px; */
  width: 260px;
}
</style>
