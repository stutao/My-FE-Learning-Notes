import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = ()=>import("../components/views/home/Home")
const Category = ()=>import("../components/views/category/Category")
const Cart = ()=>import("../components/views/cart/Cart")
const Profile = ()=>import("../components/views/profile/Proflie")

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   redirect: '/home'
    // },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: About
    // },
    // {
    //   path: '/user/:userId',
    //   name: 'User',
    //   component: User
    // }
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/category',
      name:'Category',
      component:Category
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
    },
    {
      path:'/profile',
      name:'Profile',
      component:Profile
    }
  ],
  mode:'history',
  linkActiveClass:'link-active'
})
