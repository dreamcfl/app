<template>
  <div class="msg">
    <div v-if="list.length > 0">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          @click="goDetail(item.id)"
        >
          <h4>
            {{ item.title }} <span>{{ item.creattime }}</span>
          </h4>
          <p>
            {{ item.fwzhcode }}
          </p>
          <strong>{{ item.version }}</strong>
        </li>
      </ul>
    </div>
    <div v-else>
      <van-empty description="暂时没有任何关于的内容哦" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Empty, Divider } from "vant";
Vue.use(Empty);
Vue.use(Divider);
export default {
  name: "about",
  data() {
    return {
      list: [
        {
          title: "2020 河南省医师考试网上审核操作历程",
          version: "河南考区",
          creattime: "2020-05-11 09:32:55",
          fwzhcode:
            "网上审核的操作步骤和所需材料。按照全球的疫情现状，估计大部分省份会采用网上审核的方式进行，请提前了解网上审核步骤及所需材料。"
        },
        {
          title: "2020 河南省医师考试网上审核操作历程",
          version: "河南考区",
          creattime: "2020-05-11 09:32:55",
          fwzhcode:
            "网上审核的操作步骤和所需材料。按照全球的疫情现状，估计大部分省份会采用网上审核的方式进行，请提前了解网上审核步骤及所需材料。"
        },
        {
          title: "2020 河南省医师考试网上审核操作历程",
          version: "河南考区",
          creattime: "2020-05-11 09:32:55",
          fwzhcode:
            "网上审核的操作步骤和所需材料。按照全球的疫情现状，估计大部分省份会采用网上审核的方式进行，请提前了解网上审核步骤及所需材料。"
        },
        {
          title: "2020 河南省医师考试网上审核操作历程",
          version: "河南考区",
          creattime: "2020-05-11 09:32:55",
          fwzhcode:
            "网上审核的操作步骤和所需材料。按照全球的疫情现状，估计大部分省份会采用网上审核的方式进行，请提前了解网上审核步骤及所需材料。"
        },
        {
          title: "2020 河南省医师考试网上审核操作历程",
          version: "河南考区",
          creattime: "2020-05-11 09:32:55",
          fwzhcode:
            "网上审核的操作步骤和所需材料。按照全球的疫情现状，估计大部分省份会采用网上审核的方式进行，请提前了解网上审核步骤及所需材料。"
        }
      ]
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {},
    goDetail() {
      this.$router.push({ path: "newsDetail" });
    }
  }
};
</script>
<style scoped lang="scss">
.msg {
  height: 100vh;
  background: #fff;
  ul {
    font-size: 16px;
    margin: 10px 0 30px;
    padding: 14px;
    li {
      margin: 0px 0 15px;
      padding: 0 0 15px;
      border-bottom: 1px solid #f1f1f1;
      p {
        clear: both;
        font-size: 14px;
        color: #969799;
      }
      strong {
        font-size: 12px;
        color: #c8c9cc;
      }
      span {
        margin: 5px 0;
        float: right;
        font-size: 12px;
      }
    }
  }
}
</style>
