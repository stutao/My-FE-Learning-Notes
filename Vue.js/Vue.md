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
// 问题二:在使用vue的语法的时候,代码在html中是包裹了双引号的
// 问题三:切换类型的时候,input中的值没有修改
   // 解答问题三,
   // 因为Vue会有一个虚拟DOM 做中间层,将一些重复的东西省去
   // 表面上看是重新创建了input 其实只是把之前那个input标签的相关属性改了
   // 解决方案 在对应标签上加上key属性,如果两个key一样,那么就复用,反之,不复用
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
## v-show的使用
~~~html
<body>
  <div id="app">
    <!-- 使用v-if的时候,如果isShow是false这个h1标签都不在DOM树上 -->
    <h1 v-if="isShow" id="aaa"></h1>
    <!-- 而使用v-show的时候,标签还是在的 只是加了一个属性dispalay -->
    <h2 v-show="isShow" id="bbb"></h2>
  </div>

  <script>
    var app = new Vue({
      el: '#app',
      data: {
        isShow: true,
      },
      methods: {},
    })
  </script>
</body>
~~~
## v-for的使用
~~~html
// 建议在使用v-for的时候,给标签绑定一个key属性
// 主要是提高性能,
// 如数组中间插入元素时候从虚拟dom渲染到真实dom的一个过程 
// 主要涉及到的是一个diff算法

// 遍历数组
<div id="app">
    <ul>
      <!-- 未使用数组的下标 -->
      <li v-for="name in names" :key="name">{{name}}</li>
      <!-- 使用下标的方式 
          注意的是第一个接收的元素内容,第二个接收的是下标-->
      <li v-for="(name,index) in names">{{index}}-{{name}}</li>
      
    </ul>
  </div>

  <script>
    var app = new Vue({
      el: '#app',
      data: {
        names: ['zt', 'jerry', 'tomy', 'tom'],
      },
      methods: {},
    })
  </script>

// 遍历对象
<div id="app">
  <ul>
    <!-- 直接遍历对象获取到的是value -->
    <li v-for="item in obj">{{item}}</li>
    <!-- 获取key就加入key的内容 注意前面接收value 后面接收Key-->
    <li v-for="(item,key) in obj">{{key}}-{{item}}</li>
    <!-- 同时获取key,value,index -->
    <li v-for="(item,key,index) in obj" :key="item">{{index}}-{{key}}-{{item}}</li>
  </ul>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      obj: {
        name: 'tom',
        age: 18,
        height: 180,
      },
    },
    methods: {},
  })
</script>
~~~
## v-for更新数组是否响应式的方法
```js
// 可以响应的
push()
pop()
shift()
unshift()
splice()
// 可以采用内部的修改方式
Vue.set() // 也是响应式

// 非响应式
// 使用索引修改数组内容,
arr[0] = 'bbb' 
```
### 综合案例练习-图书购物车
```
越写越觉得吧 像jinjia2或者django的模板语法
具体内容看08-图书购物车的代码
涉及到的内容包括08之前的所有,还有过滤器的相关知识.
```
## v-model双向绑定
```html
// 基本使用与基本原理
//可以通过v-bind v-on 组合出双向绑定的内容
<body>
  <div id="app">
    <!-- 自动绑定了这个标签的value 并且支持动态更新-->
    <!-- 同时当改变页面上的value值 对应的msg也会修改 所以叫做双向绑定 -->
    <input type="text" v-model="msg" />{{msg}}
    <br />
    <!-- 组合v-bind  v-on实现双向绑定-->
    <input type="test" :value="msg1" @input="valueChange" />
    {{msg1}}
    <br />
    <!-- 简便方式 -->
    <input type="test" :value="msg2" @input="msg2 = $event.target.value" />
    {{msg2}}
  </div>

  <script>
    var app = new Vue({
      el: '#app',
      data: {
        msg: '你好',
        msg1: '组合绑定1',
        msg2: '组合绑定2',
      },
      methods: {
        valueChange(e) {
          // 使用e.tartget 可以获取当前触发事件的标签
          // 修改msg1的值
          this.msg1 = e.target.value
        },
      },
    })
  </script>
</body>
```

### v-mode的结合使用,值绑定,修饰符内容
```html
<body>
  <div id="app">
    <!-- 和radio的结合使用 -->
    <input type="radio" id="male" value="male" v-model="sex" />male
    <input type="radio" id="female" value="female" v-model="sex" />female
    <h2>选择的性别是:{{sex}}</h2>

    <!-- 和checkbox多选的结合使用 分单选多选-->
    <!-- 会自动push到列表里面去 -->
    <input type="checkbox" value="足球" v-model="hobbies" />足球
    <input type="checkbox" value="篮球" v-model="hobbies" />篮球
    <input type="checkbox" value="羽毛球" v-model="hobbies" />羽毛球
    <h2>爱好是:{{hobbies}}</h2>

    <!-- 结合select的使用 也分单选和多选-->
    <!-- 单选 -->
    <select v-model="fruit">
      <option value="apple">apple</option>
      <option value="apple1">apple1</option>
      <option value="apple2">apple2</option>
    </select>
    -->
    <!-- <h2>选择的水果{{fruit}}</h2>
    <!-- 多选 需要用ctrl按住多选-->
    <select v-model="fruits" multiple>
      <option value="apple">apple</option>
      <option value="apple1">apple1</option>
      <option value="apple2">apple2</option>
    </select>
    <h2>选择的水果有{{fruits}}</h2>

    <!-- 这个value值最好是通过值绑定来做 -->
    <label v-for="item in bindValue" :for="item">
      <input
        type="checkbox"
        :value="item"
        :id="item"
        v-model="bindValue"
      />{{item}}
    </label>
    <h2>选择:{{bindValue}}</h2>

    <!-- 修饰符内容 -->
    <!-- 修饰符 lazy 在input失去焦点或者敲回车的时候会绑定 -->
    <input type="text" v-model.lazy="lazyMsg" />{{lazyMsg}}

    <!-- 修饰符 number -->
    <!-- v-model赋值过来的值都是string类型的 使用number修饰符会是number类型-->
    <input
      type="number"
      v-model.number="numberMsg"
    />{{numberMsg}}{{typeof(numberMsg)}}

    <!-- 修饰符stirm 将值两边的空格删除-->
    <input type="number" v-model.strim="strimMsg" />{{strimMsg}}
  </div>

  <script>
    var app = new Vue({
      el: '#app',
      data: {
        sex: '',
        hobbies: [],
        fruit: 'apple',
        fruits: [],
        bindValue: ['足球', '篮球', '台球', '秋千'],
        lazyMsg: 'lazymsg',
        numberMsg: 10,
        strimMsg: '',
      },
      methods: {},
    })
  </script>
  </body>
```
## Vue的组件化开发

