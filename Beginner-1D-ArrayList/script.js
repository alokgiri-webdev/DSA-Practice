"use strict"
//ASSIGNMENTS------------------------------------------------------------------------
/*
1. Problem Description

You are given an integer T (number of test cases). You are given array A and an integer B for each test case. You have to tell whether B is present in array A or not.

Problem Constraints

1 <= T <= 10
1 <= A <= 105
1 <= A[i], B <= 109


Input Format

First line of the input contains number of test cases as single integer T .
Next, each of the test case consists of 3 lines:

First line contains a single integer A denoting the length of array
Second line contains A integers denoting the array elements
Third line contains a single integer B


Output Format

For each test case, print on a separate line 1 if the element exists, else print 0.



Example Input

Input 1:




 1 
 5 
 4 1 5 9 1
 5
Input 2:

 1
 3 
 7 7 2
 1 





Example Output

Output 1:




 1 
Output 2:

 0 





Example Explanation

Explanation 1:




  B = 5  is present at position 3 in A 
Explanation 2:

  B = 1  is not present in A. 

*/

//Solution:
/*
const findElement = (arr,ele)=>{
  for(let i=0; i<=arr.length; i++){
    if(arr[i]===ele){
      return 1;
    }
  }
  return 0
}
console.log(findElement([4, 1, 5, 9, 1],5));
*/

/*
2. Problem Description

Write a program that returns the list of elements that are present in the given list and are divisible by 5 and 7.

Problem Constraints

1 <= A.size() <= 105
1 <= A[i] <= 105

Input Format

The only argument is an Integer Array A.

Output Format

Return an Integer Array, denoting the elements that are divisible by 5 and 7 from the given list.

Example Input

Input 1:
A = [5, 7, 70, 50, 35]
Input 2:
A = [105, 57]


Example Output

Output 1:
[70, 35]
Output 2:
[105]


Example Explanation

Explanation 1:
Only 35 and 70 are divisible by 5 and 7 from the list [5, 7, 70, 50, 35]

Therefore the list consisting of only these two elements is returned.
Explanation 2:
105 is divisible by (5 and 7).

*/
//Solution:
/*
const divisibleBy = (arr)=>{
  let result = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i]%5 === 0 && arr[i]%7 === 0){
       result.push(arr[i]);
    }
  }
  return result;
}
console.log(divisibleBy([5, 7, 70, 50, 35]));
*/

/*
3. Problem Description

Given an integer array A. Find and return the frequency of number B in array A.


Problem Constraints

1 <= |A| <= 105
1 <= A[i] <= 109
1 <= B <= 109


Input Format

The first argument is an integer array A.
The second argument is an integer B.


Output Format

Return the frequency of B in the array A.


Example Input

Input 1:-
A = [1, 1, 2, 4, 2]
B = 2
Input 2:-
A = [4, 2, 3, 4, 4]
B = 4


Example Output

Output 1:-
2
Output 2:-
3


Example Explanation

Explanation 1:-
There are two occurences of 2 in array A.
Explanation 2:-
There are three occurences of 4 in array A.

Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases

*/
//Solution:
/*
const frequencyOfArrElement = (arr,k)=>{
  let count = 0;
  for(let i=0; i<arr.length; i++){
   if(arr[i] === k){
    count++;
   }
  }
  return count;
}
console.log(frequencyOfArrElement([1, 1, 2, 4, 2],2));
*/

/*
4. Problem Description

Given an array A, check if it is sorted in non-decreasing order or not.

Non-decreasing order means that the numbers in a sequence can stay the same or increase, but they cannot decrease.


Problem Constraints

1 <= Ai <= 109
1 <= |A| <= 105


Input Format

The first and only argument contains an integer array A.


Output Format

Return 1 if array is sorted else return 0.


Example Input

Input 1:
 A = [1, 2, 2] 
Input 2:
 A = [1, 2, 1] 


Example Output

Output 1:
 1
Output 2:
 0


Example Explanation

Explanation 1:
We can see that the array elements are in non-decreasing order.
Explanation 2:
Second element is greater than the third element thus array is not in ascending order, hence not sorted.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
*/
//Solution:
/*
const checkNonDecreasingArr = (arr)=>{
  for(let i=1; i<arr.length; i++){
    if(arr[i-1]>arr[i]){
      return 0;
    }
  }
return 1;
}
console.log(checkNonDecreasingArr([1, 2, 1]));
*/

/*
5. Problem Description

Given an Array of integers A, every element in it is repeated twice except one, find that unique element.


Problem Constraints

1<= Length of array A <= 103
0<= Ai <=1000


Input Format

First argument A is the given array.


Output Format

Return an Integer X, such that X occurs once in the A.


Example Input

Input 1:

A = [1, 4, 3, 5, 2, 3, 5, 1, 4]
Input 2:

A = [9, 10, 7, 10, 9, 1, 5, 1, 5]

Example Output

Output 1:

2
Output 2:

7

Example Explanation

In Example 1:
All the elements except for 2 occurs twice in the array. Hence 2 is the unique element.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases

*/
//Solution:
/*
const findUnique = (arr)=>{
  for(let i=0; i<arr.length; i++){
    let count = 0;
    for(let j=0; j<arr.length; j++){
      if(arr[i]===arr[j]){
        count++;
      }
    }
    if(count===1){
      return arr[i];
    }
  }
}
console.log(findUnique([1, 4, 3, 5, 2, 3, 5, 1, 4]));
*/

