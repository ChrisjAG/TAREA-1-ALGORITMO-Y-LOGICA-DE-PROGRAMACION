//8.	Pedir al usuario un número y mostrar si es múltiplo de 3.
// Analisis de requerimentos:
// Entrada: numero="0"(leer) como Int numero mod 3= 0
// Los calculos o procesos que se hacen con las variables
// Proceso: 
// Si numero % 3 es igual a 0
//  entonces 
//     mostrar "El numero es multiplo de 3"
// Sino 
//     mostrar "El numero no es multiplo de 3 "
// finSi
// Salida: Mensaje resultado (numero es o no multiplo de 3.)
// PSEUDOCODIGO:
// Algoritmo numeroMultiplodeTres
//   declarar  numero="0" 
//   Escribir "Ingrese un numero: "
//   Leer numero
//   Si numero % 3 es igual a 0 
//     entonces
//        Escribir "El numero es multiplo de 3 " 
//   Sino 
//        Escribir "El numero no es multiplo de 3  "
//   finSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function numeroMultiplodeTres(){
    let numero="0"
    numero=parseInt(read("Ingrese un numero: "))
    if (numero % 3 === 0){
        write(`${numero} es multiplo de 3.`)
    } else{
        write(`${numero} no es multiplo de 3.`)
    }
}
// se llama a la funcion
numeroMultiplodeTres()