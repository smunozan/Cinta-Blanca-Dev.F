$(document).ready(function(){
	$('p').click(function(){
		$(this).hide();
	})
});

// $("#foto1").click(function(){
// 	$("#foto1").addClass("girar")
// })

// $("img").click(function(){
// 	$(this).addClass("girar")
// })

$("img").dblclick(function(){
	$(this).addClass("girar")
})

// $("#foto1").hover(function(){
// 	alert("estas sobre la imagen")
// }), function(){
// 	alert("No estas sobre la imagen")
// }

$("#left").click(function(){
	$("#evento").removeClass("derecha")
	$("#evento").removeClass("centro")
	$("#evento").addClass("izquierda")
})

$("#right").click(function(){
	$("#evento").removeClass("izquierda")
	$("#evento").removeClass("centro")
	$("#evento").addClass("derecha")
})

$("#center").click(function(){
	$("#evento").removeClass("izquierda")
	$("#evento").removeClass("derecha")
	$("#evento").addClass("centro")
})

$("#ocultar").click(function(){
	$("#evento").hide()
})

$("#aparecer").click(function(){
	$("#evento").show()
})


$("#red").click(function(){
	$("#evento").addClass("rojo")
})

$("#mostrarPrueba").click(function(){
	$("#prueba").show()
})

$("#prueba").click(function(){
	$("#prueba").hide()
})