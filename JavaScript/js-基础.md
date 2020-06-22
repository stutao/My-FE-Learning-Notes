严格模式 use strict 建议声明在作用域内 不要生命在全局

## 数据类型

### 基本数据类型

* 1,数字 Number -- 常见的数值
* 2,字符串 String  --所有带引号的

~~~ js
// 字符串创建方式 object对象是复合数据类型
var str = new String("hello")
var str = String("hello")
var str = "hello" // 单引号双引号都是可以的
// 方法length 返回长度-字符个数
// 访问字符串方法
str.charAt(下标) //返回对应的值 
str[下标]
// 字符串是不可变的 

str.charCodeAt(下标) //返回对应下标字符的ASCII码
String.fromCharCode(ASCII值) //返回ASCII对应的字符
str1.concat(str2) // 连接字符串 返回拼接结果不改变原来结果 一般用+就行了
// 字符串查找方法
str.indexOf(子串,开始查找的位置); //返回值,第一次子串出现的位置的下标.没查到返回-1
str.lastIndexOf(子串) //返回值是子串在字符串中最后一次出现的位置 没有返回-1

search(regx)// 参数是正则 i忽略大小写,g全局匹配

str.replace(匹配的字符串/正则,替换的新的字符串) //返回的是新的字符串 使用字符串的话只会替换 第一个 想要全部规则都匹配 需要使用正则.并且要使用g全局

str.substring(strat,end) // 获取指定范围内的字符 生成新的字符串 左开右闭

str.split(分割符,生成的数组长度) //返回值 通过分隔符返回的子串数组 后面那个长度等于是表示我只要分割出来的几个值这样.基本和Python差别不大.如果分割符是空字符串 会将结果切分为单个字符组成的数组

str.toLowerCase() // 改成全小写
str.toUpperCase() // 改成全大写
~~~



* 3,布尔 boolean --true  false
* 4,特殊数据类型 null undefined

### 复合数据类型

#### 数组

* 表示一组数据的集合 和python的list差不多意思

~~~js
// 数组的定义方式
var arr = new Array(1,true,"hello")
var arr = new Array(10) // 长度为10的数组
var arr = [1,2,3,4,"hello"]  // 这么和Python的list一样了


// 数组的访问方式 使用下标 从0开始.
// arr[0]
// 数组长度  arr.length() 不是只读 是可以进行设置的
// var arr = [1,2,3] arr.length=3
// arr.length =2 这样 arr的输出就会变成1,2  变成长度为2

// 遍历数组 使用循环 
// 普通的for循环和java一样意思
// 关键看for...in的使用
/*
for(var 变量 in 数组){
	代码块
}
// 这里的i是下标
for (var i in arr){
	document.write(arr[i])
}
*/
~~~

* 数组的操作方法

~~~ js
// 栈方法 LIFO
// push 将结果添加到arr的最后  返回的是push之后的数组长度
var arr = [1,2,3,4]
var res = arr.push(7,8,9,10)


// pop方法 删除数组最后一个元素 返回值是弹出的数值
var res = arr.pop()


// 队列方法 FIFO
arr.push(value) // 数组尾部插入元素 返回值是修改后数组的长度
arr.shift() // 弹出头部元素 返回值是弹出的值
arr.unshift(value...) // 从数组的头部插入元素,参数随意 返回值是数组的长度 

//concat 数组的合并
arr.concat(arr2) // 合并数组 不会改变原数组 返回合并后数组

// slice 切片
arr.slice(start,end) // 取指定区域内的元素(左闭右开), 返回新数组 原数组不会改变

// splice 可以完成删除 插入 替换等操作
// 参数1:截取的开始下标,
// 参数2:截取的长度
// 参数3:在截取的开始下标位置,我们要插入的元素,插入的元素个数随意
// 会对原数组进行做修改.
var arr = [1,2,3,4,5,6]
// 删除功能
var res = arr.splice(0,2) // 意思是从0 操作删除长度2 即结果arr=[3,4,5,6] 返回值为删除掉的数据构成的数组 当前为 1,2

// 插入功能
var res = arr.splice(0,0,"11","2233") // 在0的位置插入后面传入的多个参数或一个 无返回值

