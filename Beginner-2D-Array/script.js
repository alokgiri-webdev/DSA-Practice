"use strict"
//ASSIGNMENT PROBLEMS---------------------------------------------------------------
/*
1. Problem Description


Write a program to input an integer N and a N*N matrix Mat from user and print the matrix in wave form (column wise)

See example for clarifications regarding wave print.

Note: Ensure there is a space character (' ') at the end of the line.


Problem Constraints


1 <= N <= 103

0 <= Mat[i][j] <= 109




Input Format


First line is an integer N

Next N lines contain N space separated integers representing the matrix Mat




Output Format


A single line containing N*N integers of matrix Mat in wave form (column wise)




Example Input


Input 1:


3
4 1 2 
7 4 4 
3 7 4 
Input 2:


2
1 2
3 4



Example Output


Output 1:


4 7 3 7 4 1 2 4 4 
Output 2:

1 3 4 2




Example Explanation

For Input 1:
We will first iterate the 1st column from top to bottom and print the elements, 
then we will iterate the 2nd column from botton to top and print the elements,
then we will iterate the 3rd column from top to bottom and print the elements.
For Input 2:
We will first iterate the 1st column from top to bottom and print the elements, 
then we will iterate the 2nd column from bottom to top and print the elements.
*/

/*
2. Problem Description

Given an N x N matrix, print the elements of the matrix in a wave form row-wise. For the first row, traverse from left to right, for the second row, traverse from right to left, and continue this alternating pattern for the remaining rows.


Problem Constraints

1 <= N <= 103

0 <= Mat[i][j] <= 109



Input Format

First line is an integer N

Next N lines contain N space separated integers representing the matrix Mat




Output Format

A single line containing N*N integers of matrix Mat in wave form (row wise)

Note: Ensure there is a space character (' ') at the end of the line.


Example Input

Input 1:

3
4 1 2
7 4 4 
3 7 4
Input 2:

2
1 2
3 4


Example Output

Output 1:

4 1 2 4 4 7 3 7 4
Output 2:

1 2 4 3


Example Explanation

For Input 1:
We will first iterate the 1st row from left to right and print the elements, 
then we will iterate the 2nd row from right to left and print the elements,
then we will iterate the 3rd row from left to right and print the elements.
This looks like a wave.
For Input 2:
We will first iterate the 1st row from left to right and print the elements, 
then we will iterate the 2nd row from right to left and print the elements.
This looks like a wave.
*/

/*
3. Problem Description

You are given a 2D matrix A of integers.

Your task is to compute the sum of elements in each row and return a 1D array where each element represents the sum of a corresponding row in the matrix.


Problem Constraints

1 <= A.size() <= 103


1 <= A[i].size() <= 103

1 <= A[i][j] <= 103






Input Format

First argument A is a 2D array of integers.(2D matrix).



Output Format

Return an array containing row-wise sums of original matrix.



Example Input

Input 1:

[1,2,3,4]
[5,6,7,8]
[9,2,3,4]


Example Output

Output 1:

[10,26,18]


Example Explanation

Explanation 1

Row 1 = 1+2+3+4 = 10
Row 2 = 5+6+7+8 = 26
Row 3 = 9+2+3+4 = 18

*/

