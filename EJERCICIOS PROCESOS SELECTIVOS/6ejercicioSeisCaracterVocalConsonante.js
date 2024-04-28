//6.	Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
// Analisis de requerimentos:
// Entrada: caracter=""(leer) 
// Proceso: 
// Si caracter es igual a "a" "e"  "i" "o"  "u"   
//   entonces
//    mostrar "El carácter ingresado es una vocal."
// Sino 
//    si caracter está entre 'a' y 'z' y no es 'a' 'e' 'i' 'o' 'u' 
// entonces
//    Mostrar "El carácter ingresado es una consonante."
// finSi
// Salida: Mensaje resultado (caracter es vocal o consonante)
// PSEUDOCODIGO:
// Algoritmo caracterVocalConsonante
//   declarar  caracter="" 
//   Escribir "Ingrese un caracter: "
//   Leer caracter
//   Si caracter es igual a "a" o caracter es igual a "e" o caracter es igual a "i" o caracter es igual a "o" o caracter es igual a "u"
//     entonces
//        Escribir "El carácter ingresado es una vocal."
// Sino 
//   si caracter está entre 'a' y 'z' y no es 'a' ni 'e' ni 'i' ni 'o' ni 'u' 
//     entonces
//        Escribir "El carácter ingresado es una consonante."
//  finSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function caracterVocalConsonante(){
    let caracter=""
    caracter=read("Ingrese un caracter: ")
    caracter=caracter.toLocaleLowerCase()
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u'){
write("El carácter ingresado es una vocal.")
    } else if ((caracter >= 'a' && caracter <= 'z') && !(caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u')){
        write("El carácter ingresado es una consonante.")
    }
}
// se llama a la funcion
caracterVocalConsonante()