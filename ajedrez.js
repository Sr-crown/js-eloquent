let espacio = " ";
let num = "#";
let tamano = 8;
let fila= "";
for (let v = 0; v < tamano; v ++){
    
    if (v % 2 == 0){

        fila = "";

        while (fila.length < tamano) {
            
            if (fila.length % 2 == 0){
                fila = fila + num;
            } else {
                fila = fila + espacio;
            }
        }
    
    }else{

        fila = "";
        
        while (fila.length < tamano) {
            if (fila.length % 2 == 0){
                fila = fila + espacio;
            }else{
                fila = fila + num;
            }
        }
    }
    console.log(fila)
}