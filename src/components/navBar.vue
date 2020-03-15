<template>
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
    <div
      class="nav-bar_title_right"
      v-if="titleRight"
      @click="onClickTitleRight"
    >
      {{ titleRight }}
    </div>
    <div
      class="nav-bar_title_right nav-bar_title_right_icon"
      v-if="titleRightIcon"
      @click="onClickTitleRight"
    >
      <van-icon :name="titleRightIcon" class="icon-list-size"></van-icon>
    </div>
    <div @click="onClickRight" class="nav-bar__right">
      <van-icon
        :name="rightIcon"
        class="icon-list-size"
        v-if="rightIcon"
      ></van-icon>
    </div>
  </div>
</template>
<script>
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
      default: "weapp-nav"
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
    return {};
  },

  methods: {
    onClickLeft() {
      //   this.$toast("返回");
      this.$parent.handleClickLeft(this.leftIcon);
    },
    onClickRight() {
      //   this.$toast("按钮");
      this.$parent.handleClickRight(this.rightIcon);
    },
    onClickTitleRight() {
      this.$parent.handleClickTitleRight();
    }
  }
};
</script>
<style scoped>
.nav-bar-white {
  z-index: 999;
  display: flex;
  position: fixed;
  height: 46px;
  width: 100%;
  line-height: 46px;
  text-align: center;
  user-select: none;
  color: #656565;
  background: #f8f8f8;
}
.nav-bar {
  z-index: 999;
  display: flex;
  position: fixed;
  height: 46px;
  width: 100%;
  line-height: 46px;
  text-align: center;
  user-select: none;
  color: #fff;
  background: #39b3c0;
}
.nav-bar__left {
  left: 16px;
}
.nav-bar__right {
  right: 16px;
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
.nav-bar_title_right_icon {
  right: 60px !important;
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
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.icon-list-size {
  font-size: 24px;
  top: 8px;
}
</style>
