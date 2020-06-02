<template>
  <div>
    <page-main></page-main>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import pageMain from "./PageMain/index.vue";
import tabBar from "@c/tabBar";
export default {
  name: "layout",
  data() {
    return {};
  },
  components: { tabBar, pageMain },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="scss"></style>
