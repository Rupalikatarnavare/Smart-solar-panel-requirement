function calculateSolar() {
  const area = parseFloat(document.getElementById("area").value);
  const efficiency = parseFloat(document.getElementById("efficiency").value) / 100;
  const sunlight = parseFloat(document.getElementById("sunlight").value);

  if (isNaN(area) || isNaN(efficiency) || isNaN(sunlight)) {
    document.getElementById("result").innerHTML = "⚠️ Please fill all fields correctly.";
    return;
  }

  const SOLAR_CONSTANT = 1; // kWh/m² per hour (simplified)
  const dailyEnergy = area * efficiency * sunlight * SOLAR_CONSTANT;
  const yearlyEnergy = dailyEnergy * 365;

  document.getElementById("result").innerHTML = `
    <h3>Estimated Solar Potential</h3>
    <p><strong>Daily Yield:</strong> ${dailyEnergy.toFixed(2)} kWh</p>
    <p><strong>Yearly Yield:</strong> ${yearlyEnergy.toFixed(2)} kWh</p>
  `;
}

