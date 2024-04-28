//6.	Pedir al usuario dos números y mostrar el resultado de multiplicarlos.
// Analisis de requerimentos:
// Entrada: num1="0"(leer como INT), num2= "0", multiplicacion(calcular) 
// Proceso: multiplicacion=num1*num2
// Salida: Mostrar el Mensaje
// PSEUDOCODIGO:
// Algoritmo multiplicar
//   declarar num1="0", num2="0"
//   Escribir "Ingrese el primer num1"
//   Leer num1
//   Escribir "Ingrese el segundo num2"
//   Leer num2
//   multiplicacion= num1*num2  
//   Escribir La multiplicacion de los numeros es "  + multiplicacion
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function multiplicar(){
    let num1="0", num2="0", multiplicacion="0"
    num1=parseInt(read("Ingrese el primer numero "))
    num2=parseInt(read("Ingrese el segundo numero "))
    multiplicacion=num1*num2;
    write("La multiplicacion de los numeros es " + multiplicacion)
}
//se llama a la funcion
multiplicar() 