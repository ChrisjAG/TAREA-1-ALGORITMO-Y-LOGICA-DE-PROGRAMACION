//16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
// Analisis de requerimentos:
// Entrada:sueldoMensual="0.0" (leer Float), sueldoAnual="0" (calcular), excedente="0", impuesto="0"
// Proceso: sueldoAnual = sueldoMensual * 12
// Si sueldoAnual > 30000 
//   Entonces
//     excedente = sueldoAnual - 30000
//      impuesto = excedente * 0.15
//       sueldoAnual = sueldoAnual - impuesto
//        Escribir "Sueldo neto anual después de aplicar un impuesto del 15% sobre el excedente:", sueldoAnual
//     Sino
//        Escribir "Sueldo neto anual:", sueldoAnual
//  FinSi
// Salida: sueldoAnual 
// Algoritmo sueldoNetoAnual
//    Declarar sueldoMensual="0.0" (leer Float), sueldoAnual="0" (calcular), excedente="0", impuesto="0"
//    Escribir "Ingrese su sueldo mensual: "
//    Leer sueldoMensual
//    sueldoAnual = sueldoMensual * 12
// Si sueldoAnual > 30000 
//   Entonces
//     excedente = sueldoAnual - 30000
//      impuesto = excedente * 0.15
//       sueldoAnual = sueldoAnual - impuesto
//        Escribir "Sueldo neto anual después de aplicar un impuesto del 15% sobre el excedente:", sueldoAnual
//     Sino
//        Escribir "Sueldo neto anual:", sueldoAnual
//  FinSi
// finAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function sueldoNetoAnual(){
    let sueldoMensual="0.0", sueldoAnual="0", excedente="0", impuesto="0"
    sueldoMensual=parseFloat(read("Ingrese su sueldo mensual: "))
    sueldoAnual = sueldoMensual * 12

    if (sueldoAnual > 30000) {
        excedente = sueldoAnual - 30000
        impuesto = excedente * 0.15
        sueldoAnual -= impuesto
        write(`Sueldo neto anual después de aplicar un impuesto del 15% sobre el excedente: ${sueldoAnual}`)
    } else {
        write(`Sueldo neto anual: ${sueldoAnual}`)
    }
}
// se llama a la funcion
sueldoNetoAnual()