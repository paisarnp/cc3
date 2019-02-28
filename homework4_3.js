// Not yet??? o[s1][s2]

// let obj = 1; //1
// let obj = [1, 2, 3]; //2 i1
// let obj = [[11, 12], 2, 3]; //3
// let obj = [[[111, 112], 12], 2, 3]; //4
// let obj = [[[[111, 112]], 12], 2, 3]; //Error 4-Array
// let obj = [[{ a: 111, b: 112 }, 12], 2, 3]; //5
// let obj = [1, 2, [11, [111, { e: 2 }]]]; //Error 3-Array-1-Object
// let obj = [1, 2, [11, { a: 111, b: { e: 2 } }]]; //Error 2-Array-2-Object
// let obj = { a: 1, b: 2, c: { a: 1, b: { c: 3, d: 4 } } } //6

// let obj = { a: 1, b: 2 }; //i2
// let obj = [1, 2, { a: 1, b: 2 }] //i3
let obj = [1, 2, { a: 1, b: { c: 3, d: 4 } }] //i4

// console.log(JSON.stringify(obj)[0]);
// console.log(obj.length);
// console.log(typeof obj);

function cloneObj(o) {
    let nO; // New Object
    if (typeof o === 'object') {
        if (Array.isArray(o)) {
            // console.log('Array');
            if (nO === undefined) {
                // console.log('undefined array');
                nO = [];
            }
            // console.log(typeof nO)
            for (i = 0; i < o.length; i++) {
                if (typeof o[i] === 'object') {
                    if (Array.isArray(o[i])) {
                        if (nO[i] === undefined) {
                            nO[i] = [];
                        }
                        for (j = 0; j < o[i].length; j++) {
                            if (typeof o[i][j] === 'object') {
                                if (Array.isArray(o[i][j])) {
                                    if (nO[i][j] === undefined) {
                                        nO[i][j] = [];
                                    }
                                    for (k = 0; k < o[i][j].length; k++) {
                                        if (typeof o[i][j][k] === 'object') {
                                            console.log('too complex, exceed 3 A')
                                            return;
                                        } else {
                                            nO[i][j][k] = o[i][j][k];
                                        }
                                    }
                                } else {
                                    for (s1 in o[i][j]) {
                                        if (nO[i][j] === undefined) {
                                            nO[i][j] = {};
                                        }
                                        if (typeof o[i][j][s1] === 'object') {
                                            console.log('too complex, exceed 3 O')
                                            return;
                                        } else {
                                            nO[i][j][s1] = o[i][j][s1];
                                        }
                                    }
                                }
                            } else {
                                nO[i][j] = o[i][j];
                            }
                        }
                    } else {
                        for (s1 in o[i]) {
                            if (nO[i] === undefined) {
                                nO[i] = {};
                            }
                            if (typeof o[i][s1] === 'object') {
                                if (Array.isArray(o[i][s1])) {
                                    if (nO[i][s1] === undefined) {
                                        nO[i][s1] = [];
                                    }
                                    nO[i][s1] = o[i][s1];
                                } else {
                                    for (s2 in o[i][s1]) {
                                        if (nO[i][s1] === undefined) {
                                            nO[i][s1] = {};
                                        }
                                        nO[i][s1][s2] = o[i][s1][s2];
                                    }
                                }
                            } else {
                                nO[i][s1] = o[i][s1];
                            }
                        }
                    }
                } else {
                    nO[i] = o[i];
                }
            }
        } else {
            for (s1 in o) {
                if (nO === undefined) {
                    nO = {};
                }
                if (typeof o[s1] === 'object') {
                    if (Array.isArray(o[s1])) {
                        if (nO[s1] === undefined) {
                            nO[s1] = [];
                        }
                        nO[s1] = o[s1];
                    } else {
                        for (s2 in o[s1]) {
                            if (nO[s1] === undefined) {
                                nO[s1] = {};
                            }
                            if (typeof o[s1][s2] === 'object') {
                                if (Array.isArray(o[s1][s2])) {
                                    if (nO[s1][s2] === undefined) {
                                        nO[s1][s2] = [];
                                    }
                                    nO[s1][s2] = o[s1][s2];
                                } else {
                                    for (s3 in o[s1][s2]) {
                                        if (nO[s1][s2] === undefined) {
                                            nO[s1][s2] = {};
                                        }
                                        nO[s1][s2][s3] = o[s1][s2][s3];
                                    }
                                }
                            } else {
                                nO[s1][s2] = o[s1][s2];
                            }
                        }
                    }
                } else {
                    nO[s1] = o[s1];
                }
                // nO[s1] = o[s1];
            }
        }
    } else {
        return nO = o;
    }
    return nO;
}
let newObj = cloneObj(obj);

console.log("\nNew Obj before modification =", newObj);

// newObj = 9; //1
// newObj[0] = 9; //2 i1
// newObj[0][0] = 9; //3
// newObj[0][0][0] = 9; //4
// newObj[0][0].a = 9; //5
// newObj.c.b.d = 9 //6

// newObj.a = 9; //i2
// newObj[2].a = 9; //i3
newObj[2].b.c = 9; //i4

console.log("\nNew Obj after modification =", newObj);
console.log("                   old obj =", obj);