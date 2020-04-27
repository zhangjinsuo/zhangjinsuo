<template>
  <div class="home">
    <p>aaaa</p>
    <el-button type="primary" v-on:click="sss">主要按钮111111</el-button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
    };
  },
  methods: {
    sss: function() {
      ELEMENT.Message.error("成功");
    }
  }
};
</script>

<style scoped>
.home {
  font-size: 16px;
}
</style>