// 19.	Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
// Analisis de requerimentos:
// Entrada:Constantes: Ingrese 5 elementos(numeros como INT)
// Proceso: Ingrese 5 elementos uno por uno.
// Leer elementos 
// Se compara el primer elemento del arreglo con el último elemento del arreglo..
// Salida: Mostrar el Mensaje 
//PSEUDOCODIGO:
// Algoritmo elementoMayor
//  elementos = []
//         Para i = 1 hasta 5, hacer
//             Escribir "Ingrese el elemento ", i, ": "
//             Leer elemento
//             Agregar elemento al final de elementos
//         Fin Para
//         Si elementos[0] > elementos[4] Entonces
//             Escribir "El primer elemento es mayor que el último elemento."
//         Sino
//             Escribir "El primer elemento no es mayor que el último elemento."
//         Finsi
// Fin Algoritmo
const read = require('prompt-sync')();
const write = console.log;
function elementoMayor() {
    const elementos = []
    for (let i = 0; i < 5; i++) {
        const elemento = parseInt(read(`Ingrese el elemento ${i + 1}: `))
        elementos.push(elemento)
    }
    if (elementos[0] > elementos[elementos.length - 1]) {
        write("El primer elemento es mayor que el último elemento.")
    } else {
        write("El primer elemento no es mayor que el último elemento.")
    }
}
elementoMayor()