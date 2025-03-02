

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
 




// var searchInsert = function(nums, target) {
//   let i = 0, j = nums.length;
//   while (i < j) {
//       let mid = Math.floor((i + j) / 2);
//       if (nums[mid] < target) i = mid + 1;
//       else j = mid;
//   }
//   return i;
// };












using System;
using System.Collections.Generic;
using System.Threading.Tasks;

class Program
{
    static void Main(string[]args)
    {
        int jan, feb, mar, avg, total;
    //     Console.Write(" enter jan attendence");
    //     jan=int.Parse(Console.ReadLine());
    //     Console.WriteLine("enter feb attendence");
    //     feb = int.Parse(Console.ReadLine());
    //     Console.WriteLine("enter mar attendence");
        // +mar = int.Parse(Console.ReadLine());
        total = jan + feb + mar;
        Console.WriteLine($"tottal is{ total }");
        avg = total / 3;
        Console.WriteLine($" avg iss{avg}");


    // }
}