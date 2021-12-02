// !! |==============!!
// !! |=    Unions
// !! |==============!!
function combine(input1, input2, conversion // these are called literal types and are usually used in union settings. This also helps detect typos in latter comparisons
) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || conversion === "as-number") {
        result = +input1 + +input2; // +input1 automatically turns input1 to number with the + sign
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(12, 34, "as-number");
console.log(combinedAges);
// const combinedAgesTypo = combine(12, 34, "none"); // here is a typo
var combinedNames = combine("Martin", "Eve", null);
console.log(combinedNames);
var mix = combine("Mel", 2, "as-text");
console.log(mix);
function combineWithAlias(input1, input2, conversion // these are called literal types and are usually used in union settings. This also helps detect typos in latter comparisons
) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || conversion === "as-number") {
        result = +input1 + +input2; // +input1 automatically turns input1 to number with the + sign
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var blah = combineWithAlias("mark", "word", "as-number");
console.log(blah);
