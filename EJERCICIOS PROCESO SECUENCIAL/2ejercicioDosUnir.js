// 2. Pedir dos palabras y presentarlas concatenadas
// Analisis de requerimentos:
// Entrada: palabra1=""(leer), palabra2=""(leer),concatenar(proceso)
// Proceso: concatenar=palabra1+palabra1
// Salida: concatenar
// PSEUDOCODIGO:
// Algoritmo unir
//   declarar palabra1="",palabra2="",concatenar=""
//   Escribir "Ingrese palabra1"
//   Leer palabra1
//   Escribir "Ingrese palabra2"
//   Leer palabra2
//   concatenar=palabra1+palabra1
//   Escribir concatenar
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function unir() {
    let palabra1 = "", palabra2 = "", concatenar = ""
    palabra1 = read("Ingrese palabra1:")
    palabra2 = read("Ingrese palabra2:")
    concatenar = palabra1 + " " + palabra2;
    write(concatenar);
 }
 // se llama o se ejecuta la funcion
 unir()
 