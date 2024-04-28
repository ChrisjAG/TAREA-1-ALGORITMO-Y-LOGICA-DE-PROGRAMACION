// 3.	Solicitar al usuario dos números y mostrar su suma.
// Analisis de requerimentos:
// Entrada: numero1=""(leer como Int), numero2=""(leer como Int),suma(proceso)
// Proceso: suma=numero1+numero2
// Salida: Mostrar el mensaje 
// PSEUDOCODIGO:
// Algoritmo sumar
//   declarar numero1="0",numero2="0",suma=""
//   Escribir "Ingrese el primer numero1"
//   Leer numero1
//   Escribir "Ingrese el segundo numero2"
//   Leer numero2
//   suma=numero1+numero2 
//   Escribir "La suma de los numeros es:", +suma
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function sumar(){
 let numero1="0",numero2="0",suma="0"
 numero1=parseInt(read("Ingrese el primer numero "))
 numero2=parseInt(read("Ingrese el segundo numero "))
 suma=numero1 + numero2;
 write("La suma de sus dos numeros es " +suma);
}
//se llama a la funcion
sumar()