// !! |==============!!
// !! |=    Unions
// !! |==============!!

function combine(
    input1: string | number,
    input2: string | number,
    conversion: "as-number" | "as-text" | null // these are called literal types and are usually used in union settings. This also helps detect typos in latter comparisons
    ) {
    let result;

    if(typeof input1 === "number" && typeof input2 === "number" || conversion === "as-number"){
        result = +input1 + +input2; // +input1 automatically turns input1 to number with the + sign
    } else {
        result = input1.toString() + input2.toString()
    }

    return result;
}

const combinedAges = combine(12, 34, "as-number");
console.log(combinedAges)

// const combinedAgesTypo = combine(12, 34, "none"); // here is a typo

const combinedNames = combine("Martin", "Eve", null);
console.log(combinedNames)

const mix = combine("Mel", 2, "as-text")
console.log(mix)

// !! |=====================!!
// !! |=    Type Aliases
// !! |=====================!!

// type name can be any name that does not clash with built-in names

type Combinable = number | string; // this is the alias
type ConversionDescriptor = "as-number" | "as-text"

function combineWithAlias(
    input1: Combinable,
    input2: Combinable,
    conversion: "as-number" | "as-text" | null // these are called literal types and are usually used in union settings. This also helps detect typos in latter comparisons
    ) {
    let result;

    if(typeof input1 === "number" && typeof input2 === "number" || conversion === "as-number"){
        result = +input1 + +input2; // +input1 automatically turns input1 to number with the + sign
    } else {
        result = input1.toString() + input2.toString()
    }

    return result;
}

const mistake = combineWithAlias("mark", "word", "as-number")
console.log(mistake)