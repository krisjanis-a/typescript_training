// !!=============!!
// !!   OBJECTS
// !!=============!!

// You can do this but...

const person: {
    name:string;
    age:number;
} = {
    name:"Mike",
    age: 30
}

// This is better practice

const betterPerson = {
    name:"Mike",
    age: 30
}


// !!=============!!
// !!   ARRAYS
// !!=============!!

const arrays1 = {
    name:"Jared",
    age: 25,
    hobbies: ["cooking","gym"],
}

// console.log(arrays1.hobbies.map(word => word.toUpperCase()))

// Typescript lets you access only methods available on specific type 
// console.log(arrays1.hobbies.map(word => word.map()))


// |=====|

// Adding tuples

const arrays2: {
    name: string;
    age: number;
    hobbies: string[];
    occupation: [number,string]
} = {
    name:"Jared",
    age: 25,
    hobbies: ["cooking","gym"],
    occupation: [2, 'engineer']
}

arrays2.occupation.push("musician")

// console.log(arrays2.occupation)

// __output === [ 2, 'engineer', 'musician' ]
// Typescript doesn't avert this "error" => push 3rd value in length === 2 array with predefined types


// !!=============!!
// !!   ENUMs
// !!=============!!

enum Ocuppation {ADMIN = 1, MUSICIAN, ENGINEER, CHEMIST}

// *This works too:
// enum Ocuppation {ADMIN = 0, MUSICIAN = "Musician", ENGINEER = 1, CHEMIST}

const arrays3 = {
    name:"Jared",
    age: 25,
    hobbies: ["cooking","gym"],
    occupation: Ocuppation.ENGINEER
}

console.log(arrays3)


// !! Avoid any at most cases because that basically renders typescript benefits completely useless