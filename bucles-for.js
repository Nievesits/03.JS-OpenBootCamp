//Bucles For


for (let i = 0; i < 10; i++ ){
    //esto es el bucle
    console.log (i)
}

let lista = [1, 4, 6, 2, 2, 3];


for (let i = 0; i < lista.length; i++ ){
    console.log (lista[i]*2)
}

//estructura for...of

for (let valor of lista){
    console.log(valor)
}

//Estructura forEach

lista.forEach(valor =>{
    console.log (valor)
})

//Estructura for...In

let persona = {
    nombre: "Nieves",
    apellido:"Lopez",
    edad: 43,
    isDeveloper: false
}
let prop ="edad"
console.log(persona[prop])  

for (let propiedad in persona){
    console.log(propiedad)
    console.log (persona[propiedad])
}