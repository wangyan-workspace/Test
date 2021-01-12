// 实现一个List列表功能，包含add函数和length属性，可以向add函数中添加字符串

// interface IList{
//     length: number;
//     add(elem: string): void;
// }

/*
//方式一：
class List implements IList{
    elements: string[] = [];
    length: number = 0;
    add(elem: string): void {
        this.elements.push(elem);
        this.length = this.elements.length;
    }
    
}

let list1 =  new List();
list1.add("abc");
list1.add("def");
console.log(list1.length);  //2
*/

/*
方式二：
class List implements IList{
    elements: string[] = [];
    add(elem: string): void {
        this.elements.push(elem);
    }
    // 默认存储器
    get length(){
        return this.elements.length;  //2
    }
}

let list1 = new List();
list1.add("abc");
list1.add("def");
console.log(list1.length);
*/

//泛型
interface IList<T>{
    length: number;
    add(elem: T): void;
}

class List<T> implements IList<T>{
    elements: T[] = [];
    add(elem: T): void {
        this.elements.push(elem);
    }
    // 默认存储器
    get length(){
        return this.elements.length;  //2
    }
}

let list1 = new List<string>();
list1.add("abc");
list1.add("def");
// list1.add(123);
// list1.add(true);
console.log(list1.length);