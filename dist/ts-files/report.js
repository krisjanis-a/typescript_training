"use strict";
const numbers = [0, 1, 2, 4, 8, 16, 32, 64];
let powerOfTwo;
powerOfTwo = numbers.map((num) => Math.pow(2, num));
console.log("Reporting 2 to the power of...");
console.log(powerOfTwo);
// Getting HTML DOM element
const button = document.getElementById("btnFst");
function handleClick(message) {
    console.log(`Dang! The message reads ${message}`);
}
if (button)
    button.addEventListener("click", handleClick.bind(null, "Nothingness"));
//# sourceMappingURL=report.js.map