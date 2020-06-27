# jQuery

## 是什么?

~~~js
// $ === jQuery
// 通过$选取出来的对象如$('body') 是jQuery的一个实例
~~~

## 元素选取

~~~js
$("可以是任何的选择器")
// 属性 与原生的对应
/*
	html--innerHtml
	val ---value(input?)
	attr -- attribute
	prop -- property
	...
	
	attr和prop基本相同 
	不同的有一个 checked属性 在变动的时候使用attr和prop取出的不一样
	addClass/removeClass/toggleClass(有就移除,没有就添加)
*/

~~~

## jQuery动画

~~~js
$("选择器").方法
// show/hide  --宽高透明度一起改变 fadeIn/fadeOut 只改变透明度
// slideUp 滑动

// animate({属性:值},时间).animate() 可以链式调用

// stop(true) 不传参数默认停止动画队列中的当前执行动画,true停止所有动画

~~~

## 节点遍历

~~~js
children() // 子节点
parent() // 节点的直接父元素
parents("选择器") // 包含了节点的所有祖宗元素 加入选择器可以定向选取某个位置

find("选择器") // 在当前节点下寻找对应标签

prev // 前一个同级元素
next // 后一个同级元素
siblings // 获取当前节点的所有同级节点
~~~

## jQuery中发送Ajax

~~~js
// 传入data会通过对应的方法进行拼装
$.get({
    type:'get', // 如果发送的get type可以省略
    url:'xxx/xxx/',
    dataType:"jsonp", // 指定格式 当前是使用了jsonp,
    data:{
        "name":"123"
    },
    success:function(){
    	
	},
    error:function(){
        
    }
})

// jQuery解决回调地狱
$.get({
    type:'get',
    url:'xxx/xxx/',
}).done(function(){
    return $.ajax({url:"xx2"})
}).done(funtion(){
   return $.ajax({url:"xx3"})   
}).done(funtion(){
   consloe.log("done")
})
~~~

## 事件处理

~~~js
// 事件绑定 on 方法
$("li").on("mouseover",funtion(){
           
}).on(xxx)

// 事件解绑 off(event,callbackfunc name)
$("li").off()

// 新增元素没有事件  使用事件代理方式 委托给父元素 支持链式调用
$("ul").on("mouseover","选择器如li",callback function) 
~~~

## 节点操作

~~~js
// create
var $el = $("<div>new</div>")
// append,prepend 是一样的操作
$("body").append($el)
$el.appendTo("body")

// 插入到某个节点后面
$("li:eq(4)").after("<li>new li</li>")
$("<li>new li</li>").insertAfter($("li:eq(4)"))

// 删除节点
$("li:last").remove()
// 只删除内容不删除节点
$("li:last").empty()
~~~

## 插件plugin

~~~js
// 1,jQuery的插件,定义在jQuery.fn的基础上的
// 2,命名冲突的解决
// 3,循环jQuery对象中的每个元素
// 4,在函数中将jQuery返回(this)

/*
	解决命名冲突的方式 使用立即执行函数 (function ($){}(jQuery)) 这样即	使$被占用,当前函数中的$还是只想jQuery的 后面的jQuery是实参,前面的$是形参
*/
// 给div背景为随机颜色
(function ($){
    $.fn.extend({
        randomColor:function(){
            function random(){
            var r = Math.floor(Math.random()*256)
            var g = Math.floor(Math.random()*256)
            var b = Math.floor(Math.random()*256)
            return 'rgb('+r+','+g+','+b+')'
    	}
    // 这里的this指向的是当前$选中的元素的伪数组
        this.each(function (index){
            // 这里的指向的是遍历出的那个元素节点对象
            $(this).css({
                backgroundcolor:random()
            })
            return this
        })
        }
    })
}(jQuery));

$("div").randomColor()
~~~

## 放大镜

~~~js
// 后面自己实现一下试试?
~~~

