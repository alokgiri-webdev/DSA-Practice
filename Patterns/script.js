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