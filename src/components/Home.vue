<template>
  <div>
    <el-button type="info" @click="logout"></el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // 清除token
      window.sessionStorage.clear()
      // 跳转到登录界面
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
</style>