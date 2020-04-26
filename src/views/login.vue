<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <el-button type="success">login</el-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'login'
    }
  }
}
</script>

<style scoped>
.home{
  font-size: 16px;
}
</style>