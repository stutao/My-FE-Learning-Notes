## 安装
```bash
npm install axios --save
```
## axios的请求方式
```js
// 全局方式
import axios from 'axios'

axios({
  url:'httpbin.org',
  method:'get|post...',
  params:{
    
  }
}).then()


// 或者这样发送对应的请求
axios.get(url,{
  // get参数
  params:{

  }
}).then()


// 同时发送多个请求
axios.all([
  axios1(),
  axios2()
]).then(res =>{
  // 这个res是一个数组,按照上方的传入顺序表示结果res[0]--axios1
  // 可以使用then(axios.spread(res1,res2 => { }))
})

// 增加默认配置
axios.defaults.baseURL=''
axios.defaults.timeout
```

### axios的实例和封装
```js
// 全局的配置的适配性不是很强,需要使用单独的实例进行配置
// 创建实例直接使用axios.create()
const indexInstance = axios.create(
  baseUrl:'',
  timeout:5000
)

// 后面直接使用这个实例来写请求

indexInstance({
  url:'',
  params:{}
})


// 如果多个组建中都采用了axios 对这个包的依赖太强,
// 我们可以单独封装成一个通用性的工具
// 这样我们可以面向这个单独的文件使用 类似于面向对象的解耦

// 封装的最终方案
// axios.js文件

export function request(config){
  const instance = axios.create(
    baseUrl:'',
    timeout:''
  )
  // 通过create创建出来的axios实例其实是Promise的一个对象 可以直接返回
  return instance(config)
}

// 组件使用

request({
  url:''
}).then(
  res=>{

  }
).catch(
  err=>{

  }
)

// 如果后续这个框架不维护了 
// 我们可以借鉴这个操作返回一个new Promise的对象
```

### axios的拦截器使用 类似于中间件或请求/响应钩子
```js

// 全局拦截
axios.interceptors.request.use(config=>{
    // 第一个参数代表的是配置,请求成功做了拦截.
    // 需要将config返回回去
    // 可以在这里对config做一系列操作后然后返回
    return config
},err => {
  // 第二个是请求失败的时候后
})
axios.interceptors.response.use(res => {
  // 获取请求成功的结果
  // 还是要注意需要返回
  data = res.data
  return data
},err => {
  // 获取到的是请求失败的错误信息
})
// 实例拦截 写法一致
```