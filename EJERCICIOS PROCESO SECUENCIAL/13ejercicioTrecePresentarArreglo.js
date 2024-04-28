//13.	Dado un arreglo de 5 nombres presentarlos todos
// Analisis de requerimentos:
// Entrada: Declar un arreglo de nombres (leer)
// Proceso:  
// Para cada nombre en el Arreglo de Nombres
// Escribir el nombre  
// Salida: Mostrar el mensaje 
// PSEUDOCODIGO:
// Algoritmo presentararreglo
//   declarar arregloNombres= ← ["Christian", "Miguel", "Carlos", "Valeria", "Anita"]
//   Escribir "Los nombres son:"
//   Para cada nombre en nombres
//   Escribir nombre
//   Fin 
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function presentararreglo(){
    const nombres=["Christian", "Miguel", "Carlos", "Valeria", "Anita"]
    write("Los nombres son: ")
    for (let x = 0; x < nombres.length; x++) {
        write(nombres[x])
}
}
    presentararreglo()