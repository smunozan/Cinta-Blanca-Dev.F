
// Input de materialize que almacena el nombre en JS y lo muestra en el html
// function traerNombre(){
// 	var nombre = document.getElementById("nombre")
// 	console.log(nombre.value)

// 	document.getElementById("nombreParaMostrar").innerHTML = nombre.value;
// }

// --------------------------------

// jalar datos para sumar
function sumaDosNumeros(){
	var	num1 = document.getElementById("num1")
	var	num2 = document.getElementById("num2")

	var suma = Number(num1.value)+Number(num2.value)

	console.log(suma)

	document.getElementById("resultado").innerHTML = suma
	document.getElementById("operacion").innerHTML = "suma"
}

function restaDosNumeros(){
	var	num1 = document.getElementById("num1")
	var	num2 = document.getElementById("num2")

	var suma = Number(num1.value)-Number(num2.value)

	console.log(suma)

	document.getElementById("resultado").innerHTML = suma
	document.getElementById("operacion").innerHTML = "resta"
}

function divisionDosNumeros(){
	var	num1 = document.getElementById("num1")
	var	num2 = document.getElementById("num2")

	var suma = Number(num1.value)/Number(num2.value)

	console.log(suma)

	document.getElementById("resultado").innerHTML = suma
	document.getElementById("operacion").innerHTML = "división"
}

function multiplicacionDosNumeros(){
	var	num1 = document.getElementById("num1")
	var	num2 = document.getElementById("num2")

	var suma = Number(num1.value)*Number(num2.value)

	console.log(suma)

	document.getElementById("resultado").innerHTML = suma
	document.getElementById("operacion").innerHTML = "multiplicación"
}

