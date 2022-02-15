/**
 * 利用字面量创建对象 里面的属性和方法我们采取键值对的方式来写Key: value
 * 之间用逗号隔开，最后一个不用写逗号
 * 方法后面跟的是匿名函数
 */
var zhangyu = {
    //对象的属性
    uname: '张宇',
    age: 21,
    sex: '男',

    //对象的方法
    sayHellow: () => {
        console.log('Hello warld')
    }
}
//调用属性的两种方法
console.log(zhangyu.uname)
console.log(zhangyu['age']);
//调用方法的方法 
console.log(zhangyu.sayHellow());

/*--------------------------------------------------------------------------------------------------*/
//下面是字面量的方式
var dog = {
    //属性
    uname: 'keke',
    type: '阿拉斯加犬',
    age: 5,
    coloe: 'red',
    //方法
    ActingInMovies: () => {
        console.log('我会演电影');
    },

    dogCall: () => {
        console.log('我会狗叫');
    }
}
console.log(dog.type);
dog.ActingInMovies()
/*--------------------------------------------------------------------------------------------------*/
/*
【构造函数】 
调用 new 构造函数名()
this指向问题原始指向的是Star类 后期new的哪个具体对象就是指向的哪个
var 刘德华 = new Star(); 这里我们new了一个刘德华this指向的具体对象就是刘德华 
上面的操作只是让刘德华这个对象有了name age sex这三个属性还没有具体的值
值从哪里来？？ 属性值就是初始化的时候直接按照顺序传进去的(实参)传给(形参)
*/

class Star {
    constructor(uname, age, sex) {  //三个形参还没有值
        this.name = uname;
        this.age = age;
        this.sex = sex;
        this.sing = (whatSing) => {
            console.log(whatSing)
        }
    }
}
//利用我们上面的构造函数创建一个对象
var 刘德华 = new Star('刘德华', 18, '男'); //实参传进去了上面的形参有了值
for (k in 刘德华) {
    console.log(k)  //属性名
    console.log(刘德华[k])  //属性值
}

var zxy = new Star('张学友', '20', '男')
console.log(zxy['name']);
console.log(zxy['sex']);
console.log(zxy.age);


/*--------------------------------------------------------------------------------------------------*/
//创建王者荣耀英雄构造函数
class Hero {
    constructor(name, blood, type, color, sex, height, age) {
        this.name = name
        this.blood = blood
        this.type = type
        this.coloe = color
        this.sex = sex
        this.height = height
        this.age = age
        this.attack = (a) => {
            if (a > 10) {
                console.log('他是近战战士')
            } else {
                console.log('他是远程射手');
            }
        }
    }
}
var 后裔 = new Hero('后裔', '3000血量', '射手', '黄色', '男', '178cm', 20);
console.log('姓名:' + 后裔['name'] + '\n颜色:' + 后裔.coloe + '\n血量:' + 后裔.blood + '\n类型:' +
    后裔.type + '\n性别:' + 后裔.sex + '\n年龄:' + 后裔.age + '\n身高:' + 后裔.height)
后裔.attack(1)
console.log(后裔)


//循环遍历对象 ATM
class ATM {//创建类ATM类用于快速实例化ATM对象
    constructor(name, Address, date, IDcard) {  //ATM属性
        this.name = name
        this.Address = Address
        this.date = date
        this.IDcard = IDcard
        this.intrudaction = () => {
            console.log('姓名:' + this.namm + '\n产地' + this.Address + '\n生产日期' + this.date + '\n编号' + this.IDcard)
        }
    }
}
var ZYATM = new ATM('华阳ATM', '荷兰', '2005-9-15', '00371522')
//k变量遍历的是属性名
for (k in ZYATM) {
    console.log(k)          //直接打印 k 是对象的属性名
    console.log(ZYATM[k])    //对象名[k] (必须是这种格式的类型) 打印出的是每个值
}
//计算机类
class Computer {
    constructor(color, weight, brand, model,) { //创建一个电脑Computer类
        //包含属性有color颜色，weight重量，brand品牌，model型号
        this.color = color
        this.weight = weight
        this.brand = brand
        this.model = model  //this指针 new新对象是this指针全部指向创建出的对象
        //下面定义方法
        this.watchMovies = () => {
            console.log('看电影')
        }
        this.listenToMusic = () => {
            console.log('听歌');
        }
        this.playGames = () => {
            console.log('打游戏');
        }
        this.knockOnTheCode = () => {
            console.log('敲代码')
        }
    }
}
var Asus = new Computer('雅黑', '2kg', '华硕天选-Wps7500', '8hCPU 4800HZ')
for(k in Asus){
    console.log(k)        //k遍历每个属性名
    console.log(Asus[k])  //对象名[k] 调用对象里面的每个属性值
}


//案例
var srt = 'aaaccdsfsdfjsaashdahuhasfhahfuysdufbfauyfgydvgokfktoiyuasgdgyasgyf'
var obj = []