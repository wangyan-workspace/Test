function add(a :number,b: number): number{
    return a+b;
}

function minus(a: number,b:number): number{
    return a-b;
}

// 方式一：
// export {add,minus}

// 方式二
export default add;
