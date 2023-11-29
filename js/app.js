  // Get elements
  const degreeInput = document.getElementById('degree');
  const tempTypeSelect = document.getElementById('temp-type');
  const celsiusOutput = document.getElementById('celsius');
  const convertButton = document.getElementById('btn');

  // Add event listener to the "Convert" button
  convertButton.addEventListener('click', convertTemperature);

  // Function to convert temperature
  function convertTemperature() {
      // Get input values
      const degreeValue = parseFloat(degreeInput.value);
      const tempType = tempTypeSelect.value;

      // Perform the conversion
      let result;
      if (tempType === 'fahrenheit') {
          result = (degreeValue - 32) * (5 / 9);
      } else if (tempType === 'kelvin') {
          result = degreeValue - 273.15;
      } else {
          result = degreeValue; // If the temperature type is Celsius, no conversion is needed
      }

      // Display the result
      celsiusOutput.textContent = result.toFixed(2); // Display up to two decimal places
  }