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