"use strict";
// Function Declaration
console.log("Function Declaration")
// Function Declaration แบบที่ 1
function hello1(parameter1, parameter2, parameter3) {
    console.log('hello1 ' + parameter1 + parameter2 + parameter3);
};
// Function Declaration แบบที่ 2
let hello2 = function (parameter1, parameter2, parameter3) {
    console.log('hello2 ' + parameter1 + parameter2 + parameter3);
};
// เรียก fn
hello1('1', '2', '3');
hello2('1', '2', '3');
console.log("");


// Function as parameters
/* let hello = function (parameter1, parameter2, parameter3) {
    console.log('hello' + parameter1 + parameter2 + parameter3);
}; */
console.log("");
console.log("Function as parameters");
function func(callbackA, callbackB) { // ประกาศ parameter ที่เป็น fn 2 parameters ได้
    callbackA('1', '2', '3');
    callbackB('4', '5', '6');
}
func(hello1, hello2);
func(hello1, hello1); // ใส่ parameter ที่เป็น fn ซ้ำกันคนละ parameter ได้
hello1('7', '8', '9');