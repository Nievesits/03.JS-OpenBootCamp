//Casos especificos - break y continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++){

    //se salta el número y continúa con el bucle
    if (lista [i] === 3){
        continue;
    }

    console.log (lista[i]);

    //se para ahí
    if (lista [i] > 5){
        break;
    }
}


//Cuál es el ámbito de un bucle

console.log (i) //esta declarada en local con let (var = global)