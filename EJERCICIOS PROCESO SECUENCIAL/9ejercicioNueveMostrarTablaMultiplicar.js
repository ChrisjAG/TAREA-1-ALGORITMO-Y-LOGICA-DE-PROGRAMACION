//9.	Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
// Analisis de requerimentos:
// Entrada: numero="" como Entero(Leer),tabla=(proceso)
// Proceso: Leer el número ingresado por el usuario
// Para cada número del 1 al 10: Multiplicar el número ingresado por el número actual del ciclo
// Salida: Mostrar el resultado de la multiplicación
// PSEUDOCODIGO:
// Algoritmo tablamultiplicar
//   declarar numero="0",
//   Escribir "Ingrese un numero"
//   Leer numero
//   Para x desde 1 hasta 10 
//   resultado= numero * 10
//   Escribir (`${numero} * ${x} = ${resultado}`)
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function mostrartablamultiplicar(){
    let numero=parseInt(read("Ingrese un numero "))
    for (let x = 1; x <= 10; x ++) {
        let resultado = numero * x
        write(`${numero} * ${x} = ${resultado}`)
    }
}
//se llama a la funcion
mostrartablamultiplicar() 
