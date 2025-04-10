"use strict"
// 1. Given N print a square of stars
/*
let N = 4;
for(let row=1; row<=N; row++){
  console.log("*".repeat(N).trim());
}

for(let row=1; row<=N; row++){
  let rowString = "";
  for(let col=1; col<=N; col++){
    rowString += "*";
  }
  console.log(rowString.trim());
}
*/

// 2. Print a rectangle of stars of size N*M
/*
let N = 5;
let M = 4;

for(let row=1; row<=N; row++){
  let rowString = "";
  for(let col=1; col<=M; col++){
    rowString+="*";
  }
  console.log(rowString.trim());
}

for(let row=1; row<=N; row++){
  console.log("*".repeat(M).trim());
}
*/

/*3. For N, print the pattern 

N=3

*
**
***

*/
/*
let N = 3;
for(let row=1; row<=N; row++){
console.log('*'.repeat(row).trim());
}

for(let row=1; row<=N; row++){
  let rowString ="";
  for(let col=1; col<=row; col++){
    rowString+='*';
  }
  console.log(rowString);
}
*/

// 4. For N, Print
/*
N = 4

****
***
**
*

*/
/*
let N = 4;
for(let row = 1; row<=N; row++){
  let rowString ="";
  for(let col=N; col>=row; col--){
    rowString+='*';
  }
  console.log(rowString);
}

for(let row=N; row>=1; row--){
console.log('*'.repeat(row).trim());
}
*/

//5. For N, Print
/*
N=4

*
*2
*2*
*2*4

*/
/*
let N = 4
for(let row=1; row<=N; row++){
  let rowString ="";
  for(let col=1; col<=row; col++){
    if(col%2===0){
      rowString+=col;
    }else{
      rowString+='*';
    }
  }
  console.log(rowString);
}
*/

//6. For N, print
/*
N=3

*++* (+ represents space)
*++*
*++*

*/
/*
let N = 3;
for(let row=1; row<=N; row++){
  let rowString = '';
  for(let col=1; col<=N; col++){
    if(col===1 || col===N){
      rowString+='*';
    }else{
      rowString+=' '.repeat(N-1);
    }
  }
  console.log(rowString);
}

for(let row=1; row<=N; row++){
  console.log('*'+' '.repeat(N-1)+'*');
}
*/

// 7. For N, Print
/*
N=3

*  *
* *
**

*/
/*
let N = 3;
for(let row=1; row<=N; row++){
  let rowString = '';
  for(let col=N; col>=row; col--){
    if(col === N || col === row ){
    rowString+='*';
    }else{
      rowString=+' ';
    }
  }
  console.log(rowString);
}
*/
/*
let N = 4;  

for (let row = 1; row <= N; row++) {
  let rowString = "";
  for (let col = N; col >= row; col--) {  // Decreasing columns
    if (col === N || col === row) {
      rowString += "*"; // Print '*' at first and last positions
    } else {
      rowString += " "; // Print space in between
    }
  }
  console.log(rowString);
}

for(let row=1; row<=N; row++){
  console.log('*'+' '.repeat(N-row)+'*');
}
*/

//8. For N, print
/*
N=3

++*
+**
***

*/
/*
let N = 4;
for(let row=1; row<=N; row++){
console.log(" ".repeat(N-row)+"*".repeat(row));
}
*/

// 9. For N, print,
/*
N = 3

******
**  **
*    *
**  **
******

*/
/*
let N = 3;
let totalCols = N*2;

for(let row=N; row>=1; row--){
  let starLeft = "*".repeat(row);
  let spaces = " ".repeat(totalCols-2*row);
  let starRight = "*".repeat(row);
  console.log(starLeft+spaces+starRight);
}

for(let row=2; row<=N; row++){
  let starLeft = "*".repeat(row);
  let spaces = " ".repeat(totalCols-2*row);
  let starRight = "*".repeat(row);
  console.log(starLeft+spaces+starRight);
}
*/

//10. For N, print
/*
N=3;

  *
 ***
*****
 ***
  *

*/
/*
let N = 5;
let totalCols = (N*2)-1;
for(let row=N; row>=1; row--){
  let spaceLeft = " ".repeat(row-1);
  let stars = "*".repeat(totalCols-2*(row-1));
  let spaceRight = " ".repeat(row-1);
  console.log(spaceLeft+stars+spaceRight);
}
for(let row=2; row<=N; row++){
  let spaceLeft = " ".repeat(row-1);
  let stars = "*".repeat(totalCols-2*(row-1));
  let spaceRight = " ".repeat(row-1);
  console.log(spaceLeft+stars+spaceRight);
}
*/

