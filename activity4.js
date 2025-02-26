//Comparison or Relational Operator
/*
1. Create variable name (firstFavNumb) & store your favorite number. 

2. Create variable name (secondFavNumb) & store second fav Number. 

3. Check (firstFavNumb is greater then secondFavNumb) 
4. Check (firstFavNumb is less then secondFavNumb) 
5. Check (firstFavNumb is greater then & equal to secondFavNumb) 
6. Check (firstFavNumb is less then & equal to secondFavNumb) 
7. Check (firstFavNumb is equal to secondFavNumb) using strict equality operator. 
8. Check (firstFavNumb is equal to secondFavNumb) using loose equality operator. 
9. Check (firstFavNumb is not equal to secondFavNumb) using strict non-equality operator. 
10. Check is (firstFavNumb is not equal to secondFavNumb) using loose non-equality 
 operator. 
11. Finally log all variables to the console using code runner in vscode. 
12. Submit answers in your github repository and link it to your google classroom.
*/
// declaring variables with values
let firstFavNumb = 18;
let secondFavNumb = 11;

// using of comparison or relational operator 
let greaterThan = firstFavNumb > secondFavNumb;
let lessThan = firstFavNumb < secondFavNumb;
let greaterThanEqual = firstFavNumb >= secondFavNumb;
let lessThanEqual = firstFavNumb <= secondFavNumb;
let strictlyEqual = firstFavNumb === secondFavNumb;
let looseEqual = firstFavNumb == secondFavNumb;
let strictlyNotEqual = firstFavNumb !==  secondFavNumb;
let looseNotEqual = firstFavNumb != secondFavNumb;

// declaring all the output in comparison or relational operator  variables
console.log(
   "firstFavNumb > secondFavNumb:", "\n", greaterThan,
   "\n\nfirstFavNumb < secondFavNumb:", "\n", lessThan,
   "\n\nfirstFavNumb >= secondFavNumb:", "\n", greaterThanEqual,
   "\n\nfirstFavNumb <= secondFavNumb:", "\n", lessThanEqual,
   "\n\nfirstFavNumb === secondFavNumb:", "\n", strictlyEqual,
   "\n\nfirstFavNumb == secondFavNumb:", "\n", looseEqual,
   "\n\nfirstFavNumb !== secondFavNumb:", "\n", strictlyNotEqual,
   "\n\nfirstFavNumb != secondFavNumb:", "\n", looseNotEqual
   );