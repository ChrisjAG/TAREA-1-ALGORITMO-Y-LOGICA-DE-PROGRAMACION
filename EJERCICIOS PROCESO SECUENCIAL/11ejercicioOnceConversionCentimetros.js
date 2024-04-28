//11.	Solicitar al usuario una distancia en metros y mostrarla en centímetros.
// Analisis de requerimentos:
// Formula para conversion de Metros a Centimetros c=metros* 100
// Entrada: metros="0.0"(leer como Float), centimetros= "0.0" (conversion(calcular) como Float) 
// Proceso: centimetros=metros*100
// Salida: Mostrar el mensaje 
// PSEUDOCODIGO:
// Algoritmo metrosCentimetros
//   declarar metros="0.0", centimetros="0.0" 
//   Escribir "Ingrese una distancia en metros"
//   Leer metros
//   centimetros=metros*100 
//   "Los metros convertidos a centimetros son: "  + centimetros
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function metrosCentimetros(){
    let metros="0.0", centimetros="0.0"
    metros=parseFloat(read("Ingrese una distancia en metros: "))
    centimetros=metros*100
    write("Los metros convertidos a centimetros son: " + centimetros)
}
  // se llama a la funcion
  metrosCentimetros()