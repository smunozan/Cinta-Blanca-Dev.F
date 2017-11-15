var anion= prompt ("Escribe el año que naciste:");
var anio= prompt ("Que año es?");
var edad = anio - anion;

alert("Tu edad es " + edad);

if(edad<18){
	alert("Eres menor de edad");
} else{
	alert("Eres mayor de edad");
	var pais = prompt("Escribe tu pais");
	if (pais== "mexico" || pais == "Mexico" || pais == "México" || pais == "méxico") {
		alert ("Acude por tu INE");
	} else{
		alert("Visita mexico")
	}
}

// < menor que
// > mayor que
// <= menor o igual
// >= mayor o igual
// == igual que
// != diferente