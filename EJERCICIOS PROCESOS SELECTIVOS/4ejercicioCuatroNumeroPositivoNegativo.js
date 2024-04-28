//4.	Solicitar al usuario un número y mostrar si es positivo o negativo.
// Analisis de requerimentos:
// Entrada: numero="0"(leer) como INT
// Proceso: 
// Si numero > 0 
//  entonces 
//     mostrar "El numero ingresado es positivo "
// Sino numero < 0
//   entonces
//     mostrar "El numero ingresado es negativo "
// finSi
// La informacion de las variables procesadas
// Salida: Mensaje resultado (numero positivo o negativo)
// PSEUDOCODIGO:
// Algoritmo numeroPositivoNegativo
//   declarar  numero="0" 
//   Escribir "Ingrese un numero: "
//   Leer numero
//   Si numero >0  
//     entonces
//        Escribir "El numero ingresado es positivo " 
//   Sino numero <0 
//     entonces
//        Escribir "El numero ingresado es negativo "
//   finSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function numeroPositivoNegativo(){
    let numero="0"
    numero=parseInt(read("Ingrese un numero: "))
    if (numero > 0){
        write("El numero ingresado es positivo")
    } else if (numero < 0){
        write("El numero ingresado es negativo")
    }
}
// se llama la funcion
numeroPositivoNegativo()
