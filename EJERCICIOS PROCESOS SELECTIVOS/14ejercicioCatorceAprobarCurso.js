//14.	Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
// Analisis de requerimentos:
// Entrada: notaExamen="0.0"(leer) como Float 
// Proceso: 
// Si Si notaExamen >= 60 
//  entonces 
//     mostrar "¡Felicidades! Ha aprobado el examen."
// Sino 
//     mostrar "Lo sentimos, ha reprobado el examen."
// finSi
// La informacion de las variables procesadas
// Salida: Mensaje resultado (aprobado o reprobado)
// PSEUDOCODIGO:
// Algoritmo aprobarExamen
//   declarar  notaExamen="0" como Float
//   Escribir "Ingrese su nota del examen: "
//   Leer notaExamen
//   Si Si notaExamen >= 60 
//  entonces 
//     Escribir "¡Felicidades! Ha aprobado el examen."
// Sino 
//     Escribir "Lo sentimos, ha reprobado el examen."
// finSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function aprobarExamen(){
    let notaExamen="0.0"
    notaExamen=parseFloat(read("Ingrese su nota del examen: "))
    if (notaExamen >= 60){
        write("¡Felicidades! Ha aprobado el examen.")
    } else {
        write("Lo sentimos, ha reprobado el examen.")
    }
}
// se llama a la funcion
aprobarExamen()