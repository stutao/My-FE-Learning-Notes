## 安装
```bash
npm install axios --save
```
## axios的请求方式
```js
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
```