"use strict";

//1. Print odd nos from 1 to N
/*
let N = 10;
for (let i = 1; i <= N; i++) {
  i = i + 2;
  console.log(i);
}
*/

//2. Loop for bowling all balls in an over
/*
let count = 0;
const balls = 6;
for (let i = 1; i <= balls; i++) {
  count += 1;
}
console.log(count);
*/

//3. Print the last digit of the no. N
/*
let N = 1234;
const last_digit = N % 10;
console.log(last_digit);
*/

//4. Print all the digits of a Number N
/*
let N = 12111992;
if (N === 0) {
  console.log(0);
} else if (N < 0) {
  N = N * -1;
  for (; N > 0; N = Math.floor(N / 10)) {
    let last_digit = N % 10;
    console.log(last_digit);
  }
} else {
  for (; N > 0; N = Math.floor(N / 10)) {
    let last_digit = N % 10;
    console.log(last_digit);
  }
}
*/

//5. Given an integer N, print sum of all digits
/*
const N = 12111992;
let number = N;
let sum = 0;
if (number === 0) {
  console.log(0);
} else if (number < 0) {
  number = number * -1;
  for (; number > 0; number = Math.floor(number / 10)) {
    let last_digit = number % 10;
    sum += last_digit;
  }
}
for (; number > 0; number = Math.floor(number / 10)) {
  let last_digit = number % 10;
  sum += last_digit;
}
console.log(sum);
*/
