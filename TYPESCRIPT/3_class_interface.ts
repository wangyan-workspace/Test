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
p1.setGender('male');
console.log(p1.getGender('I love you'));
// p1.gender = '男';
// console.log(p1.gender);

console.log(Person.legs); //对于静态数据不用重新 new一个对象实例，可以直接通过类名访问到