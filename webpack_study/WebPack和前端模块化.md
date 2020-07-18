
## 前端模块化开发
* 为什么需要模块化
```
1,降低代码耦合性
2,防止全局变量冲突

解决命名冲突方式 可以使用闭包
  但是在另外的文件里却无法使用变量了,降低了代码复用性
要解决这个问题就是模块化 在ES5中其实就是将这个js文件中的代码保存到一个变量中.
```

* ES6的模块化
```js
// export/import
// html中
<script src='aaa.js' type='module'></srcipt>
<script src='bbb.js' type='module'></srcipt>

// 导出方式一
// aaa.js
var flag = true

function sum() {
  return 'sum'
}

export {
  flag,
  sum
} 

// 导出方式二
export var flag = true;
export var age = 18;

// 导出函数/类
export function sum(){
  return 'sum func'
}

export class Person() {
  run() {
    console.log("run finction")
  }
}

// export default 某些情况下 某个模块中有一个变量或者方法需要导出功能,但是让导入者自己命名
const address = '杭州';
export defaul address; // default 至多只能有一个 
// default 对应的导入方式 
import aa from "./aaa.js"; //这样其实就是去导入默认的功能

// 导入方式 只有type='module'才支持这种语法
import {flag,sum} from "./aaa.js"
// 全部导出
import * as modulea from "./aaa.js"
```

## WebPack
前端模块化打包工具
* 强调的是模块化,压缩那些只是附带的功能
gulp
* 强调的是自动化一些工具,适用于代码之间依赖较少的项目

## webpack
### 起步

项目目录
```
project
  -dist
  -src
    -main.js
    -mathUtil.js
  -index.html
  -package.json
  -webpack.config.json

```

文件解释
```js

// package.json // npm管理依赖的json文件,使用npm init生成
// 主要关注与当前的scripts
/*
  npm run build 这个命令会到这个文件中的scripts中找到对应的build键值
  然后在终端运行对应的value命令
  在这里定义有一个值得注意的是
    他在运行命令的时候首先会在本地环境去寻找.

  我们使用npm install packagename 的时候 后面不加如-g参数是不会安装到全局的.
  在命令的最后还可以加入 --save-dev 表示的是开发环境 在package.json中会有一个devDenpendncies
*/
{
  "name": "meetwebpack",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"webpack"
  },
  "author": "",
  "license": "ISC"
}


 // webpack.config.json  webpack依赖的配置文件
 // 文件使用commonJS的定义方式,
 /*
  获取path包,主要是为了在output中动态的添加路径 和python的os.path差不多
  __dirname可以直接获取到当前文件所在的目录的绝对路径
 */
 const path = require("path")

module.exports = {
  // 表示要执行webpack的文件位置
  entry:'./src/main.js',
  // 使用对象的方式生成对应的打包文件.
  output:{
    // 使用动态获取的方式 使用node语法
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  }
}
```

JS代码内容
  可以使用任何模块化分离的方式进行代码构建
```js
// main.js
// commonJS
// const {add,mul} = require("./mathUtil.js")

// ES6
import {add,mul} from "./mathUtil"

console.log(add(1,2));
console.log(mul(3,4));

// mathUtil.js
function add(num1, num2) {
  return num1 + num2
}

function mul(num1, num2) {
  return num1 * num2
}

// commonJS

// module.exports = {
//   add,
//   mul,
// }

// ES6
export { add, mul }

```


## 加载打包CSS 使用loader
* 记得去官网去看对应的使用方法 
* 中文网 https://www.webpackjs.com/loaders/
### 需要注意到的点
```js
// 1, 在打包的入口js文件中需要使用require("CSS文件位置")
// 2, 在写loder的时候加载顺序是从右往左的,CSS的时候需要将style-loader放在css-loader的左边才可以,否则会报错.
```

### 加载less?
* 没用过

## 打包图片
需要注意的点
```
1.url-load 其中options 有一个limit的参数,如果设置的数值(字节) > 图片的大小,会直接采用url-loader将图片进行base64编码加载到页面上.
2,file-loader 当加载的图片大小 > 数值(字节)时候,就要使用file-loader才行了.
  这里还需要注意的是图片的地址问题.index.html没有和图片同级,url加载不出来图片
  需要在webpack.config.json文件里面的output中加入一个 publicpath:"dist/",这样之后每次涉及到url的操作,都会在前面拼接一个dist/的目录

3,图片名字,
  在url-loader中的options加入name键值
    name:'img/[name].[hash:8].[ext]'
    这样会得出原来文件的name.8位hash值.原来的扩展名.并保存到dist/img/下
```