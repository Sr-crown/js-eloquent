const rango = function (ini,fin,ext){
    let r = [], temp =ini;
    r.push(ini)
    
    if ( ini > fin){
        while ( temp > fin) {
            temp += ext;
            r.push(temp);
        }
        if (temp>fin){
            r.pop();
        }
    }else{ 
        while(temp < fin) {
            temp += ext;
            r.push(temp);
        }
        if (temp>fin){
            r.pop();
        }
    }

    return r
} 
const contRango = function (arra){
    let contador = arra[0], suma = 0, w=0;
    
    while (w < arra.length){
      suma += contador;
      w ++
      contador = arra[w];
    }
    return suma;
}