// 替换功能 先删除 在插入
var res = arr.splice(1,1,"11") // 将位置1的参数替换成"11"

// join 方法 使用拼接符将数组中的元素拼接成字符串
var res = arr.join() // 返回值是拼接好的字符串 和python的一个意思


// 数组排序
//  arr.reverse() 逆向排序
// arr.sort() 升序排序--默认按照字符串进行排序
// 一般情况下需要自己编写排序方法,为满足自己的个性需求???
// 常用排序 就是后端那几个排序  只是换成js写法

indexOf(元素,开始查找的位置) // 和字符串类似

arr.forEach(function(item,index,array){
   // item 当前元素
   // index 当前下标
   // array 当前遍历的数组
}) // 数组遍历

map // 遍历->操作->返回
var newArr = arr.map(function(item,index,array){
    return item+2
}) // 给每个元素加2

reduce // 归并
var res = arr.reduce(function(pre,next,index,array){
    // pre 上一次遍历return后面的值
    // next 当前遍历的值
    return pre + next
}) // 数组元素相加


filter // 过滤
var newArr = arr.reduce(function(pre,next,index,array){
    return item >30
}) // 返回符合条件的元素组成的数组

some // 某些 判断return后面的条件是否成立 成立返回true 否则 false
var res = arr.some(function(pre,next,index,array){
    return item == 30 //返回条件 当前数组中是否存在满足条件的元素 如果有存在的元素 res为true 否则false
    // 当碰到满足条件的遍历将不再继续 直接返回
}) 


every // 使用方式和some一样 要求是必须所有都符合条件
var res = arr.every(function(pre,next,index,array){
    return item >5 // 必须要每个元素都大于5才会返回true 否则就false
    // 当碰到不满足条件的元素遍历将不再继续 直接返回
}) 
~~~

* 数组是引用类型 主体注意事项和python列表的差不多 在局部作用域中操作数组,也可能会改变数组原来的值

## 变量 

* 1,声明变量  使用关键字var-通过var向内存申请变量空间.
  * 通过声明和赋值称为初始化
* 2,变量赋值
* 3,同时定义多个变量,变量之间使用逗号隔开
  * var name="xx",age=18,sex="male";
* 查看变量类型, typeof 变量名



### 标识符-用户自己定义的名字就叫做标识符

* 必须由数字,字母,下划线,和$组成
* 不能以数字开头
* 标识符是区分大小写的
* 标识符见名知意

JS是弱类型语言,变量的数据类型重新赋值不同类型会发生改变,这点和python一样.



## 运算符

### 自动类型转换

* 任何类型的数据和字符串做相加操作"+"时,其他数据类型会转换成为String类型,会进行字符串拼接
* 任何数据除了和字符串做相加运算外,与NAN(not a number)做算数运算的结果,始终是NAN
  * NAN和NAN运算也是NAN
  * 如果字符串是纯数字,会将字符串转换成数字,否则结果为NAN
* 任何数据类型除了和字符串做运算外,与数字类型做算数运算时,其他数据类型是纯数字的时候会转换成对应的数字,true->1 false->0 ,null->0,undefined->NAN

### 强制类型转换

* Boolean()   --转换成bool型
  * 0-false
  * 所有非0的数字转换为true
  * 空字符串为0 非空true
  * null-false , undefined-false
* Number() 转换成数字
  * true->1  flase->0
  * 纯数字->对应的数字 ,有非数字的字母->NAN
  * null->0 undefined->NAN
* parseInt()   兼容Number的功能,而且有取整的功能
  * parseInt("20a")->20  将整数部分取出来
  * 3.14 ->3 取整操作
* parseFloat()
  * 可以保存小数 -->类型是Number

### 算数运算符

数值相除,分母为0--结果是Infinity  或者是-Infinity

### 关系运算符

* 如果两次操作数都是数值,数值比较
* 如果都是字符串,则比较对应字符串编码值ASCII
  * 多位字符串逐位进行比较 直到比较出大小
