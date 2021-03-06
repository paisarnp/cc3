"use strict";
// use Chrome F12
let arr = [];
arr[0] = "myValue";
// console.log("arr#1" + arr);
console.log(arr);   // Chrome F12 icon info says "Value below was evaluated just now"
for (let x = 0; x < arr.length; x++)
    console.log("arr[" + x + "] = " + arr[x]);
console.log("");
arr.push("myNextValue");
// console.log("arr#2" + arr);
console.log(arr);
for (let x = 0; x < arr.length; x++)
    console.log("arr[" + x + "] = " + arr[x]);
console.log("");

console.log("");
let obj = {};
obj.myProperties = "myValue";
for (let x in obj)
    console.log(`#1 obj["${x}"] = ${obj[x]}`);
console.log("");
obj["myProperties2"] = "myValue2";
for (let x in obj)
    console.log(`#2 obj["${x}"] = ${obj[x]}`);
console.log("");
obj.myFunction = function () {
    alert("Hello World");
}
for (let x in obj)
    console.log(`#3 obj["${x}"] = ${obj[x]}`);

console.log("var vs. let");
for (var i = 0; i < 10; i++) {
    // do something
    console.log("i = " + i)
}
console.log(i);
for (let j = 0; j < 10; j++) {
    // do something
    console.log("j = " + j)
}
console.log(j);