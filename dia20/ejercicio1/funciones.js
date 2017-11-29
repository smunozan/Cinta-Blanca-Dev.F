// var titulo = document.getElementById("titulo")

// var tituloJquery = $("#titulo")

// console.log(titulo)

// console.log(tituloJquery)

//ejercicio1

$( "#btnA").click( function() {
	$('#capa').html('Has hecho clic en el boton <b>A</b>')
})

$( "#btnB").click( function() {
	$('#capa').html('Has hecho clic en el boton <b>B</b>')
})

// ejercicio2

$("#capa").mouseenter(function(){
	$("#mensaje").css("display", "block")
})

$("#capa").mouseleave(function(){
	$("#mensaje").css("display", "none")
})

// $("#btnA").clic(function(){
// 	$("#prueba").css("display", "block")
// })