* 如果其中一个是数值,会将另一个转换成数值,遵从转换规律
* 在等于和不等的比较上,如果操作数为非数值:
  * 如果其中一个数位布尔值,将其转换为数值,false->0,true->1,
  * 一个操作数位字符串,则转换成对应数值再比较
  * 一个操作数位NaN,则==返回false ..!=返回true  NAN自己本身是不相等的
  * 全等===只有值和类型都一样才返回true
  * 全不等!== 全都不一样才返回true

### 赋值运算符

=

### 逻辑运算符

* 与(表达式1 && 表达式2)
  * 前后都为真返回真
  * 短路 先碰到false就直接返回 后面也就不执行了
* 或(表达式1 || 表达式2 )
  * 前后都为假才返回假
  * 短路也是一样的 先碰到真 就直接返回true
* 非( !表达式 )--!和NOT一个意思
  * 可以用于任何值 先将表达式转成bool值 在取反
  * 如果操作数是一个空字符串 返回true
  * 如果是非空字符串返回 false
  * 如果是0 返回true
  * 如果是任何非0的数值 包括Infinity 返回false
  * 如果是NaN返回true
  * 如果是undefined 返回true

### 自增自减运算符

* a++: 先操作a或者说先取出a的值,再加1

* ++a:先做加1操作

* a--:先操作a,再减1

* --a:先减1,再做操作.



## 流程控制

### if语句

~~~js
// 判断条件为真才走
if(判断条件)
    执行语句;
// 紧跟着只执行一条语句的话可以不要花括号 建议还是加上花括号不要省略
if(判断条件){
    代码块;
}

// 双分支语句
if (条件1){
    执行语句;
}else{
    执行语句;
}

// 多分支语句 else if  只能进入其中一个语句块
if(条件1){
    代码1;
}else if(条件2){
    代码2;
}else if(条件3){
    代码3;
}
~~~

### 三目运算

~~~js
// 格式 
// 表达式1 ? 表达式2: 表达式3;
// 过程 如果表达式1为真(或者非0)那么执行表达式2,如果表达式1为0(或者为假)
// 则执行表达式3

var num1 = 10;
var num2 = 11;
num1 < num2 ? alert("num1") :alert(num2)
~~~

### switch语句

~~~js
switch(表达式){
    case 常量1:
        语句1;
        break;
    case 常量2:
    	语句2;
    	break;
    default:
        上述都不成立时候执行语句;
        break
}

// 表达式等于哪个常量就执行哪个语句 break是一定不能省略的
// default 一般情况情况下不要省略 预防歧义
~~~

### 循环

#### while

~~~js
// 与java类似 基本一样 
while(表达式){
    语句;
}
~~~

#### do..while

~~~js
// 起码执行一次
do{
    语句;
}while(表达式)
~~~

#### for

~~~js
// 先求解表达式1,
// 再求解表达式2 如果为真(或非0)则去求解表达式3
// 
for(表达式1;表达式2;表达式3){
    语句;
}
// 死循环方式
for(;;){
    
}
~~~

#### break 和continue 和后端一个意思

### 函数

#### 无参函数

~~~js
// 声明 并不执行
function 函数名(){
    代码;
}
// 函数的调用方式
// 函数名()
~~~

#### 有参函数

~~~js
function 函数名(形参,...):{
    函数体;
}
// 调用
// 函数名(实参,...)
    
// 传入参数不确定个数的时候
// 每一个函数内都有一个内置的数组,叫一个arguments的变量,是存储所有变量的,按顺序存储.--python中的args一个意思
~~~

#### 函数的返回值

~~~js
// return 返回值
~~~

#### 函数的作用域

~~~js
// 和python略微有点不同
var a =10;
function num(){
    // 函数内的变量如果没有重新声明 其实还是访问的已经定义了的a
    a=5;
    // 如果重新var声明了a 就是当前num函数的局部变量.并没有修改全局的a.并且在函数外是无法访问的.
    
    var a=6;
}

//全局变量 任何地方可以使用
//局部变量 只有在声明的作用域里可以使用 
~~~

#### 递归

* 后端类似内容 自己加强



## Math对象

 用来执行数学任务

常用函数

