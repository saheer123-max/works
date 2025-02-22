

// let plusone=function(number){
//  let nums=  Number(number.join(""))+1
//  console.log(nums);
 
//   return nums.toString().split("").map(Number)
// }

// console.log(plusone([1,2,3]))


// var reverseWords = function(s) {
//   return s.trim().split(/\s+/).reverse().join(" ");

// };


function findLUSlength(a, b) {
  return a === b ? -1 : Math.max(a.length, b.length);
}
