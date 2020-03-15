<template>
  <div class="bg-content">
    <nav-bar
      leftIcon="wap-nav"
      rightIcon="weapp-nav"
      titleCenter=""
      :titleLeft="titleLeft"
      titleRight="写笔记"
    ></nav-bar>
    <list-com></list-com>
    <popup-com :isShow="isShow"></popup-com>
    <tooltip-com :isShow="isTipShow" isColor="isBlueColor">
      <div class="wrap-tooltip" @click="closeTipShow"></div>
      <ul class="tip-icon">
        <li @click="onClick">
          <van-icon name="chart-trending-o" /> <span> 按时间顺序</span>
        </li>
        <li @click="onClick">
          <van-icon name="eye-o" v-if="1 < 2" />
          <van-icon name="closed-eye" v-if="1 > 2" />
          <span> 打码日记内容</span>
        </li>
        <li @click="changeHomeShowClick">
          <van-icon name="setting-o" /><span> 切换首页模板</span>
        </li>
      </ul>
    </tooltip-com>
    <van-popup v-model="changeHomeShow">
      <div class="popup-content">
        <van-radio-group v-model="radio">
          <van-radio name="1">默认</van-radio>
          <van-radio name="2">小图模式</van-radio>
          <van-radio name="3">无图模式</van-radio>
        </van-radio-group>
      </div>
    </van-popup>
  </div>
</template>
<script>
import navBar from "@c/navBar";
import listCom from "./components/listCom";
import popupCom from "./components/popupCom";
import tooltipCom from "@c/tooltipCom";
import timeFormat from "@u/timeFormat";
export default {
  name: "home",
  data() {
    return {
      radio: "1",
      titleLeft: "",
      isShow: false,
      isTipShow: false,
      changeHomeShow: false
    };
  },
  components: {
    navBar,
    listCom,
    popupCom,
    tooltipCom
  },
  mounted() {
    this.getdate();
  },
  methods: {
    closeTipShow() {
      this.isTipShow = false;
    },
    changeHomeShowClick() {
      this.changeHomeShow = true;
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
    handleFShow() {
      this.isShow = false;
    },
    handleClickLeft() {
      this.isShow = true;
    },
    handleClickRight() {
      this.isTipShow = !this.isTipShow;
    },
    handleClickTitleRight() {
      this.$router.push({ path: "writeNote" });
    }
  }
};
</script>
<style>
.tip-icon .van-icon {
  top: 2px;
}
</style>

<style scoped lang="scss">
.popup-content {
  width: 60vw;
  padding: 30px;
  margin: 0 auto;
  font-size: 16px;
  .van-radio {
    margin: 5px 0;
    letter-spacing: 1px;
  }
}
</style>
