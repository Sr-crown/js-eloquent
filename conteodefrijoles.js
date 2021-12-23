//contar "f"
let ejem = "FalaFel"
const contarF = function (a){
    let f = 0;
    let cont= a[0];
    let w = 0;
    while (w < a.length){
        
        if (cont == "F"){
            f ++;
            w ++;
            cont = a[w];
        
        }else {
            w ++;
            cont = a[w];
        }
    }
    return f;
}

console.log(contarF(ejem));

//contar caracteres sin importar cual sea

const contarChara = function(pa,cha){

    let coCha = 0; 
    let cont = pa [0];
    let v = 0;

    while (v < pa.length){

        if (cont == cha){
            v ++
            coCha ++;
            cont = pa[v];
        }else{
            v ++
            cont = pa[v];
        }
    }
    return coCha;
}

console.log(contarChara(ejem,"f"));

//usar anterior para contar F

const wheresF = function(a){
    let contar = contarChara(a,"f");
    
    if (contar <= 0){
        return "no hay F";
    }else {
        return "hay: "+contar+"Fs";
    }
}
console.log(wheresF("falafel"));