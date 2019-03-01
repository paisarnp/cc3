"use strict";
console.log("ตัวอย่าง Pointer ใน Object (1)");
let b = {'animal':'cat', 'talk':'meow'};
console.log(b); // {'animal':'cat', 'talk':'meow'}
let c = b;
c.animal = 'dog';
console.log("");
console.log(b); // {'animal':'dog', 'talk':'meow'}
console.log(c); // {'animal':'dog', 'talk':'meow'}

console.log("");
console.log("ตัวอย่าง Pointer ใน Object (2)");
b = {'animal':'cat', 'talk':'meow'};
console.log("before b = ");
console.log(b);
let d = {};
// d = b;   // ไม่ได้ จะทำให้ pointer ชี้ที่เดียวกัน
d.animal = b.animal;
d.talk = b.talk;
console.log("before d = "); 
console.log(d);
d.animal = 'dog';
d.talk = 'hong';
console.log("after b = ");
console.log(b); // {'animal':'cat', 'talk':'meow'}
console.log("after d = "); 
console.log(d); // {'animal':'dog', 'talk':'hong'}

console.log("");
console.log("ตัวอย่าง Pointer ใน Object (3)");
b = {'animal':'cat', 'talk': {'talkInside':'meow'}};
let e = {};
e.animal = b.animal;
e.animal = 'dog';
e.talk = b.talk;
e.talk.talkInside = 'hong';
console.log(b);  // {'animal':'cat', 'talk': {'talkInside':'hong'}}
console.log(e); // {'animal':'dog', 'talk': {'talkInside':'hong'}}

console.log("");
console.log("ตัวอย่าง Pointer ใน Object (4)");
b = {'animal':'cat', 'talk': {'talkInside':'meow'}};
e = {};
e.animal = b.animal;
e.animal = 'dog';
e.talk = {};
e.talk.talkInside = b.talk.talkInside;
e.talk.talkInside = 'hong';
console.log(b);  // {'animal':'cat', 'talk': {'talkInside':'meow'}}
console.log(e); // {'animal':'dog', 'talk': {'talkInside':'hong'}}

console.log("");
console.log("ตัวอย่าง Pointer ใน Object (5)");
b = {'animal':'cat', 'talk': {'talkInside':'meow'}};
e = JSON.parse( JSON.stringify(b) );
e.animal = 'dog';
e.talk.talkInside = 'hong';
console.log(b);  // {'animal':'cat', 'talk': {'talkInside':'meow'}}
console.log(e); // {'animal':'dog', 'talk': {'talkInside':'hong'}}
