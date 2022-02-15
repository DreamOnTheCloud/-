//字符串拼接
var str = ''
for (let i = 1; i <= 5; i++) {
    str += '⭐'
}
console.log(str)
/**核心思路
 * 定义空变量sum存每次学生的成绩总和，num问有多少学生让用户输入并存入num
 * 循环输入每个学生的成绩，多少学生的值是围绕着num的值来的
 * @returns 
 * 学生的平均分
 * sum / num
 */
function sc() {
    var sum = 0
    var num = parseInt(prompt('请输入学生人数:'))
    for (let i = 1; i <= num; i++) {
        var score = parseInt(prompt('请输入第' + i + '个学生成绩:'))
        sum += score
    }
    return sum / num
}
console.log(sc())
/**
 * 倒着的星星思路为外层循环定义的是有几行星星
 * 内层循环定义的是实现方式（倒着的）我们知道i的值一定是递增或或者递减的 让j围绕着i来定义或设置条件
 */
var str = ''
for (i = 10; i > 0; i--) {
    for (j = i; j > 0; j--) {
        str += "⭐"
    }
    str += '\n'
}
console.log(str)
//99乘法表
var b = ''
for (i = 1; i < 10; i++) {
    for (j = 1; j <= i; j++) {
        b += j + '*' + i + '=' + i * j + '\t'
    }
    b += '\n'
}
console.log(b)
//倒着的星星
var str = ''
for(let i = 10 ; i > 0 ; i--){  //i等于10 让i递减 i-- ，直到小于零不成立为止
    for(let j = 10 ; j >= i; j--){
        str += '⭐'
    }
    str += '\n'
}
console.log(str)