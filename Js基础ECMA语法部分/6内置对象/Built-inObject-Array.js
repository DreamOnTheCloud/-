//内置对象 - Array数组
var arr = [1, 2, 3]
arr.push(4, 5)     //往数组后面追加元素   返回为新数组长度
arr.unshift('张宇')   //往数组首部添加元素   返回新数组元素
arr.pop()             //删除数组后面的元素   返回为删除的元素
arr.shift()           //删除数组第一个元素   返回删除的元素
arr.reverse(arr)      //反转数组元素
console.log(arr)
console.log(arr instanceof Array)  //检测是否为数组
//数组排序
var sortArray = [3, 7, 1, 5, 2, 2]
sortArray.sort(function (a, b) {
    return b - a  //降序
    //a - b升序
})
console.log(sortArray);

//返回数组索引号
var indexArray = ['张宇', '马雨涵', '张妮', '赵梦涛']
console.log(indexArray.indexOf('张宇'));        //返回第一个元素的下标   未找到返回-1
console.log(indexArray.lastIndexOf('赵梦涛'));  //返回最后一个元素的下标  未找到-1


//将工资大于2000的筛选出去，输出小于2000工资的人员(包含2000)  数组筛选
function shaiXuan() {
    var gz = [1200, 2000, 9000, 2844, 1700, 5055, 600]
    var newArr = []
    for (let i = 0; i < gz.length; i++) {
        if (gz instanceof Array) {
            if (gz[i] <= 2000) {
                newArr.push(gz[i])
            }
        } else {
            console.log('请输入一组数据')
        }
    }
    return newArr
}
console.log(shaiXuan());

//数组转换为字符传
var joinArray = ['张宇', '马雨涵', '金文辉', '赵梦涛']
console.log(joinArray.join('-'));  //里面写的是分隔符

/*
数组去重核心算法为:
  定义新数组 newArr = []  循环遍历旧数组
  if(新数组.indecof(旧数组[i]) == -1) 代表新数组里没有旧数组的值
  那么newArr.push(旧数组[i]) 追加旧数组里的值进新数组
*/

function Deduplication(arr){  //创建方法参数为旧数组的值
    var newArr = []           //创建新数组用来存放筛选后的数组
    if(arr instanceof Array){
        for (let i = 0; i < arr.length; i++) {   //循环遍历旧数组
            if(newArr.indexOf(arr[i]) === -1) {   //核心算法如果新数组的indexof返回-1代表没有旧数组里的值
                newArr.push(arr[i])
            }   
        }
    }else{
        alert('此方法只筛选数组请放入一个数组')
    }
    return newArr
}
var a = [1,2,3,1,2,3,1,2,3,4,4,5,6,7,7]
console.log(Deduplication(a));  //输出结果测试成功
