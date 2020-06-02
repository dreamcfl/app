<template>
  <van-uploader
    v-model="fileImgList"
    :max-count="1"
    :after-read="afterRead"
    :before-read="asyncBeforeRead"
    :max-size="10 * 1024 * 1024"
    :before-delete="beforeDelete"
  >
    <div :style="styleImgbg">
      <div class="default-img-bg">
        <i class="van-icon van-icon-photograph van-uploader__upload-icon"></i>
      </div>
    </div>
  </van-uploader>
</template>
<script>
import { getupTokenApi } from "@s/api";
import Vue from "vue";
import { Toast, Uploader } from "vant";
Vue.use(Toast);
Vue.use(Uploader);
export default {
  name: "uploaderImg",
  data() {
    return {
      fileImgList: [],
      styleImgbg: {
        background: this.imgBg
          ? "url(" +
            process.env.VUE_APP_replace_URL +
            "/upload/basedata" +
            this.imgBg +
            ") left top no-repeat"
          : "",
        "background-size": "100%"
      }
    };
  },
  props: {
    fileList: {
      type: Array,
      default() {
        return [];
      }
    },
    code: {
      type: String,
      default: ""
    },
    fileindex: {
      type: Number,
      default: 0
    },
    imgBg: {
      type: String,
      default: ""
    },
    isRepeat: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.fileImgList = this.fileList;
  },
  methods: {
    // 返回布尔值
    beforeRead(file) {
      console.log(file);
      if (
        (file.type !== "image/jpeg" &&
          file.type !== "image/jpg" &&
          file.type !== "image/png" &&
          file.type !== "image/gif") ||
        file.size > 10485760
      ) {
        Toast("请上传 jpg/png/gif 格式图片，且不超过10M");
        return false;
      }
      return true;
    },
    // 返回 Promise
    asyncBeforeRead(file) {
      console.log(file);
      return new Promise((resolve, reject) => {
        if (
          (file.type !== "image/jpeg" &&
            file.type !== "image/jpg" &&
            file.type !== "image/png" &&
            file.type !== "image/gif") ||
          file.size > 10485760
        ) {
          Toast("请上传 jpg/png/gif 格式图片，且不超过10M");
          reject();
        } else {
          // 符合直接跳过
          resolve(file);
        }
      });
    },
    afterRead(file) {
      file.status = "uploading";
      file.message = "上传中...";
      let json = {
        datumcode: this.code
      };
      if (this.isRepeat == "repeat") {
        json.type = "repeat";
      }
      let _this = this;
      getupTokenApi(json).then(res => {
        // 七牛云上传token
        let token = res.upToken;
        // 七牛云上传
        /* eslint-disable */
      // z1华北 z2 华南
      let config = {
        useCdnDomain: true,
        region: qiniu.region.z1
      };
      let putExtra = {
        fname: "",
        params: {},
        mimeType: null
      };
      // let key = file.name;
      let key = res.key;
      // let subscription;
      // 调用sdk上传接口获得相应的observable，控制上传和暂停
      let observable = qiniu.upload(file.file, key, token, putExtra, config);
      let observer = {
        next(result) {
          //上传中(result参数带有total字段的 object，包含loaded、total、percent三个属性)
          let total = result.total;
          // $(".speed").text("进度：" + total.percent + "% "); //查看进度[loaded:已上传大小(字节);total:本次上传总大小;percent:当前上传进度(0-100)]
        },
        error(err) {
          //失败后
          // alert(err.message);
          file.status = 'failed';
          file.message = '上传失败';
        },
        complete(res) {
          file.status = "";
          file.message = "";
          _this.$emit("completeHandle", file, _this.fileindex, _this.code);
          // ?imageView2/2/h/100：展示缩略图，不加显示原图
          // ?vframe/jpg/offset/0/w/480/h/360：用于获取视频截图的后缀，0：秒，w：宽，h：高
        }
      };
      // 取消上传
      // subscription.unsubscribe();
      observable.subscribe(observer);
      /* eslint-disable */
      });
    },
    beforeDelete(file) {
      this.$emit("completeHandle", file, this.fileindex, "del");
      return true;
    }
  }
};
</script>
<style lang="scss" scoped>

.van-icon-photograph {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -13px 0 0 -12px;
}
</style>
<style>
  .default-img-bg {
  width: 140px;
  height: 80px;
  background: rgba(0, 0, 0, 1);
  opacity: 0.3;
  border-radius: 5px;
  position: relative;
}
.up-img .van-image__img,
.up-img
  .van-uploader__wrapper
  .van-uploader__preview
  .van-uploader__preview-image {
  width: 140px;
  height: 80px;
}
</style>
