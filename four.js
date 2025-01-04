// let array=[1,2,34,5,67,8]
//     let result= array.filter((data)=> {
//        return data%2===0
//     } 
 
//      )

// console.log(result);




// function main(n){

//     return function hai(){
//      return n++
//     }


// }
//   console.log(main(7))
//  console.log( counter())
//  console.log( counter())
//  console.log( counter())
function filterArray(arr, fn) {
    return arr.filter(fn);
}

const arr = [1, 2, 3, 4, 5];

// Example 1: Single argument filter function
const result1 = filterArray(arr, element => element > 3);
console.log(result1); // Output: [4, 5]