
const numbers = [1,2,4,8,16,32, 64];
let powerOfTwo:number[];

powerOfTwo = numbers.map(num => 2**num);

console.log("Reporting 2 to the power of...")
console.log(powerOfTwo)


// Getting HTML DOM element

const button = document.getElementById("btnFst")!;

button.addEventListener("click", ()=>
{
    console.log("Clicked!")
})

