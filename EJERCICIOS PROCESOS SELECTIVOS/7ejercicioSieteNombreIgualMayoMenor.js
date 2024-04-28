//7.	Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo..
// Analisis de requerimentos:
// Entrada: nombre1=""(leer), nombre2="" 
// Proceso: 
// Si nombre1 == nombre2 
//  entonces 
//     mostrar "Los nombres ingresados son iguales "
// Sino 
//     nombre1 > nombre2
//   entonces
//     mostrar nombre1,  "es mayor que "", nombre2
// Sino
//     nombre1 < nombre2
//      mostrar nombre1, " es menor que ", nombre2
// finSi
// Salida: Mensaje resultado (nombre1 es mayor o menor que nombre2)
// PSEUDOCODIGO:
// Algoritmo nombreIgualMayorMenor
//   Declarar  nombre1=""(leer), nombre2="" (leer)
//   Escribir "Ingrese el primer nomnbre1: "
//   Leer nombre1
//   Escribir "Ingrese el segundo nombre2: "
//   Leer nombre2 
//   Si nombre1 == nombre2  
//     entonces
//        Escribir "Los nombres ingresados son iguales " 
//   Sino 
//     nombre1 > nombre2
//       entonces
//         Escribir nombre1, " es mayor que ", nombre2, "."
// Sino
//     nombre1 < nombre2
//        Escribir nombre1, " es menor que ", nombre2, "."
// finSi   
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function nombreIgualMayorMenor(){
    let nombre1="", nombre2=""
    nombre1=read("Ingrese el primer nombre: ")
    nombre2=read("Ingrese el segundo nombre: ")
    if (nombre1===nombre2){
        write("Los nombres ingresados son iguales")
    } else if (nombre1 > nombre2){
        write(`${nombre1} es mayor que ${nombre2}.`)
    } else{
        write(`${nombre1} es menor que ${nombre2}.`)
    }
}
// se llama a la funcion
nombreIgualMayorMenor()