// 5.	Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
// Analisis de requerimentos:
// Entrada: edadUsuario="0"(leer como Int), edadProximoAnio= (calcular)
// Proceso: edadProximoAnio=edadUsuario+ 1
// Salida: Mostrar el Mensaje
// PSEUDOCODIGO:
// Algoritmo edadSiguienteAnio
//   declarar edadUsuario="0", edadProximoAnio="0"
//   Escribir "Ingrese su edadUsuario"
//   Leer edadUsuario
//   edadProximoAnio=edadUsuario+1 
//   Escribir "El proximo anio tendras: ", + edadProximoAnio
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function edadSiguienteAnio(){
    let edadUsuario="0", edadProximoAnio="0"
    edadUsuario=parseInt(read("Ingrese su edad "))
    edadProximoAnio=edadUsuario +1
    write("El proximo anio tendras " + edadProximoAnio)
    write("Gracias por su visita.")
}
//se llama a la funcion
edadSiguienteAnio() 