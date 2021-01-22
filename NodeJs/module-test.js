// require（导入）过来的是一个对象（exports）
// let a = require('./module-a');
// 对象.方法()调用
// console.log(a.add(4,5));
// console.log(a.minus(9,8));

// es6解构的方式把add方法解构出来，直接用
// let {add} = require('./module-a');
// console.log(add(5,6));

// let add = require('./module-a');
// console.log(add(9,11));

// var aa = require('./module-b');
// var p1 = new aa.Person('lisi',23);
// console.log(p1);

// module.exports = Person的方式导出什么（Person），导入之后就直接使用什么（Person）
// var Person = require('./module-b');
// var p2 = new Person('wangwu',18);
// console.log(p2);

// 将Person类解构出来
// const { Person } = require('./module-b');
// var p3 = new Person('zhaoliu',78);
// console.log(p3);

// 按路径去寻找
// var http = require('./node_modules/http-request/index');
// node_modules文件名特殊可省略，文件默认找index文件，🐩故index也可省略不写
// var http = require('http-request');
// http.get();
// http.post();

// 在集成终端锁定到http-request2文件夹📃，输入npm inin -y进行初始化，可在http-request2文件夹下生成package.json文件，
// 之后即可通过文件夹名http-request2，找到index2.js文件并运行
var http = require('http-request2');
http.get();
http.post();

