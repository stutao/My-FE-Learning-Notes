## Vue.js 

### 初体验之计数器

~~~html
// 使用方式
// DOM树 也就是html标签节点 为View的内容
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
                el: '#app',// 这个也可以是一个选择出来的节点.
                data: obj,
                methods: {
                    add: function () {
                        //count++ 这个样子是无法执行成功的
                        //需要使用this来获取
                        this.count++;
                        console.log('add执行');
                    },
                    sub: function () {
                        this.count++;
                        console.log('sub执行');
                    },
                },
            });
        </script>
    </body>
</html>
~~~
## Vue的生命周期
~~~
从诞生到消亡的整个过程
new Vue()中做了什么操作?
主要是看options中的一些函数.还有Vue他整个的过程
~~~
## Vue的基本语法
~~~html
// {{}} Mustache 双大括号
<p>{{firstname}}+' '+ {{firstname}}</p>
<p>{{firstname * 2}}</p>

// v-once 只显示第一此的数据,不动态刷新数据
// 在控制台中动态修改的时候不会刷新
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


// v-text 和{{}}差不多意思 不过不多用不灵活
// 如果后面还要加入文本,会覆盖后面标签的内容
 <h2 v-text="message"></h2>

// v-pre 和pre标签差不多意思
// 作用就是将标签内的内容原封不动的显示出来

// v-cloak 很少用 主要为了防止js文件加载卡了,导致对用户不友好.

~~~

