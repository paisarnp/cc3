"use strict";
const peopleSalary = [
    { "id": "1001", "firstname": "Luke", "lastname": "Skywalker", "company": "Walt Disney", "salary": "40000" },
    { "id": "1002", "firstname": "Tony", "lastname": "Stark", "company": "Marvel", "salary": "1000000" },
    { "id": "1003", "firstname": "Somchai", "lastname": "Jaidee", "company": "Love2work", "salary": "20000" },
    { "id": "1004", "firstname": "Monkey D", "lastname": "Luffee", "company": "One Piece", "salary": "9000000" }
]
console.log("Before peopleSalary =\n", peopleSalary);
setTimeout(function() {
    for (let i = 0; i < peopleSalary.length; i++)
    if (peopleSalary[i].company) 
        delete peopleSalary[i].company;

    console.log("\nAfter peopleSalary =\n", peopleSalary)
}, 5000);