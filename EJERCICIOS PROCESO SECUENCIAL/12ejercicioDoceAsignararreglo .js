//12.	Pedir 5 números y asignarlos en un arreglo
// Analisis de requerimentos:
// Entrada: Arreglo de Numeros= arreglo de 5 elementos de tipo entero 
// Proceso: 
// Para cada número del 1 al 5
// Pedir ingrese un numero
// Leer el número 
// Asignar el número al elemento del arreglo
// Salida: Mostrar el contenido del arregloNumeros
// PSEUDOCODIGOS:
// Algoritmo arreglodenumeros
//   declarar arregloNumeros= [], 
//   Para x desde 1 hasta 5
//   Escribir "Ingrese el número ", x, ":"
//   Leer numero
//   Asignar numero al x-ésimo elemento del arreglo arregloNumeros
//   Escribir ("Los números ingresados son: " + arregloNumeros);"
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function arreglodenumeros(){
    let arregloNumeros=[]
    for(let x= 1; x <= 5; x ++) {
        let numero=parseInt(read("Ingrese el numero: " + x + ":"))
        arregloNumeros.push(numero)
        write("Los números ingresados son: " + arregloNumeros)
    }
}
arreglodenumeros()