// 11. For N=5, Print,
/*
N = 5 

        1
      2 3 4
    3 4 5 6 7
  4 5 6 7 8 9 10
5 6 7 8 9 10 11 12 13
*/


/*
let N = 5;
for (let row = 1; row <= N; row++) {
  let spaces = " ".repeat((N - row)); // Spaces before numbers
  let start = row; // First number in the row
  let numbers = ""; // Holds the number sequence

  for (let i = 0; i < row * 2 - 1; i++) {
    numbers += (start + i) + " ";
  }

  console.log(spaces + numbers.trim()); // Print the final row
}
*/

//12. For N, Print 
/*
N = 5 
        1
      2 3 2
    3 4 5 4 3
  4 5 6 7 6 5 4
5 6 7 8 9 8 7 6 5
*/
/*
let N = 5;
for(let row=1; row<=N; row++){
  let spaces = " ".repeat((N-row)*2);
  let start = row;
  let inc = "";
  let dec = '';
  //Increasing Part
  for(let i=0; i<row; i++){
  inc += (start+i)+" ";
  }
  //Decreasing Part
  for (let i = row * 2 - 2; i >= row; i--) {
    dec += i + " ";
  }
  console.log(spaces+inc+dec.trim());
}
*/

//13. For N, print 
/*
N = 5;

        5
      4 8 12
    3 6 9 12 15
  2 4 6 8 10 12 14
1 2 3 4 5 6  7  8  9

*/
/*
let N = 5;
for(let row=N; row>=1; row--){
  let spaces = " ".repeat((row-1)*2);
  let numbers = '';
  for(let i=1; i<=(2*(N-row)+1); i++){
  numbers += (row*i)+" ";
  }
  console.log(spaces+numbers);
}
*/

//ASSIGNMENTS--------------------------------------------------------------------
/*
1. Problem Description

Given an integer N, print N stars in a single line.

For example if N = 5 then pattern will be like:

*****

Problem Constraints

2 <= N <= 100



Input Format

Single line input contains a single integer N.



Output Format

Output N stars in a single line.


Example Input

Input 1:

 2
Input 2:

 3

Example Output

Output 1:

**
Output 2:

***
*/
/*
let count = 5;
const printStars = (count) => "*".repeat(count);
console.log(printStars(count));
*/

/*
2. Problem Description

Given two integers N and M as inputs, print a rectangle of N * M stars.

For example if N = 3, M = 4 then pattern will be like:

****
****
****

Problem Constraints

2 <= N, M <= 100



Input Format

First line of input contains an integers N (no of rows).

Second line of input contains an integer M (no of cols).

Output Format

Output N * M rectangle of stars.

Example Input

Input 1:

 2
 3
Input 2:

 3
 1

Example Output

Output 1:

***
***
Output 2:

*
*
*

*/
/*
const printRectangleOfstars = (row,col)=>{
  if(row<0 || col<0){
    return "";
  }
  let stars = '';
  for(let i=1; i<=row; i++){
      stars += "*".repeat(col) + '\n';
    }
  return stars.trimEnd();
}
console.log(printRectangleOfstars(3,4));
*/

/*
3. Problem Description

Take an integer N as input, print the corresponding stair pattern for N.

For example if N = 4 then stair pattern will be like:

*
**
***
****

Problem Constraints

1 <= N <= 100



Input Format

First and only line of input contains a single integer N.



Output Format

Output the stair pattern corresponding to the given N.



Example Input

Input 1:

 2
Input 2:

 3


Example Output

Output 1:

 *
 **
Output 2:

 *
 **
 ***
*/
/*
const printStarsPattern = (row)=>{
  if(row<0 || row===0){
    return "";
  }
  let stars = '';
  for(let i=1; i<=row; i++){
    stars += '*'.repeat(i) + '\n';
  }
  return stars.trimEnd();
}

console.log(printStarsPattern(4));
*/

