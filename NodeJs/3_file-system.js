var fs = require("fs");
// NodeJs是单线程，异步的，非阻塞式的JavaScript服务平台
// 先打印出end.在打印出hello!!!
fs.readFile("a.txt","utf-8",function(err,data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
console.log("end.");

// readFileSync转化成同步的方式
// var data = fs.readFileSync("a.txt","utf-8");
// console.log(data);