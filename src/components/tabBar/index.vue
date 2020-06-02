<template>
  <van-tabbar v-model="active" class="active_tab">
    <van-tabbar-item
      v-for="(item, index) in tabbars"
      :key="index"
      @click="tab(index, item.path)"
      :icon="item.icon"
    >
      <span :class="currIndex == index ? active : ''">{{ item.title }}</span>
      <!-- <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal" />
      </template> -->
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { TABTYPE } from "@u/wordbook";
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: "tabBar",
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          path: "/home",
          title: "首页",
          icon: "home-o"
        },
        {
          path: "/about",
          title: "关于",
          icon: "apps-o"
        },
        {
          path: "/mine",
          title: "个人中心",
          icon: "contact"
        }
      ]
    };
  },
  mounted() {
    this.active = TABTYPE[this.$router.currentRoute.path];
  },
  methods: {
    tab(index, path) {
      this.currIndex = index;
      if (path == this.$router.currentRoute.path) {
        console.log(111);
      } else {
        this.$router.push({ path });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.active_tab {
  border-top: 1px solid#f1f1f1;
}
/* .active_tab img {
  width: 26px;
  height: 26px;
}

.van-tabbar-item--active {
  color: #e10f02;
} */
</style>
