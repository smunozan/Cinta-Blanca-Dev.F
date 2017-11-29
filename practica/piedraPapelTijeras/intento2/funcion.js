$("#empezar").click(function(){
	$("#reglas").hide()
})

$("#nombres").click(function(){
	var nombre1 = $("#nombre1Jugador").val();
	$("#nombreJugador1").hide();
	$("#listo1").css("display", "flex");
	$("#nombreJug1").html(nombre1);

	var nombre2 = $("#nombre2Jugador").val();
	$("#nombreJugador2").hide();
	$("#listo2").css("display", "flex");
	$("#nombreJug2").html(nombre2);

	$("#siguiente").hide();
})

var jugador1
var jugador2

$("#piedra1").click(function(){
	jugador1 = $(this).val();
	$("#opciones1").hide();
	$("#esperando1").css("display", "flex");
	if (jugador1 !== undefined && jugador2 !== undefined) {
		$("#todoListo").css("display", "flex");
	}
})

$("#papel1").click(function(){
	jugador1 = $(this).val();
	$("#opciones1").hide();
	$("#esperando1").css("display", "flex");
	if (jugador1 !== undefined && jugador2 !== undefined) {
		$("#todoListo").css("display", "flex");
	}
})

$("#tijeras1").click(function(){
	jugador1 = $(this).val();
	$("#opciones1").hide();
	$("#esperando1").css("display", "flex");
	if (jugador1 !== undefined && jugador2 !== undefined) {
		$("#todoListo").css("display", "flex");
	}
})

$("#piedra2").click(function(){
	jugador2 = $(this).val();
	$("#opciones2").hide();
	$("#esperando2").css("display", "flex");
	if (jugador1 !== undefined && jugador2 !== undefined) {
		$("#todoListo").css("display", "flex");
	}
})

$("#papel2").click(function(){
	jugador2 = $(this).val();
	$("#opciones2").hide();
	$("#esperando2").css("display", "flex");
	if (jugador1 !== undefined && jugador2 !== undefined) {
		$("#todoListo").css("display", "flex");
	}
})

$("#tijeras2").click(function(){
	jugador2 = $(this).val();
	$("#opciones2").hide();
	$("#esperando2").css("display", "flex");
	if (jugador1 !== undefined && jugador2 !== undefined) {
		$("#todoListo").css("display", "flex");
	}
})

$("#jugar").click(function(){
	
})