"use strict";
// !! |=====================!!
// !! |=    Functions
// !! |=====================!!
// Typescript infers return type and usually should not be set manually
function add(n1, n2) {
    return n1 + n2;
    // return n1.toString() + n2.toString()
}
// Here the return type is void => means does not have a return statement
function printText(num) {
    console.log("Result: " + num);
}
// printText(add(5,2))
// console.log(printText(add(5,2)))
// !! Store function in a pointer
// let combineValues; // no type set
// let combineValues: Function; // generic function
let combineValues;
combineValues = add;
// combineValues = printText; // does not work if argument types defined
// combineValues = 23; // works if combineValues type is not set
// console.log(combineValues(2,6))
// console.log(combineValues)
// !! Callbacks
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
    return "done"; // callback function won't do anything with this return value, because type is set to void => anything that might be returned will be ignored
});
//# sourceMappingURL=phase4.js.map