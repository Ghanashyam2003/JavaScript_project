function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
  
    // If Celsius input is provided, convert to Fahrenheit
    if (celsiusInput.value !== "") {
      const celsiusValue = parseFloat(celsiusInput.value);
      if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
      } else {
        alert("Please enter a valid number in Celsius.");
        fahrenheitInput.value = "";
      }
    }
    // Else if Fahrenheit input is provided, convert to Celsius
    else if (fahrenheitInput.value !== "") {
      const fahrenheitValue = parseFloat(fahrenheitInput.value);
      if (!isNaN(fahrenheitValue)) {
        const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
        celsiusInput.value = celsiusValue.toFixed(2);
      } else {
        alert("Please enter a valid number in Fahrenheit.");
        celsiusInput.value = "";
      }
    } else {
      alert("Please enter a temperature to convert.");
    }
  }
  