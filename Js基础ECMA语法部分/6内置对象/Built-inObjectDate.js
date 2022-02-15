
//创建属于自己的内置对象
var myMath = {
    PI: 3.1415926,
    max: function () {
        var max = arguments[0]
        for (let i = 1; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i]
            }
        }
        return max
    },

    min: function () {
        var min = arguments[0]
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] < min) {
                min = arguments[i]
            }
        }
        return min
    }
}
//调用我们的内置对象
console.log(myMath.PI);
console.log(myMath.max(1, 2, 3, 4, 5, 87, 100));
console.log(myMath.min(9, 8, 7, 3, 2, 1, 54, 61, 0));

//格式化日期
function getDate() {
    var timer = new Date()  //创建日期对象timer并获取它的年月日时分秒赋值给相应的数据
    var year = timer.getFullYear()
    var month = (timer.getMonth() + 1)
    var dates = timer.getDate()
    var day = timer.getDay()
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    var h = timer.getHours()
    h = h > 9 ? h : ('0' + h)
    var m = timer.getMinutes()
    m = m > 9 ? m : ('0' + m)
    var s = timer.getSeconds()
    s = s > 9 ? s : ('0' + s)
    return '今天是' + year + '年' + month + '月' + dates + '日' + h + ':' + m + ':' + s + arr[day]
}
console.log(getDate())


//倒计时案例
function countsDown(time) {
    var nowTime = +new Date()  //现在时间的时间戳
    var inputTime = +new Date(time)  //输入时间的时间戳调用时输入参数传给time减去上面现在时间戳
    var times = (inputTime - nowTime) / 1000  //换算成总秒数
    var d = parseInt(times / 60 / 60 / 24)  //获取天数公式
    d = d > 10 ? d : ('0' + d)
    var h = parseInt(times / 60 / 60 % 24)  //获取时数公式
    h = h > 10 ? h : ('0' + h)
    var m = parseInt(times / 60 % 60)  //获取分数公式
    m = m > 10 ? m : ('0' + m)
    var s = parseInt(times % 60)  //获取秒数公式
    s = s > 10 ? s : ('0' + s)
    return '距离活动结束时间还剩' + d + '天' + h + '时' + m + '分' + s + '秒'
}
console.log(countsDown('2022-1-18 17:56:00'))

















