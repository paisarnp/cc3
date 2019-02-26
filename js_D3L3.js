"use strict";
const students = [
    { 'firstname': 'Somchai', 'lastname': 'SudLor', 'age': '50' },
    { 'firstname': 'Somsri', 'lastname': 'SudSuay', 'age': '40' },
    { 'firstname': 'Luke', 'lastname': 'Skywalker', 'age': '60' }
];

console.log(students[0].firstname);
console.log(students[2].age);

let strStudent = JSON.stringify(students);
console.log(strStudent);

let jsonStudent = JSON.parse(strStudent);
setTimeout(function () {    // ถ้าไม่มีจะแสดงผลแบบ async
    console.log(jsonStudent);
    console.log(jsonStudent[0].firstname);
    console.log(jsonStudent[2].age);
}, 1000);