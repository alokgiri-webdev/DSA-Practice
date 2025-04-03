"use strict";

//1. Print odd nos from 1 to N
/*
let N = 10;
for(let i=1; i<=N; i+=2){
  console.log(i);
}
*/

//2. Loop for bowling all balls in an over
/*
const over = 6;
for(let ball=1; ball<=6; ball++){
  console.log(ball);
}
*/

//3. Print the last digit of the no. N
/*
let N = 4567;
const lastDigit = N%10;
console.log(lastDigit);
*/

//4. Print all the digits of a Number N (Ask for edge cases like N=0, N<0 in this case)
/*
let N = 0;
let last_digit;
if(N === 0){
  last_digit = 0;
  console.log(last_digit);
} else if(N < 0){
  N = N*(-1);
  for(let digit = N; digit>0; digit= Math.floor(digit/10)){
    last_digit = digit%10;
    console.log(last_digit);
    }
} else{
for(let digit = N; digit>0; digit= Math.floor(digit/10)){
  last_digit = digit%10;
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

//6. Given a positive no. N, reverse it. e.g N=6412 o/p:2146; N=4200 o/p:24
/*
const n = 4200;
let number = n;
let reverse_number = 0;
for (; number > 0; number = Math.floor(number / 10)) {
  let last_digit = number % 10;
  reverse_number = reverse_number * 10 + last_digit;
}
console.log(reverse_number);
*/

//7. Find all the factors of N
/*
const n = 48;
let number = n;
for (let i = 1; i <= n; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}
*/

//8. Check if the no. is prime
/*
const n = 12;
let number = n;
let count = 0;
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    count++;
  }
  if (count > 2) {
    break;
  }
}
if (count === 2) {
  console.log(`${n} is a prime no.`);
} else {
  console.log(`${n} is not a prime no.`);
}
*/
