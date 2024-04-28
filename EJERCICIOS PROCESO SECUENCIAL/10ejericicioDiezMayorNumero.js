//10.	Pedir al usuario dos números y mostrar el mayor.
// Analisis de requerimentos:
// Entrada: numero1=""(leer como INT), numero2=""(leer como INT)
// Proceso: 
// Si numero1 > numero2
//  entonces mostrar numero1
// Sino numero1 < numero2
//  entonces mostrar numero2
// Salida: Mostrar el mensaje   
// PSEUDOCODIGO:
// Algoritmo numeroMayor
//   declarar numero1="0",numero2="0" 
//   Escribir "Ingrese el primer numero1"
//   Leer numero1
//   Escribir "Ingrese el segundo numero2"
//   Leer numero2
//   Si numero1 > numero2 entonces
//   Escribir "El numero mayor es el: " + numero1
//   Sino numero1 < numero2 entonces 
//   Escribir "El numero mayor es el: " + numero2
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function numeroMayor(){
    let numero1="0", numero2="0"
    numero1=parseFloat(read("Ingrese el primer numero: "))
    numero2=parseFloat(read("Ingrese el segundo numero: "))
    if (numero1>numero2) {
        write("El numero mayor es el: " + numero1)
    } else if (numero1<numero2) {
        write("El numero mayor es el: " + numero2)
    }
}
// se llama a la funcion
numeroMayor()