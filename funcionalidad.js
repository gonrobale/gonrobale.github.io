let estilo_claro = true;

document.getElementById('fondo-oscuro').addEventListener('click', function () {
		

		if (estilo_claro) {
			document.body.style.background = 'rgb(10, 100, 150)';
			document.body.style.color = 'rgb(255, 255, 255)';
			document.getElementById('fondo-oscuro').style.background ='white';
			estilo_claro = false;
		}

		

		else  {
			document.body.style.background = 'rgb(200, 200, 200)';
			document.body.style.color = 'black';
			document.getElementById('fondo-oscuro').style.background = 'skyblue';
			estilo_claro = true;
		}

	}

)
