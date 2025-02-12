function plusOne(digits) {
    let num = BigInt(digits.join("")) + 1n; 
    return num.toString().split("").map(Number);
}


const digits = [1, 2, 3];

const result = plusOne(digits);
console.log("Result:", result);


function plusOne(digits) {
    let num = Number(digits.join("")) + 1; 
    console.log("sdc",num);
    
    return num.toString().split("").map(Number);
}