/*
Problem Description

Take an integer N as input, print the corresponding pattern for N.

For example if N = 5 then pattern will be like:

1
1_
1_3
1_3_
1_3_5
Note : Here '_' represents space for explanation purpose only. You have to print space in your code.


Problem Constraints

1 <= N <= 100



Input Format

First and only line of input contains a single integer N.



Output Format

Output the pattern corresponding to the given N.


Example Input

Input 1:

 2
Input 2:

 3


Example Output

Output 1:

1
1 
Output 2:

 1
 1 
 1 3
*/
/*
const printNumsPattern = (row) => {
  let numPattern = '';
  for(let i=1; i<=row; i++){
    if(i%2===0){
      numPattern += '_';
    }else{
      numPattern += i;
    }
    console.log(numPattern.trimEnd());
  }
}
printNumsPattern(5);
*/

/*
5. Problem Description

Print a pattern consisting of N rows, where each row contains an asterisk (*) at the beginning and end of the line, with N-2 spaces in between.

The Pattern should look like:

*<N-2 Spaces>*

Print the above pattern for a total of N Rows.

Refer Example ouput, for better clarification.


Problem Constraints

2 <= N <= 100

Input Format

First and only line of input contains a single integer N.



Output Format

Output the pattern corresponding to the given N.



Example Input

Input 1:

 2
Input 2:

 4

Example Output

Output 1:

**
**
Output 2:

*  *
*  *
*  *
*  *

*/
/*
const printStars = (row) => {
  let stars = "";
  if(row===1){
    console.log("*");
   }
  let spaces = " ".repeat(row-2);
  stars = "*"+spaces+"*";
  for(let i=1; i<=row; i++){
    console.log(stars);
  }
}
printStars(4);
*/

/*
6. Problem Description

Take an integer N as input, print the corresponding pattern for N.

For example if N = 5 then pattern will be like:

____*
___**
__***
_****
*****
Note : Here '_' represents space for explanation purpose only. You have to print space in your code.


Problem Constraints

1 <= N <= 100

Input Format

First and only line of input contains a single integer N.


Output Format

Output the pattern corresponding to the given N.


Example Input

Input 1:

 2
Input 2:

 3

Example Output

Output 1:

 *
**
Output 2:

  *
 **
***
*/
/*
let N = 5;
const printStars = (N) => {
  for(let i=1; i<=N; i++){
    let spaces = " ".repeat(N-i);
    let stars = "*".repeat(i);
    console.log(spaces+stars);
  }
}
printStars(N);
*/

/*
7. Problem Description

Take an integer N as input, print the corresponding Numeric Inverted Half Pyramid pattern for N.

For example if N = 4 then pattern will be like:

1 2 3 4
1 2 3
1 2
1

Problem Constraints

1 <= N <= 100


Input Format
First and only line of input contains a single integer N.



Output Format

Output the Numeric Inverted Half Pyramid pattern corresponding to the given N.

NOTE: There should be no extra spaces after last integer and before first integer in any . All integers in any row in the pattern are separated by a single space.


Example Input

Input 1:
 2

Input 2:

 3
Example Output

Output 1:
1 2
1

Output 2:
1 2 3
1 2
1
*/

/*
const printPattern = (N)=>{
for(let row=1; row<=N; row++){
  let line = "";
  for(let col=1; col<=N-row+1; col++){
    line += col + " ";
  }
  console.log(line);
}
}
printPattern(3);
*/

//ADDITIONAL PROBLEMS---------------------------------------------------------------
/*
1. Problem Description
Take an integer N as input, print the corresponding pattern for N.
For example if N = 4 then pattern will be like:

1
1 2
1 2 3
1 2 3 4

NOTE: There should be no extra spaces after last integer.

Problem Constraints

1 <= N <= 100

Input Format

First and only line of input contains a single integer N.

Output Format

Output the pattern corresponding to the given N.

NOTE:

There should be no extra spaces after last integer and before first integer in any row.
All integers in any row in the pattern are space separated.

Example Input

Input 1:
 2

Input 2:
 3

Example Output

Output 1:
1
1 2

Output 2:
1
1 2
1 2 3
*/
/*
const printNumPattern = (N)=>{
  for(let row = 1; row<=N; row++){
    let line = '';
    for(let col=1; col<=row; col++){
      line+=col+' ';
    }
    console.log(line);
  }
}
printNumPattern(4);
*/

