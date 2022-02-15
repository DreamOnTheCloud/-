/**
 * 核心思想：每个函数都是一个独立的代码块(用于完成特定的功能)
 * 因此会用到函数相互调用的情况
 * 例如一台汽车
 * 车是一个函数   发动机是一个函数   轮胎又是一个函数
 * 三个函数相互调用汽车才能跑起来缺一不可
 */

/**
 * 回调流程为:先执行fn1里的函数体fn2() 然后看到引用了fn2函数
 * 再去找fn2找到执行fn2 发现fn2又引用了fn3() 再去找到fn3()函数体执行输出"我是三" 在依次向下执行 --最后结束
 */
function fn2(){
    fn3()
    console.log(22)
}
fn1()

function fn1(){
    fn2()
    console.log('先调用的2')
}

function fn3(){
    console.log('我是3')

}

//自己写函数自己调用自己写的函数是一件非常开心的事情难道不是吗
//定义一个函数为判断闰年的函数(专门判断是否为闰年用的)
//你只需要定义什么条件下为true即可
//调用的时候传值进去判断输入进去的值是false还是true最后根据结果做出相应的改变
function isLeapYear(year) {  //一个参数year用来当作判断条件
    var flag = false
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        flag = true
    }
    return flag
}

function getTwoMonthDay() {
    var newyear = prompt("输入要看判断的年份")
    if(isLeapYear(newyear)){
        alert(newyear + "年为闰年2月份有29天")
    }else{
        alert(newyear + "年为平年2月份有28天")
    }
}
getTwoMonthDay()


//定义一个函数用来判断驾照是否能考  函数条用上面的函数这就叫做封装
function judgementAge(age) {
    var flag = false
    if (age > 18) {
        flag = true
    }
    return flag  //别他妈忘了返回值好吗宝贝
}

function getDrivingLicense() {
    var age = prompt("请输入您的年龄:")
    if(judgementAge(age)){
        alert("恭喜你,去考驾照吧祝你通过!")
    }else{
        alert("抱歉！您不够法定年龄")
    }
}
getDrivingLicense()  //记得调用啊孩子写了大半天了都


/*
----------------------------------------------------------------------------------------------------------------
下面是函数表达式(匿名函数)
有人说fun不是它的名字吗？当然不是了fun只是一个变量
将函数赋值给了fun这个变量而已
匿名函数可以传递参数的
*/
var fun = (num)=>{
    num = num > 0 ? num : -num //求绝对值的匿名函数
    return num
}
alert(fun(-5))  //匿名函数的调用方法为变量名 + (参数)参数用来判断条件


/*--------------------------------------------------------------------------------------------------*/
//作用域链:内部函数访问外部函数的机制称为作用域链 (逐步往上级查找)
var num = 20  
function fu() {  //外部函数fu
    var num = 10
     function fun() { //内部函数fun
        //猜测一下内部函数访问到的是哪个匿名函数呢?
        console.log(num)
    }
    fun()
}
fu() //先调用fu()函数，fu()函数体内发现还有一个函数fun ; 在调用fun函数输出num的最后结果 10

/*
根据函数作用域链的就近法则 我们最终输出的 a = 0 , b = 777,找不到的话报错
 函数上下级调用:在自己的同级下调用自己
*/
var a = 8 //零级链包含 a = 8 , 函数fn1
function one() {  //一级链包含  a = 7 , b = 8 , 函数two
    var a = 7
    var b = 8
    function two() { //二级连包含 a = 666 , b = 777 , 函数three
        var a = 666
        var b = 777
        function three() { //三级链包含 a = 0
            var a = 0
            console.log(a)
            console.log(b)
        }
        three()
    }
    two()
}
one()


/*
---------------------------------------------------------------------------------------------------------
预解析概念:---js引擎会将所有(var定义的变量) 和 (function函数)
提升到当前作用域的最前面再去执行(只提升声明不提供赋值)
步骤:先预解析再执行按照先后顺序从上往下依次执行
*/
 
/*
运行步骤为:
1,提升零级链下的(var num)和(function fn)
2,提升一级作用域下的(var num) 不提供赋值操作只是提升var 所有var的值为undefinde
*/
var num = 10
fn()
function fn() {
    console.log(num)   
    var num = 20     
}


/*
运行步骤为:
1，调用yjx函数输出 9 9 9 没问题
2，打印b和c 9 9 因为是全局变量所以没问题 而最后一个a报错因为外部无法访问内部的var变量
*/
yjx() //调用函数没问题函数预解析提升性质可以访问到的
console.log(b)  //b和c是可以访问到的因为在函数内部没有使用var定义的默认为全局变量
console.log(c)

console.log(a)  //a是访问不到的因为机制是外层不能访问到内层函数
function yjx(params) {
    var a = b = c = 9      //这句话只有变量a用到了var可提升 b和c都是全局变量没有var的
    console.log(a)
    console.log(b)
    console.log(c)
}
