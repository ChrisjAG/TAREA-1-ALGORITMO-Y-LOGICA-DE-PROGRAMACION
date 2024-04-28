//8.	Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
// Analisis de requerimentos:
// Entrada: nombreUsuario="",repetir(proceso)
// Proceso: repetir nombreUsuario 3 veces
// Salida: Mmostrar el mensaje
// PSEUDOCODIGO:
// Algoritmo sumar
//   declarar nombreUsuario=""
//   Escribir "Ingrese su nombreUsuario"
//   Leer nombreUsuario
//   Escribir nombreUsuario
//   Escribir nombreUsuario
//   Escribir nombreUsuario
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function repetirnombre(){
    let nombreUsuario=""
    nombreUsuario=read("Ingrese su nombre: ");
    for (let i = 0; i < 3; i++) {
        write(nombreUsuario);
    }
}
// se llama a  la funcion
repetirnombre()