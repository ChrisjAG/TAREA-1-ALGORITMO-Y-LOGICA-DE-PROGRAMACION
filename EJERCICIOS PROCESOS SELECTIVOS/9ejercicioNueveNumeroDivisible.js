//9.	Solicitar al usuario un número y mostrar si es divisible por 2.
// Analisis de requerimentos:
// Entrada: numero="0"(leer) como Int 
// Proceso: numero mod 2= 0
// Si numero % 2 es igual a 0
//  entonces 
//     mostrar "El numero es divisible por 2. "
// Sino 
//     mostrar "El numero no es divisible por 2. "
// finSi
// La informacion de las variables procesadas
// Salida: Mensaje resultado (numero divisible o no por 2)
// Seupdocodigo:
// Algoritmo numeroDivisible
//   declarar  numero="0" 
//   Escribir "Ingrese un numero: "
//   Leer numero
//   Si numero % 2 es igual a 0 
//     entonces
//        Escribir "El numero es divisible por 2.  " 
//   Sino 
//        Escribir "El numero no es divisible por 2. "
//   finSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function numeroDivisible(){
    let numero="0"
    numero=parseInt(read("Ingrese un numero: "))
    if (numero % 2 === 0 ){
        write(`${numero} es divisible por 2.`)
    } else{
        write(`${numero} no es divisible por 2.`)
    }
}
// se llama a la funcion
numeroDivisible()
    