//13.	Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
// Analisis de requerimentos:
// Entrada: precioProducto= "0.0"(leer float), porcentajeDescuento ="0"(leer), descuento="0.0"(calcular), precioFinal="0.0"(calcular)
// Proceso: 
// descuento = (precioProducto * porcentajeDescuento) / 100
// precioFinal = precioProducto - descuento
// Salida: precioFinal
// Algoritmo pagoTotalConDescuento
// Declarar precioProducto= "0.0", porcentajeDescuento ="0", descuento="0.0", precioFinal="0.0"
// Escribir "Ingrese el precio del producto: "
// Leer precioProducto
// Escribir "Ingrese el porcentaje de descuento aplicado (%): "
// Leer porcentajeDescuento
// descuento = (precioProducto * porcentajeDescuento) / 100
// precioFinal = precioProducto - descuento
// Escribir "El precio final del producto después de aplicar un descuento del ", porcentajeDescuento, "% es: ", precioFinal
// finAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function pagoTotalConDescuento(){
    let precioProducto= "0.0", porcentajeDescuento ="0", descuento="0.0", precioFinal="0.0"
    precioProducto=parseFloat(read("Ingrese el precio del producto: "))
    porcentajeDescuento=parseFloat(read("Ingrese el porcentaje de descuento aplicado (%): "))
    descuento=(precioProducto * porcentajeDescuento) / 100
    precioFinal=(precioProducto-descuento)
    write(`El precio final del producto después de aplicar un descuento del ${porcentajeDescuento}% es: ${precioFinal}`)
}
//se llama a la funcion
pagoTotalConDescuento()
