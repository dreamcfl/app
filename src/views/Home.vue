<template>
  <div class="home">
    222222222222
  </div>
</template>

<script>
import { Toast } from 'vant';
  export default {
    name: "Home",
    components: {
    },
    mounted() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      });
    },
  };
</script>