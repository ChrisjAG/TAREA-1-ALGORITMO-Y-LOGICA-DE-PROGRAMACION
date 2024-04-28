//15.	Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí
// Analisis de requerimentos:
// Entrada: Declar un arreglo de nombres (leer)
// Proceso: Intercambiar los valores del primer y último elemento
// Salida: Presentar el arreglo después del intercambio
// PSEUDOCODIGO:
// Algoritmo presentarnombreseleccionados
//   declarar arregloNombres= ← ["Christian", "Miguel", "Carlos", "Valeria", "Anita"]
//       temp ← nombres[0]
//       nombres[0] ← nombres[Longitud de nombres - 1]
//       nombres[Longitud de nombres - 1] ← temp
//   Escribir "El último nombre es: " + nombres[Longitud de nombres - 1]
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function intercambioNombres (){
    const nombres=["Christian", "Miguel", "Carlos", "Valeria", "Anita"]
    let temp = nombres[0]
nombres[0] = nombres[nombres.length - 1]
nombres[nombres.length - 1] = temp
write("Arreglo después del intercambio:", nombres)
}
intercambioNombres()  