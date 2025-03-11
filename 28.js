

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












// using System;
// using System.Collections.Generic;
// using System.Threading.Tasks;

// class Program
// {
//     static void Main(string[]args)
//     {
//         int jan, feb, mar, avg, total;
//     //     Console.Write(" enter jan attendence");
//     //     jan=int.Parse(Console.ReadLine());
//     //     Console.WriteLine("enter feb attendence");
//     //     feb = int.Parse(Console.ReadLine());
//     //     Console.WriteLine("enter mar attendence");
//         // +mar = int.Parse(Console.ReadLine());
//         total = jan + feb + mar;
//         Console.WriteLine($"tottal is{ total }");
//         avg = total / 3;
//         Console.WriteLine($" avg iss{avg}");


//     // }
// }












// const check=(n)=>{
//     let res=[]
     
//  for(let i=1;i<=n;i++){
//     if(i%3==0 && i %5==0){
//         res.push("fizz BUZZ")
//     }else if(i%3==0){
//       res.push("fizz")
//     }else if(i%5==0){
//      res.push("buzz")
//     }
//     else{
//         res.push(i.toString())
//     }
//  }
//  return res

//     }

    
// console.log(check(15))


// function hallo(ns){
// let nn=ns.toString()
// let spli=nn.split(" ")
// console.log(nn);


// }


// let num =234
// hallo(num)

// function subtractProductAndSum(n) {
//     let digits = n.toString().split("").map(Number);
//     let product = digits.reduce((acc, num) => acc * num, 1);
//     let sum = digits.reduce((acc, num) => acc + num, 0);
//     return product - sum;
// }








class bank
{

    private string accoundholder;
    private double initialbalance;

    public bank(string holder, double balance)

    {
        accoundholder = holder;
        initialbalance = balance > 0 ? balance : 0;
    }


    public string Accoundholder
    {
        get { return accoundholder; }
    }


    public double Initialbalance
    {
        get { return initialbalance; }


    }
    public void deposit(double amoound)
    {
        if(amoound > 0)
        {
            initialbalance += amoound;
            Console.WriteLine($"depo{amoound} new balance {initialbalance}");
        }
    }

public void widrow(double amoound)
    {
        if(amoound > 0 && amoound  <= initialbalance)
        {
            initialbalance -= amoound;
            Console.WriteLine($"widro {amoound}  balance {initialbalance}");
        }
    }



}

class program
{
static void Main()
    {
        bank mybank = new bank("aslam",1000);
        Console.WriteLine($"Account Holder: {mybank.Accoundholder}");
        Console.WriteLine($"Initial Balance: ${mybank.Initialbalance}");


        mybank.deposit(1000);
        mybank.widrow(120);
    }


}
