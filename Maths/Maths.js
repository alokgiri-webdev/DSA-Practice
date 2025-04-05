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
let N = 45678;
let last_digit;
let sum = 0;
if(N === 0){
  sum = 0;
}else if(N<0){
  N = N*(-1);
  for( ; N>0; N = Math.floor(N/10)){
  last_digit = N%10;
  sum +=last_digit;
  }
  console.log(sum);
}else{
  for( ; N>0; N = Math.floor(N/10)){
    last_digit = N%10;
    sum +=last_digit;
    }
    console.log(sum);
}
*/
//6. Given a positive no. N, reverse it. e.g N=6412 o/p:2146; N=4200 o/p:24
/*
let N = 6412;
let last_digit;
let reverseDigit=0;
if(N === 0){
console.log(reverseDigit);
}else if(N<0){
  N = N*(-1);
  for( ; N>0; N = Math.floor(N/10)){
    last_digit = N%10;
    reverseDigit = reverseDigit*10 + last_digit;
  }
  console.log(reverseDigit);
}else{
  for( ; N>0; N = Math.floor(N/10)){
    last_digit = N%10;
    reverseDigit = reverseDigit*10 + last_digit;
  }
  console.log(reverseDigit);
}
*/

//7. Find all the factors of N
/*
let N = 49;
let factors;
let count = 0;
for(let i = 1; i <= N; i++){
  if(N%i === 0){
  count++;
  factors = i;
  console.log(factors);
  }
}
console.log(count);
*/

//8. Check if the no. is prime
/*
let N = 12;
let count = 0;
if(N === 0 || N === 1 || N<0){
  console.log('N is not a prime no.');
} else {
for(let i=1; i<=N; i++){
  if(N%i===0){
    count++;
    }
}
if(count>2){
  console.log('N is not a prime no.');
}else if(count===2){
  console.log('N is a prime no.');
}
}
*/

// ASSIGHNMENT QUESTIONS
/*
1. Problem Description -----------------------------------------------------------

Write a program that asks the user to input a number T, indicating the number of test cases.
Then, for each test case, ask for input a number N and print the first and last digits of N.

Problem Constraints

1 <= T <= 1000

0 <= N <= 100000000

Input Format:
First line is T which means number of test cases.
Each next T lines contain an integer N.

Output Format

T lines each containing two space separated integers representing first and last digits of the input integer.

Example Input

Input 1:

2
5
1001
Input 2:

2
10023
1589


Example Output

Output 1:

5 5
1 1
Output 2:

1 3
1 9

*/
//Solution
/*
const firstLastDigit = function(N){
  let lastDigit = N%10;
  let firstDigit = N;
  while(firstDigit>=10){
    firstDigit = Math.floor(firstDigit/10);
  }
  return `${firstDigit} & ${lastDigit}`;
}

let T = parseInt(prompt(`No. of Test cases`));
for(let t=0; t<T; t++){
  let N = parseInt(prompt(`Value of N`));
  console.log(firstLastDigit(N));
}
*/

/*
2. Problem Description -----------------------------------------------

Take an integer N as input and print the count of its factors.
The factor of a number is the number that divides it perfectly leaving no remainder.

Example: 1, 2, 3, and 6 are factors of 6

Problem Constraints

1 <= N <= 300

Input Format

The first and only line of input contains a single integer N.

Output Format

Print the count of factors of N.

Example Input

Input 1:
 5
Input 2:
 10

Example Output

Output 1:
2
Output 2:
4

Example Explanation

Explanation 1:
 Factors of 5 are 1 and 5.
Explanation 2:
 Factors of 10 are 1, 2, 5 and 10.
*/

/* Solution
const countOfFactors = function(N){
  let count = 2;
  if(N===0){
    count = 0;
  }else if(N===1){
    count = 1;
  }
  if(N<0){
    N = N*(-1);
  }
  for(let i=2; i<N; i++){
    if(N%i===0){
    count++;
    }
  }
  return count;
}

let T = parseInt(prompt('No. of Test cases'));
for(let t=0; t<T; t++){
  let N = parseInt(prompt('Enter value of N'));
  console.log(countOfFactors(N));
}
*/