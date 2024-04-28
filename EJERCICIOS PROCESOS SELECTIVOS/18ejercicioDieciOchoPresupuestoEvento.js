//18.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
//El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
//Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva
//Analisis de requerimentos:
// Entrada:Constantes: costoPorPersonaNormal = 20.00, costoPorPersonaDescuento100_200 = 15.00
// costoPorPersonaDescuento200Mas = 10.00,  porcentajeIVA = 0.15
//Variables: totalPersonas:"0" (leer Entero), costoTotal: "O.0" (calcular Float), presupuestoFinal: "0.0" (calcular Float)
// Proceso: Calcular el costo total del evento y agregarle el 15% de IVA
// presupuestoFinal = costoTotal + (costoTotal * porcentajeIVA)
// Salida: presupuesTotal 
//Algoritmo calcularPresupuestoBanquete
// Declarar numeroPersonas:"0", costoPorPersona: "0.0", presupuestoTotal:"0.0", iva: "0.0"
// Escribir "Ingrese el número de personas: "
// Leer numeroPersonas
// Si numeroPersonas <= 100 entonces
//     costoPorPersona <- 20.00
// Sino si numeroPersonas > 100 y numeroPersonas <= 200 entonces
//     costoPorPersona <- 15.00
// Sino
//     costoPorPersona <- 10.00
// Fin Si
// presupuestoTotal <- costoPorPersona * numeroPersonas
// iva <- presupuestoTotal * 0.15
// presupuestoTotal <- presupuestoTotal + iva
// Escribir "El presupuesto total para el evento es: $" + presupuestoTotal
// Fin Algoritmo
const read = require('prompt-sync')();
const write = console.log
function calcularPresupuestoBanquete() {
    let numeroPersonas= "0", costoPorPersona="0.0", presupuestoTotal="0.0"
    const iva = 0.15 // 15% de IVA
    numeroPersonas = parseInt(read("Ingrese el número de personas: "))
    if (numeroPersonas <= 100) {
        costoPorPersona = 20.00
    } else if (numeroPersonas > 100 && numeroPersonas <= 200) {
        costoPorPersona = 15.00
    } else {
        costoPorPersona = 10.00
    }
    presupuestoTotal= costoPorPersona * numeroPersonas
    const montoIva = presupuestoTotal * iva
    presupuestoTotal += montoIva
    write(`El presupuesto total para el evento es: $${presupuestoTotal.toFixed(2)}`)
}

calcularPresupuestoBanquete()
