<template>
    <tab-bar>
      <tab-bar-item link='/home' activeColor='blue'>
        <img slot="item-active-icon" src="../../assets/image/tabbar/Home-active.svg">
        <img slot="item-deactive-icon" src="../../assets/image/tabbar/Home-deactive.svg">
        <div slot="item-text">首页</div>
      </tab-bar-item>

       <tab-bar-item link='/category' activeColor='blue'>
        <img slot="item-active-icon" src="../../assets/image/tabbar/categories-active.svg">
        <img slot="item-deactive-icon" src="../../assets/image/tabbar/categories-deactive.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>

       <tab-bar-item link='/cart' activeColor='blue'>
        <img slot="item-active-icon" src="../../assets/image/tabbar/shop-cart-active..svg">
        <img slot="item-deactive-icon" src="../../assets/image/tabbar/shop-cart-deactive.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>

       <tab-bar-item link='profile' activeColor='blue'>
        <img slot="item-active-icon" src="../../assets/image/tabbar/mine-active.svg">
        <img slot="item-deactive-icon" src="../../assets/image/tabbar/mine-deactive.svg">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "./TabBar"
import TabBarItem from "./TabBarItem"

export default {
  name: '',
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
</style>
