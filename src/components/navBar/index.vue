<template>
  <div :class="navBarClass">
    <div :class="navBarClass">
      <div @click="onClickLeft" class="nav-bar__left">
        <van-icon
          :name="leftIcon"
          class="icon-list-size"
          v-if="leftIcon"
        ></van-icon>
      </div>
      <div class="nav-bar_title_left" v-if="titleLeft">
        {{ titleLeft }}
      </div>
      <div class="nav-bar__title_center" v-if="titleCenter">
        {{ titleCenter }}
      </div>
      <div @click="onClickRight" class="nav-bar__right">
        <van-icon
          :name="rightIcon"
          class="icon-list-size"
          v-if="rightIcon"
        ></van-icon>
      </div>
    </div>
    <div class="nar-border"></div>
    <share-sheet :show="showShare"></share-sheet>
  </div>
</template>
<script>
import shareSheet from "@c/shareSheet";
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  naem: "navBar",
  props: {
    navBarClass: {
      type: String,
      default: "nav-bar"
    },
    leftIcon: {
      type: String,
      default: "arrow-left"
    },
    rightIcon: {
      type: String,
      default: "ellipsis"
    },
    titleCenter: {
      type: String
    },
    titleLeft: {
      type: String
    },
    titleRight: {
      type: String
    },
    titleRightIcon: {
      type: String
    }
  },
  data() {
    return {
      showShare: false
    };
  },
  components: {
    shareSheet
  },
  methods: {
    onClickLeft() {
      //   this.$toast("返回");
      this.$parent.handleClickLeft(this.leftIcon);
    },
    onClickRight() {
      //   this.$toast("按钮");
      this.showShare = true;
      this.$parent.handleClickRight(this.rightIcon);
    },
    handleShow(val) {
      this.showShare = val;
    }
  }
};
</script>
<style scoped>
.nav-bar-white {
  z-index: 999;
  top: 0px;
  display: flex;
  position: fixed;
  height: 44px;
  width: 100%;
  line-height: 44px;
  text-align: center;
  user-select: none;
  color: rgba(0, 0, 0, 1);
  background: #fff;
}
.nav-bar {
  z-index: 999;
  display: flex;
  position: fixed;
  height: 44px;
  width: 100%;
  line-height: 44px;
  text-align: center;
  user-select: none;
  color: #fff;
  background: #39b3c0;
}
.nav-bar__left {
  left: 11px;
}
.nav-bar__right {
  right: 9px;
}
.nav-bar__left,
.nav-bar__right {
  position: absolute;
  bottom: 0;
  font-size: 14px;
}
.nav-bar_title_left {
  left: 80px;
}
.nav-bar_title_right {
  right: 80px;
}
.nav-bar_title_left,
.nav-bar_title_right {
  position: absolute;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.nav-bar__title_center {
  max-width: 60%;
  margin: 0 auto;
  font-weight: 500;
  font-size: 19px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.icon-list-size {
  font-size: 24px;
  top: 8px;
}
.nar-border {
  width: 374px;
  height: 1px;
  border-bottom: 1px solid #f1f1f1;
  opacity: 0.9;
  margin-top: 44px;
  position: absolute;
}
</style>