~~~js
Math.round() // 四舍五入
random() //0-1 之间的随机数
max() min()// 最大 最小
abs() //绝对值
ceil() //天花板数 向上取整
floor() //地板数 向下取整
pow(x,y) // 幂函数x^y
sqrt() // 开方

// 三角函数大家庭 sin() cos() tab()  ...等等
// 参数都应该是弧度 借用Math.PI=180弧度

~~~

## Object对象

### Date

​	Date 可以获取对应时间那些,百度就好

### 定时器

~~~js
setInterval(函数,毫秒数) 
// 这个函数不是调用 是要传函数名 或者是匿名函数赋值给一个变量,或者直接写匿名函数
// 返回值 当前定时器的一个ID
clearInterval(timer) // 参数就是定时器 如var timer= setInterval(..)
~~~

### 设计一个秒表--未完成

~~~js
//使用定时器
~~~

### innerHTML 

~~~js
// 获取标签内的内容 可以获取包括标签
/*
如 <div id="ddiv"><em>斜体</em></div>
获取ddiv里面的innerHTML可以将<em>斜体</em>都获取出来
*/
~~~

## BOM的概念

~~~js
/*
BOM - Browser Object Model
整个浏览器就是一个BOM

可以通过window对象来操作 是一个全局对象 --表示当前浏览器上打开的一个窗口
*/
~~~

### windows对象的属性及方法

~~~js
// 浏览器可以通过调用系统对话框,向用户显示信息,
// 系统提供了三个函数,可以完成系统对话的操作
alert();// 弹出警告框 window下的函数 可以省略window直接调用

var res = confirm(); // 弹出警告框带有确定和取消的按钮 有返回值,确定为true,取消为false

var res = prompt();// 弹出一个带有输入的提示框,
// 参数1:要在提示框显示的内容,参数2:输入框内的默认值 返回值是輸入的内容
~~~

* 方法open

