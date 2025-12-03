// /* // we declare and define variables
// /* let x = 5;
// x = 6; */

// /* const x = 5;
// x = 6;
// console.log(x);
//  */
// //primitive
// // Strings represent names, characters letters etc
// // const x = "Ian";

// // //integers/ numbers
// // const y = 12345;

// // // boolean or true/false
// // const citizen = true;

// // //null is the absense of value
// // let name = null;

// // //undefined
// // let z;

// //functions are input output machines
// //functions accept inputs or parameters
// //declaring and defining function
// /* function add(x, y) {
//   //   console.log(x + y);
//   return x + y;
// }
// //run the function
// const bill = add(9, 8);
// console.log(bill);
//  */

// /* const x = 7;

// function returnThing() {
//   //function scope or local scope, only accessible inside this function
//   const x = 8;
//   console.log(x);
// }
//  */

// const name = "Nelson";
// console.log(`OMG everyone hates ${name}`);
//  */

import "./style.css";

document.querySelector(".theme-btn").addEventListener("click", function () {
  if (document.body.classList.contains("matcha")) {
    document.body.classList.add("midnight");
    document.body.classList.remove("matcha");
  } else {
    document.body.classList.add("matcha");
    document.body.classList.remove("midnight");
  }
});
