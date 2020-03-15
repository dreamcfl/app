<template>
  <div class="bg-content">
    <nav-bar
      navBarClass="nav-bar-white"
      leftIcon="arrow-left"
      rightIcon="share"
      titleCenter=""
      titleLeft=""
      titleRight=""
      titleRightIcon="down"
    ></nav-bar>
    <view-content> </view-content>
  </div>
</template>
<script>
import navBar from "@c/navBar";
import viewContent from "./components/viewContent";
export default {
  name: "viewNote",
  data() {
    return {
      isTipShow: false
    };
  },
  components: {
    navBar,
    viewContent
  },
  mounted() {},
  methods: {
    onClick() {
      this.$dialog
        .alert({
          message: "不急不急！我正在开发呢"
        })
        .then(() => {
          // on close
        });
    },
    handleClickLeft(val) {
      window.console.log(val);
      this.$router.go(-1); //返回上一层
      // on confirm
    },
    handleClickRight(val) {
      window.console.log(val);
      this.$dialog
        .alert({
          message: "不急不急！我正在开发呢"
        })
        .then(() => {
          // on close
        });
    },
    handleClickTitleRight() {
      this.$dialog
        .alert({
          message: "未开发呢！"
        })
        .then(() => {
          // on close
        });
    }
  }
};
</script>
<style scoped></style>
