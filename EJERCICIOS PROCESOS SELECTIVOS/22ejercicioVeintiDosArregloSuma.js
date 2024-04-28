// 22.	Dado un arreglo de 5 elementos presentar la suma de dichos elementos
// Analisis de requerimentos:
// Entrada:Constantes: Ingrese 5 elementos(numeros como INT)
// Proceso: Ingrese 5 elementos uno por uno.
// Leer elementos
// Se suma todos los elementos
// Salida: Mostrar el Mensaje 
// PSEUDOCODIGO:
//     Función sumarElementos
//         elementos = []
//         Para i = 1 hasta 5, hacer
//             Escribir "Ingrese el elemento ", i, ": "
//             Leer elemento
//             Agregar elemento al final de elementos
//         Fin Para
//         suma = 0 
//         Para cada elemento en elementos, hacer
//             suma = suma + elemento
//         Fin Para
//         Escribir "La suma de los elementos es ", suma
//         Fin
//   Final Algoritmo
const read = require('prompt-sync')();
const write = console.log;

function sumarElementos() {
    const elementos = []
    let suma = 0
    for (let i = 0; i < 5; i++) {
        const elemento = parseInt(read(`Ingrese el elemento ${i + 1}: `))
        elementos.push(elemento)
    }
    for (let i = 0; i < elementos.length; i++) {
        suma += elementos[i]
    }
    write("La suma de los elementos es:", suma)
}

// Llamar a la función 
sumarElementos()