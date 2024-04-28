// 1.	Pedir al usuario su nombre y saludarlo.
// Analisis de requerimentos:
// Entrada: nombreUsuario= ""(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: nombreUsuario + saludo
// La informacion de las variables procesadas
// Salida: mensaje Saludo
// PSEUDOCODIGO:
// Algoritmo saludo
//   declarar nombreUsuario= ""
//   Escribir "Ingrese nombreUsuario"
//   Leer nombreUsuario
//   Escribir "Hola! ", nombreUsuario, "!Buenos dias!"
// FinAlgoritmo
// se crea la funcion
const read = require('prompt-sync')();
const write = console.log;
function saludar() {
    let nombreUsuario=""
    nombreUsuario=read("Ingrese nombreUsuario: ")
    write("Hola!",nombreUsuario,"!Buenos dias!")
}
//se llama a la funcion
saludar()

