let ejem1 ={valor:1,resto:{
    valor:2,resto:null}}
let ejem2 ={valor:2, resto:3}
let ejem3 ={valor:1,resto:{
    valor:2,resto:null
}}
let ejem4 = "verde";

const compararP = function (a,b){
    if (typeof a == typeof b){
        if (a==b){
            return true
        }else if(typeof a == "object"){
            if (a.valor == b.valor){
                return compararP(a.resto,b.resto);
            }else{
                return false
            }
        }else{
            return false
        }
    }else{
        return false
    }
}