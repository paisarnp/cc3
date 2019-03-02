/* const jn1 = [
    { "id": "1001", "firstname": "Luke", "lastname": "Skywalker", "company": "Walt Disney", "salary": "40000" },
    { "id": "1002", "firstname": "Tony", "lastname": "Stark", "company": "Marvel", "salary": "1000000" },
    { "id": "1003", "firstname": "Somchai", "lastname": "Jaidee", "company": "Love2work", "salary": "20000" },
    { "id": "1004", "firstname": "Monkey D", "lastname": "Luffee", "company": "One Piece", "salary": "9000000" }
]; */
let jn1;

function addYearSalary(row) {
    row.yearSalary = row.salary * 12;
    return row;
}

/* test
let ans=addYearSalary(employees[0]);
console.log("\nans =\n", ans);
*/

// debugger;
const yr = 3
function addNextSalary(row) {
    row.nextSalary = [row.salary];
    for (j = 0; j < yr - 1; j++) {
        row.nextSalary.push(row.nextSalary[j] * 110 / 100);
    }
    return row;
}
/* 
let ans=addNextSalary(employees[0]);
console.log("\nans =\n", ans);
 */

function addAdditionalFields(emp) {
    for (i = 0; i < Object.keys(emp).length; i++) {
        addYearSalary(emp[i]);
        addNextSalary(emp[i]);
    }
}

// fetch('homework3_1.json').then(function (jsonResponse) {
// $.get('homework3_1.json').done(function (jsonResponse) {
$.get('homework3_1.json').done(function (jsonResponse) {
    console.log(jsonResponse);

    addAdditionalFields(jsonResponse);

    console.log("\nAfter modifying =\n", jsonResponse);

    // Table Label
    // $('body').append('<h1 id="tl">After Cut Company</h1>');
    $('body').append('<table id="tb"><tr id="trh"></tr></table>');

    for (x in jsonResponse[0]) {
        $('#trh').append('<th>' + x + '</th>');
    }

    // debugger;

    let i = 0;
    jsonResponse.forEach(arr => {
        $('#tb').append('<tr id="tr' + i + '"></tr>');
        for (x in arr) {
            if (x === 'nextSalary') {
                $('#tr' + i).append('<td><ol id="ol' + i + '"></ol></td>');
                for (j = 0; j < 3; j++) {
                    $('#ol' + i).append('<li>' + arr[x][j] + '</li>');
                }
            } else {
                $('#tr' + i).append('<td>' + arr[x] + '</td>');
            }
        }
        i++;
    });

});

// console.log(jn1);