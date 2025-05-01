'use strict'
//ASSIGNMENT------------------------------------------------------------------------
/*
1. Problem Description

Write a program to input an integer T and then each of T lines will have a string (S).

You have to print T lines each containing length of input string.



Problem Constraints

1 <= T <= 100

1 <= S.size() <= 1000



Input Format

First line is T which means number of test cases.

Each next T lines contain a string S.



Output Format

T lines each containing an integer representing length of the input string.



Example Input

Input 1:

2
scaler
interviewbit


Example Output

Output 1:

6
12
*/

/*
2. Problem Description

You are given a character string A having length N.

The string consists of 2 types of characters:

Alphabets : ['a'-'z', 'A'-'Z']
Digits: ['0'-'9']
You have to tell the count of characters of the maximum occuring character type.




Problem Constraints

1 <= N <= 105



Input Format

First and only argument is a character string A.



Output Format

Return an integer.



Example Input

Input 1:

 A = "HelloUser1"
Input 2:

 A = "M1234"


Example Output

Output 1:

 9 
Output 2:

 4 
*/

/*
Problem Description

You are given a character string A, having length N and an integer ASCII code B.


You have to tell the leftmost occurrence of the character having ASCII code equal to B, in A or report that it does not exist.



                                                image





Problem Constraints

1 <= N <= 105




A[i] ∈ ['a'-'z']

97 <= B <= 122






Input Format

First argument is a character string A.




Second argument is an integer B.






Output Format

If there exists an occurrence, return the leftmost index(0 - based), else return -1.



Example Input

Input 1:




 A = "aabbcc"
 B = 98 
Input 2:

 A = "abc"
 B = 100





Example Output

Output 1:




 2 
Output 2:

 -1 





Example Explanation

Explanation 1:




 Character having ASCII code equal to 98 = 'b' 
 Leftmost index of character 'b' in "aabbcc" is 2.
Explanation 2:

 Character having ASCII code equal to 100 = 'd'
 Character 'd' is not present in "abc".
*/

/*
4. Problem Description

You are given a character string A, having length N and an integer ASCII code B.

You have to tell the rightmost occurrence of the character having ASCII code equal to B, in A or report that it does not exist.




                                                image





Problem Constraints

1 <= N <= 105

A[i] ∈ ['a'-'z']

97 <= B <= 122



Input Format

First argument is a character string A.

Second argument is an integer B.



Output Format

If there exists an occurrence, return the rightmost index(0 - based), else return -1.



Example Input

Input 1:

 A = "aabbcc"
 B = 98 
Input 2:

 A = "abc"
 B = 100


Example Output

Output 1:

 3 
Output 2:

 -1 
*/