## 组件化的思想
```
一个页面由多个组件构成,多个组件组成的一个组件树.
  提高可维护性,同时也可以提高代码的复用性.
```

## 注册组件的基本步骤
```
1,创建组件构造器
  Vue.extends()方法
2,注册组件
  调用Vue.component()方法
3,使用组件
  在Vue的实例作用范围内使用组件
```
### 注册组件的代码实现
```html
<body>
  <div id="app">
    <my-cpn></my-cpn>
    <my-cpn></my-cpn>
    <my-cpn></my-cpn>
  </div>

  <script>
    // 1, 创建组件构造器对象
    const cpnC = Vue.extend({
      // ES6使用 ``
      template: `
          <div>
              <h2>标题2</h2>
              <h3>标题3</h3>
              <h2>再来标题2</h2>
          </div>
          `,
    })
    // 2,注册组件
    Vue.component('my-cpn', cpnC)
    // 3,使用
    // 在html中使用<my-cpn></my-cpn>标签 注意需要在vue托管的作用域中
    var app = new Vue({
      el: '#app',
      data: {},
      methods: {},
    })
  </script>
</body>
```

### 全局组件和局部组件
```html
  <body>
    <div id="app">
      <cpn></cpn>
    </div>

    <script>
      // 1, 创建组件构造器对象
      const cpnC = Vue.extend({
        // ES6使用 ``
        template: `
            <div>
                <h2>标题2</h2>
                <h3>标题3</h3>
                <h2>再来标题2</h2>
            </div>
            `,
      })
      // 2,注册组件 当前这样是注册的全局组件
      // 全局组建意味着可以在不同的Vue实例中使用
      //   Vue.component('cpn', cpnC)
      // 如何注册局部组件呢?

      // 3,使用
      // 在html中使用<my-cpn></my-cpn>标签 注意需要在vue托管的作用域中
      var app = new Vue({
        el: '#app',
        data: {},
        // 注册局部组件
        components: {
          // key:代表标签名
          // value:组件构造器
          cpn: cpnC,
        },
        methods: {},
      })
    </script>
  </body>
```

### 父子组件
```html
  <body>
    <div id="app">
      <cp2></cp2>
    </div>

    <script>
      // 当前模板里面cpnC2是父组件,cpnC1是子组件
      // 子组件只能在父组件作用域之间使用
      // 在html中直接定义父组件标签就好了,在其中会直接编译子组件的标签
      const cpnC1 = Vue.extend({
        template: `
                    <div>
                        <h2>组件内容1</h2>
                    </div>
                `,
      })
      const cpnC2 = Vue.extend({
        template: `
                    <div>
                        <h2>组件内容2</h2>
                        <cp1></cp1>
                    </div>
                `,
        components: {
          cp1: cpnC1,
        },
      })
      // 可以将app这个当做root组件
      var app = new Vue({
        el: '#app',
        data: {},
        methods: {},
        components: {
          cp2: cpnC2,
        },
      })
    </script>
  </body>
```

### 组件注册语法糖
```html
<body>
  <div id="app">
    <cpn2></cpn2>
  </div>

  <script>
    // 语法糖注册全局组件
    // Vue.component =
      // ('cpn1',
      // {
      //   template: `
      //             <div>
      //                 <h2>组件内容1</h2>
      //             </div>
      //         `,
      // })
    var app = new Vue({
      el: '#app',
      data: {},
      methods: {},
      components: {
        // 注册局部组件
        cpn2: {
          template: `
                  <div>
                      <h2>组件内容1</h2>
                  </div>
              `,
        },
      },
    })
  </script>
</body>
```
### 组件模板分离写法
```html
<body>
  <div id="app">
    <cpn></cpn>
  </div>
  <!-- 写法1 使用script 必须指定type="text/x-template" -->
  <script type="text/x-template" id="cpn">
      <div>
        <h2>组件模板1</h2>
    </div>
  </script>

  <!-- 写法2 直接使用template标签-->
  <template id="cpn2">
    <div>
      <h2>组件模板2</h2>
    </div>
  </template>
  <script>
    Vue.component('cpn', {
      // 这个可以直接指定选择器,然后读取对应的html代码
      template: '#cpn2',
    })
    var app = new Vue({
      el: '#app',
      data: {},
      methods: {},
    })
  </script>
</body>
```