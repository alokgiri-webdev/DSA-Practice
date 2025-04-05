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