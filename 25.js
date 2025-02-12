// function plusOne(digits) {
//     let num = BigInt(digits.join("")) + 1n; 
//     return num.toString().split("").map(Number);
// }

// // Example input
// const digits = [1, 2, 3];

// const result = plusOne(digits);
// console.log("Result:", result);


function plusOne(digits) {
    let num = Number(digits.join("")) + 1; 
    return num.toString().split("").map(Number);
}

console.log(plusOne([1, 2, 3])); 
console.log(plusOne([9, 9, 9])); 
