//10.	Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
// Analisis de requerimentos:
// Entrada: numero=""(leer como INT)
// Proceso: 
// Si numero > 100
//  entonces 
//     mostrar numero es mayor
// Sino numero < 100
//     entonces 
//       mostrar numero es menor
//     finSi
// Salida: Mensaje resultado
// PSEUDOCODIGO:
// Algoritmo numeroMayorMenoraCien
//   declarar numero1="0"
//   Escribir "Ingrese ingrese un numero: "
//   Leer numero
//   Si numero > 100 
//     entonces
//        Escribir "El numero ingresado es mayor que 100. " 
//   Sino numero1 < 100 
//     entonces 
//        Escribir "El numero ingresado es menor que 100. "
//   finSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function numeroMayorMenoraCien(){
    let numero="0"
    numero=parseInt(read("Ingrese un numero: "))
    if (numero>100){
        write("El numero ingresado es mayor que 100.")
    } else if (numero<100){
        write("El numero ingresado es menor que 100. ")
    }
}
// se llama a la funcion
numeroMayorMenoraCien()