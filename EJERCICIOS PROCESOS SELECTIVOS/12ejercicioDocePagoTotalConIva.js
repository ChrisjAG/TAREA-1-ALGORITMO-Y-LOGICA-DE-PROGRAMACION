//12.	Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
// Analisis de requerimentos:
// Entrada: montoTotal= "0.0"(leer float), porcentajeIva ="0"(leer), montoIva= "0"(calcular),totalConIva="0"(calculado)
// Proceso: 
// montoIVA = (montoTotal * porcentajeIVA) / 100
// totalConIVA = montoTotal + montoIVA
// Salida: totalConIVA
//PSEUDOCODIGO
// Algoritmo pagoTotalConIva
// Declarar montoTotal="0.0", porcentajeIva="0", montoIva="0", totalConIva="0"
// Escribir "Ingrese el monto total de la factura: "
// Leer montoTotal
// Escribir "Ingrese el porcentaje de IVA aplicado (%): "
// Leer porcentajeIVA
// montoIVA = (montoTotal * porcentajeIVA) / 100
// totalConIVA = montoTotal + montoIVA
// Escribir "El monto total a pagar, incluyendo el IVA del ", porcentajeIVA, "%, es: ", totalConIVA
// finAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function pagoTotalConIva() {
    let montoTotal = "0.0", porcentajeIva = "0.0", montoIva = "0.0", totalConIva = "0.0"
    montoTotal = parseFloat(read("Ingrese el monto total de la factura: "))
    porcentajeIva = parseFloat(read("Ingrese el porcentaje de IVA aplicado (%): "))
    montoIva = (montoTotal * porcentajeIva) / 100
    totalConIva = montoTotal + montoIva
    write(`El monto total a pagar, incluyendo el IVA del ${porcentajeIva}%, es: ${totalConIva}`)
}
// se llama a la funcion
pagoTotalConIva()