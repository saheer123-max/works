// var sortBy = function(arr, fn) {
//     return arr.sort((a,b)=>fn(a)-fn(b))
// };


//////////

// let text="hallo world"

// let result=text.split("").reverse().join("")
// console.log(result);


//no:9////////////palindrom//////////////////////

 
// let palindrom=function(x){

//   let str=x.toString();
//    let resu=str.split("").reverse().join("")
//     return str===resu
// }
// console.log(palindrom(120))





///Array Wrapper/////////////






function arrayWrapper(nums) {
    return {
      valueOf: function () {
        return nums.reduce((sum, num) => sum + num, 0);
      },
      toString: function () {
        return `[${nums.join(",")}]`;
      },
    };
  }
  
  // Example Usage
      const obj1 = arrayWrapper([1, 2, 3]);
      const obj2 = arrayWrapper([4, 5]);
  
      console.log(obj1 + obj2);   // Output: 15
      console.log(String(obj1));  // Output: [1,2,3]
      console.log(String(obj2));  // Output: [4,5]
  

















