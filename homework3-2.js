/* const jn1 = [
    { "id": "1001", "firstname": "Luke", "lastname": "Skywalker", "company": "Walt Disney", "salary": "40000" },
    { "id": "1002", "firstname": "Tony", "lastname": "Stark", "company": "Marvel", "salary": "1000000" },
    { "id": "1003", "firstname": "Somchai", "lastname": "Jaidee", "company": "Love2work", "salary": "20000" },
    { "id": "1004", "firstname": "Monkey D", "lastname": "Luffee", "company": "One Piece", "salary": "9000000" }
]; */

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

// Table Label
// $('body').append('<h1 class="tl">After Cut Company</h1>');
function createTable(jsonE, str) {
    $('body').append('<table id="tb' + str + '"><tr class="trh"></tr></table>');
    // $('body').append('<table id="tb' + str + '"><tr class="trh' + str + '"></tr></table>');
    // $('body').append('<table id="tb"><tr class="trh"></tr></table>');

    for (x in jsonE[0]) {
        // $('.trh' + str).append('<th>' + x + '</th>');
        $('#tb' + str + ' .trh').append('<th>' + x + '</th>');
    }

    // debugger;

    let i = 0;
    jsonE.forEach(arr => {
        $('#tb' + str).append('<tr class="tr' + i + '"></tr>');
        for (x in arr) {
            if (x === 'nextSalary') {
                $('#tb' + str + ' .tr' + i).append('<td><ol class="ol' + i + '"></ol></td>');
                for (j = 0; j < 3; j++) {
                    $('.ol' + i).append('<li>' + arr[x][j] + '</li>');
                }
            } else {
                $('#tb' + str + ' .tr' + i).append('<td>' + arr[x] + '</td>');
            }
        }
        i++;
    });
}

fetch('homework2_1.json').then(response => {
    if (response.ok) {
        //   console.log(response.json());
        // debugger;
        //   jn1 = response.json(); //ไม่ได้???******************************
        return response.json();
        //      return console.log(response.json());
    }
    throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
    console.log(jsonResponse);
    // $responseField.append('<p> Your expanded URL is </p><p> ' + jsonResponse.longUrl + '</p>');
    // return jsonResponse;
    // console.log(jsonResponse);

    let newEmployees = [];

    for (i = 0; i < Object.keys(jsonResponse).length; i++) {
        newEmployees[i] = {};
        for (x in jsonResponse[i]) {
            newEmployees[i][x] = jsonResponse[i][x];
        }
    }

    addAdditionalFields(newEmployees);

//    newEmployees[0].id = "1000";
    newEmployees[0].salary = 0

    console.log("\nBefore modifying =\n", jsonResponse);
    console.log("\nAfter modifying =\n", newEmployees);

/*     createTable(jsonResponse);
    $('body').append('<br>');
    createTable(newEmployees); */
    // debugger;
    createTable(jsonResponse, 1);
    $('body').append('<br>');
    createTable(newEmployees, 2);

});
