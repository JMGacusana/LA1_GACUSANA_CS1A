// STRINGS
/*
1. Create variable name (favActorFirstName) & store your fav Actor name. 

2. Create variable name (favActorLastName) & store the last name of (FA). 

3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName) 
4. Create variable name (uppercase) & CAPITALIZE your fav actor name. 
5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE. 
6. Now append this message to the (message variable) `his best show is Silicon Valley`. 
7. Finally log all variables to the console using code runner in vscode. 
8. Submit answers in your github repository and link it to your google classroom.
*/
// creating a variables using const(constant) together with their values.
const favActorFirstName = "jackie";
const favActorLastName = "chan";
const fullName = favActorFirstName + " " + favActorLastName;
const uppercase = fullName.toUpperCase();
let message = `My favorite Actor Is ${favActorFirstName.toUpperCase()} he so good in action in martial arts and comedy.`;
message +=" " + `his best show is Silicon Valley`
console.log(message)


