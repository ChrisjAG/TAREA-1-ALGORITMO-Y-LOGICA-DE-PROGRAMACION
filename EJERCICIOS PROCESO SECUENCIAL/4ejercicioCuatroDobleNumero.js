// 4.	Pedir al usuario un número y mostrar su doble.
// Analisis de requerimentos:
// Entrada: numero="0"(leer), doble(calcular)
// Proceso: doble=numero*2
// Salida: Mostrar el mensaje
// PSEUDOCODIGO:
// Algoritmo doblenumero
//   declarar numero="0", doble="0"
//   Escribir "Ingrese un numero"
//   Leer numero
//   doble=numero*2
//   Escribir "El doble de su numero es:", doble
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function doblenumero(){
    let numero1="0", doble="0"
    numero1=parseFloat(read("Ingrese un numero "))
    doble=numero1 *2
    write("El doble de su numero es: "  + doble)
}
// se llama a la funcion
doblenumero()