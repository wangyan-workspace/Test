"use strict";
// 函数声明
// function test(){
// }
// 函数表达式
// let test = function(){
// }
// 函数的参数可以有数据类型
// function test(name: string,age: number){
//     console.log(name,age);
// }
// test("lisi",23);
// 可选参数
// function test(name: string,age: number,gender?: string){
//     console.log(name,age,gender);
// }
// test("lisi",23,"男"); 
// test("zhangsan",24);
// 默认参数
// function test(name: string,age: number,gender: string = 'male'){
//     console.log(name,age,gender);
// }
// test("lihua",87);
// test("lihua",45,"男");
// 剩余参数
// function test(name: string,age: number, ...args: any[]){
//     var str = "";
//     for(let i=0;i<args.length;i++){
//         str += args[i] + ' ';
//     }
//     // 模板字符串
//     console.log(`my name is ${name},age is ${age},${str}`);
// }
// test("lisi",23,"男",12345678,"178cm");
// 返回值类型
function test(name, age) {
    return `my name is ${name},age is ${age}`;
}
let str1 = test('lisi', 23);
console.log(str1);
function sayHello(x, y) {
    if (typeof y === 'number') {
        return `my name is ${x},age is ${y}`;
    }
    else {
        return `my name is ${x},gender is ${y}`;
    }
}
let str = sayHello("lisi", "female");
console.log(str);
