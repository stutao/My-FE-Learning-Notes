## 什么是Vue-CLI脚手架
可以自动生成webpack的配置,生成项目配置 真香.
### Vue-CLI2 脚手架2
```
安装
  需要node
  然后安装webpack
  安装脚手架CLI3 npm install -g @vue/cli

如果还需要脚手架2:
  要拉一个脚手架2的模板下来
  npm install -g @vue/cli-init
  安装好了之后就既可以用2也可以用3了啦

Vue-CLI2初始化项目
  vue init webpack my-project

命令的选项解释:
  1,Project name:项目名 一般是和项目名字一样
  2,描述
  3,作者

  4,选择runtime或者compiler 
     刚开始学习选择第一个 两个结合的
     后面了解之后可以只选择runtime-only
  
  5,是否安装vue-router:路由

  6,eslint:代码规范限制,检查
  
  7,是否建立单元测试,
  
  8,e2e测试?端到端测试,Nightwatch 会结合selenium或者webdirver
  
  9,使用什么包管理工具?

```

### Vue-CLI3 脚手架3
```
Vue-CLI3初始化项目
  vue creat my-project
  
  1,选择配置,默认或手动选择
  
  2,配置放到哪里去?package,json 或者是一个单独的config

  3,是否将当前的选项保存到将来的项目去?这样之后的配置可以直接选择

项目目录解释:
  public-相当于cli2的static
  src和之前的一样

// $mount和el是一个意思的
// cli3默认采用的是runtime-only
new Vue({
  render: h => h(App),
}).$mount('#app')


0配置 
配置是放在node_modules里面的@vue里面
  
  如果真的需要修改配置 
  需要在当前项目目录下创建一个vue.config.js

// 写了之后他会自动和原来的配置文件合并的
module.exports = {

}
```

### runtime-only和runtime-compiler的区别

```
// 最主要就是一个render的问题

// 当有template的时候也就是runtime-compiler
template -> ast(抽象语法树)-> render函数->虚拟DOM->真实DOM
// runtime-only
当是runtime-only的时候直接就render到虚拟DOM去了
vue文件中还是那样写,但是那个template最后会消失

```

### vue ui
```
启动本地服务器
```

### 箭头函数的基本使用
```js
const f = (参数列表)=>{

}
// 参数问题
// 无参数
const f = () => {}

// 一个参数

const pow = num => {
  rerutn num*num
}

// 一个以上参数
const sum =  (num1,num2)=>{
  return num1+num2
}

// 函数代码块的多行代码时候
// 正常写法

// 函数代码块只有一行代码时候

const sum1 = (num1,num2) => num1 + num2

```

### 箭头函数的this指向问题
```
结论:箭头函数的this是怎么找呢?
  引用是最近作用域中的this,是一层一层往外找的

为什么用function却指向window呢?
  因为这里是调用了call函数,其中传过来一个window
```

## vue-router 
```
路由
前端路由和后端路由 自己去理解

前端渲染和后端渲染 自己去理解
```

