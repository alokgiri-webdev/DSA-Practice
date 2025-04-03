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