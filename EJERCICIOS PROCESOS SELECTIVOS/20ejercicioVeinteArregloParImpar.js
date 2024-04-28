// 20.	Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar.
// Analisis de requerimentos:
// Entrada:Constantes: Ingrese 5 elementos(numeros como INT)
// Proceso: Ingrese 5 elementos uno por uno.
// Leer elementos 
// Se verifica si el primer elemento del arreglo es par y si el último elemento es impar.
// Salida: Mostrar el Mensaje 
// PSEUDOCODIGO:
//   Algortimo elementoParImpar
//         elementos = []
//         Para i = 1 hasta 5, hacer
//             Escribir "Ingrese el elemento ", i, ": "
//             Leer elemento
//             Agregar elemento al final de elementos
//         Fin Para
//         Si elementos[0] % 2 == 0 y elementos[4] % 2 != 0 Entonces
//             Escribir "El primer elemento es par y el último elemento es impar."
//         Sino
//             Escribir "El primer elemento no es par y el último elemento es impar."
//         Fin Si
// Final Algoritmo
const read = require('prompt-sync')();
const write = console.log;

function elementoParImpar() {
    const elementos = []
    for (let i = 0; i < 5; i++) {
        const elemento = parseInt(read(`Ingrese el elemento ${i + 1}: `))
        elementos.push(elemento)
    }
    if (elementos[0] % 2 === 0 && elementos[4] % 2 !== 0) {
        write("El primer elemento es par y el último elemento es impar.")
    } else {
        write("El primer elemento no es par y el último elemento es impar.")
    }
}
// Llamar a la función 
elementoParImpar()