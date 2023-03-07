function convertTemperature() {
	// Read the temperature input value
	const temperatureInput = document.getElementById("temperatureinput");
	const temperature = parseFloat(temperatureInput.value);
  
	// Read the temperature unit selection
	const temperatureType = document.getElementById("temperatureType").value;
  
	// Convert the temperature based on the selected unit
	let convertedTemperature;
	if (temperatureType === "Fahrenheit") {
	  convertedTemperature = ((temperature - 32) * 5) / 9;
	} else if (temperatureType === "Celsius") {
	  convertedTemperature = (temperature * 9) / 5 + 32;
	}
  
	// Print the converted temperature result
	const convertedTemperatureElement = document.getElementById("convertedTemperature");
	convertedTemperatureElement.innerHTML = convertedTemperature.toFixed(2);
  }
  