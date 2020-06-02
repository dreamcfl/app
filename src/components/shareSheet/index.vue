<template>
  <div>
    <van-share-sheet
      v-model="showShare"
      :options="options"
      @select="onSelect"
      @cancel="onCancel"
    />
  </div>
</template>
<script>
import { TABTYPE } from "@u/wordbook";
import Vue from "vue";
import { Toast, ShareSheet } from "vant";
Vue.use(Toast);
Vue.use(ShareSheet);
export default {
  name: "shareSheet",
  data() {
    return {
      showShare: false,
      options: [
        {
          type: 0,
          name: "首页",
          icon: "https://img.yzcdn.cn/vant/custom-icon-fire.png"
        },
        {
          type: 1,
          name: "关于",
          icon: "https://img.yzcdn.cn/vant/custom-icon-light.png"
        },
        {
          type: 2,
          name: "我的",
          icon: "https://img.yzcdn.cn/vant/custom-icon-water.png"
        }
      ]
    };
  },
  props: {
    show: {
      type: Boolean
    }
  },
  methods: {
    onCancel() {
      this.$parent.handleShow(false);
    },
    onSelect(option) {
      //   Toast(option.name);
      let path = TABTYPE[option.type];
      console.log(path);
      this.$router.push({ path });
      this.showShare = false;
    }
  },
  watch: {
    showShare(val) {
      this.$parent.handleShow(val);
    },
    show() {
      this.showShare = this.show;
    }
  }
};
</script>
