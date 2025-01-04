

function greet(callback){
  setTimeout(()=>{
    console.log("hello nihal")
    callback
  },3000);
}

  function hello(){
    console.log("hi nihal")
  }
  greet();
  hello();