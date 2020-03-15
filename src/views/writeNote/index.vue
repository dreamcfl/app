<template>
  <div class="bg-content">
    <nav-bar
      navBarClass="nav-bar-white"
      leftIcon="arrow-left"
      rightIcon="weapp-nav"
      titleCenter=""
      :titleLeft="titleLeft"
      titleRight="保存"
    ></nav-bar>
    <edit-content> </edit-content>
    <tooltip-com :isShow="isTipShow">
      <div class="wrap-tooltip" @click="closeTipShow"></div>
      <ul class="tip-icon">
        <li @click="onClick">
          <van-icon name="edit" /> <span> 上次编辑</span>
        </li>
        <li @click="goHome">
          <van-icon name="apps-o" /><span> 返回首页</span>
        </li>
      </ul>
    </tooltip-com>
  </div>
</template>
<script>
import navBar from "@c/navBar";
import editContent from "./components/editContent";
import timeFormat from "@u/timeFormat";
import tooltipCom from "@c/tooltipCom";
export default {
  name: "writeNote",
  data() {
    return {
      titleLeft: "",
      isTipShow: false
    };
  },
  components: {
    navBar,
    editContent,
    tooltipCom
  },
  mounted() {
    this.getdate();
  },
  methods: {
    closeTipShow() {
      this.isTipShow = false;
    },
    goHome() {
      this.$router.push({ path: "home" });
    },
    onClick() {
      this.$dialog
        .alert({
          message: "不急不急！我正在开发呢"
        })
        .then(() => {
          // on close
        });
    },
    getdate() {
      this.titleLeft = timeFormat.currentChTime(new Date());
    },
    handleClickLeft(val) {
      window.console.log(val);
      this.$dialog
        .confirm({
          title: "提示！",
          message: "你的内容还未保存噢，确认退出吗？"
        })
        .then(() => {
          this.$router.go(-1); //返回上一层
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    handleClickRight(val) {
      window.console.log(val);
      this.isTipShow = !this.isTipShow;
      window.console.log(this.isTipShow);
    },
    handleClickTitleRight() {
      this.$dialog
        .confirm({
          title: "提示！",
          message: "确认提交保存吗？"
        })
        .then(() => {
          this.$toast("保存成功");
          this.$router.go(-1); //返回上一层
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
      //   this.$router.push({ path: "writeNote" });
    }
  }
};
</script>
<style>
.tip-icon .van-icon {
  top: 2px;
}
</style>
<style scoped></style>
