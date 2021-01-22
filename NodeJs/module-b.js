class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log('hello!!!');
    }
}

exports.Person = Person;

// 直接将Person类导出
// module.exports = Person;