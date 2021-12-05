
function updateCelsius(temperature) {
	var temp = parseInt(temperature);
	temp = getCelsius(temp);
	document.getElementById("Celsius").innerText = String(temp);
}

function updateFahrenheit(temperature) {
	var temp = parseInt(temperature);
	temp = getFahrenheit(temp);
	document.getElementById("Fahrenheit").innerText = String(temp);
}

function getCelsius(temperature) {
	return ((temperature - 32) * 5) / 9;
}

function getFahrenheit(temperature) {
	return Math.round( ( parseInt(temperature) * 9.0 / 5.0 + 32 ) * 100 ) / 100;
}



