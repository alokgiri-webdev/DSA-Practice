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