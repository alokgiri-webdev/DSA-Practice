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
