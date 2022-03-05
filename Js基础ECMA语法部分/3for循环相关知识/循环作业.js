//1 - 100 和
var a = 0
for (let i = 1; i <= 100; i++) {
    a += i
}
console.log(a)

//7的倍数的和
var a = 0
for (let i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        a += i
    }
}
console.log(a)

//四行四列的矩形断点调试
var str = ''
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        str += '⭐'
    }
    str += '\n'
}
console.log(str)

//双层循环-正三角形
var justTriangle = function(num) {
    var str = ''
        //外层决定星星的总行数
    for (let i = 0; i < num; i++) {
        //内层决定每行多少个星星
        for (let j = 0; j <= i; j++) {
            str += '⭐'
        }
        str += '\n'
    }
    return str
}
console.log(justTriangle(7));

//双层循环-反三角形
var oppositeTriangle = function(num) {
    var str = ''
    for (let i = 0; i < num; i++) {
        for (let j = i; j < num; j++) {
            str += '⭐'
        }
        str += '\n'
    }
    return str
}
console.log(oppositeTriangle(7));

//9 x 9乘法表 外层变1 2 3 4 5 6 7 8 9(内层 = 1 <= 外层)  123.. 123... 123...
var str = ''
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        str += j + 'x' + i + '=' + i * j + '\t'
    }
    str += '\n'
}
console.log(str)

//过三作业
var sum = 0
for (let i = 1; i <= 100; i++) {
    if (i % 10 == 3) {
        continue;
    } else {
        sum += i
    }
}
console.log(sum)

//死循环
for (;;) {
    var admin = prompt("请输入用户名:")
    var password = prompt("请输入密码:")
    if (admin == admin && password == 123) {
        break;
    }
}

//ATM机
function getATM() {
    var money = 50
    for (let i = 1; i != 4;) {
        var React = prompt('请输入您的操作:\n1.存钱\n2.取钱\n3.查看余额\n4.退出')
        switch (React) {
            case '1':
                var exist = prompt("请输入您要存取的余额:")
                money += parseFloat(exist)
                alert('存取成功\n您当前余额为:' + money)
                break;
            case '2':
                var take = prompt('请输入您要取的面额:')
                money -= parseFloat(take)
                alert("取钱成功\n您账户当前余额为" + money)
            case '3':
                alert('您账户当前余额为' + money)
                break;
            case '4':
                alert("退出成功")
                return;
            default:
                alert('输入有误')
                break;
        }
    }
}
getATM()