/*
2. Problem Description

Given an integer N, print the corresponding Inverted Half Pyramid pattern for N.

For example if N = 4 then pattern will be like:

****
***
**
*


Problem Constraints

1 <= N <= 100



Input Format

First and only line of input contains a single integer N.



Output Format

Output the Inverted Half Pyramid pattern corresponding to the given N.



Example Input

Input 1:

 2
Input 2:

 3
Example Output

Output 1:
 **
 *
Output 2:
 ***
 **
 *

*/
/*
const printStarsPattern = (N) => {
  let stars = '';
for(let row=N; row>0; row--){
  stars = '*'.repeat(row);
  console.log(stars);
}
}
printStarsPattern(4);
*/

/*
3. Problem Description

Print a pattern consisting of N rows, where each row contains an asterisk (*) at the beginning and end of the line, with N-2 spaces in between.

The Pattern should look like:

*<N-2 Spaces>*

Print the above pattern for a total of N Rows.

Refer Example ouput, for better clarification.


Problem Constraints

2 <= N <= 100

Input Format

First and only line of input contains a single integer N.
Output Format

Output the pattern corresponding to the given N.

Example Input

Input 1:

 2
Input 2:

 4

Example Output

Output 1:

**
**
Output 2:

*  *
*  *
*  *
*  *


Example Explanation

Explanation 1:
 Here N = 2,  So each row should have N - 2 spaces which is 0.
 Thus the N rows(i.e, 2 rows) should be in the form (asterisk)(0 spaces)(asterisk)
Explanation 2:
 Here N = 4,  So each row should have N - 2 spaces which is 2.
 Thus the N rows(i.e, 4 rows) should be in the form (asterisk)(2 spaces)(asterisk)
*/
/*
const printStarsPattern = (N) => {
  let spaces = ' '.repeat(N-2);
  for(let row=1; row<=N; row++){
      console.log("*"+spaces+"*");
  }
}
printStarsPattern(4);
*/

/*
4. Problem Description

Take an integer N as input, print the corresponding pattern for N.
For example if N = 5 then pattern will be like:

*****
_****
__***
___**
____*
Note : Here '_' represents space for explanation purpose only. You have to print space in your code.

Problem Constraints

1 <= N <= 100

Input Format

First and only line of input contains a single integer N.

Output Format

Output the pattern corresponding to the given N.

Example Input

Input 1:

 2
Input 2:

 3
Example Output

Output 1:

**
_*
Output 2:

 
 ***
 _**
 __*
Note : Here '_' represents space for explanation purpose only. You have to print space in your code.
*/
/*
const printStarsPattern = (N) => {
  let pattern = "";
  for(let row = 1; row<=N; row++){
  let spaces = ' '.repeat(row-1);
  let stars = '*'.repeat(N-row+1);
  pattern = spaces+stars;
  console.log(pattern);
  }
  }
printStarsPattern(4);
*/

/*
Problem Description

Take an integer N as input, print the corresponding pattern for N.

For example if N = 5 then pattern will be like:

********** // 0 spaces

****__**** // 2 spaces

***____*** // 4 spaces

**______** // 6 spaces

*________* // 8 spaces
NOTE: Here '_' is used to represent spaces. You have to print spaces in your code.



Problem Constraints

2 <= N <= 100



Input Format

First and only line of input contains a single integer N.



Output Format

Output the Full Pyramid pattern corresponding to the given N.



Example Input

Input 1:

 2
Input 2:

 3


Example Output

Output 1:

**** // 0 spaces

*__* // 2 spaces
Output 2:

****** // 0 spaces

**__** // 2 spaces

*____* // 4 spaces

NOTE: Here '_' is used to represent spaces. You have to print spaces in your code.
*/
/*
const printStarsPattern = (N) => {
  for(let row=N; row>0; row--){
    let starsLeft = '*'.repeat(row);
    let spaces = ' '.repeat((N-row)*2);
    let starsRight = '*'.repeat(row);
    console.log(starsLeft+spaces+starsRight);
  }
}
printStarsPattern(4);
*/

/*
6. Problem Description

Write a program to input an integer N from user and print hollow inverted right triangle star pattern of N lines using '*'.

See example for clarifications.



Problem Constraints

1 <= N <= 1000



Input Format

First line is an integer N



Output Format

N lines conatining only char '*' as per the question.



Example Input

Input 1:

7
Input 2:

4


Example Output

Output 1:

*******
*    *
*   *
*  *
* *
**
*
Output 2:

****
* *
**
*

*/
/*
const printStarsPattern = (N) => {
  for(let row = 1; row<=N; row++){
    if(row === 1){
      console.log("*".repeat(N));
    }else{  
      let starsLeft = "*";
      let spaces = " ".repeat(N-row); 
      let starsRight = row===N?"":"*";
      console.log(starsLeft+spaces+starsRight);
    }
  }
}
console.log(printStarsPattern(7));
*/
/*
const printStarsPattern = (N) => {
  for(let row = 1; row <= N; row++) {
    if(row === 1) {
      console.log("*".repeat(N));
    } else {
      let starsLeft = "*";
      let spaces = " ".repeat(Math.max(0, N - row - 1)); 
      let starsRight = row === N ? " " : "*";
      console.log(starsLeft + spaces + starsRight);
    }
  }
}
printStarsPattern(7);
*/

