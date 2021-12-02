
/**
 * 
 * @param num1
 * @param num2
 * @returns sum of numbers
 */

function add(num1: number, num2: number) {
    return num1 + num2;
}

const n1 = 3;
const n2 = 2.9;

const result = add(n1,n2);

console.log(result)

/**
 * 
 * @param word1 a word
 * @param word2 a word
 * @returns concatenated word
 */

function concatenate (word1: string, word2: string) {
    return word1 + word2;
}

const w1 = "ass";
const w2 = "hat"

const sentence = concatenate(w1,w2)

console.log(sentence)