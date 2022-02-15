//查找一个元素在字符串内出现了几次
var str = 'cacccacacacacacacac'
function cuontString(str, element){
    var index = str.indexOf(element)
    while(index !== -1){
        console.log(index);
        index = str.indexOf(element, index + 1)
    }
}
console.log(cuontString(str, 'a'));

//遍历字符传
var str = '张宇最帅'
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i))
}
console.log(str.charCodeAt(0)); //返回字符传值的ASCII码的值



//字符串的所有值出现的次数
//首先明白一个原理兄的们
var Objects = {
    a: '马雨涵'
}
//判断 ‘属性’ 是否存在对象里面
if (Objects['a']) {
    console.log(Objects['a'] + '在对象里');
}else{
    console.log(Objects['a'] + '不在对象里');
}
//明白了之后那么好
var str = 'absjhsdfhsjjajjadhau'
var o ={}  //创建一个空对象
for (let i = 0; i < str.length; i++) {
    var chars = str.charAt(i)   //chars存的是str遍历的每个值
    if(o[chars]){       //o[chars] 是判断对象o里面是否有chars这个属性
        o[chars]++      //如果o[chars]里面已经有了此属性的话 就让它的值 + 1  依次递增
    }else{ 
        o[chars] = 1    //如果o[chars]里面没有这个属性的话 就创造此属性并为它赋值为1
    }
}
console.log(o);
//下一步
var ch = ''
var max = 0
for (let k in o) {
    if(o[k] > max){
        max = o[k]  //属性值也就是次数
        ch = k      //属性名
    }
}
console.log(max);
console.log(ch);  //输出出现最多的值

//截取字符串（切片）
var a = '改革春风吹满地'
console.log(a.substr(2,2));  //第一个参数是从哪里开始(字符串(数组)下标)  第二个参数是截取到哪里

//替换字符传里的元素
var str = 'aaaaaaaaaa'
while(str.indexOf('a') != -1){
    str = str.replace('a' , '张')  //replace方法  第一个参数为字符串里的参数 第二个参数为你要替换的参数
}
console.log(str)

//将字符串转换为数组
var a = '张宇 , 马雨涵 , 张妮'
console.log(a.split(',')); //根据什么将数组分为字符串