//ADDITIONAL QUESTIONS
/*
1. Problem Description:

Write a program that returns the product of all elements present in the array.

Note: The list with elements is already passed as an argument to the function. User don't need to take any input. Just perform the task on the passed arguments and return the required result.

Constraints:

1 <= |A| <= 100
1 <= A <= 100
Note: It is guaranteed that the resultant product will be <= 1015
Input Format:

An integer array **A** as the function argument.
Output Format:

Product of elements in integer format
Sample Input:

A = [7, 9, 2, 51]
Sample Output:

6426
Sample explanation:

The product of all the elements is 7 * 9 * 2 * 51 = 6426 is returned.
*/
//Solution:

/*
2. Problem Description

You are given an integer array A and an integer B.

You are required to return the count of pairs having sum equal to B.

NOTE: pair (i,j) and (j,i) are same.



Problem Constraints

1 <= A.size() <= 10000

1 <= A[i] <= 10000

1 <= B <= 10000



Input Format

First argument is an integer array A.

Seond argument is an integer B.



Output Format

You have to return an integer representing count of required pairs.



Example Input

Input 1:

A = [1,2,3,2,1]
B = 5
Input 2:

A = [1,1,1]
B = 2


Example Output

Output 1:

2
Output 2:

3


Example Explanation

Explanation 1:

 A[1]+A[2] = A[2]+A[3] = 5
Explanation 2:

 A[0]+A[1] = A[0]+A[2] = A[1]+A[2] = 2


Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases.
*/
//Solution:

/*
3. Problem Description

Write a function to check if the given array A has consecutive duplicate elements or not.
Return True if there are consecutive duplicate elements in the list else return False.

Here by consecutive duplicates, we mean duplicates that are present at consecutive indices in the array


Problem Constraints

1 <= N <= 105
1 <= A[i] <= 109


Input Format

An integer array A as the function argument.


Output Format

Return True or False


Example Input

Input 1:
1
4
1 2 3 3
Input 2:
1
2
1 2


Example Output

Output 1:
True
Output 2:
False


Example Explanation

Explanation 1:
As there are 3 3 in the list i.e. at indices 2 and 3, there True is returned.
Explanation 2:
There are no consecutive duplicate elements in the list.
*/ 
//Solution:

/*
4. Problem Description

You are provided with an integer array A. Return another array B of size same as that of A such that B[i] = A[i]3 for 1 <= i <= |A| (1 based indexing).


Problem Constraints

1 <= |A| <= 106
1 <= A[i] <= 106


Input Format

The first and only argument is an integer array A.


Output Format

Return array B.


Example Input

Input 1 :
A=[2, 6, 8, 1]
Input 2 :
A=[5]


Example Output

Output 1 :
[8, 216, 512, 1]
Output 2 :
[125]


Example Explanation

Example 1 : Cubes of numbers 2, 6, 8 and 1 are 8, 216, 512 and 1 respectively.

Example 2 : Cubes of number 5 is 125.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
*/
//Solution:

/*
5. Problem Description

You are given an integer array A, you have to return an integer array of same size whose ith element is the frequency count of A[i] in array A .

Note:

When comparing two elements of the ArrayList(java), make sure to use .equals() method for accurate comparison.
Eg : To compare ith index with jth index use A.get(i).equals(A.get(j)).



Problem Constraints

1 <= len(A) <= 1000


1 <= A[i] <= 100




Input Format

First argument is an array of integers representing array A.



Output Format

You have to return an array of integers as per the question.



Example Input

Input 1:

A = [1, 2, 5, 1, 5, 1 ]


Example Output

Output 1:

[3, 1, 2, 3, 2, 3]


Example Explanation

Explanation 1:

Clearly, In the given array we have 1 three times, 2 one time and 5 two times.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
*/
//Solution:


// 
/*
5. Problem Description

Given an Array of integers A, every element in it is repeated twice except one, find that unique element.


Problem Constraints

1<= Length of array A <= 103
0<= Ai <=1000


Input Format

First argument A is the given array.


Output Format

Return an Integer X, such that X occurs once in the A.


Example Input

Input 1:

A = [1, 4, 3, 5, 2, 3, 5, 1, 4]

Input 2:

A = [9, 10, 7, 10, 9, 1, 5, 1, 5]

Example Output

Output 1:

2
Output 2:

7

Example Explanation

In Example 1:
All the elements except for 2 occurs twice in the array. Hence 2 is the unique element.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases

*/
//Solution:
/*
const findUnique = (arr)=>{
  for(let i=0; i<arr.length; i++){
    let count = 0;
    for(let j=0; j<arr.length; j++){
      if(arr[i]===arr[j]){
        count++;
      }
    }
    if(count === 1){
      return arr[i];
    }
  }
  return -1;
}
console.log(findUnique([9, 10, 10, 9, 1, 5, 1, 5])); 
*/

