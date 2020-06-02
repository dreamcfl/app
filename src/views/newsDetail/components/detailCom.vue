<template>
  <div class="bg-content content con-news">
    <div class="msg-content">
      <div v-if="obj.title">
        <h3 class="h3">{{ obj.title }}</h3>
        <span class="span">{{ obj.creattime }}</span>
        <div
          class="box-html"
          v-html="obj.content"
          @click="getpreview($event)"
        ></div>
        <p class="p">{{ obj.version }}</p>
      </div>
      <div v-else>
        <van-empty description="找不到详情内容哦！" />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { ImagePreview } from "vant";
import { Empty } from "vant";
Vue.use(Empty);
export default {
  name: "detailCom",
  data() {
    return {
      obj: {}
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 富文本图片可预览
    getpreview(e) {
      if (e.target.tagName == "IMG") {
        ImagePreview({
          images: [e.target.src],
          closeOnPopstate: true //页面回退关闭预览
        });
      }
    },
    getData() {
      this.obj = {
        content:
          '<div style="text-align: center;"> <strong><span>国家医学考试（河南）考生服务系统考生操作指南</span></strong></div><div>  &nbsp;</div><div>  &nbsp;</div><div> <strong><span>一、考生进入国家医学考试（山东）考生服务系统</span></strong></div><div>  &nbsp;</div><div> <span><img alt="" src="http://img.baitongshiji.com/uploadfile/2020/0317/20200317065305950.jpg"></span></div><div>  &nbsp;</div><div>  &nbsp;</div><div> <span>1、考生进入考生报名系统，查看自己的报名信息，在报名信息处，点击「<strong>上传相关材料</strong>」按钮</span></div><div>  &nbsp;</div><div style="text-align: center;"> <span><img alt="" src="http://img.baitongshiji.com/uploadfile/2020/0317/20200317065349771.jpg"></span></div><div>  &nbsp;</div><div>  &nbsp;</div><div> <span>2.页面自动跳转至国家医学考试（山东）考生服务系统，考生设置完密码后自动激活，激活成功后，进入报名材料上传界面。</span></div><div style="text-align: center;">  &nbsp;</div><div>  &nbsp;</div><div> <strong><span>二、考生上传报名材料</span></strong></div><div>  &nbsp;</div><div>  &nbsp;</div><div> <span>激活并进入国家医学考试（山东）考生服务系统（在线审核系统）后，显示的是材料上传界面</span></div><div>  &nbsp;</div><div style="text-align: center;"> <img alt="" src="http://img.baitongshiji.com/uploadfile/2020/0317/20200317065514846.jpg"></div><div>  &nbsp;</div><div> <span>注意： 这里显示的内容，是医师资格考试所有可能需要的材料列表，考生根据自己的个人情况和报名要求，上传所需的考试材料图片。</span></div><div>  &nbsp;</div><div> <strong><span>2.1、开始上传</span></strong></div><div>  &nbsp;</div><div>  &nbsp;</div><div style="text-align: center;"> <img alt="" src="http://img.baitongshiji.com/uploadfile/2020/0317/20200317065604139.png"></div><div>  &nbsp;</div><div> <span>我们以身份证明为例，点击上传按钮，进入上传图片界面</span></div><div>  &nbsp;</div><p><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span></p><div>  &nbsp;</div>',
        creattime: "2020-05-11 09:32:55",
        fwzhcode:
          "网上审核的操作步骤和所需材料。按照全球的疫情现状，估计大部分省份会采用网上审核的方式进行，请提前了解网上审核步骤及所需材料。",
        title: "2020 河南省医师考试网上审核操作历程",
        version: "河南考区"
      };
    }
  }
};
</script>
<style scoped lang="scss">
.msg-content {
  padding: 15px;
  .box-html {
    clear: both;
    overflow: hidden;
    font-size: 12px;
    img {
      max-width: 375px !important;
    }
  }
  .h3 {
    font-size: 18px;
    text-align: center;
  }
  .span {
    float: right;
    font-size: 14px;
    margin: 5px 0;
  }
  .p {
    font-size: 12px;
    margin: 10px 0;
    text-align: right;
  }
}
.con-news {
  background: #fff;
}
</style>
<style>
.box-html img {
  max-width: 345px !important;
}
</style>
