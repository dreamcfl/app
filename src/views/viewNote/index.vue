<template>
  <div class="bg-content">
    <nav-bar
      navBarClass="nav-bar-white"
      leftIcon="arrow-left"
      rightIcon="weapp-nav"
      titleCenter=""
      :titleLeft="titleLeft"
      titleRight="编辑"
    ></nav-bar>
    <view-content> </view-content>
    <tooltip-com :isShow="isTipShow">
      <div class="wrap-tooltip" @click="closeTipShow"></div>
      <ul class="tip-icon">
        <li @click="onClick">
          <van-icon name="todo-list-o" /><span> 详情</span>
        </li>
        <li @click="onSharePage">
          <van-icon name="share" /><span> 分享</span>
        </li>
        <li @click="onClick">
          <van-icon name="exchange" /><span> 导出PRD</span>
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
import viewContent from "./components/viewContent";
import timeFormat from "@u/timeFormat";
import tooltipCom from "@c/tooltipCom";
export default {
  name: "viewNote",
  data() {
    return {
      titleLeft: "",
      isTipShow: false
    };
  },
  components: {
    navBar,
    viewContent,
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
    onSharePage() {
      var obj = {
        title: "啊哈哈哈",
        text: "反倒是解放军的会飞的",
        date: "9:30"
      };
      this.$router.push({ path: "share", query: obj });
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
      this.$router.go(-1); //返回上一层
      // on confirm
    },
    handleClickRight(val) {
      window.console.log(val);
      this.isTipShow = !this.isTipShow;
    },
    handleClickTitleRight() {
      var obj = {
        title: "啊哈哈哈",
        text: "反倒是解放军的会飞的",
        date: "9:30"
      };
      this.$router.push({ path: "writeNote", query: obj });
      //   this.$router.push({ path: "writeNote" });
    }
  }
};
</script>
<style scoped></style>
