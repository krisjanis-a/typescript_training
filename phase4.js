// Typescript infers return type and usually should not be set manually
function add(n1, n2) {
    return n1 + n2;
    // return n1.toString() + n2.toString()
}
// Here the return type is void => means does not have a return statement
function printText(num) {
    console.log("Result: " + num);
    return;
}
printText(add(5, 2));
console.log(printText(add(5, 2)));
