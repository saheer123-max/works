

// let plusone=function(number){
//  let nums=  Number(number.join(""))+1
//  console.log(nums);
 
//   return nums.toString().split("").map(Number)
// }

// console.log(plusone([1,2,3]))


// var reverseWords = function(s) {
//   return s.trim().split(/\s+/).reverse().join(" ");

// };


// function findLUSlength(a, b) {
//   return a === b ? -1 : Math.max(a.length, b.length);
// }
 




var searchInsert = function(nums, target) {
  let i = 0, j = nums.length;
  while (i < j) {
      let mid = Math.floor((i + j) / 2);
      if (nums[mid] < target) i = mid + 1;
      else j = mid;
  }
  return i;
};
