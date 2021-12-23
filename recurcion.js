const EsPar = function (a){
    if (a < 0){
        return null
    }else if (a == 0){
        return true;
    }else if (a == 1){
        return false;
    }else{
        return a = EsPar (a-2)
    }
}
console.log(EsPar(5));