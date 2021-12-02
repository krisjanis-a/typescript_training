// !! |=====================!!
// !! |=    Unknown Type
// !! |=====================!!

// unknown is better type than any because it makes sure you cannot do anything and have some type of type check in hand BUT shouldn't be used too often

let userInput: unknown;
let userName: string;

userInput = 5;
userName = "Joe";

if(typeof userInput === "string"){
    userName = userInput;
}

// !! |=====================!!
// !! |=    Never Type
// !! |=====================!!

// never makes sure that it is clear that the function is intended to never return anything

// Below is an example of real life application generating error functions

function generateError (message:string, code: number):never {
    throw {message:message, errorCode: code};
}

generateError("An error occured!", 200);