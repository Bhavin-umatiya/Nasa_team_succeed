// Add event listener to calculate button
document.querySelector('#calculate button').addEventListener('click', () => {
    // Get input values
    const energyUsage = document.querySelector('#energy-usage').value;
    const transportation = document.querySelector('#transportation').value;

    // Calculate carbon footprint
    const carbonFootprint = energyUsage * 0.000621371 + transportation * 0.000189394;

    // Display result
    alert(`Your carbon footprint is ${carbonFootprint} tons CO2e`);
});