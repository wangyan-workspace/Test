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
console.log(tuple1);
export {};