/*
7. Problem Description

Take an integer N as input, print the corresponding pattern for N.

For example if N = 5 then pattern will be like:

*****
*   *
*   *
*   *
*****
Note : Except for the first line and the last line, every line will have N-2 spaces between the two stars.

Problem Constraints

3 <= N <= 100

Input Format

First and only line of input contains a single integer N.

Output Format

Output the pattern corresponding to the given N.

Example Input

Input 1:

 3
Input 2:

 4
Example Output

Output 1:

***
* *
***
Output 2:

****
*  *
*  *
****

*/
/*
const printPhotoFrame = (N) => {
for(let row = 1; row<=N; row++){
  if(row === 1 || row === N){
  console.log('*'.repeat(N));
  }else{
    console.log('*'+" ".repeat(N-2)+"*");
  }
}
}
printPhotoFrame(4);
*/

//Beginer Pattern - 2
//ASSIGNMENT QUESTIONS ------------------------------------------------------------------------
/*
1. Problem Description
Take an integer N as input, print the corresponding pattern for N.
For example if N = 5 then pattern will be like:

*________* // 8 spaces

**______** // 6 spaces

***____*** // 4 spaces

****__**** // 2 spaces

********** // 0 spaces

NOTE: Here '_' is used to represent spaces. You have to print spaces in your code.


Problem Constraints

2 <= N <= 100



Input Format

First and only line of input contains a single integer N.



Output Format

Output the Full Pyramid pattern corresponding to the given N.



Example Input

Input 1:

 2
Input 2:

 3


Example Output

Output 1:

*__* // 2 spaces

**** // 0 spaces
Output 2:

*____* // 4 spaces

**__** // 2 spaces

****** // 0 spaces

NOTE: Here '_' is used to represent spaces. You have to print spaces in your code.
*/
/*
const printPattern = (N) => {
  for(let row = 1; row<=N; row++){
    let stars= "*".repeat(row);
    let spaces = ' '.repeat(2*(N-row));
    console.log(stars+spaces+star);
  }
}
printPattern(3);
*/

/*
3. Problem Description

Take an integer N as input, print the corresponding pattern for N.

For example if N = 5 then pattern will be like:

********** // 0 spaces

****__**** // 2 spaces

***____*** // 4 spaces

**______** // 6 spaces

*________* // 8 spaces
NOTE: Here '_' is used to represent spaces. You have to print spaces in your code.



Problem Constraints

2 <= N <= 100



Input Format

First and only line of input contains a single integer N.



Output Format

Output the Full Pyramid pattern corresponding to the given N.



Example Input

Input 1:

 2
Input 2:

 3


Example Output

Output 1:

**** // 0 spaces

*__* // 2 spaces

Output 2:

****** // 0 spaces

**__** // 2 spaces

*____* // 4 spaces

NOTE: Here '_' is used to represent spaces. You have to print spaces in your code.
*/
/*
const printPattern = (N) => {
  for(let row=N; row>0; row--){
    let stars = '*'.repeat(row);
    let spaces = ' '.repeat(2*(N-row));
    console.log(stars+spaces+stars);
  }
}
printPattern(3);
*/

/*
3. Problem Description

Given an integer N as input, print the corresponding Full Numeric Pyramid pattern for N.

For example if N = 5 then pattern will be like:

0 0 0 0 1 0 0 0 0 
0 0 0 2 3 2 0 0 0 
0 0 3 4 5 4 3 0 0
0 4 5 6 7 6 5 4 0
5 6 7 8 9 8 7 6 5 

NOTE: There should be exactly one extra space after each number for each row.


Problem Constraints

2 <= N <= 100



Input Format

First and only line of input contains a single integer N.



Output Format

Output the Full Pyramid pattern corresponding to the given N.

NOTE:

There is no extra space before the first integer of any row.
There is an extra space after the last integer of any row.
All the integers in any row are space separated.


Example Input

Input 1:

 2
Input 2:

 3


Example Output

Output 1:

0 1 0
2 3 2
Output 2:

0 0 1 0 0
0 2 3 2 0
3 4 5 4 3

*/


