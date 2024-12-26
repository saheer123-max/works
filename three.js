



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
   let odd=[]
   let even=[]
   numbers.forEach((num)=>{
  if(num%2===0){
     odd.push(num)
  }else if(num%2!==0){
   even.push(num)
  }
   })
console.log(odd);
console.log(even);
console.log(numbers);
