<template>
  <div class="bg">
    <nav-bar
      navBarClass="nav-bar-white"
      leftIcon="arrow-left"
      rightIcon="ellipsis"
      titleCenter="公告详情"
      titleLeft=""
      titleRight=""
    ></nav-bar>
    <detail-com> </detail-com>
  </div>
</template>
<script>
import navBar from "@c/navBar";
import detailCom from "./components/detailCom";
export default {
  name: "newsDetail",
  data() {
    return {};
  },
  components: {
    navBar,
    detailCom
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
