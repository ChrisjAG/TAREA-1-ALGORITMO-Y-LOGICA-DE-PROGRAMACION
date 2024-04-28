//2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
// Analisis de requerimentos:
// Entrada: edadUsuario=""(leer como Int)
// Proceso: 
// Si edadUsuario >= 18
//  entonces 
//     mostrar "Eres mayor de edad"
// Sino 
//     mostrar "Eres menor de edad"
// finSi
// Salida: Mensaje resultado
// PSEUDOCODIGO:
// Algoritmo mayorMenordeEdad
//   declarar edadUsuario="0"
//   Escribir "Ingrese su edad: "
//   Leer edadUsuario
//   Si edadUsuario >= 18 
//     entonces
//        Escribir "Eres mayor de edad " 
//   Sino 
//        Escribir "Eres menor de edad"
//   finSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function mayorMenordeEdad(){
    let edadUsuario= "0"
    edadUsuario=parseInt(read("Ingrese su edad: "))
    if (edadUsuario >= 18) {
        write("Eres mayor de edad ")
    } else {
        write("Eres menor de edad")
    }
}
// se llama a la funcion
mayorMenordeEdad()