## Vue.js

### 初体验之计数器

```html
// 使用方式 // DOM树 也就是html标签节点 为View的内容
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <h2>当前计数:{{count}}</h2>
      <!-- 可以采用@语法糖 代替v-on等方法-->
      <button v-on:click="add">+</button>
      <button v-on:click="sub">-</button>
    </div>

    <script src="../../vue_src/vue.js"></script>
    <script>
      // model
      let obj = {
        count: 0,
      }
      // 这其实就是ViewModel
      const app = new Vue({
        el: '#app', // 这个也可以是一个选择出来的节点.
        data: obj,
        methods: {
          add: function () {
            //count++ 这个样子是无法执行成功的
            //需要使用this来获取
            this.count++
            console.log('add执行')
          },
          sub: function () {
            this.count++
            console.log('sub执行')
          },
        },
      })
    </script>
  </body>
</html>
```

## Vue 的生命周期

```
从诞生到消亡的整个过程
new Vue()中做了什么操作?
主要是看options中的一些函数.还有Vue他整个的过程
```

## Vue 的基本语法

```html
// {{}} Mustache 双大括号 是放在content中的 不能放在属性中
<p>{{firstname}}+' '+ {{firstname}}</p>
<p>{{firstname * 2}}</p>

// v-once 只显示第一此的数据,不动态刷新数据 // 在控制台中动态修改的时候不会刷新
<h2 v-once>have v-once {{message}}</h2>
<h2>{{message}}</h2>

//v-html 其实就是将字符串的标签给转义成html内容
<div id="app">
  <h2 v-html="url"></h2>
  <h2>{{url}}</h2>
</div>

<script>
  //创建Vue实例,得到 ViewModel
  var vm = new Vue({
    el: '#app',
    data: {
      message: '你好',
      url: '<a href="http://www.baidu.com">百度一下</a>',
    },
    methods: {},
  })
</script>

// v-text 和{{}}差不多意思 不过不多用不灵活 //
如果后面还要加入文本,会覆盖后面标签的内容
<h2 v-text="message"></h2>

// v-pre 和pre标签差不多意思 // 作用就是将标签内的内容原封不动的显示出来 //
v-cloak 很少用 主要为了防止js文件加载卡了,导致对用户不友好.
```

## Vue 的动态绑定

### v-bind

- 作用:可以动态绑定标签上的属性 实例代码如下

```html
// 绑定基础属性
<div id="app">
  <img v-bind:src="imgUrl" alt="" />
  <a v-bind:href="aHref">百度一下</a>

  <!-- 语法糖的写法 属性前直接加冒号":"-->

  <img :src="imgUrl" alt="" />
  <a :href="aHref">百度一下</a>
</div>
<script>
  //创建Vue实例,得到 ViewModel
  var vm = new Vue({
    el: '#app',
    data: {
      imgUrl: './tom.jpg',
      aHref: 'http://www.baidu.com',
    },
    methods: {},
  })
</script>

// 绑定class的对象语法
<div id="app">
  <!-- 原来的方法 -->
  <!-- <h2 :class="active">{{messagge}}</h2> -->

  <!-- 使用传入对象的样式 类名对应为true就显示当前类-->
  <!-- <h2 :class="{类名1:boolean,类名2:boolean}"></h2> -->
  <h2 class="title" :class="{active:isActive,line:isLine}">{{message}}</h2>
  <!-- 使用methods来做 注意这个方法需要调用-->
  <h2 class="title" :class="getClasses()">{{message}}</h2>
  <button v-on:click="btnClick">点击</button>
</div>

<script>
  //创建Vue实例,得到 ViewModel
  var vm = new Vue({
    el: '#app',
    data: {
      message: '你好呀',
      isActive: true,
      isLine: true,
    },
    methods: {
      btnClick: function () {
        this.isActive = !this.isActive
      },
      getClasses: function () {
        return { active: this.isActive, line: this.isLine }
      },
    },
  })
</script>

// 绑定class属性的数组语法 用的不多
<div id="app">
  <!-- 数组的写法 -->
  <h2 class="title" :class="[active,line]"></h2>
  <!-- 调用method的方法 -->
  <h2 class="title" :class="getClasses()"></h2>
</div>

<script>
  //创建Vue实例,得到 ViewModel
  var app = new Vue({
    el: '#app',
    data: {
      active: 'aaa',
      line: 'bbbb',
    },
    methods: {
      getClasses: function () {
        return [this.active, this.line]
      },
    },
  })
</script>

// 绑定style属性 分对象语法和数组语法 和class那个差不多
<div id="app">
  <!-- 对象语法 -->
  <!-- <h2 :style="{key(属性名字):value(属性值)}">哈哈哈</h2> -->
  <!-- 传递方式一种是字符串,另一种是不带引号的,表示data的key变量 -->
  <!-- <h2 :style="{fontSize:'52px'}">哈哈哈</h2> -->
  <h2 :style="{fontSize:finalSize}">哈哈哈</h2>

  <!-- 数组语法 不常用-->
  <h2 :style="{fontSize:[baseStyle,baseStyle1]}">哈哈哈</h2>
</div>

<script>
  //创建Vue实例,得到 ViewModel
  var app = new Vue({
    el: '#app',
    data: {
      finalSize: '52px',
      baseStyle: { color: 'red' },
      baseStyle1: { fontSize: '52px' },
    },
    methods: {},
  })
</script>
```
## 计算属性基础
* 写在computed后面
~~~html
<div id="app">
    <h2>{{firstName}} {{lastName}}</h2>
    <!-- 使用methods -->
    <h2>{{getFullName()}}</h2>
    <!-- 使用computed  不需要调用-->
    <h2>{{fullName}}</h2>
