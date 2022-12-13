function counter(valor){
    return function (){
        return ++valor;
    }
}

let incrementar = counter(1)



function closure(){
    console.log("Primeira chamada "+incrementar());
    console.log("Segunda chamada "+incrementar());
    console.log("Terceira chamada "+incrementar());
    
}