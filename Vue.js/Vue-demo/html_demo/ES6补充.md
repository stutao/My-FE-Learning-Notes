## let/var
- 最主要的区别是 var 没有if,for的块级作用域,相对来讲有很多的缺陷
需要借助于function来完成需求.
- 而 let 属于升级 var,解决了 var 的很多问题.是有if for的块级作用域

```js
// 没有块级作用域引起的问题,for
// 如下代码会一直打印最后一个按钮的下标i.这个var被覆盖了.
// 使用闭包可以解决,因为函数是一个作用域.但是代码很繁琐.
var btns = doucument.getElentsByTagName('button');
for (var i=0;i<btns.length,i++){
    btns[i].addEventListener('click',function(){
        console.log('第' + i + '个按钮被点击')
    })
}

```
## const 定义常量 
- 不可以再次赋值,也就是变量的指向,但是可以修改变量内部的属性.
- 修饰的标识符必须赋值

## 对象字面量的增强写法
- 对象的字面量 如 const oj = {} 这个括号就是字面量
### 属性的增强写法
~~~js
const name = 'tom';
const age= 18;
const height = 1.80;
const obj = {name,age,height}
/*
    会将变量名作为key,变量值作为value保存到object中

    结果object{
        name:'tom',
        age:18,
        height:1.80
    }
*/ 
~~~
### 函数的增强写法
~~~js
const obj = {
    run(){
        console.log('es6的写法函数增强写法')
    }
}
~~~