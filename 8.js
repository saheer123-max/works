
function task(n){
    var nn=n
    let res=n
  return{
    incremt(){
     return   ++nn
    },
   decremt(){
     return  --nn
   },
   reset(){
      n=res
      return n
   }
  }
  }
  let  tes=task(5)
  console.log(tes.reset());
  