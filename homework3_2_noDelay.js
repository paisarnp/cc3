"use strict";
// const peopleSalary = [
let peopleSalary = [
    { "id": "1001", "firstname": "Luke", "lastname": "Skywalker", "company": "Walt Disney", "salary": "40000" },
    { "id": "1002", "firstname": "Tony", "lastname": "Stark", "company": "Marvel", "salary": "1000000" },
    { "id": "1003", "firstname": "Somchai", "lastname": "Jaidee", "company": "Love2work", "salary": "20000" },
    { "id": "1004", "firstname": "Monkey D", "lastname": "Luffee", "company": "One Piece", "salary": "9000000" }
]
console.log("Before peopleSalary =\n", peopleSalary);

for (let i = 0; i < peopleSalary.length; i++)
    if (peopleSalary[i].company) 
        delete peopleSalary[i].company;

console.log("\nAfter peopleSalary =\n", peopleSalary)

let ar = [];

console.log("Length of Object 'peopleSalary[0]' =", Object.keys(peopleSalary[0]).length);

//let jnForIn = peopleSalary.map(i => {    //ใช้ i ซ้ำได้??? debug แล้วเป็นค่าเดิม???****************************
for (let x in peopleSalary[0]) {
    //    let text += i[x] + " ";   //ไม่ได้ ผิด syntax
    //        text += i[x] + " "; //ไม่เข้าใจ x, x เปลี่ยนเป็น property ตัวถัดไปยังไง ทำตามตัวอย่างแล้วได้เป็น undefined1001
    //        i[x] += i[x] + " ";
    //        return text;
    //        return i[x];
    //        console.log(i[x]);  //เฉยๆ ไม่มีบรรทัดอื่นใน for...in แต่มีบรรทัด let jnForIn = peopleSalary.map(i => { จะพิมพ์ Value ทั้งหมดออกมา
    ar.push(x);
    //        console.log(x);
    //        x += x + " ";
    //        return x; return ปุีบออกจาก fn map ซึ่งก็คือออกจาก for loop ด้วย
}
//    return i[x];
//    return x;

/*
//ใช้วิธีเขียนทับ Array ที่มีอยู่ คล้ายๆ วิธี เพิ่ม property ของ Object ที่ไม่มี Method 'push' ใน homework4.js 
let obl = 0 //Object length - 1
for (x in peopleSalary[0]) {
    ar[obl]=x;
    obl++;
}
*/

console.log('\nar =', ar);
//});
//console.log("\njnForIn =\n", jnForIn)

// Table Label
// $('body').append('<h1 id="tl">After Cut Company</h1>');
$('body').append('<table id="tb"><tr id="trh"></tr></table>');

for (let x in peopleSalary[0]) {
    $('#trh').append('<th>' + x + '</th>');
}

// debugger;

let i = 0;
peopleSalary.forEach(ar => {
    $('#tb').append('<tr id="tr' + i + '"></tr>');
    for (let x in ar) {
        $('#tr' + i).append('<td>' + ar[x] + '</td>');
    }
    i++;
});