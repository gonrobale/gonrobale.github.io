document.getElementById('fondo-oscuro').addEventListener('click', function() {
	document.body.style.background = 'rgb(10, 100, 150)';
	document.body.style.color = 'rgb(255, 255, 255)';
	document.getElementById('fondo-oscuro').style.display = 'none';
	document.getElementById('fondo-claro').style.display = 'block';
})

document.getElementById('fondo-claro').addEventListener('click', function() {
	document.body.style.background = 'rgb(200, 200, 200)';
	document.body.style.color = 'black';
	document.getElementById('fondo-oscuro').style.display = 'block';
	document.getElementById('fondo-claro').style.display = 'none';
})