/*
function call(obj) {
  obj.val = 100;
  console.log(data.val); // Guess the o/p
}

let data = { val: 1};
call(data);

console.log(data.val); // Guess the o/p
*/

/* Find the missing element of the arr. 
Input
arr = [1,2,3,5,6,7];
O/P
= 4
*/
/*

const findMissingElement = (arr)=>{
  //Looping over the arr
  for(let i=0; i<arr.length-1; i++){
    const diff = arr[i+1] - arr[i];
    if(diff === 1){
    continue;
    }else{
      return arr[i]+1;
    }
  }
}
console.log(findMissingElement([1,2,3,5,6,7]));
*/
/*
i=0     diff= 1   skips
i=1     diff=1    skips
i=2     diff=2    3+1 = 4

*/

//ADDITIONAL PROBLEMS-----------------------------------------------------------------
/*
1. Problem Description:

Write a program that returns the product of all elements present in the array.

Note: The list with elements is already passed as an argument to the function. User don't need to take any input. Just perform the task on the passed arguments and return the required result.

Constraints:

1 <= |A| <= 100
1 <= A <= 100
Note: It is guaranteed that the resultant product will be <= 1015
Input Format:

An integer array **A** as the function argument.
Output Format:

Product of elements in integer format
Sample Input:

A = [7, 9, 2, 51]
Sample Output:

6426
Sample explanation:

The product of all the elements is 7 * 9 * 2 * 51 = 6426 is returned.
*/
//Solution:


/*
2. Problem Description

You are given an integer array A and an integer B.

You are required to return the count of pairs having sum equal to B.

NOTE: pair (i,j) and (j,i) are same.



Problem Constraints

1 <= A.size() <= 10000

1 <= A[i] <= 10000

1 <= B <= 10000



Input Format

First argument is an integer array A.

Seond argument is an integer B.



Output Format

You have to return an integer representing count of required pairs.



Example Input

Input 1:

A = [1,2,3,2,1]
B = 5
Input 2:

A = [1,1,1]
B = 2


Example Output

Output 1:

2
Output 2:

3


Example Explanation

Explanation 1:

 A[1]+A[2] = A[2]+A[3] = 5
Explanation 2:

 A[0]+A[1] = A[0]+A[2] = A[1]+A[2] = 2

*/

/*
const findPair = (arr,k)=>{
  //Looping over the array
  let countPair = 0;
  for(let i=0; i<arr.length-1; i++){
  if(arr[i]+arr[i+1] === k){
  countPair++;
  }
  }
  return countPair;
  }
  console.log(findPair([1,2,3,2,1],5));
*/

/*
3. Problem Description

Write a function to check if the given array A has consecutive duplicate elements or not.
Return True if there are consecutive duplicate elements in the list else return False.

Here by consecutive duplicates, we mean duplicates that are present at consecutive indices in the array


Problem Constraints

1 <= N <= 105
1 <= A[i] <= 109


Input Format

An integer array A as the function argument.


Output Format

Return True or False


Example Input

Input 1:
1
4
1 2 3 3
Input 2:
1
2
1 2


Example Output

Output 1:
True
Output 2:
False
*/
//Solution:

/*
4. Problem Description

You are provided with an integer array A. Return another array B of size same as that of A such that B[i] = A[i]3 for 1 <= i <= |A| (1 based indexing).


Problem Constraints

1 <= |A| <= 106
1 <= A[i] <= 106


Input Format

The first and only argument is an integer array A.


Output Format

Return array B.


Example Input

Input 1 :
A=[2, 6, 8, 1]
Input 2 :
A=[5]


Example Output

Output 1 :
[8, 216, 512, 1]
Output 2 :
[125]


Example Explanation

Example 1 : Cubes of numbers 2, 6, 8 and 1 are 8, 216, 512 and 1 respectively.

Example 2 : Cubes of number 5 is 125.
*/
//Solution:

/*
5. Problem Description

You are given an integer array A, you have to return an integer array of same size whose ith element is the frequency count of A[i] in array A .

Note:

When comparing two elements of the ArrayList(java), make sure to use .equals() method for accurate comparison.
Eg : To compare ith index with jth index use A.get(i).equals(A.get(j)).



Problem Constraints

1 <= len(A) <= 1000


1 <= A[i] <= 100




Input Format

First argument is an array of integers representing array A.



Output Format

You have to return an array of integers as per the question.



Example Input

Input 1:

A = [1, 2, 5, 1, 5, 1 ]


Example Output

Output 1:

[3, 1, 2, 3, 2, 3]


Example Explanation

Explanation 1:

Clearly, In the given array we have 1 three times, 2 one time and 5 two times.
*/