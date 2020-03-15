<template>
  <div id="app">
    <router-view />

    <div id="btn" @click="goBack">
      <van-icon name="arrow-up" />
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  mounted() {
    this.showBack();
  },
  methods: {
    showBack() {
      // 监听出现返回顶部的块
      window.onload = function() {
        var btn = document.getElementById("btn");
        window.onscroll = function() {
          var scroll_top =
            document.documentElement.scrollTop || document.body.scrollTop;
          if (scroll_top < 300) {
            btn.style.display = "none";
          } else {
            btn.style.display = "block";
          }
        };
      };
    },
    goBack() {
      // 返回顶部
      var element = document.getElementById("app");
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss">
#btn {
  width: 40px;
  height: 40px;
  background: #ddd;
  text-align: center;
  line-height: 40px;
  border-radius: 8px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: #000;
  font-size: 14px;
  cursor: pointer;
  display: none;
}
</style>
