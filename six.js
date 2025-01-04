function parent(n){

    return  {
  
    tobe:function(ex){
        if(ex===n){
        return true
        }else{
            throw new Error("error" + "Not Equal")
        }
    },
    nottobe:function(exs){
    if(exs!==n){
        return "value" + true
    }else{
        throw new Error("Equl")
    }
    }
    }
    }

    let par=parent(5)
    console.log(par.nottobe(6))