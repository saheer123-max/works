



// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
//    let odd=[]
//    let even=[]
//    numbers.forEach((num)=>{
//   if(num%2===0){
//      odd.push(num)
//   }else if(num%2!==0){
//    even.push(num)
//   }
//    })
// console.log(odd);
// console.log(even);
// console.log(numbers);




      // lexical scop//


// function outerFunction() {
//    const outerVariable = "I'm from the outer scope";
 
//    function innerFunction() {
//      console.log(outerVariable); // Lexical scope allows access to outerVariable
//    }
 
//    innerFunction(); // Calling the inner function
//  }
 
//  outerFunction();
 

 

 //recurtion for loop


// function sum(n){
// let num=1
// for(var i=1;i<=n;i++){
//    num=num*i

// }
// console.log(num);

// }
// sum(6)




   //recurtion

// function sum(n) {
//    if (n === 1) { 
//        return 1;
//    }
//    return n * sum(n - 1); 
// }

// console.log(sum(5)); 




// function calculate(a, b, operation) {
//    return operation(a, b); // Uses the passed function
// }

// function add(x, y) {
//    return x + y;
// }

// function multiply(x, y) {
//    return x * y;
// }

// console.log(calculate(5, 3, add)); // Output: 8
// console.log(calculate(5, 3, multiply)); // Output: 15






// function greet(message) {
//    return function(name) {
//        return `${message}, ${name}!`;
//    };
// }

// const sayHello = greet("Hello");
// console.log(sayHello("John")); // Output: Hello, John!
// console.log(sayHello("Jane")); // Output: Hello, Jane!

// 'use strict';
// let obj = { a: 2, a: 1 }; // Error: Duplicate property name

// console.log(obj.a);








// let b=10

// {
// var a=200
// let b=30
// const d=57

// }
// console.log(b);

// 'use strict';

// var z = 50;
// {
//     let z = 60; // Allowed (block scope shadows var z)
// }

// console.log(z); // Output: 50


// var z = 50;
// {
//     var z = 60;
//     console.log(z) // Allowed (block scope shadows var z)
// }

// console.log(z); // Output: 50




function createLeak() {
    leakedVariable = "I am a memory leak!"; // Unintentional global variable
    console.log(leakedVariable);
    
}
createLeak();



