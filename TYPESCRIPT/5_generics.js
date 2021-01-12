"use strict";
// 实现一个List列表功能，包含add函数和length属性，可以向add函数中添加字符串
class List {
    constructor() {
        this.elements = [];
    }
    add(elem) {
        this.elements.push(elem);
    }
    // 默认存储器
    get length() {
        return this.elements.length; //2
    }
}
let list1 = new List();
list1.add("abc");
list1.add("def");
// list1.add(123);
// list1.add(true);
console.log(list1.length);
