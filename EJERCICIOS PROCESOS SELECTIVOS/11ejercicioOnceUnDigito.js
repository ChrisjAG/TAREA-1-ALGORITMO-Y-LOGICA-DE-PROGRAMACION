//11.	Solicitar al usuario un número y mostrar si es un número de un solo dígito.
// Analisis de requerimentos:
// Entrada: numero="0.0"(leer) como INT 
// Proceso: 
// Si numero está entre 0 y 9 inclusive 
//  entonces 
//     mostrar numero "es un numero de un solo digito."
// Sino 
//     mostrar numero, " no es un numero de un solo digito."
// finSi
// Salida: Mensaje resultado (numero es o no de un solo digito)
// PSEUDOCODIGO:
// Algoritmo numeroUnDigito
//   declarar  numero="0" 
//   Escribir "Ingrese un numero: "
//   Leer numero
//   Si numero está entre 0 y 9 inclusive y es un número entero  
//     entonces
//        Escribir numero, " es un número de un solo dígito."
//   Sino 
//        Escribir numero, " no es un número de un solo dígito."
//   finSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function numeroUnDigito(){
    let numero="0"
    numero=parseInt(read("Ingrese un numero: "));
    if (numero>= 0 && numero <= 9 && Number.isInteger(numero)){
        write(`${numero} es un numero de un solo digito.`)
    } else {
        write(`${numero} no es un numero de un solo digito.`)
    }
}
//se llama a la funcion
numeroUnDigito()