</div>

<script>
    //创建Vue实例,得到 ViewModel
    var app = new Vue({
    el: '#app',
    data: {
        firstName: 'tom',
        lastName: 'tao',
    },
    computed: {
        // 这个地方的key一般是不加动词的,和后面的getFullName不一样
        fullName: function () {
        return this.firstName + ' ' + this.lastName
        },
    },
    methods: {
        getFullName() {
        return this.firstName + this.lastName
        },
    },
    })
    </script>
~~~
## 计算属性的完整性写法
~~~
computed: {
        // 一般来说计算属性是只读的 所有只有一个get方法,所以可以简写
        fullName: {
          set: function (newValue) {
            // 有了set就可以重置这个属性了
          },
          get: function () {
            return this.firstName + ' ' + this.lastName
          },
        },
        // 简写方式
        fullName1: function () {
          return this.firstName + ' ' + this.lastName
        },
      },
~~~

## computed和methods的对比
~~~
使用计算属性computed会采用缓存,多次使用的话内部的函数只会调用一次.
而使用methods中的方法,每次使用都会调用这个函数.
~~~

## V-on
~~~html
// 基础内容
<body>
  <div id="app">
    <!-- 如果这个事件对应的方法没有参数可以省略括号 -->
    <button @click="add">button1</button>
    <!-- 当前事件没有传参,但是方法需要一个参数 默认传入的是浏览器生成的event-->
    <button @click="add1">button2</button>
    <!-- 在方法定义时,需要event对象同时又需要其他参数 -->
    <button @click="add2('123',$event)">button3</button>
  </div>

  <script>
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {
        add() {},
        add1(evt) {
          console.log(evt)
        },
        add2(a,evt) {
          console.log(evt)
          console.log(a)
        },
      },
    })
  </script>
</body>

// 修饰符 
// 修饰符阻止事件冒泡 @click.stop 要阻止那个标签就添加在哪.
<div @click='divclick'>
  <button @click.stop='btnclick'>按钮</button>  
</div>

// 修饰符阻止标签默认事件,@click.prevent
// 修饰符键盘点击-监听某个按键 比如回车enter@keyup.enter
// .native 监听组件的事件
// .once 只触发一次回调.
~~~
## v-if v-else v-else-if
~~~html
<body>
  <div id="app">
    <!-- <h2 v-if="is_show">abc</h2>
    <h2 v-else>is_show为false,显示我</h2> -->

    <!-- 这么复杂的判断,建议使用computed -->
    <!-- <h2 v-if='sorce>90'>优秀</h2>
    <h2 v-else-if='sorce>=80'>良好</h2>
    <h2 v-else-if='sorce>=70'>及格</h2>
    <h2 v-else>不及格</h2> -->

    <!-- 计算属性方式 -->
    <h2>{{result}}</h2>
  </div>

  <script>
    var vm = new Vue({
      el: '#app',
      data: {
        is_show: true,
        sorce: 95,
      },
      computed: {
        result() {
          if (this.sorce >= 90) {
            showMessage = '优秀'
          } else if (this.sorce >= 80) {
            showMessage = '良好'
          } else {
            showMessage = '及格'
          }
        },
      },
      methods: {},
    })
  </script>
</body>
~~~
## 使用v-if v-else 切换输入类型实例
~~~html
// 写的过程中碰到蛮多问题的 
// 问题一:对于标签的使用还不是很熟练,后面需要继续加强一些html相关内容
// 问题二:在使用vue的语法的时候,在html中外面包裹了双引号,这个不能忘记
<body>
  <div id="app">
    <span v-if="isUser">
      <label for="userName">用户名</label>
      <input type="text" id="userName" placeholder="用户名" />
    </span>
    <span v-else>
      <label for="userEmail">用户邮箱</label>
      <input type="text" id="userEmail" placeholder="用户邮箱" />
    </span>
    <button @click="isUser=!isUser">切换类型</button>
  </div>

  <script>
    var app = new Vue({
      el: '#app',
      data: {
        isUser: true,
      },
      methods: {},
    })
  </script>
</body>
~~~