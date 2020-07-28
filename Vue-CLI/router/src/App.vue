<template>
  <div id="app">
    <!-- <router-link to="/home" tag='button'>首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-view/>-->
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/tabbar/MainTabBar'

export default {
  name: "App",
  data() {
    return {
      // userId:'lisi'
    };
  },
  components: {
    MainTabBar
  },
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.link-active{
  color: red;
} */
/* 这个分号可得记得写 */
@import "./assets/css/base";
</style>
