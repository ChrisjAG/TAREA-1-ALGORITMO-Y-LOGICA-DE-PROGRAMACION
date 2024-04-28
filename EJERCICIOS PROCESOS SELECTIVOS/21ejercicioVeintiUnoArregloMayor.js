//21.	Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
// Analisis de requerimentos:
// Entrada:Constantes: Ingrese 5 elementos(numeros como INT)
// Proceso: Ingrese 5 elementos uno por uno.
// Leer elementos 
// Se verifica cual es el mayor de los elementos 
// Salida: Mostrar el Mensaje 
// PSEUDOCODIGO: 
// Algoritmo elementoMayor
//    elementos = []
//    Para i = 1 hasta 3, hacer
//     Escribir "Ingrese el elemento ", i, ": "
//      Leer elemento
//       Agregar elemento al final de elementos
//     Fin Para
//    mayor = elementos[0] 
//    indiceMayor = 0 
//         Para i = 1 hasta 2, hacer
//             Si elementos[i] > mayor Entonces
//                 mayor = elementos[i] 
//                 indiceMayor = i 
//             Fin Si
//         Fin Para
//         Escribir "El mayor elemento es ", mayor, " en la posición ", indiceMayor + 1, "."
//     Fin Función
// Fin Algoritmo 

const read = require('prompt-sync')();
const write = console.log;
function elementoMayor() {
    const elementos = []
    for (let i = 0; i < 3; i++) {
        const elemento = parseInt(read(`Ingrese el elemento ${i + 1}: `))
        elementos.push(elemento)
    }
    let mayor = elementos[0]
    let indiceMayor = 0 

    for (let i = 1; i < elementos.length; i++) {
        if (elementos[i] > mayor) {
            mayor = elementos[i]
            indiceMayor = i
        }
    }
    write(`El mayor elemento es ${mayor} en la posición ${indiceMayor + 1}.`)
}
// Llamar a la función 
elementoMayor()