class Person{
    name: string; //属性前面如果不加任何修饰符，默认是public
    private age: number = 18;
    readonly height: string = '178cm';//readonly只读的，不可以修改
    private gender: string = 'female';
    // 对于不需要修改的，可直接访问的的数据前都可以增加static，即为静态数据
    static legs: number = 2; //静态数据

    constructor(name: string){
        this.name = name;
    }

    sayHello(){
        console.log(`my name is ${this.name},age is ${this.age}`);
    }
    // 默认存取器
    //getter(可以调用此方法访问私有数据类型，也可以通过传递参数限制是否能进行访问私有数据)
    getGender(message: string){
        if(message == 'I love you'){
            return this.gender;
        }
        throw new Error('就不告诉你！！！');
    }

    // get gender(){
    //     return this._gender;
    // }

    // setter(可以对传过来的参数，限制范围，不能什么参数都可以)
    setGender(gender: string){
        if(gender == 'male' || gender == 'female'){
            this.gender = gender;
        }else{
            throw new Error("地球上没有这种人，你是外星来的吗？");
        }
    }

    // set gender(gender: string){
    //     this._gender = gender;
    // }
}

let p1 = new Person('lisi');
// console.log(p1.name);  //public的属性可直接访问
// console.log(p1.age);  //private的属性不可以在外部直接访问，但是可以在class内部访问
// p1.sayHello();
// p1.height = '180cm';//只读的，不可以修改
// console.log(p1.height);
// p1.setGender('male');
// console.log(p1.getGender('I love you'));
// p1.gender = '男';
// console.log(p1.gender);

// console.log(Person.legs); //对于静态数据不用重新 new一个对象实例，可以直接通过类名访问到

// 抽象类和继承
// 设计抽象的父类，一定是用来做继承的
// 抽象类中可以定义抽象的方法，也可以定义非抽象类的方法
abstract class Animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    // 抽象的方法一定要在抽象类中，抽象类中肯定有抽象的方法，抽象类中抽象的方法不需要写方法体，在子类中具体实现抽象的方法
    abstract shout(): string; //抽象的方法一定要在子类中被重写
}
class Dog extends Animal{
    shout(){
        return '汪汪';
    }
}
class Cat extends Animal{
    shout(){
        return '喵喵';
    }
}

let dog = new Dog('旺财');
let cat = new Cat('咪咪');
// console.log(dog.shout());
// console.log(cat.shout());

// let animal = new Animal(); //抽象类不能被实例化

// 接口（接口本身是抽象的,接口中的所有的方法也都是抽象的）
// 如果实现一个接口，就要实现接口里的全部方法
interface IFly{
    fly():string;
}

class Monkey extends Animal{
    shout(){
        return '吱吱';
    }
}

class MonkeyKing extends Monkey implements IFly{
    fly(){
        return '我可以驾筋斗云飞';
    }
}

class MachineCat extends Cat implements IFly{
    fly(){
        return '我可以在头上插个小风扇飞！';
    }
}

// let wukong = new MonkeyKing('悟空');
// console.log(wukong.shout());
// console.log(wukong.fly());

// let doraamon = new MachineCat('哆啦A梦');
// console.log(doraamon.shout());
// console.log(doraamon.fly());

// **多态：在统一标准下的多种形态**
// let flier :IFly = new MonkeyKing('悟空');
// console.log(flier.fly());

// let flier :IFly = new MachineCat('哆啦A梦');
// console.log(flier.fly());

function fly(flier: IFly){
    console.log(flier.fly());
}

fly(new MonkeyKing('悟空'));
// fly(new MachineCat('哆啦A梦'));