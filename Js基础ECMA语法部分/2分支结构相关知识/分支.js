/**
 * switch(快直接跳到匹配值)用于确定值得情况下
 * if else 用于范围的判断
 * 穿透性
 * 汽车4s点选车
 * switch(里面的值与case对应的值为) ===全等的
 */
 function Car(){
    alert('欢迎宇哥奥迪4s店')
    var shape = prompt('输入型号:')
    switch (shape) {
        case 'a1':
            alert('a1八万元')
            break;
        case 'a2':
            alert('a2')
            break;
        case 'a6':
            alert('a6四十万')
            break;
        default:
            alert('无此车型')
            break;
    }
}
Car()

/**
 * 去网吧案例
 */
function gowb() {
    var age = prompt('输入你的年龄:')
    if (age >= 18) {
        alert('走！去大司马网吧偷烟灰缸')
    } else {
        alert('滚去写作业!')
    }
}
gowb()

//三元运算符判断等级
function classification() {
    var score = prompt('成绩是')
    score >= 90 ? alert('A') : (score > 80) ? alert('B') : (score > 70) ? alert('C') : alert('D')
}
classification()

//补零
function addZero() {
 for (i = 0; i < 5; i++) {
        var num = prompt('输入0 - 50')
        var result = num < 10 ? '0' + num : num
        alert(result)
    }
}
addZero()

