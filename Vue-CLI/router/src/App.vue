<template>
  <div id="app">
    <!-- <router-link to="/home" tag='button'>首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-view/>-->
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item link='/home' activeColor='blue'>
        <img slot="item-active-icon" src="./assets/image/tabbar/Home-active.svg">
        <img slot="item-deactive-icon" src="./assets/image/tabbar/Home-deactive.svg">
        <div slot="item-text">首页</div>
      </tab-bar-item>

       <tab-bar-item link='/category' activeColor='blue'>
        <img slot="item-active-icon" src="./assets/image/tabbar/categories-active.svg">
        <img slot="item-deactive-icon" src="./assets/image/tabbar/categories-deactive.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>

       <tab-bar-item link='/cart' activeColor='blue'>
        <img slot="item-active-icon" src="./assets/image/tabbar/shop-cart-active..svg">
        <img slot="item-deactive-icon" src="./assets/image/tabbar/shop-cart-deactive.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>

       <tab-bar-item link='profile' activeColor='blue'>
        <img slot="item-active-icon" src="./assets/image/tabbar/mine-active.svg">
        <img slot="item-deactive-icon" src="./assets/image/tabbar/mine-deactive.svg">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../src/components/tabbar/TabBar";
import TabBarItem from "../src/components/tabbar/TabBarItem"

export default {
  name: "App",
  data() {
    return {
      // userId:'lisi'
    };
  },
  components: {
    TabBar,
    TabBarItem
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
