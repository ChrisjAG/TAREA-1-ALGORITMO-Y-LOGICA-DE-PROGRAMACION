//7.	Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
// Analisis de requerimentos:
// Formula para conversion de Celsius a Fahrenheit F=Celsius* 9/5 +32
// Entrada: celsius="0"(leer como Float), fahrenheit= "0" (conversion(calcular) como Float) 
// Proceso: fahrenheit=celsius*9/5 +32
// Salida: Mostrar el mensaje 
// PSEUDOCODIGO:
// Algoritmo gradosCelsiusaFahrenheit
//   declarar celsius="0.0", fahrenheit="0.0" 
//   Escribir "Ingrese la temperatura en grados celsius"
//   Leer celsius
//   fahrenheit=celsius*9/5+32 
//   "Los grados celsius convertidos a grados fahrenheit son: "  + fahrenheit
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function gradosCelsiusaFahrenheit(){
    let celsius="0.0", fahrenheit="0.0"
    celsius=parseFloat(read("Ingrese la temperatura en grados celsius "))
    fahrenheit=celsius* 9/5 + 32;
    write("Los grados celsius convertidos a grados fahrenheit es "  + fahrenheit)
}
// se llama a la funcion
gradosCelsiusaFahrenheit() 