// var arreglo = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 ]

// var suma = arreglo [0] + arreglo [1] + arreglo [2] + arreglo [3] + arreglo [4] + arreglo [5] + arreglo [6] + arreglo [7] + arreglo [8] + arreglo [9] + arreglo [10] + arreglo [11] + arreglo [12] + arreglo [13] + arreglo [14] + arreglo [15] + arreglo [16] + arreglo [17] + arreglo [18] + arreglo [19] 

// console.log(suma)

// ---------------------------------------

// ciclos

// var arreglo = [1,2,3,4,5,6,7,8,9]

// var i

// for (var i = 0; i <=10; i++) {
// 	if (arreglo[i]){
// 		console.log(arreglo[i])
// 	}else{
// 		break
// 	}
// }

// --------------------------------------

// ejercicio:

// var frase = prompt("escribe una frase:")
// var fraseSeparada = frase.split("")
// var fraseCompleta = ""

// var i

// //console.log(fraseSeparada)

// for (i = 0; i < fraseSeparada.length; i++) {
// 	if (i%2 == 0) {
// 		fraseSeparada[i] = fraseSeparada[i].toUpperCase()
// 	} fraseCompleta = fraseCompleta + fraseSeparada[i]
// } console.log(fraseCompleta)

// -------------------------------------

// var arreglo = [1,2,3,4,5,6,7,8,9]

// var arreglo = ["a","b","c"]


// var i

// var suma = ""

// for (var i = 0; i < arreglo.length; i++) {
// 	suma = suma + arreglo[i]
// }console.log(suma)

// ---------------------------------------

//ejercicio

// var frase = prompt("escribe una frase:")

// var i

// for (i = 0; i < frase.length; i++) {
// 	console.log(frase[i])	
// } 

// -------------------------------------------

// ejercicio:

// var frase = prompt("escribe una frase: ")
// var fraseCompleta = ""

// var i

// //console.log(fraseSeparada)

// for (i = 0; i < frase.length; i++) {
// 	if (i%2 == 0) {
// 		fraseCompleta += frase[i].toUpperCase()
// 	} else{
// 		fraseCompleta = fraseCompleta + frase[i]
// 	}

	
// } console.log(fraseCompleta)

// ------------------------------------------

// var frase = prompt("escribe una frase: ")
// var fraseCompleta = ""

// var i

// //console.log(fraseSeparada)

// for (i = 0; i < frase.length; i++) {
// 	if (i%2 == 0) {
// 		fraseCompleta += frase[i].toUpperCase()
// 	} else{
// 		fraseCompleta += frase[i]
// 	}

	
// } console.log(fraseCompleta)

// -------------------------------------------

var frase = prompt("escribe una frase: ")
var fraseCompleta = ""

var i

for (i = 0; i < frase.length; i++) {
	if (i%2 == 0) {
		fraseCompleta += frase[i].toUpperCase()
	} else{
		fraseCompleta += frase[i]
	}

	
} console.log(fraseCompleta)

// ------------------------------------------