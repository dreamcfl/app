<template>
  <div class="bg-content content">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="END"
        @load="onLoad"
      >
        <h5 class="title-content">
          连续记录{{ list.length }}天 [共{{ list.length }}篇]
        </h5>
        <transition name="fade-page" mode="out-in">
          <div :key="isMove" class="ml-15">
            <div v-for="(item, index) in list" :key="index">
              <div class="list">
                <div class="data-text">
                  <dl>
                    <dt>{{ item.date.day }}</dt>
                    <dd>
                      <p>{{ item.date.month }}月/{{ item.date.week }}</p>
                      <p class="text-center">{{ item.date.year }}</p>
                    </dd>
                  </dl>
                </div>
                <ul @click="onClick">
                  <li class="title">{{ item.content.title }}</li>
                  <li class="text">
                    {{ item.content.text }}
                  </li>
                  <li v-if="item.content.imgUrl">
                    <van-image
                      width="100"
                      height="100"
                      lazy-load
                      fit="fill"
                      :src="item.content.imgUrl"
                    />
                  </li>
                  <li class="date">{{ item.content.data }}</li>
                </ul>
              </div>
            </div>
          </div>
        </transition>
        <!-- <h5 class="title-content">
          END
        </h5> -->
      </van-list>
      <div class="mb-10"></div>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  name: "lisCom",
  data() {
    return {
      isMove: 1,
      isLoading: false,
      list: [],
      first: true,
      loading: false,
      finished: false
    };
  },
  mounted() {
    this.move();
    this.getdata();
  },
  methods: {
    onClick() {
      var obj = {
        title: "啊哈哈哈",
        text: "反倒是解放军的会飞的",
        date: "9:30"
      };
      this.$router.push({ path: "viewNote", query: obj });
      // this.$dialog
      //   .alert({
      //     message: "现在还不能查看"
      //   })
      //   .then(() => {
      //     // on close
      //   });
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        if (this.first) {
          this.getdata();
          this.first = false;
          // 加载状态结束
          // 数据全部加载 完成
        } else {
          this.pushData();
        }
      }, 500);
    },
    pushData() {
      setTimeout(() => {
        this.list.push(
          {
            date: { week: "周三", month: 9, day: 18, year: 2019 },
            content: {
              title: "过的好快",
              text: "今天周三了，马上要周末噢！",
              data: "21:05",
              imgUrl: " https://img.yzcdn.cn/vant/apple-8.jpg"
            }
          },
          {
            date: { week: "周二", month: 9, day: 17, year: 2019 },
            content: {
              title: "第一篇日记的我",
              text: "首先，我要记下这个美好的日记，今天是我第一次写日记",
              data: "21:05",
              imgUrl: ""
            }
          }
        );
        if (this.list.length > 20) {
          this.finished = true;
        }
        this.loading = false;
      }, 1000);
    },
    getdata() {
      this.list = [
        {
          date: { week: "周一", month: 9, day: 23, year: 2019 },
          content: {
            title: "周一上班",
            text: "上班啦！",
            data: "09:30",
            imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg"
          }
        },
        {
          date: { week: "周日", month: 9, day: 22, year: 2019 },
          content: {
            title: "周末出去玩",
            text: "明月几时有？把酒问青天。",
            data: "11:13",
            imgUrl: "https://img.yzcdn.cn/vant/apple-1.jpg"
          }
        },
        {
          date: { week: "周六", month: 9, day: 21, year: 2019 },
          content: {
            title: "今天也是美好的一天",
            text: "人生若只如初见，何事秋风悲画扇。",
            data: "12:34"
          }
        },
        {
          date: { week: "周四", month: 9, day: 20, year: 2019 },
          content: {
            title: "上班",
            text: "还在上班还无聊，陪我聊天吧。",
            data: "19:55",
            imgUrl: "https://img.yzcdn.cn/vant/apple-2.jpg"
          }
        },
        {
          date: { week: "周四", month: 9, day: 19, year: 2019 },
          content: {
            title: "嗯哼，周四",
            text: "君不见黄河之水天上来，奔流到海不复回。",
            data: "21:05"
          }
        }
      ];
      this.loading = false;
    },
    move() {
      this.isMove = Math.random();
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.getdata();
        this.first = true;
        this.finished = false;
      }, 500);
    }
  }
};
</script>
<style>
.van-list__finished-text {
  letter-spacing: 2px;
}
</style>

<style scoped lang="scss">
.title-content {
  margin: 15px 0;
  text-align: center;
  color: #cacac8;
  font-weight: 400;
  letter-spacing: 2px;
}
.list {
  display: flex;
  margin-bottom: 10px;
  .data-text {
    dl {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      flex-direction: column;
      margin: 10px 15px 10px 0;
      dt {
        color: #7d7b86;
        font-size: 32px;
        margin-bottom: 5px;
      }
      dd {
        color: #aeadb2;
        font-size: 16px;
        .text-center {
          text-align: center;
        }
      }
    }
  }
  ul {
    width: 100%;
    padding: 30px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #e3e3e1;
    .title {
      color: #516067;
      font-size: 24px;
      font-weight: 600;
    }
    .text {
      color: #5c5c66;
      font-size: 20px;
      margin: 10px 0;
    }
    .date {
      color: #dadad8;
      font-size: 16px;
      margin: 10px 0 0;
    }
  }
}
</style>
