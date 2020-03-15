<template>
  <div>
    <van-popup
      v-model="isShowNew"
      position="left"
      :style="{ width: '80%', height: '100%' }"
    >
      <div>
        <div class="personal-info">
          <div class="info">
            <h2 @click="onClick">账号信息</h2>
            <p>记录你的日子</p>
          </div>
          <div class="logo">
            <van-image
              round
              width="100"
              height="100"
              lazy-load
              fit="fill"
              @click="onClick"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
        </div>
        <van-divider />
        <ul>
          <li>
            <van-switch-cell
              icon="bulb-o"
              v-model="checked"
              :title="checkedTitle"
              @change="changeChecked"
            />
          </li>
          <li>
            <van-cell
              title="统计"
              icon="records"
              value="第12天"
              @click="onClick"
            />
          </li>
          <li>
            <van-cell title="回收" icon="delete" value="" @click="onClick" />
          </li>
          <li>
            <van-cell title="设置" icon="setting-o" value="" @click="onClick" />
          </li>
          <van-divider />
          <li>
            <van-cell title="反馈" icon="chat-o" value="" @click="onClick" />
          </li>
          <li>
            <van-cell title="关于" icon="contact" value="" @click="onClick" />
          </li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "popupCom",
  data() {
    return {
      isShowNew: false,
      checked: false,
      checkedTitle: "白天"
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
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
    changeChecked(val) {
      if (val) {
        this.checkedTitle = "夜间";
      } else {
        this.checkedTitle = "白天";
      }
    }
  },
  watch: {
    isShow(val) {
      this.isShowNew = val;
    },
    isShowNew(val) {
      if (!val) {
        this.$parent.handleFShow();
      }
    }
  }
};
</script>
<style scoped lang="scss">
.personal-info {
  position: relative;
  height: 150px;
  .info {
    position: absolute;
    bottom: 0;
    left: 20px;
    h2 {
      color: #6a6a6a;
      font-size: 24px;
      margin-bottom: 10px;
    }
    p {
      color: #717171;
      font-size: 14px;
    }
  }
  .logo {
    float: right;
    margin-top: 40px;
    margin-right: 30px;
  }
}
</style>