/*
4. Problem Description

Take an integer N, print the corresponding Full Pyramid pattern for N.

For example if N = 5 then pattern will be like:

    * 
   * * 
  * * * 
 * * * * 
* * * * * 
NOTE: There should be exactly one extra space after each * for each row.


Problem Constraints

2 <= N <= 100



Input Format

First and only line of input contains a single integer N.



Output Format

Output the Full Pyramid pattern corresponding to the given N.



Example Input

Input 1:

 2
Input 2:

 3
Input 3:

 4


Example Output

Output 1:

  * 
 * * 
Output 2:

   * 
  * * 
 * * * 
Output 3:

    * 
   * * 
  * * * 
 * * * * 

*/
/*
const printStars = (N) => {
  for(let row=1; row<=N; row++){
    let spaces = ' '.repeat(N-row);
    let stars = '* '.repeat(row);
    console.log(spaces+stars);
  }
}
printStars(3);
*/

//ADDITIONAL PROBLEMS
/*
1. Problem Description
Take an integer N as input. Print the following pattern of N lines. For N = 5 The following pattern is printed.

*     *

*    *

*   *

*  *

* *
The first line has 5 blank spaces between the stars.
The second line has 4 blank spaces between the stars, and so on.

Input Format

The input will be a single integer N.
Output Format

The output will be the pattern according to the given N value as described in the problem description.
Sample Input

3
Sample Output

*   *
*  *
* *

*/
/*
const printPattern = (N) => {
  for(let row = N; row>0; row--){
   let spaces = ' '.repeat(row);
   console.log('*'+spaces+'*'); 
  }
}
printPattern(3);
*/

/*
2. Problem Description

Take an integer N as input, print the corresponding Full Numeric Pyramid pattern for N.

For example if N = 5 then pattern will be like:

0 0 0 0 5 0 0 0 0 
0 0 0 4 8 12 0 0 0 
0 0 3 6 9 12 15 0 0
0 2 4 6 8 10 12 14 0
1 2 3 4 5 6 7 8 9 
NOTE: There should be exactly one extra space after each number for each row.


Problem Constraints

2 <= N <= 100



Input Format

First and only line of input contains a single integer N.


Output Format

Output the Full Pyramid pattern corresponding to the given N.

NOTE:

There is no extra space before the first integer of any row.
There is an extra space after the last integer of any row.
All the integers in any row are space separated.


Example Input

Input 1:

2
Input 2:

3


Example Output

Output 1:


0 2 0
1 2 3
Output 2:

0 0 3 0 0
0 2 4 6 0
1 2 3 4 5

*/
/*
const printNumPattern = (N) => {
  for(let row = N; row>0; row--){
    let spaces = "0 ".repeat(row-1);
    let num = '';
    for(let col=1; col<=(2*(N-row)+1); col++){
      num += (col*row)+' ';
    }
    console.log(spaces+num+spaces);
  }
}
printNumPattern(5);
*/

/*
const printNumPattern = (N) => {
  for (let row = 1; row <= N; row++) {
    let line = '';

    // Stage 1: Left zeroes
    line += '0 '.repeat(N - row);

    // Stage 2: Numbers (multiples of row)
    const numCols = 2 * (row - 1) + 1;
    for (let col = 1; col <= numCols; col++) {
      line += (row * col) + ' ';
    }

    // Stage 3: Right zeroes
    line += '0 '.repeat(N - row);

    // Print the line after trimming any trailing space
    console.log(line.trim());
  }
};

printNumPattern(3);
*/

/*
3. Problem Description

Take an integer N as input, print the corresponding Half Diamond pattern with 2*N - 1 rows.

For example if N = 5 then pattern will be like:

* 
**
***
****
*****
****
***
**
*
NOTE: There should be no spaces after any * .


Problem Constraints

2 <= N <= 100


Input Format

First and only line of input contains a single integer N.



Output Format

Output the Half Diamond pattern corresponding to the given N.



Example Input

Input 1:

 2
Input 2:

 3


Example Output

Output 1:

 * 
 **
 *
Output 2:

 *
 **
 ***
 **
 *
 
*/
