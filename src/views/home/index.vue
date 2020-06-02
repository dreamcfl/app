<template>
  <div class=" msg">
    <div v-if="list.length > 0">
      首页
    </div>
    <div v-else>
      <van-empty description="暂时没有任何内容哦" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Empty } from "vant";
Vue.use(Empty);
export default {
  name: "home",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {},
    goDetail() {}
  }
};
</script>
<style scoped lang="scss">
.msg {
}
</style>
