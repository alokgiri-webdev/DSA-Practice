'use strict'
//ASSIGNMENT PROBLEMS---------------------------------------------------------------
/*
1. Problem Description

You are given a N X N square integer matrix A. You have to tell whether A is an identity matrix or not.

Identity matrix is a special square matrix whose main diagonal elements are equal to 1 and all other elements are 0.



Problem Constraints

2 <= N <= 103


A[i][j] equals 0 or 1.




Input Format

The first argument is a 2D integer array denoting the matrix A


Output Format

Return 1 if A is an identity matrix, else return 0.



Example Input

Input 1:


[[1, 0], [0, 1]]
Input 2:

[[0, 0, 1], [0, 1, 0], [1, 0, 0]]



Example Output

Output 1:


 1 
Output 2:

 0 



Example Explanation

Explanation 1:


 All the main diagonal elements in A are 1, all other elements are 0.
 So, A is an identity matrix.
Explanation 2:

 All the main diagonal elements in A are not 1, also all other elements are not equal to 0.
 So, A is not an identity matrix.
*/

/*
2. Problem Description

Given a 2D integer array A, return the transpose of A.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.


Problem Constraints

1 <= A.size() <= 1000






1 <= A[i].size() <= 1000

1 <= A[i][j] <= 1000






Input Format

First argument is a 2D matrix of integers.





Output Format

You have to return the Transpose of this 2D matrix.



Example Input

Input 1:




A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
Input 2:

A = [[1, 2],[1, 2],[1, 2]]





Example Output

Output 1:






[[1, 4, 7], [2, 5, 8], [3, 6, 9]]
Output 2:









[[1, 1, 1], [2, 2, 2]]





Example Explanation

Explanation 1:

Clearly after converting rows to column and columns to rows of [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
 we will get [[1, 4, 7], [2, 5, 8], [3, 6, 9]].
Explanation 2:

After transposing the matrix, A becomes [[1, 1, 1], [2, 2, 2]]



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
*/