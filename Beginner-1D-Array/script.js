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

//Solution
/*
const createNewArr = (orginalArray,position,valueToInsert) => {
  const orginalArrayCopy = [...orginalArray]; 
  orginalArrayCopy.splice(position-1,0,valueToInsert);
  return orginalArrayCopy;
}
const Arr = [2, 3, 1, 4, 2];
console.log(createNewArr(Arr,3,5)); 
*/

/*
2. Problem Description
Take input an array A of size N and write a program to print maximum and minimum elements of the input. The only line of the input would contain a single integer N that represents the length of the array followed by the N elements of the input array A.

Problem constraints

1 <= N <= 1000

1 <= A <= 1000


Input Format

The first line contains a single integer N representing the length of the array A followed by N elements of the array A.


Output Format

A single line output containing two space-separated integers.
The first integer is the maximum value of the array.
The second integer is the minimum value of the array. 

There is **no space** after the minimum value in the output format. 
There is only a **single space** between the maximum and minimum value.


Example Input

Input 1:
5 1 2 3 4 5
Input 2:
4 10 50 40 80

Example Output

Output 1:
5 1
Output 2:
80 10
Note: There is no space after the minimum value in the output format.
There is only a single space between the maximum and minimum value.
*/
/*
const findMaxMinOfArray = (arr) => {
  let max = arr.at(0);
  let min = arr.at(0);
  //Find the max & min element of the array
  for(let i=0; i<arr.length; i++){
    if(arr.at(i)>max){
      max = arr.at(i);
    }
    if(arr.at(i)<min){
      min = arr.at(i);
    }
  }
  console.log(max,min);
}
findMaxMinOfArray([4, 10, 50, 40, 80]);
*/

/*
3. Problem Description

Write a program to print sum of elements of the input array A of size N.

Note: User is supposed to write a program from scratch to add the elements of the input array and print the result.


Problem Constraints


1 <= N <= 1000

1 <= A <= 1000




Input Format

- The first integer N denotes the number of integers in the array.
- The next N integers denotes the element of the array A.



Output Format

A single integer containing sum of elements from the input array.




Example Input


Input 1:


5 1 2 3 4 5
Input 2:

4 10 50 40 80



Example Output

Output 1:

15
Output 2:

180




Example Explanation

Input-1:
N = 5 , A = [1, 2, 3, 4, 5]
here the first integer is the size of A and the remaining elements are [1, 2, 3, 4, 5]
which all sum to 15 
Input-2:
N = 4 , A = [10, 50, 40, 80]
here the first integer is the size of A and the remaining elements are [10, 50, 40, 80]
which all sum to 180
*/

//Solution
/*
const findSum = (arr)=>{
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum;
}
console.log(findSum([1, 2, 3, 4, 5]));
*/

/*
4. Problem Description

You are given a constant array A and an integer B.

You are required to return another array where outArr[i] = A[i] + B.



Problem Constraints

1 <= A.size() <= 10000

1 <= A[i] <= 10000

1 <= B <= 10000



Input Format

First argument is a constant array A.

Second argument is an integer B.



Output Format

You have to return an integer array.



Example Input

Input 1:

A = [1,2,3,2,1]
B = 3
Input 2:

A = [1,1,10]
B = 6


Example Output

Output 1:

 [4,5,6,5,4] 
Output 2:

 [7,7,16] 


Example Explanation

Explanation 1:

A[0] + 3 = 1 + 3 = 4
A[1] + 3 = 2 + 3 = 5
A[2] + 3 = 3 + 3 = 6
A[3] + 3 = 2 + 3 = 5
A[4] + 3 = 1 + 3 = 4


Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
*/

//Solution:
const createNewArr = (originalArr,valueToBeAdded)=>{
  let newArr = [...originalArr];

  for(let i=0; i<newArr.length; i++){
    newArr[i] = newArr[i] + valueToBeAdded;
  }
  
  return newArr;
}
console.log(createNewArr([1,2,3,2,1],3));



/*
5. Problem Description

Write a program to print the input array A of size N in reverse order where you have to take integer N and further N elements as input from user.

Problem Constraints

1 <= N <= 1000  
1 <= A <= 1000
Input Format

A single line representing **N** followed by N integers of the array **A**
Output Format

A single line containing N space separated integers representing elements of the input array in reverse order.  
**Note** - Keep a space character (' ') at the end of the line.
Example Input

Input 1:

5 1 2 3 4 5
Input 2:

4 10 50 40 80
Example Output

Output 1:

5 4 3 2 1 
Output 2:

80 40 50 10 
Note:

This question requires you to read multiple numbers from input. The first number represents N, which indicates how many more numbers follow. The remaining numbers are converted to integers using the map() function.
Since this concept will be covered later in the module, we encourage you to do some independent research and write your code accordingly.
You may also refer to the following article for further guidance: link
*/

