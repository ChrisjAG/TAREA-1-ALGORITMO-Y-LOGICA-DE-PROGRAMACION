//17.	La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
//Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
//Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.
// Realice un algoritmo para determinar la ganancia obtenida.
// Analisis de requerimentos:
// Entrada:precioInicial="0", tipoBanano="", tamañoBanano="", ganancia=""
// Entrada: Solicitar al usuario que ingrese el precio inicial, tipo y tamaño del banano
// Proceso: Calcular el precio final del banano según el tipo y tamaño ingresados
// Salida: Mostrar la ganancia obtenida por el banano
// Algoritmo GananciaObtenida
//    Declarar precioInicial= "0.0", tipoBanano= "", tamanioBanano=""
//    Escribir "Ingrese el precio inicial por kilo de banano: "
//    Leer precioInicial
//    Escribir "Ingrese el tipo de banano (A o B):"
//    Leer tipoBanano
//    Escribir "Ingrese el tamanio del banano (1 o 2):"
//    Leer tamanioBanano
//    Si tipoBanano = 'A' y tamañoBanano = 1 entonces
//      precioInicial <- precioInicial + 2
//    Sino si tipoBanano = 'A' y tamañoBanano = 2 entonces
//      precioInicial <- precioInicial + 3
//    Sino si tipoBanano = 'B' y tamañoBanano = 1 entonces
//      precioInicial <- precioInicial - 3
//    Sino si tipoBanano = 'B' y tamañoBanano = 2 entonces
//     precioInicial <- precioInicial - 5
//    Fin Si
//   Escribir "La ganancia obtenida por el banano es: $" + precioInicial + " por kilo."
//   Fin Algoritmo
const read = require('prompt-sync')();
const write = console.log
function calcularGananciaBanano() {
    let precioInicial = "0.0", tipoBanano="", tamañoBanano="0"
    precioInicial= parseFloat(read("Ingrese el precio inicial por kilo de banano: "))
    tipoBanano = read("Ingrese el tipo de banano (A o B): ").toUpperCase();
    tamañoBanano = parseInt(read("Ingrese el tamaño del banano (1 o 2): "))
    if (tipoBanano === 'A' && tamañoBanano === 1) {
        precioInicial += 2 
    } else if (tipoBanano === 'A' && tamañoBanano === 2) {
        precioInicial += 3 
    } else if (tipoBanano === 'B' && tamañoBanano === 1) {
        precioInicial -= 3
    } else if (tipoBanano === 'B' && tamañoBanano === 2) {
        precioInicial -= 5
    } 
    write(`La ganancia obtenida por el banano es: $${precioInicial} por kilo.`)
}
// Llamar a la función
calcularGananciaBanano()