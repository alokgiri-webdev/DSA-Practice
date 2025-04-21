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