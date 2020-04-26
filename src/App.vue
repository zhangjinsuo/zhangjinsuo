<template>
  <div id="app">
    <router-link to="/">5555</router-link>
    <router-link to="/login">1234</router-link>
    <router-view></router-view>
</div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
export default {
    data() {
      return {}
    },
    components: {
    //HelloWorld: HelloWorld,
  }
  };
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
