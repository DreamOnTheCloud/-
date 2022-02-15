
//创建一个类名为Person
class Person {
    constructor(name) {    //参数
        this.name = name  //属性 = 参数名(参数在实例化时传进去)
    }
}

//创建一个名为f1的函数有一个参数x
function f1(x) {          //调用时将p对象作为参数传递进去 此时 x = p 也是一个对象拥有p对象的一切属性和值
    console.log(x.name)  //【2】 x对象.属性名  输出刘德华
    x.name = '张学友'
    console.log(x.name)  //【3】 x对象.属性名  输出张学友
}
//实例化Person并初始化值为刘德华
/*
1，此时对象p在栈内存开辟了一点空间存一个16位的地址，然而刘德华的值存在那个地址指向的堆内存里面
此时指针指向p --> 栈内存生成的16位地址  -->  堆内存的数据刘德华  
2，调用f1时将p对象作为参数传递进去 此时 x = p 也是一个对象拥有p对象的一切属性和值
以上步骤相当于又在栈内存里生成了一个和p一模一样的16位地址指向的毋庸置疑也是刘德华
此时指针指向 x & p --> 栈内存生成的16位地址  -->  堆内存的数据刘德华 地址一样数据一样
3 x.name = '张学友'直接将地址指向的刘德华变成了张学友那么p对象的指向也会随着x的改变而改变
此时指针指向 x & p -->  栈内存里的16位地址 -->  张学友
*/
var p = new Person('刘德华')  //this指向p对象 将为p创建name属性赋值刘德华
console.log(p.name)       //【1】 p对象.属性名  输出刘德华
f1(p)  //调用f1函数传递参数为 p 对象
console.log(p.name);      //【4】 p对象.属性名  输出张学友


class Person2{
    constructor(uname , age , type){
        this.name = uname
        this.age = age
        this.type = type
    }
}
function zjs(x){
    console.log(x.name);  
    x.name = '张建帅'   //改变对象x的值对象 zy 的值也会改变因为指向的是同一地址
}
var zy = new Person2('张宇', 21, '阳光大男孩')
zjs(zy)//将zy对象当作参数
console.log(zy.name)
//此时  对象zy  和  对象x 都在栈内存开辟了一个空间存一样的地址具体值也是一样的


