//用来存放一组数据声明方法
var arr = new Array(); //创建数组的第一种方式

//用第二种方式声明字面量声明方式逗号分隔
var arr = ['张宇', '马雨涵', 88, true, '佩奇'] //字面量的方式定义新数组arr实际工作中用的最多
var day = ['周一', '周二', '周三', '周四', '周五', '周六', '礼拜日']

//数组遍历(将数组中的所有值全部打印出来) 利用for循环中的i从零递增关系按个打印下标 
for (let i = 0; i < day.length; i++) {
    console.log(day[i])
}

//总分平均分
function score(arr) {
    var sum = 0
    var average = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    average = (sum / arr.length)
    return '平均分为:' + average + '总分为:' + sum
}
console.log(score([78, 78, 78, 78]))

//最大值打擂台方法
var Max = function(arr) {
    var max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        max = max > arr[i] ? max : arr[i]
    }
    return max
}
console.log(Max([9, 8, 7, 6, 5, 4, 100]))


//求最小值
var Min = function(arr) {
    var min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        min = min < arr[i] ? min : arr[i]
    }
    return min
}
console.log(Min([9, 8, 7, 6, 5, 4, 100]))

//数组转换为字符串  //思路为定义一个空字符串str 每循环一次取出一个值赋值给str再加上连接符
var arrToString = function(arr) {
    var str = ''
    lj = prompt('输入您想要的连接符:')
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + lj
    }
    return str
}
console.log(arrToString(['张宇', '马雨涵', '桃子姐姐']));


//循环追加数组 核心思路为循环几次追加几个
var arr = []
for (let i = 0; i < 10; i++) {
    arr[i] = i + 1
}
console.log(arr)


//筛选数组放到新数组里
var shaiXuan = function(arr) {
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
            newArr[newArr.length] = arr[i]
        }
    }
    return newArr
}
console.log(shaiXuan([1, 2, 3, 10, 11, 12]));


//反转数组  (取第几个跟着索引号走)
var reverse = function(arr) {
    var newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr[newArr.length] = arr[i]
    }
    return newArr
}
console.log(reverse(['张宇', '马雨涵', '桃子姐姐']));

//冒泡排序
var arr = [12, 0, 6, 1, 5, 7, 9, 3, 4, 7, 100]
var temp
for (let i = 0; i <= arr.length - 1; i++) { //外层决定交换的趟数
    for (let j = 0; j <= arr.length - i - 1; j++) { //内层决定每趟交换的次数
        if (arr[j] > arr[j + 1]) { //比较变量
            temp = arr[j] //临时变量交换值用
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}
console.log(arr)