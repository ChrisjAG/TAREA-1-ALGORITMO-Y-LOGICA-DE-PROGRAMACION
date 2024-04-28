//3.	Pedir al usuario un número y mostrar si es par o impar.
// Analisis de requerimentos:
// Entrada: numero="0"(leer) numero mod 2= 0
// Proceso: 
// Si numero % 2 es igual a 0
//  entonces 
//     mostrar "El numero ingresado es par "
// Sino 
//     mostrar "El numero ingresado es par "
// finSi
// Salida: Mensaje resultado (numero par o impar)
// PSEUDOCODIGO:
// Algoritmo numeroParImpar
//   declarar  numero="0" 
//   Escribir "Ingrese un numero: "
//   Leer numero
//   Si numero % 2 es igual a 0 
//     entonces
//        Escribir "El numero ingresado es par " 
//   Sino 
//        Escribir "El numero ingresado es impar "
//   finSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function numeroParImpar(){
    let numero="0"
    numero=read("Ingrese un numero: ")
    if (numero % 2 ===0){
        write("El numero ingresado es par ")
    } else{
        write("El numero ingresado es impar ")
    }
}
// se llama a la funcion
numeroParImpar() 