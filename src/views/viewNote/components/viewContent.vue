<template>
  <div class="bg-content content">
    <van-cell-group>
      <van-field
        v-model="titleVavle"
        placeholder="标题"
        class="title"
        disabled
      />
      <van-field
        v-model="textVavle"
        placeholder="内容"
        type="textarea"
        rows="10"
        autosize
        disabled
      />
    </van-cell-group>
    <div class="bg-white img-view">
      <van-image
        width="100"
        height="100"
        class="view"
        v-for="(item, index) in fileList"
        :key="index"
        :src="item.imgUrl"
        @click="ImagePreview(item)"
      />
    </div>
    <div class="bg-white other-info">
      <ul>
        <li><van-icon name="home-o" /> <span> 多云</span></li>
        <li><van-icon name="location-o" /> <span> 上海市宝山区</span></li>
        <li><van-icon name="phone-o" /> <span> MIX 2S</span></li>
        <li><van-icon name="clock-o" /> <span> 20:18</span></li>
        <li><van-icon name="gem-o" /> <span>17字</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "viewContent",
  data() {
    return {
      titleVavle: "周一的笔记",
      textVavle: "今天，又是充满希望的一天",
      fileList: [
        {
          imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg"
        },
        {
          imgUrl: "https://img.yzcdn.cn/vant/apple-3.jpg"
        },
        {
          imgUrl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        }
      ]
    };
  },
  mounted() {
    var obj = this.$route.query;
    window.console.log(obj);
    window.console.log(123);
  },
  methods: {
    // 图片放大
    ImagePreview(val) {
      this.$imagePreview([val.imgUrl]);
    }
  }
};
</script>
<style>
.img-uploader .van-uploader__upload {
  background: #f8f8f6 !important;
}
.other-info .van-icon {
  top: 2px;
}
</style>

<style scoped lang="scss">
.van-cell {
  background: #f8f8f6;
}
.title {
  font-size: 22px;
}
.img-view {
  margin-left: 15px;
  .view {
    margin: 5px;
  }
}

.other-info {
  overflow: hidden;
  ul {
    margin: 0px 15px 15px;
    li {
      margin: 5px 0;
      font-size: 14px;
      position: relative;
      color: #b0b0b0;

      span {
        position: absolute;
        top: 0;
        margin: 0px 5px;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
