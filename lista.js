const arrayALista = function (a){
    let lista = {};
    for (v=0;v<a.length;v++){
        lista={valor:a[v],resto:lista};
    }
    return lista
}
let ejem1 = arrayALista([1,2,3]);

const listaAArray = function (a){
    let beta = [];
    for (nodo=a;nodo;nodo=nodo.resto){
        beta.push(nodo.valor)
    }
    return beta
}

let ejem2 = (listaAArray(ejem1));

const agregar = function(a,b){
    let nlista = {};
    nlista ={valor:b, resto:a}
    return nlista
}
let ejem3= agregar(ejem1,7);

const posicion = function(list,posi){
    if (posi+1 == list.valor && list != null){
        return list.valor
    }else if(list.valor == null){
        return null
    }
    else{
        return list = posicion(list.resto,posi);
    }
}