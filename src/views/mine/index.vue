<template>
  <div class="log">
    <div v-if="obj.username">
      <ul class="list">
        <li @click="goClick">姓名：{{ obj.username }}</li>
        <li @click="goClick">性别：{{ sexFiler(obj.sex) }}</li>
        <li @click="goClick">手机号：{{ obj.userTelephone }}</li>
      </ul>
    </div>
    <div class="yk-btn " v-else>
      <van-empty description="您还没有补全信息哦！" />
      <div v-if="!obj.username">
        <van-button size="large" type="info" class="btn" @click="infoSubmit"
          >去补全</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { SEX } from "@u/wordbook";
import Vue from "vue";
import { Empty, Button, Dialog, Toast } from "vant";
Vue.use(Empty);
Vue.use(Button);
Vue.use(Toast);
export default {
  name: "mine",
  data() {
    return {
      obj: this.$store.state.userInfo
    };
  },
  mounted() {
    this.getData();
    console.log(this.obj);
  },
  methods: {
    sexFiler(val) {
      return SEX[val];
    },
    getData() {},
    goClick() {
      Dialog.confirm({
        title: "提示",
        message: "你喜欢我吗？"
      })
        .then(() => {
          // on confirm
          Toast.success("真好");
        })
        .catch(() => {
          // on cancel
          Toast.fail("不开心");
        });
    },
    infoSubmit() {
      this.$router.push({ path: "/info" });
    }
  }
};
</script>
<style scoped lang="scss">
.log {
  height: 100vh;
  background: #f8f8f6;
}
.list {
  background: #f8f8f6;
  overflow: hidden;
  li {
    background: #fff;
    margin: 30px;
    padding: 30px;
    font-size: 12px;
  }
}
.yk-btn {
  text-align: center;
}
.btn {
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.11);
  text-align: center;
  width: 280px;
  height: 40px;
  line-height: 40px;
  margin: 17px auto;
  background: rgba(63, 142, 247, 1);
  border-radius: 23px;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 50px;
}
</style>
