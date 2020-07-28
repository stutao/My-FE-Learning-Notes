## Vuex 是一个专门为vuejs开发的状态管理工具
* 简单的理解为组件之间的状态交互,共享
### 管理什么状态呢?
* 多组件,跨组件共享数据的时候 比如说登录token,用户信息等

### Vuex的核心概念

```
state
  直接存放状态信息的 单一状态树 类似于单例吧,只有一个store的实例
  注意:
    只要在一开始在state中做了数据初始化,那么这些属性都是响应式的
    原理是vuex使用了观察者模式,
    监测当前数据改变,并通知需要改变的组件内容

    而如果确实需要添加数据,那么要采用可以有响应式的数据更新方式
      可以直接使用Vue.set()增加属性. Vue.delete()删除数据 因为使用delete关键字删除是不响应式的

// 后面这些方法都是以state作为第一个参数
getters
  类似于计算属性,比如说state中有一个count 每次获取的时候需要将它进行一系列计算的时候,可以使用getters来操作

  getters可以有第二个参数
  // 第一个先获取年龄大于20岁的学生信息
  morethan20age(state){
    return state.students.filter(s=>s.age>20)
  }

  // 第二个参数 可以传入一个getters 这个就是vuex中的getters对象
  morethan20agesLength(state,getters){
    return getters.morethan20age.length
  }

  // 如果需要传递参数给getters? 这样在dom里面写的时候直接传参
  agewithparams(state){
    return age =>{
      return state.students.filter(s=>s.age>20)
    }
  }
mutations
  foo(state,obj){
    // 逻辑操作
  }

  // mutation的提交风格
  // 1, 普通的提交风格,这样在mutation中可以直接获取到这个params
  this.$store.commit('foo',params)

  // 2, 特殊的提交方式 这样会将整个对象传过去
  this.$store.commot({
    type:'foo',
    params:params
  })

  // mutation的类型常量 
  // 应用场景:commit和mutation中的名字抽出来作为常量
  import {PARAMS} from "Your-const-types"
  1,组件中:this.$store.commit(PARAMS)
  2,mutations中:[PARAMS](){}

  注意:如果只是同步操作那么直接使用mutation问题不大 
      但是不要进行异步操作,vuedevtools无法跟踪到.非要异步要增加一个actions环节来操作mutation

actions

  aupdate(context,payload){
    // 这个context是store对象
    异步操作方法(){
      context.commit('mutation中的方法')
    }
  }

  组件中使用:
    this.$store.dispatch('aupdate',params)

  // 使用Promise的高级优雅版本代码
  //1,vuex中的actions
  aUpdate(context,payload){
    return new Promise(resolve,reject){
      异步操作函数(){
        context.commit('mutation方法名')
        resolve('成功后的返回内容')
      }
    }
  }

  //2,组件中的代码
  this.$store.dispatch(
    'aUpdate',
    params
  ).then(
    res => {
      // 执行逻辑
    }
  )
modules
```