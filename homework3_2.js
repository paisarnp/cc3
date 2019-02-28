"use strict";
const peopleSalary = [
    { "id": "1001", "firstname": "Luke", "lastname": "Skywalker", "company": "Walt Disney", "salary": "40000" },
    { "id": "1002", "firstname": "Tony", "lastname": "Stark", "company": "Marvel", "salary": "1000000" },
    { "id": "1003", "firstname": "Somchai", "lastname": "Jaidee", "company": "Love2work", "salary": "20000" },
    { "id": "1004", "firstname": "Monkey D", "lastname": "Luffee", "company": "One Piece", "salary": "9000000" }
]
// alert("Before = " + peopleSalary[0].company);
// console.log("Before peopleSalary =\n", peopleSalary);
// setTimeout(function () { // console.log มี bug เลยต้องใช้ setTimeoout
    for (let i = 0; i < peopleSalary.length; i++)
        if (peopleSalary[i].company)
            delete peopleSalary[i].company;

// alert("After = " + peopleSalary[0].company);
    // console.log("\nAfter peopleSalary =\n", peopleSalary)
// }, 5000);

let TB = $('<table></table>');
let TR = $('<tr></tr>');

$('body').append(TB);

TB.append(TR);

for (let x in peopleSalary[0]) {
    TR.append('<th>' + x + '</th>');
}

for (let i = 0; i < peopleSalary.length; i++) {
    TR = $('<tr></tr>');
    TB.append(TR);
    for (let x in peopleSalary[i]) {
        TR.append('<td>' + peopleSalary[i][x] + '</td>');
    }
}
/* 
peopleSalary.forEach(ar => {
    TR = $('<tr></tr>');
    TB.append(TR);
    for (let x in ar) {
        TR.append('<td>' + ar[x] + '</td>');
    }
    // i++;
}); */