let ejem =[1,2,3,4,5]
const invertlista = function (a){
    let listaFin =[], contador= a[0];
    for (v = 0; v < a.length; v ++){
        contador =a[v]
        listaFin.unshift(contador)
    }
    return listaFin
}

const cambiarlista = function (a){
    let W =a.length, nuevo =[];
    for (let v=0; v < W; v++){
        nuevo.unshift(a.shift());
    }
    W = nuevo.length;
    for (let b=0; b < W; b ++){
        a.push(nuevo.shift());
    }
}