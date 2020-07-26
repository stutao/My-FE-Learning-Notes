import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const Home = () => import("../components/Home.vue");
const About = () => import("../components/About.vue");
const User = () => import("../components/User.vue");

const HomeMessage = () => import("../components/message.vue");
const HomeNews = () => import("../components/News.vue");
export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      children: [
        {
          path:'',
          redirect:'news'
        },
        {
          path: "message",
          component: HomeMessage
        },
        {
          path: "news",
          component: HomeNews
        }
      ]
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/user/:userId",
      name: "User",
      component: User
    }
  ],
  mode: "history",
  linkActiveClass: "link-active"
});
