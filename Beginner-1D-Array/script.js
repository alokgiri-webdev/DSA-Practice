"use strict"
//1. Find the max of an array
/*
let arr = [5,2,3,4,1];

let maxArr=arr[0];
for(let i=0; i<arr.length; i++){
  if(arr[i]>maxArr){
    maxArr = arr[i];
  }
}

console.log(maxArr);
*/
//2. Find the min of an array
/*
let arr = [5,3,2,1,0];

let minArr = arr[0];
for(let i=0; i<arr.length; i++){
  if(arr[i]<minArr){
    minArr = arr[i];
  }
}
console.log(minArr);
*/

//3. Write a function which returns an array containing the max and min of the array
/*
const maxMinArray = function(arr){
  let maxArr = arr[0];
  let minArr = arr[0];
  for(let i=1; i<arr.length; i++){
    if(arr[i]>maxArr) maxArr = arr[i];
    if(arr[i]<minArr) minArr = arr[i]; 
    }
    return [maxArr,minArr];
  }
let arr = [5,3,7,2,9,8]
console.log(maxMinArray(arr));
*/

// ASSIGNMENTS -----------------------------------------------------------------------------
/*
1. Problem Description

Write a program to input N numbers array, a number X and a number Y from user and insert an element Y in it at specified position X. X is based on 1-based indexing

Note: When an element is inserted at position X, all elements that were already present at position >= X, gets shifted to one position right, not replaced.

Problem Constraints

1 <= N <= 100

1 <= A[i] <= 1000

1 <= X <= N

1 <= Y <= 1000

Input Format

First line is N which represents number of elements.

Second line contains N space separated integers.

Third line is X position where Y has to be inserted.

Fourth line is Y which is the value to be inserted.

Output Format

N+1 space separated integers of the input array after inserting the element at required position.

Example Input

Input 1:

5

2 3 1 4 2

3

5

Example Output

Output 1:

2 3 5 1 4 2

Example Explanation

Explanation 1:

Clearly after inserting 5 at 3rd position, new array is 2 3 5 1 4 2.

Note:

This question requires you to read a list of integers from input using the map() function.
Since this concept will be covered later in the module, we encourage you to do some independent research and write your code accordingly.
You may also refer to the following article for further guidance: link
*/