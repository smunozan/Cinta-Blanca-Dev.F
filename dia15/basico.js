// alert("funciona")

'use strict'

// var array = [2, 3, 4 , "hola", 23]

// var booleano = true || false

// var angelo = [ "angelo", "luna", 27 , ""mexico]

// var sultanito = []

// sultanito[0] = "nombre"

// sultanito [1] = "apellido"

// console.log(angelo[0])

// var datos = []

// datos[0] = prompt ("Escribe un nombre")
// datos[1] = prompt ("Escribe un apellido")
// datos[2] = prompt ("Escribe un edad")
// datos[3] = prompt ("Escribe un nacionalidad")

// console.log(datos)

var jugador1 = prompt ("Elige: piedra, papel o tijeras")
var jugador2 = prompt ("Elige: piedra, papel o tijeras")

if (jugador1=="piedra"){
	if (jugador2=="papel") {
		console.log("El jugador 1 eligio",jugador1+", el jugador 2 eligio",jugador2, "gana el jugador 2")
	}else if (jugador2=="piedra"){
		console.log("El jugador 1 eligio",jugador1+", el jugador 2 eligio",jugador2, "es un empate")
		}else {
		console.log("El jugador 1 eligio",jugador1+", el jugador 2 eligio",jugador2, "gana el jugador 1")
	}
}

if (jugador1=="papel"){
	if (jugador2=="papel") {
		console.log("El jugador 1 eligio",jugador1, ",el jugador 2 eligio",jugador2, "es un empate")
	}else if (jugador2=="piedra"){
		console.log("El jugador 1 eligio",jugador1, ",el jugador 2 eligio",jugador2, "gana el jugador 1")
		}else {
		console.log("El jugador 1 eligio",jugador1, ",el jugador 2 eligio",jugador2, "gana el jugador 2")
	}
}

if (jugador1=="tijeras"){
	if (jugador2=="papel") {
		console.log("El jugador 1 eligio",jugador1, ",el jugador 2 eligio",jugador2, "gana el jugador 1")
	}else if (jugador2=="piedra"){
		console.log("El jugador 1 eligio",jugador1, ",el jugador 2 eligio",jugador2, "gana el jugador 2")
		}else {
		alert("El jugador 1 eligio "+jugador1+", el jugador 2 eligio "+jugador2+" es un empate")
	}
}