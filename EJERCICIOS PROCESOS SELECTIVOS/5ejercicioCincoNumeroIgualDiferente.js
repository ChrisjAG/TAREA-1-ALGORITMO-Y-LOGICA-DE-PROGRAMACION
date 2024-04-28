//5.	Pedir al usuario dos números y mostrar si son iguales o diferentes.
// Analisis de requerimentos:
// Entrada: numero1="0"(leer) como INT, numero2="0" como INT
// Proceso: 
// Si numero1 == numero2 
//  entonces 
//     mostrar "Los numeros ingresados son iguales "
// Sino 
//     mostrar "Los numeros ingresados son diferentes "
// finSi
// La informacion de las variables procesadas
// Salida: Mensaje resultado (numero igual o diferente)
// PSEUDOCODIGO:
// Algoritmo numeroIgualDiferente
//   declarar  numero1="0", numero2="0" 
//   Escribir "Ingrese el primer numero1: "
//   Leer numero1
//   Escribir "Ingrese el segundo numero2: "
//   Leer numero2 
//   Si numero1 == numero2  
//     entonces
//        Escribir "Los numeros ingresados son iguales " 
//   Sino 
//        Escribir "Los numeros ingresados son diferentes "
//   finSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function numeroIgualDiferente(){
    let numero1="0", numero2="0"
    numero1=parseInt(read("Ingrese el primer numero: "))
    numero2=parseInt(read("Ingrese el segundo numero: "))
    if (numero1===numero2){
        write("Los numeros ingresados son iguales")
    } else{
        write("Los numeros ingresados son diferentes")
    } 
}
// se llama a la funcion
numeroIgualDiferente()