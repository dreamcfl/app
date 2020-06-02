<template>
  <div class="pageMain">
    <keep-alive>
      <router-view v-if="$route.meta.noCache"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.noCache"></router-view>
  </div>
</template>

<script>
export default {
  name: "pageMain"
};
</script>
