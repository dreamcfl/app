<template>
  <div class="bg">
    <nav-bar
      navBarClass="nav-bar-white"
      leftIcon="arrow-left"
      rightIcon="ellipsis"
      titleCenter="个人信息"
      titleLeft=""
      titleRight=""
    ></nav-bar>
    <msg-content> </msg-content>
  </div>
</template>
<script>
import navBar from "@c/navBar";
import msgContent from "./components/msgContent";
export default {
  name: "info",
  data() {
    return {};
  },
  components: {
    navBar,
    msgContent
  },
  mounted() {},
  methods: {
    handleClickLeft(val) {
      window.console.log(val);
      this.$router.go(-1); //返回上一层
      // on confirm
    },
    handleClickRight(val) {
      window.console.log(val);
    }
  }
};
</script>
<style scoped lang="scss"></style>
