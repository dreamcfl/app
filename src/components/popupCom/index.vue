<template>
  <div>
    <van-popup
      v-model="isShowNew"
      position="bottom"
      :style="{ width: '100%', height: '60%' }"
    >
      <slot name="imgText"></slot>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "popupCom",
  data() {
    return {
      isShowNew: false
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {},
  watch: {
    isShow(val) {
      this.isShowNew = val;
    },
    isShowNew(val) {
      if (!val) {
        this.$parent.handleFShow();
      }
    }
  }
};
</script>
<style scoped lang="scss">
.personal-info {
  position: relative;
  height: 150px;
  .info {
    position: absolute;
    bottom: 0;
    left: 20px;
    h2 {
      color: #6a6a6a;
      font-size: 24px;
      margin-bottom: 10px;
    }
    p {
      color: #717171;
      font-size: 14px;
    }
  }
  .logo {
    float: right;
    margin-top: 40px;
    margin-right: 30px;
  }
}
</style>
