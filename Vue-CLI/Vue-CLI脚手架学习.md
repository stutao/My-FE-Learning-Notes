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