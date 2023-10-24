/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

let myGender: "male" | "female";
myGender = "male";
myGender = "female";


export {};

  ///// або 

// type Gender = "male" | "female"
// const myGender: Gender = "female";

// export {};