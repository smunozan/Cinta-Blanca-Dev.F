// // var arreglo = ["hola" , "es" , "viernes"]

// // console.log(arreglo[0]+arreglo[2])

// var arreglo = [prompt("0. Ingresa un numero") , prompt("1. Ingresa un numero") , prompt("2. Ingresa un numero") , prompt("3. Ingresa un numero") , prompt("4. Ingresa un numero")]

// arreglo[0] = Number(arreglo[0])
// arreglo[1] = Number(arreglo[1])
// arreglo[2] = Number(arreglo[2])
// arreglo[3] = Number(arreglo[3])
// arreglo[4] = Number(arreglo[4])

// var suma = arreglo[0]+arreglo[1]+arreglo[2]+arreglo[3]+arreglo[4]

// console.log(suma)

// // Inicializar variables
// // var array = []
// // var string = ""
// // va numero = 0

// -----------------------------------

// var arreglo = [prompt("0. Ingresa un numero") , prompt("1. Ingresa un numero") , prompt("2. Ingresa un numero") ,prompt("3. Ingresa un numero") , prompt("4. Ingresa un numero")]

// arreglo[0] = Number(arreglo[0])
// arreglo[1] = Number(arreglo[1])
// arreglo[2] = Number(arreglo[2])
// arreglo[3] = Number(arreglo[3])
// arreglo[4] = Number(arreglo[4])


// if (Number.isInteger(arreglo[0]/2) == true) {
// 	console.log("par")
// } else {
// 	console.log("impar")
// }

// if (Number.isInteger(arreglo[1]/2) == true) {
// 	console.log("par")
// } else {
// 	console.log("impar")
// }

// if (Number.isInteger(arreglo[2]/2) == true) {
// 	console.log("par")
// } else {
// 	console.log("impar")
// }

// if (Number.isInteger(arreglo[3]/2) == true) {
// 	console.log("par")
// } else {
// 	console.log("impar")
// }

// if (Number.isInteger(arreglo[4]/2) == true) {
// 	console.log("par")
// } else {
// 	console.log("impar")
// }

// ---------------------------------

// validar cuantos caracteres tiene una variable

// var nombre = "Sebastian"

// console.log(nombre.length)

// ----------------------------------

// var nombre = "Sebastian"

// var array = [nombre[0] , nombre[1] , nombre[2] , nombre[3] , nombre[4] , nombre[5] , nombre[6] , nombre[7] , nombre[8]]

// console.log(array)

// ------------------------------

// var nombre = prompt("nombre")
// var arregloNombre = nombre.split("")

// console.log(arregloNombre)

// --------------------------------

// var frase = prompt("escribe hola")

// if (frase.length==2) {
// 	var fraseSeparada = frase.split("")

// 	fraseSeparada[0] = fraseSeparada[0].toUpperCase()
// 	fraseSeparada[2] = fraseSeparada[2].toUpperCase()
// }

// var fraseSeparada = frase.split("")

// fraseSeparada[0] = fraseSeparada[0].toUpperCase()
// fraseSeparada[2] = fraseSeparada[2].toUpperCase()
// fraseSeparada[4] = fraseSeparada[4].toUpperCase()
// fraseSeparada[6] = fraseSeparada[6].toUpperCase()
// fraseSeparada[8] = fraseSeparada[8].toUpperCase()
// fraseSeparada[10] = fraseSeparada[10].toUpperCase()
// fraseSeparada[12] = fraseSeparada[12].toUpperCase()
// fraseSeparada[14] = fraseSeparada[14].toUpperCase()

// frase = fraseSeparada.join("")

// console.log(frase)

// -------------------------------

var frase = prompt("escribe hola")
var fraseSeparada = frase.split("")

fraseSeparada[0] = fraseSeparada[0].toUpperCase()
fraseSeparada[2] = fraseSeparada[2].toUpperCase()

console.log(fraseSeparada[0]+fraseSeparada[1]+fraseSeparada[2]+fraseSeparada[3])