/*
4. Problem Description

You are given two matrices A & B of same size, you have to return another matrix which is the sum of A and B.
Note: Matrices are of same size means the number of rows and number of columns of both matrices are equal.

The Following will give you an idea of matrix addition:



Problem Constraints

1 <= A.size(), B.size() <= 1000 1 <= A[i].size(), B[i].size() <= 1000 1 <= A[i][j], B[i][j] <= 1000
Input Format

The first argument is the 2D integer array A The second argument is the 2D integer array B
Output Format

You have to return a vector of vector of integers after doing required operations.
Example Input

Input 1:
A = [[1, 2, 3],   
     [4, 5, 6],   
     [7, 8, 9]]  

B = [[9, 8, 7],   
     [6, 5, 4],   
     [3, 2, 1]]
 
Input 2:
A = [[1, 2, 3],   
     [4, 1, 2],   
     [7, 8, 9]]  

B = [[9, 9, 7],   
     [1, 2, 4],   
     [4, 6, 3]]
 
Example Output

Output 1:
[[10, 10, 10],   
 [10, 10, 10],   
 [10, 10, 10]]
Output 2:
[[10, 11, 10],   
 [5,   3,  6],   
 [11, 14, 12]]
Example Explanation

Explanation 1:
A + B = [[1+9, 2+8, 3+7],  
         [4+6, 5+5, 6+4],  
         [7+3, 8+2, 9+1]]   
      = [[10, 10, 10],   
         [10, 10, 10],   
         [10, 10, 10]].
Explanation 2:
A + B = [[1+9, 2+9, 3+7],  
         [4+1, 1+2, 2+4],  
         [7+4, 8+6, 9+3]]   
      = [[10, 11, 10],   
         [5,   3,  6],   
         [11, 14, 12]].
*/
//ADDITIONAL PROBLEMS
/*
1. Problem Description

You are given two matrices A and B of equal dimensions and you have to check whether two matrices are equal or not.

NOTE: Both matrices are equal if A[i][j] == B[i][j] for all i and j.


Problem Constraints

1 <= A.size(), B.size() <= 1000
1 <= A[i].size(), B[i].size() <= 1000
1 <= A[i][j], B[i][j] <= 1000
A.size() == B.size()
A[i].size() == B[i].size()


Input Format

First argument is 2-D array of integers representing matrix A.

Second argument is 2-D array of integers representing matrix B.





Output Format

Return 1 if both matrices are equal or return 0.



Example Input

Input 1:

A = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
B = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
Input 2:

A = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
B = [[1, 2, 3],
     [7, 8, 9],
     [4, 5, 6]]




Example Output

Output 1:

1
Output 2:

0




Example Explanation

Explanation 1:

==> Clearly all the elements of both matrices are equal at respective positions.
Explanation 2:

==> Clearly, there are mismatches at (1, 0), (1, 1), (1, 2), (2, 0), (2, 1) and (2, 2).
A = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]] 
B = [[1, 2, 3],
     [7, 8, 9],
     [4, 5, 6]]
*/

/*
2. Problem Description

You are given two integer matrices A and B having same size(Both having same number of rows (N) and columns (M). You have to subtract matrix B from A and return the resultant matrix. (i.e. return the matrix A - B).

If A and B are two matrices of the same order (same dimensions). Then A - B is a matrix of the same order as A and B and its elements are obtained by doing an element wise subtraction of A from B.






Problem Constraints

1 <= N, M <= 103



-109 <= A[i][j], B[i][j] <= 109








Input Format

The first argument is the 2D integer array A
The second argument is the 2D integer array B




Output Format

Return a 2D matrix denoting A - B.



Example Input

Input 1:





A =  [[1, 2, 3], 
      [4, 5, 6], 
      [7, 8, 9]]

B =  [[9, 8, 7], 
      [6, 5, 4], 
      [3, 2, 1]]
Input 2:

A = [[1, 1]]
 
B = [[2, 3]] 






Example Output

Output 1:





 [[-8, -6, -4],
  [-2, 0, 2],
  [4, 6, 8]]
Output 2:

 [[-1, -2]]






Example Explanation

Explanation 1:





 image
Explanation 2:

 [[1, 1]] - [[2, 3]] = [[1 - 2, 1 - 3]] = [[-1, -2]]
*/

/*
3. Problem Description

Given a 2D integer array C[][] of A rows and B columns. Return an integer array of size B that represents the sums of the columns of the 2D array C.


Problem Constraints

1 <= A,B <= 103
1 <= C[i][j] <= 103


Input Format

The first argument is a single integer A.
The second argument is a single integer B.
The third argument is a 2D integer array C.


Output Format

Return an integer array of size B that represents the sums of the columns of the 2D array C.


Example Input

Input 1:
A = 3
B = 2
C = [[4, 1], [1, 3], [6, 2]]
Input 2:

A = 2
B = 2
C = [[1, 1], [4, 1]]


Example Output

Output 1:
[11, 6]
Output 2:

[5, 2]


Example Explanation

Explanation 1:
 Column 1 : 4 + 1 + 6 = 11
Column 2 : 1 + 3 + 2 = 6
Explanation 2:

Column 1 : 4 + 1 = 5
Column 2 : 1 + 1 = 2
*/

/*
3. Problem Description

Given a 2D array A of N rows and M columns. Find value of largest element in each row.


Problem Constraints

1 <= N, M <= 1000
1 <= Ai <= 109


Input Format

The first argument A is a 2D array of integers


Output Format

Return an array of length N, in which every index i contains the maximun value of the ith row in the 2D matrix.


Example Input

Input 1:
A = [[1, 2], [1, 3]]
Input 2:
A = [[1, 2, 3]]


Example Output

Output 1:
 [2, 3]
Output 2:
 [3]


Example Explanation

Explanation 1:
In the first row 2 is maximum value.
In the second row 3 is maximum value.
Explanation 2:
In the first and only row 3 is maximum value.
*/