<template>
  <div class="bg-content content">
    <van-cell-group>
      <van-field v-model="titleVavle" placeholder="标题" class="title" />
      <van-field
        v-model="textVavle"
        placeholder="内容"
        type="textarea"
        rows="10"
        autosize
      />
    </van-cell-group>
    <div class="bg-white img-uploader">
      <van-uploader
        v-model="fileList"
        class="uploader"
        multiple
        :max-count="3"
        :before-read="beforeRead"
      />
    </div>
    <div class="bg-white other-info">
      <ul>
        <li @click="onClick"><van-icon name="home-o" /> <span> 多云</span></li>
        <li @click="onClick">
          <van-icon name="location-o" /> <span> 上海市宝山区</span>
        </li>
        <li @click="onClick">
          <van-icon name="phone-o" /> <span> MIX 2S</span>
        </li>
        <li @click="onClick">
          <van-icon name="clock-o" /> <span> 20:18</span>
        </li>
        <li @click="onClick"><van-icon name="gem-o" /> <span>17字</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "editContent",
  data() {
    return {
      titleVavle: "",
      textVavle: "",
      fileList: []
    };
  },
  mounted() {
    var obj = this.$route.query;
    window.console.log(obj);
    window.console.log(123);
  },
  methods: {
    onClick() {
      this.$dialog
        .alert({
          message: "不急不急！我正在开发呢"
        })
        .then(() => {
          // on close
        });
    },
    // 返回布尔值
    beforeRead(file) {
      window.console.log(file);
      if (file instanceof Array) {
        file.forEach(item => {
          window.console.log(item);
          const isJPG = item.type === "image/jpg";
          const isJPEG = item.type === "image/jpeg";
          const isPNG = item.type === "image/png";
          const isLt5M = item.size / 1024 / 1024 < 5;
          if (!isJPG && !isJPEG && !isPNG) {
            this.$toast("请上传 jpg、jpeg、png 格式图片");
            return false;
          }
          if (!isLt5M) {
            this.$message.error("上传头像图片大小不能超过 5MB!");
            this.$toast("上传头像图片大小不能超过 5MB!");
            return false;
          }
        });
      } else {
        const isJPG = file.type === "image/jpg";
        const isJPEG = file.type === "image/jpeg";
        const isPNG = file.type === "image/png";
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isJPG && !isJPEG && !isPNG) {
          this.$toast("请上传 jpg、jpeg、png 格式图片");
          return false;
        }
        if (!isLt5M) {
          this.$message.error("上传头像图片大小不能超过 5MB!");
          this.$toast("上传头像图片大小不能超过 5MB!");
          return false;
        }
      }

      // if (file.type !== (isJPG || isJPEG || isPNG)) {
      //   this.$toast("请上传 jpg、jpeg、png 格式图片");
      //   return false;
      // }
      return true;
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
.img-uploader {
  .uploader {
    margin: 20px 10px;
  }
}

.other-info {
  overflow: hidden;
  ul {
    margin: 0px 15px 15px;
    li {
      margin: 5px 0;
      position: relative;
      color: #b0b0b0;
      font-size: 14px;
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