### 如何改变URL不刷新页面?
```
直接修改location.hash 
// 这个主要是栈的操作,将这个url压到栈的顶部,
// 浏览器显示的永远都是栈的顶部的url
// 可以有返回
history.pushState({},'','/home') 

// 替换栈顶的url 无法返回
histor.replaceState()

// go方法直接跳转到某个url
```
## 配合vue-router项目学习
``` js
/*
配置vue-router之后会默认在src下面创建一个文件夹叫router
  如果项目创建没有配置需要后面自己新建,
    router中有一个index.js文件,这个名字是默认的最好不要改变

在router目录同级有components文件夹下面是存放组件的地方.
  组件写法还是正常方式写

*/


 // App.vue 
 // 使用router-link 会默认渲染成a标签 
 // 使用tag属性可以指定渲染成其他标签
 // 默认是使用的pushState 增加成repalce 会改成repalceState
 
 // 哪个router标签被点击,会增加一个class 未点击是不会有的. 
 // 默认名字router-link-active,可以使用active-class='active'类似的将名字改掉

 // router-view是展示组件内容
<div id="app">
  <router-link to="/home">首页</router-link>
  <router-link to="/about">关于</router-link>
  <router-view/>
</div>

/*
如果不想使用router-link 使用button怎么改变呢?
<button @click='homeClick'>首页</button>
方法中homeClick(){
  // push
  this.$router.push('/home')
  // replace
  this.$router.replace('/home')
}
*/

// router/index.js
import Vue from 'vue'
import Router from 'vue-router'
// 这个@别名是在webpack里面定义的一个resove默认是src,
// 可以自己添加

// 在html里面使用别名需要在自定义的路径名前加入一个~
import Home from '@/components/Home'
import About from '@/components/About'

// 首先需要对Router使用Vue.use
Vue.use(Router)

/*
  router
  参数:
    path:就是后面的url路径
    name:名字,目前还不知道干嘛用的
    component:指定对应组件
    redirect:重定向到
  mode:
    模式:默认是hash,在这可以改成history这样在url中不会有'#'
*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode:'history',
  // 这个是router-link-active  这个class属性名字的修改
  linkActiveClass:'active'
})


//src/main.js
import Vue from 'vue'
import App from './App'
// 这里导包其实是导入了index.js 
// 省略成这样写他会默认去找到router/index.js
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 主要就是挂载了一个router的东西
  router,
  render: h => h(App)
})

```

### router动态路由
```js
// 有些时候路由是不确定的 类似于参数拼接
// routers 中配置路由
 routes: [
    {
      path: '/user/:userId(参数名,自定义,后面需要用)',
      component: User
    }

// 在router-link中使用v-bind动态绑定to属性
<router-link to="'/user/'+userId">首页</router-link>
// 在组件data中返回对应属性

// 如何获取router中的动态属性?
// 注意是route 不是router

// 这个route拿到的是处于活跃的路由
// 这个userId 就是前面定义的那个东西
  this.$route.params.userId
// 也可以在组件HTML代码中直接使用mustache语法
// {{$route.params.userId}}
```

### 导航守卫
* 主要目的:监听来回跳转的过程

```js
/*
  知识点补充:
    vue的生命周期函数
    created() 在组件被创建的时候就调用
    mounted() 在组件template被渲染挂载的dom上的时候
    updated() 当界面被更新的时候
*/

// 需求  在每次页面更换之后改变title
// 方式一: 使用created函数,不推荐

// 方式2:使用router.beforEach方法
// 函数中 to, from 都是Route类型 也就是我们对应的路由
// 实现当前需求要在每个路由中加入meta:{title:'对应的名字'}
// 在index.js中 添加beforeEach前置钩子,是在页面跳转前调用
router.beforeEach(to,from,next) = >{
  // 从from跳转到to
  doucument.title = to.mateched[0].meta.title
  // 必须要记得调用一下next方法 否则代码会有问题
  next()
}

// 方式3,使用afterEach 后置钩子,在页面跳转后调用
router.afterEach(to,from) = >{
  // 从from跳转到to
  doucument.title = to.mateched[0].meta.title
  // 后置钩子不需要调用next()
  // next()
}

/*
  beforeEach,afterEach都是全局守卫
  
  路由独享守卫
    在对应的路由中写
  组件独享守卫
    在对应组件内
*/
```

### keep-alive内容
```js
/*
  主要是浏览状态的保留

  按照正常Vue的生命周期,当跳出当前组件的时候,会执行销毁动作
    如果要他不销毁
      采用keep-alive包裹住router-view的标签

  第一步:keep-alive包裹router-alive 
    这样可以就不会频繁的创建和销毁组件

  第二步:使用beforeRouteLeave函数记录当前离开的path

  知识点:只有在keep-alive包裹的组件才会有activated和deactivated的回调方法,主要含义是表示当前组件是否为激活状态.

  // 如下可以将Proflie和User排除在keep-alive之外.注意不要加空格
  在<keep-alive exclude='Profile,User'></keep-alive>
*/

```