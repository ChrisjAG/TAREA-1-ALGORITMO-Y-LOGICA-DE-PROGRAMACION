//14.	Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
// Analisis de requerimentos:
// Entrada: Declar un arreglo de nombres (leer)
// Proceso: Presentar el primer nombre
// Presentar el nombre del medio   
// Presentar el último nombre
// Salida: Escribir Nombres Seleccionados Presentados 
// PSEUDOCODIGO:
// Algoritmo presentarnombreseleccionados
//   declarar arregloNombres= ← ["Christian", "Miguel", "Carlos", "Valeria", "Anita"]
//   Escribir "El primer nombre es: " + nombres[0]
//   Escribir "El nombre del medio es: " + nombres[Entero((Longitud de nombres - 1) / 2)]
//   Escribir "El último nombre es: " + nombres[Longitud de nombres - 1]
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function presentarnombreseleccionados(){
    const nombres=["Christian", "Miguel", "Carlos", "Valeria", "Anita"]
    write("El primer nombre es: " + nombres[0])
    write("El nombre del medio es: " + nombres[Math.floor(nombres.length / 2)])
    write("El último nombre es: " + nombres[nombres.length - 1])
}
presentarnombreseleccionados()