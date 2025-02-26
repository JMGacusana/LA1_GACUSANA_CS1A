// NUMBERS
/*
1. Create Variable name (firstFavNum) & store your favorite number. 
2. Create Variable name (secondFavNum) & store your second fav number. 
3. Add (firstFavNum & secondFavNumber). 
4. Subtract (firstFavNum & secondFavNumber). 
5. Multiply (firstFavNum & secondFavNumber). 
6. Divided (firstFavNum & secondFavNumber). 
7. Check (firstFavNum Mod secondFavNumber). 
8. Check the power of (firstFavNum) raise to secondFavNun. 
9. Finally log all variables to the console using code runner in vscode. 
10. Submit answers in your github repository and link it to your google classroom.
*/
// variables together with their values
let firstFavNum = 18;
let secondFavNum = 11;

// operators
let add = firstFavNum + secondFavNum;
let subtract = firstFavNum - secondFavNum;
let devided = firstFavNum * secondFavNum;
let multiply = firstFavNum / secondFavNum;
let mod = firstFavNum % secondFavNum;
let raise = firstFavNum ** secondFavNum;

// displaying the answers. 
// I use \n to make the answer input in the next line.
console.log("Add firstFavNum & secondFavNumber: ", "\n", add,
   "\n\nSubtract firstFavNum & secondFavNumber: ", "\n", subtract,
   "\n\nMultiply firstFavNum & secondFavNumber:", "\n", multiply,
   "\n\nDivided firstFavNum & secondFavNumber:", "\n", devided,
   "\n\nCheck firstFavNum Mod secondFavNumber:", "\n", mod,
   "\n\nCheck the power of firstFavNum raise to secondFavNun:", "\n", raise
);