* ~~~js
  open()
  /*
  参数
  1,要加载的url
  2,窗口的名称或者窗口的目标
  3,一串有特殊意义的字符串
  */
  window.onload = function(){
      var oBtn = document.getElementById("btn");
      oBtn.onclick = function(){
          // 只有一个参数,调用会加载新窗口,打开url
          open("http://www.baidu.com")
          
          // 加入参数2 给打开的窗口起名 以后再通过这个入口加载就不会打开新的了
          open("http://www.baidu.com","baidu")
          
          // 加入参数3 子窗口的一些属性
          open("http://www.baidu.com","baidu","width=xxx,"")
      }
  }
  
  // 使用open打开之后 子窗口有会有一个opener对象,获取到的是父窗口的window对象.注意IE不支持该对象
  ~~~

### location对象

~~~js
// 可以看做是浏览器上地址栏的输入框
/*
属性
url 统一资源定位符 例如快递地址
*/
location.hash // 锚点 #后的部分--主要实现页内跳转 可以直接进行设置
location.hostname // 主机名 
location.href //整个url 
location.pathName // 存放数据的路径 
location.pathName //端口号
location.protocal // 协议
location.search // 查询字符串 ?后面的东西

// 方法
location.assign() // 跳转到指定的URL 有退后按钮
location.reload() // 重载当前的URL 如果传参为true 强制加载无-无缓存加载
location.replace() // 用新的url替换当前的页面 是没有退后按钮的
~~~

### history对象

~~~js
/*
history 是window对象的属性 保存用户上网的记录 在浏览器上就是后退前进那里
*/
// 属性
history.length  // 返回当前history对象条数,

// 方法
.back(); //上一条
.forword(); // 下一条
.go() ; // 参数 0 重新加载当前页面 参数为正数n 前进n条记录 为负数n 后退n条
~~~

## DOM对象

document object model 文档对象类型

dom是打通html,css和js的一个工具

~~~js
// 节点种类有三种
/*
<div title="属性节点">测试Div</div>
元素节点:div
属性节点 title
文本节点 测试Div
*/

var Div = document.getElementById(id)
Div.tagName // 获取元素节点的标签名
Div.innerHTML // 获取元素节点标签间的内容
// 还包括HTML属性
// id  className title style 访问方式元素节点.属性名 或元素节点[属性名]

// 访问'-'链接的样式 如background-color 访问方式
// 元素节点.style.(backgroundColor)

var Div = document.getElementsByTagName('标签name')
// 返回符合条件的一个数组  类型objetc.HTML.collection

// 支持从某个节点去查
var ul1 = document.getElementById('ul1')
ul1.getElementsByTagName("li")

// byName 可以获取name属性相同的节点. 不支持从某个节点去查
var Div = document.getElementsByTagName('标签中的name的值')

// byClassName 通过class的name获取节点对象 支持从节点查询 在低版本的浏览器不支持的.
var Div = document.getElementsByClassName('className')

// 获取当前CSS有效样式 因为css有优先级
// 使用style.的方式只能找到行内样式
// 解决方法 使用getComputedStyle(元素节点)[获取的样式类型]
// 不支持IE
var Div = document.getElementsByClassName('className')
getComputedStyle(Div)["width"]
// 兼容操作 采用三目运算的方式
function (elem,attr){
    return elem.currStyle ? elem.currStyle[attr]:
    getComputedStyle(elem)[attr]
}
~~~

### Attribute系列方法

~~~js
// set/getAttribute()
// removeAttribute()
var oDiv = document.getElementsById("id")
// 获取
oDiv.title
oDiv.getAttribute('title')
// 设置
oDiv.title = 'xxx'
oDiv.setAttribute('title','xxx')

// 区别
oDiv.getAttribute('class') //直接通过class获取,set也一样
// . 的方式是采用className

// set/getAttribute() 可以设置和获取用户自定义属性 如果xxx,yyy等的非默认属性

// .是不能删除属性的 而remove是可以直接删除掉属性的.
~~~

### DOM节点属性

~~~
节点可以分为元素节点,属性节点和文本节点,而这些节点又有三个非常有用的属性,分别为:nodeName,nodelType和nodeValue

document.getElementsById('id').nodeType

节点类型  nodeName  nodeType  nodeValue
元素      元素名称     1        null
属性		属性名称	 2		  属性值
文本		#text	    3		文本内容(不含HTML)
~~~



### 元素节点属性

~~~js
// .childNodes获取当前元素节点的所有子节点.算上了缩进???
// 获取到的结果包括文本节点和属性节点

// firstChild 子节点首个 lastChild 子节点的末位

// 有层级结构的 怎么去除空白节点?
// 正则 /^\s+$/.test() 如果是空白节点返回true,否则false

// 删除空白节点
function removeSpaceNode(nodes){
    var result = [];
    for(var i = 0;i<nodes.length;i++){
    	if (nodes[i].nodeTypes
        == 3 && /^\s+$/.test(nodes[i].nodeValue)){
            continue;
        }
        result.push()
    }
    return result
}
~~~

ownerDocument  返回当前文档的document对象 基本不用

~~~js
parentNode //当前节点的父节点
previouSibling // 当前节点的同一级节点
nextSibling // 当前节点的后一个同级节点

attributes // 返回属性节点的属性集合-不重复,无序的
/* 访问其中一个?
attributes.getNameItem("属性")
或者[]的方式

取到属性节点对象后可以采用nodeName,nodeValue,nodeType访问内容
*/
~~~

### 节点操作

~~~js
// 创建元素节点 createElement
var node = document.createElement('span') //创建节点
var oText = document.createText('内容') //创建文本
node.appendChild(oText) // 给节点插入内容
oDiv.appendChild(node) // 将节点插入到节点树中

父节点.insertBefore(插入的节点,旧节点) // 将节点插入到旧节点之前
// 并没有提供插入到某个节点之后的方法,可以自己封装

/*
步骤:
	1,创建节点 node
	2,找到当前节点 oSpan
	3,使用当前节点的父节点.insertBefore(node,oSpan)
*/


父节点.replaceChild(newNode,oldNode) //将oldNode替换成newNode

节点.cloneNode(true or false) // 返回新的克隆出来的节点
// true复制元素节点中的文本内容,false反之,默认false

父节点.removeChild(node) // 删除当前节点node
~~~

## 事件Event

### 事件方法

~~~js
/*
	写法:
		var node = getElementByxx('xx')
		node.事件方法 = function(){
			需要执行的逻辑
		}
*/

// 单击事件 onclick 和mousedown的区别,后者只是按下去,前者包括鼠标抬起.click会在mousedown和mouseup执行完之后执行

// 鼠标 onmouseover划入 xxout 划出 
// onsubmit 是给整个form表单添加事件 return false 是阻止默认行为

// onfocus 和onblur
// oninput 在输入的时候

// onkeypress  按下字符键时触发
// onkeydown   按下任意键时触发

~~~

### 事件对象

~~~js
/*
	当触发某个事件的时候,会自动产生一个事件对象--event对象
*/
// e就是事件对象 e是形参
oDiv.onclick = function(e){
    console.log(e);
    // 低版本IE采用window.event()获取 window可以省略
}
// e.clientX e.clientY --与可视区域的间距X,Y
// e.pageX pageY --与整个页面大小的间距X,Y
// offsetX,offsetY --相对事件源的间距X,Y

// e.altKey ctrlKey shiftKey 获取到的是一个bool值

//判断是否按下某个键 可以采用e.keyCode
~~~

### 事件流

~~~js
// 三个阶段 捕获,目标,冒泡
// 例子 outer div 包裹内inner div 点击inner 同时父元素也是有事件执行的
// 阻止冒泡的方式,event.cancelBubble=true;或 event.stopPropagation();
~~~

### 事件委托

~~~js
//利用事件冒泡的原理,将子节点的动作委托给父级(外层)

// js 部分代码 场景是给列表追加新元素li 让新的元素也具备点击事件
// 将本该添加在li上的事件函数 添加到父级 UL上
oUl.onlcik = function(e){
    var evt = e || event;
    var _target = evt.target || evt.srcElement;
    
    if (_target.nodeName.toUpperCase()=="LI"){
        console.log(this.innerHTML)
    }
}
~~~

### 事件默认行为

~~~js
// 比如说a标签跳转,submit的提交等
// 有的时候需要阻止默认行为.采用的方式如下三种方式都可以.
event.preverntDefault(); event.returnValue=false; return false
~~~

### DOM2级事件

~~~js
// 添加事件监听器 addEventListener(事件名,处理函数,布尔值--代表是冒泡还是捕获)
// 移除事件监听器 removeEventListener(事件名,处理函数)
// outer 是外层div inner 是内层DIV
/*
	和普通outer.onclik事件区别:
	1,普通方式对同一个节点添加同一个点击事件,后面的会覆盖前面的,DOM2级事件会同时触发
	2,移除方式不一样 普通方式只要赋值为null 而DOM2级需要使用remove的方式.而且需要将当前节点添加的所有时间同时删除.否则会报错.
*/
outer.addEventListener("click",bar =function(){},false)
outer.addEventListener("click",foo = function(){},false)
outer.removeEventListener('click',bar)
outer.removeEventListener('click',foo)

// IE下的事件监听器 注意的是事件名需要加 ON
attachEvet(事件名,处理函数) // 注意这里IE默认只支持冒泡的方式
detachEvent(事件名,处理函数)

// 可以写一个兼容的函数
~~~

## Cookie

HTTP协议 超文本传输协议,运行在应用层,无状态协议.

~~~js
// 同名cookie会覆盖
// 获取
document.cookie // 可以获取到cookie
// 设置 默认是关闭浏览器就自动消失
document.cookie = "username=honey"; // 设置cookie 格式:name=value
// 设置有效期 三天后过期
var oDate = new Date();
oDate.setDate(oData.getDate()+3)
document.cookie = "username=honey;expires="+oDate;
// 删除 将expires的值设置为当前值之前.

// 可以将方法设置为公共方法
~~~

## 正则表达式

~~~js
// 定义方式
var reg = /规则/;
var reg = new RegExp("规则");

var str = "abcdefg"
// 正则方法test 符合规则为true 否则为false
reg.test(str)
// exec方法 将匹配成功的放入数组,否则为null
// 需要再次往后匹配的话要重新调用
reg.exec(str)
reg.exec(str)

// 修饰符 g i 
// g 全局匹配 如 /abc/g 
// i 忽略大小写

// 查看字符串中有多少个符合匹配规则 使用字符串方法match
str.match(reg)
// search 查找符合规则子串的位置,只返回第一个位置.
str.search(reg)
// split 按照某种规则分割
str.split(reg)
// replace 替换
str.replace(reg,newStr)


// 正则的规则 都差不多 就不记录了吧.
// 记录一下分组操作 使用$+位置获取参数 下面是一个交换的操作
var reg = /(.*)\s(.*)/
var str = "taobao baidu"
str.replace(req,"$2 $1")

~~~

## ES6

### let的使用

~~~js
// 类似于var 但是声明的变量只能在当前代码块可以使用 和局部变量有点差别 是通过块来区别
if(xxx){
	let b
}
console.log(b) // 无法输出 未定义

// 不存在声明提升
// 不能重复定义同名变量
// const的使用 是用来声明常量 注意这个声明的值就不允许修改了

~~~

### 解构赋值

~~~js
// 类似于python的元组解包
let [a,b,c] = [1,2,3]

// 输出 a=2 b=undefined
let [a=3,b] = [2]

// 如果赋值一个undefined的 会使用默认值
let c;
let [a=3] = [c]

let {a,b} = {a:111,b:222} //a=111,b=222
let {a:b} = {a:111} // b =111

let {a,b=4} = {a:1} // 输出a=1,b=4
~~~

### 模板字符串

~~~js
let obj = {"name":"john","age":20}
let {name,age} = obj;
console.log(`${name}的年龄是${age}`) // 就是字符串的格式化
~~~

### 箭头函数

~~~js
// 1,只含有一个表达式
// ES5写法

var foo = function(){
    return 1;
}

// ES6写法
let foo = (a) => a;

// 2,多个表达式
let foo = (a) =>{
    let b = 10;
    return a+b;
}

// 3,this指向问题
// 指向定义时候所在的作用域,不是执行时的作用域
~~~

### set结构

~~~js
// 集合 
var s = new Set([1,2,2,3,4,5]) // {1,2,3,4,5}
var arr = [...s] // [1,2,3,4,5]
// for of 遍历
for (let i of s){ 
    i// 是其中的元素
}

// 方法
set.size //长度
.add()
.delete()
.has()
.clear()

.keys() // 键
.values()// 值
.entries()// 键值对
.forEach()// 使用回调函数遍历每个成员
set.forEach((items,key)==>console.log(key*2))
~~~

### map结构

~~~js
let map = new Map(["name","john"],["age",20])
// 设置
map.set(key,value)
.get
.has
.clear

.keys() // 键
.values()// 值
.entries()// 键值对
.forEach()// 使用回调函数遍历每个成员
set.forEach((items,key)==>console.log(key*2))
~~~

### 生成器函数(gennerator)

~~~js
// 定义方式 function* 函数名 和python的yield差不多的样子.
function* foo(x){
	yield x+1
    yield x+2
    return x+3
}
var f =foo(1)
// 调用
f.next()
// next(参数) 参数表示上一次函数的返回值

// fib 前N项

function* fib(n){
    let a = 0;
    let b = 1;
    for (let i=0;i<n;i++){
        yield a;
        let temp = a + b;
        a = b;
        b = temp
    }
}

var f = fib(5);

for (let i of f){
    console.log(i)
}

~~~

### Class--了解

~~~js
// 结构
Class Person{
    // 构造器
    constructor(name){
        this.name = name;
    }
    // 方法
    sayHello(){
        console.log(this.name);
    }
}

var person = new Person("john");
person.sayHello()
~~~

## JS_animation-原生动画

~~~js
// 主要原理就是修改当前元素标签的边距那些,需要注意的是当前标签的CSS中的position的设置

// 碰撞检测  左边left <0 右边 left > 页面宽度-标签宽度 垂直方向同理


// 块和块之间相撞的检测 当两个块中心店在水平和垂直方向上的距离 同时小于两个块的高度和的一半和宽度和的一半
~~~











