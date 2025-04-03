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
