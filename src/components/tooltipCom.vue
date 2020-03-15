<template>
  <div v-if="isShowNew" class="toolitip" :class="isColor">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tooltipCom",
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    isColor: {
      type: String
    }
  },
  data() {
    return {
      isShowNew: false
    };
  },
  mounted() {},
  methods: {},
  watch: {
    isShow(val) {
      this.isShowNew = val;
      window.console.log(val);
      this.show = val;
    }
  }
};
</script>
<style lang="scss" scoped>
.toolitip {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1990;
  padding: 10px;
  top: 46px;
  right: 10px;
  background: #fff;
  border-radius: 5px;
  color: #272727;
  letter-spacing: 1px;
  font-size: 14px;
  li {
    margin: 15px 5px;
  }
}
.isBlueColor::after {
  border-right: 10px solid #39b3c0 !important;
  border-left: 10px solid #39b3c0 !important;
}
.toolitip::after {
  content: "";
  top: -10px;
  right: 8px;
  border-right: 10px solid #f8f8f6;
  border-left: 10px solid #f8f8f6;
  border-bottom: 10px solid transparent;
  position: absolute;
  z-index: 9999;
  display: block;
  width: 0;
  height: 0;
  background: #fff;
}
</style>
