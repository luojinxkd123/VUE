<template>
  <router-view></router-view>
</template>
<script>
export default {
  methods: {
    init () {
      this.$router.push('login')
    }
  },
  mounted: function () {
    // 初始化过程先判断是否登录，未登录则跳转到login路由
    this.init()
  }
}
</script>
<style></style>