//ADDITIONAL PROBLEMS-----------------------------------------------------
/*
1. Problem Description

Write a program to print all negative numbers from input array A of size N. Take integer N and N elements of the array as input from user.

Problem Constraints

1 <= N <= 1000  
-1000 <= A <= 1000
Input Format

A single line representing N followed by N integers of the array A
Output Format

A single line containing elements from the input array which are negative in the same order.
Note: Keep a space character (' ') at the end of the line.
Example Input

Input 1:

5 1 -5 2 -8 -4
Input 2:

4 -1 0 -8 -1
Example Output

Output 1:

-5 -8 -4 
Output 2:

-1 -8 -1 
Example explanation:

Output 1:

all the negative elements of [5 1 -5 2 -8 -4] are [-5 -8 -4]

Output 2:

all the negative elements of [4 -1 0 -8 -1] are [-1 -8 -1]
*/

/*
2. Problem Description

You are given T(number of test cases) integer arrays. For each array A, you have to find the value of absolute difference between the counts of even and odd elements in the array.



Problem Constraints

1 <= T <= 10

1 <= |A| <= 105

1 <= A[i] <= 109



Input Format

First line contains a single integer T.

Each of the next T lines begin with an integer denoting the length of the array A (|A|), followed by |A| integers which indicate the elements in the array.



Output Format

For each test case, print an integer in a separate line.



Example Input

Input 1:

 1 
 4 1 2 3 4 
Input 2:

 2
 4 2 3 5 1
 1 4


Example Output

Output 1:

 0 
Output 2:

 2
 1


Example Explanation

Explanation 1:

 For 1st test case: 
 The array is [1, 2, 3, 4].
 Number of even elements = 2 
 Number of odd elements = 2
 |Number of even elements - Number of odd elements| = |2 - 2| = 0 
Explanation 2:

 For 1st test case:
 The array is [2, 3, 5, 1].
 Number of even elements = 1 
 Number of odd elements = 3
 |Number of even elements - Number of odd elements| = |1 - 3| = |-2| = 2.

 For 2nd test case:
 The array is [4]
 Number of even elements = 1 
 Number of odd elements = 0
 |Number of even elements - Number of odd elements| = |1 - 0| = |1| = 1  

 */

/*
3. Problem Description

You are given an integer T denoting the number of test cases. For each test case, you are given an integer array A.

You have to print the odd and even elements of array A in 2 separate lines.

NOTE: Array elements should have the same relative order as in A.



Problem Constraints

1 <= T <= 10

1 <= |A| <= 105

1 <= A[i] <= 109



Input Format

First line of the input contains a single integer T.

For each test case:

First line consists of a single integer |A| denoting the length of array.
Second line consists of |A| space separated integers denoting the elements of array A.


Output Format

For each test case:

First line should contain an array of space separated integers containing all the odd elements of array A
Second line should contain an array of space separated integers containing all the even elements of array A


Example Input

Input 1:

 2 
 5
 1 2 3 4 5
 3
 4 3 2
Input 2:

 2 
 3
 2 2 2
 2
 1 1


Example Output

Output 1:

 1 3 5
 2 4
 3
 4 2
Output 2:

 2 2 2
 1 1


Example Explanation

Explanation 1:

 Test Case 1: 
 Odd elements in the array(in the order they occur) are: 1, 3, 5.
 Even elements in the array(in the order they occur) are: 2, 4.

 Test Case 2 
 Odd elements in the array(in the order they occur) are: 3.
 Even elements in the array(in the order they occur) are: 4, 2.
Explanation 2:

 Test Case 1: 
 There are no odd elements in the array.
 Even elements in the array(in the order they occur) are: 2, 2, 2.

 Test Case 2 
 Odd elements in the array(in the order they occur) are: 1, 1.
 There are no even elements in the array.

 */

/*
4. Problem Description

Write a program to input N numbers array, A from the user and an integer X and print the array by deleting element at specified position X.

Note: The first element is located at position 1, the second element is located at position 2, and so on.


Problem Constraints

2 <= N <= 100
1 <= A[i] <= 1000
1 <= X <= N


Input Format

First line is N which means number of elements.
Second line contains N space separated integers.
Third line is X position which has to be deleted.


Output Format

N-1 space separated integers of the input array after deleting the element at required position.


Example Input

Input 1:
5
2 3 1 4 2
3
Input 2:
2
4 5
2


Example Output

Output 1:
2 3 4 2
Output 2:
4


Example Explanation

Explanation 1:
Clearly after removing the element at position 3 (2 3 1 4 2), the remaining array is 2 3 4 2.
Explanation 2:
After removing the element at position 2 (4 5), the remaining array is 4.

*/

/*
5. Problem Description:

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