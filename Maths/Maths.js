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

/*
3. Problem Description -----------------------------------------------

Take an integer A as input, you have to tell whether it is a prime number or not.

A prime number is a natural number greater than 1 which is divisible only by 1 and itself.


Problem Constraints

1 <= A <= 106



Input Format

First and only line of the input contains a single integer A.



Output Format

Print YES if A is a prime, else print NO.



Example Input

Input 1:

 3 
Input 2:

 4 


Example Output

Output 1:

 YES 
Output 2:

 NO 
*/
/*Solution
const checkPrime = function(N){
  if(N===1 || N===0 || N<0){
    return `NO`;
  }else{
    for(let i=2; i<=Math.sqrt(N); i++){
      if(N%i===0){
        return `NO`;
      }
    }
    return `YES`;
  }
}

let T = parseInt(prompt('No. of test cases'));
for(let t=0; t<T; t++){
  let N = parseInt(prompt('Enter value of N'));
  console.log(checkPrime(N));
}
*/

/*
4. Problem Description--------------------------------------------------
Given the Number of Test Cases as T,
For each test case, take an integer N as input, you have to tell whether it is a perfect number or not.

A perfect number is a positive integer that is equal to the sum of its proper positive divisors (excluding the number itself). 
A positive proper divisor divides a number without leaving any remainder.


Problem Constraints

1 <= T <= 10
1 <= N <= 106


Input Format

The first line of the input contains a single integer T. 
Each of the next T lines contains a single integer N.


Output Format

For each testcase, print YES if the given integer is perfect, else print NO, in a separate line


Example Input

Input 1:
2
4
6
Input 2:
1
3


Example Output

Output 1:
NO
YES 
Output 2:
NO


Example Explanation

Explanation 1:
For the first test case A = 4, the answer is "NO" as sum of its proper divisors = 1 + 2 = 3, is not equal to 4.
For the second test case A = 6, the answer is "YES" as sum of its proper divisors = 1 + 2 + 3 = 6, is equal to 6.
Explanation 2:
For the first test case A = 3, the answer is "NO" as sum of its proper divisors = 1, is not equal to 3.
*/

/* Solution
const checkPerfectNo = function(N){
  if(N===0){
    return `${N} is not a perfect no.`;
  }
  let sum = 0;
  for(let i=1; i<N/2; i++){ //Optimised
    if(N%i===0){
      sum += i;
    }
  }
  if(sum === N){
    return `${N} is a perfect no.`;
  }else{
    return `${N} is not a perfect no.`;
  }
}
let T = parseInt(prompt('No. of Test cases'));
for(let t=0; t<T; t++){
  let N = parseInt(prompt('Enter value of N'));
  console.log(checkPerfectNo(N));
}
*/

/*
5. Problem Description---------------------------------------------------
Take T (number of test cases) as input.
For each test case, take integer N as input and Print the count of digits of that number.

Note: No of digits for number 0 is considered as 1.

Problem Constraints

1 <= T <= 1000
0 <= N <= 100000000

Input Format

The first line is the number T which denotes the total number of test cases.
Next T lines contain an integer N for which you have to print the number of digits.
Output Format

For T different Numbers, Print the number of digits in separate lines.
Example Input

Input 1: 
2
0
1

Input 2:
2
100
10101
Example Output

Output 1:
1
1
Output 2:
3
5
*/

/* Solution
const countOfDigits = function(N){
  let count = 0;
  for(; N>0; N=Math.floor(N/10)){
    count++;
  }
  return count;
}

let T = parseInt(prompt(`No. of Test cases`));
for(let t=0; t<T; t++){
  let N = parseInt(prompt(`Enter value of N`));
  console.log(countOfDigits(N));
}
*/

/*
6. Problem Description

You are given an integer N and the task is to reverse the digits of the given integer. Return 0 if the result overflows and does not fit in a 32 bit signed integer

Look at the example for clarification.

Problem Constraints

N belongs to the Integer limits.

Input Format

Input an Integer.


Output Format

Return a single integer denoting the reverse of the given integer.


Example Input

Input 1:

 x = 123

Input 2:

 x = -123

Example Output

Output 1:

 321

Ouput 2:

 -321
*/

const reverseInteger = function(N){
  const intMax = Math.pow(2,31)-1;
  let reverse = 0;
  let sign = N<0?-1:1;
  N = Math.abs(N);
  
  for(; N>0; N = Math.floor(N/10)){
    if(reverse > Math.floor(intMax/10) || (reverse === Math.floor(intMax/10) && N%10>7)){
      return 0;
    }
    reverse = reverse*10 + N%10; 
  }
  return reverse*sign;
}

