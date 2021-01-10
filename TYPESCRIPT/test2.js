/* 
function test(){
    var a = 5;  //函数作用域
    console.log(a);
}
test();  //5
console.log(a);  //a is not defined
*/

/*
for(var i=0;i<2;i++){
    console.log(i); //0 1
}
console.log(i); //2
*/

/*块级作用域
for(let i=0;i<2;i++){
    console.log(i); //0 1
}
console.log(i); //i is not defined
*/