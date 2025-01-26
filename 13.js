var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;  
            return digits;  
        }
        digits[i] = 0;  
    }
   
    digits.unshift(1);  
};


let digits1 = [1, 1, 9];
console.log(plusOne(digits1));  


let digits2 = [0, 9, ];
console.log(plusOne(digits2));  
