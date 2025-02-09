//! JavaScript Operators

//? =================== Arithmetic Operators ===================
//✅ Addition (+) → যোগ
//✅ Subtraction (-) → বিয়োগ
//✅ Multiplication (*) → গুণ
//✅ Division (/) → ভাগ
//✅ Modulus (%) → ভাগশেষ

let a = 50;
let b = 20;

console.log("Addition:", a + b);     // ✅ 50 + 20 = 70
console.log("Subtraction:", a - b);  // ✅ 50 - 20 = 30
console.log("Multiplication:", a * b); // ✅ 50 * 20 = 1000
console.log("Division:", a / b);     // ✅ 50 / 20 = 2.5
console.log("Modulus:", a % b);      // ✅ 50 % 20 = 10

//? =================== Increment & Decrement Operators ===================
//✅ Post Increment (y++) → মান ব্যবহারের পরে ১ বাড়ায়
//✅ Pre Increment (++y) → মান ব্যবহারের আগে ১ বাড়ায়
//✅ Post Decrement (y--) → মান ব্যবহারের পরে ১ কমায়
//✅ Pre Decrement (--y) → মান ব্যবহারের আগে ১ কমায়

let y = 20;
console.log("Original y:", y);

y++;  // ✅ y = y + 1 (Increment)
console.log("After y++:", y);

y--;  // ✅ y = y - 1 (Decrement)
console.log("After y--:", y);

//? =================== Assignment Operators ===================
//✅ Addition Assignment (+=) → x += y → x = x + y
//✅ Multiplication Assignment (*=) → x *= y → x = x * y

y += 5;  // ✅ y = y + 5
console.log("After y += 5:", y);

y *= 5;  // ✅ y = y * 5
console.log("After y *= 5:", y);


//Compaison Operator

let p= 5;
let q = 6;
// console.log(p==q); //equal to
// console.log(p===q); ///equal value and equal type
console.log(p!=q); //not equal value or not

console.log(p>q);
console.log(p<q);
console.log(p>=q);
console.log(p<=q);

//Ternary Operators

let marks = 85;
let grade = (marks>=90)? 'A+':
            (marks>=80) ? 'A':
            (marks>=70) ? 'A-':
            (marks>=60) ? 'B':
            (marks>=50) ? 'C': "fail";
 console.log(grade);           

