// node.js遵循的是commonjs的模块化开发思想
// function add(a,b) {
//     return a + b;
// }
// exports（导出）是一个对象，添加对象的属性add，属性值为上面的add方法
// exports.add = add;

//简写形式
// exports.add = function (a,b) {
//     return a + b;
// }
// 可以有多个exports
// exports.minus = function (a,b) {
//     return a - b;
// }

// 将指定所需要的数据导出
module.exports = function (a,b) {
    return a * b;
}