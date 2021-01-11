// number 数值
let a = 5;
// string 字符串
let b = "abc";
// boolean布尔
let c = true;
console.log(a, b, c);
// array 数组
let arr1 = [11, 22, 33];
let arr2 = ["abc", "def", "ghi"];
// arr2.push(true);//因为此处我们将非字符串型的数据放在了字符串型的数组中，虽然在ts编译期间会给我们错误警告，但是并不影响运行！！！
// tuple元组
// 元组不过就是元素数据类型固定，顺序固定，元素数量也固定的数组
let tuple1 = ["abc", 123, true];
// tuple1[0] = true;
tuple1.push("def"); //！！！请注意，可以使用push向元祖中push新的元素，并且没有任何警告！
// enum枚举
var Gender;
(function (Gender) {
    // 当两个值可选时，默认一个是0，一个是1，也可以修改为其他的指定的值
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
let gender = Gender.Male;
// any 任意类型
// let x: any = 5;
// x = "abc";
// 问题：究竟什么时候会用any
// 1.当用户的输入类型不确定的时候
// let input: any = prompt('💌请输入信息：');
// 2.你需要使用一个有多种数据类型的数组
// let arr: any = [123,"abc",true];
// void无返回值（函数中使用）
/*
function test(): void{
    // 无return
}
*/
// null和undefined
// let n: null = null;
// let u: undefined = undefined;
// never永不存在的值的类型
// 1.程序出错返回never
// 2.程序死循环也返回never
function test() {
    throw new Error('发生错误了...');
    /*
    while(true){

    }
    */
}
// test();
// 类型推论
let x = 5; //类型推论为number
// x = "abc";
let x2 = "abc"; //类型推论为string
let x3 = [123, 456, 789]; //类型推论为number[]
// x3.push("abc");
let x4 = ["abc", 123, true]; //类型推论为(string | number | boolean)[] =>联合类型
x4.push("def");
class Animal {
}
class Dog extends Animal {
}
class Cat extends Animal {
}
class Fish extends Animal {
}
class Person {
}
let arr = [new Dog(), new Cat()]; //(Dog | Cat)[]
arr.push(new Fish());
// arr.push(new Person());
// 上下文推论
window.onmousedown = function (e) {
    console.log(e);
};
window.onkeydown = function (e) {
    console.log(e);
};
// 类型断言
let str = "abc";
// let length = <string>str.length;
let length = str.length;
console.log(arr);
export {};
