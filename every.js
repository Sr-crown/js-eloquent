let prueba= [2,4,6,8];

const cada = (arra)=>{
    for (comparador of arra){
        if (comaprador % 2 != 0 ){
            return false
        }
    }
    return true
}

const cadaV2 = (arra)=>{
    if (!arra.some(n=> n % 2 !=0)){
        return "todos pares"
    }
    return "Hay un inpar"
}
