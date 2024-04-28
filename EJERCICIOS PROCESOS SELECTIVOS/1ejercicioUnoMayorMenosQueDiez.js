//1.	Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Analisis de requerimentos:
// Entrada: numero1="0.0"(leer como FLoat)
// Proceso: 
// Si numero1 > 10
//  entonces 
//     mostrar numero1 es mayor
// Sino numero1 < 10
//     entonces 
//       mostrar numero1 es menor
//     finSi
// Salida: Mensaje resultado
// PSEUDOCODIGO:
// Algoritmo numeroMayorMenoraDiez
//   declarar numero1="0.0"
//   Escribir "Ingrese ingrese un numero1: "
//   Leer numero1
//   Si numero1 > 10 
//     entonces
//        Escribir "El numero ingresado es mayor que 10. " 
//   Sino numero1 < 10 
//     entonces 
//        Escribir "El numero ingresado es menor que 10. "
//   finSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function numeroMayorMenoraDiez(){
    let numero1="0.0" 
    numero1=parseFloat(read("Ingrese un numero: "))
    if (numero1> 10) {
        write("El numero ingresado es mayor que 10.")
    } else if (numero1< 10) {
        write("El numero ingresado es menor que 10.")
    }
}
// se llama a la funcion
numeroMayorMenoraDiez()