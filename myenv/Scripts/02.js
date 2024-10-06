// Fetch and parse the CSV file
fetch('greenhouse_gas_inventory_data_data.csv')
    .then(response => response.text())
    .then(csvText => {
        const rows = csvText.split('\n').slice(1); // Remove header row
        const years = [];
        const values = [];

        rows.forEach(row => {
            const [country, year, value, category] = row.split(',');
            years.push(year);
            values.push(parseFloat(value));
        });

        // Create the Plotly chart
        const trace = {
            x: years,
            y: values,
            mode: 'lines+markers',
            type: 'scatter'
        };

        const layout = {
            title: 'Greenhouse Gas Emissions Over the Years',
            xaxis: { title: 'Year' },
            yaxis: { title: 'Emissions (in metric tons)' }
        };

        Plotly.newPlot('emissions-chart', [trace], layout);
    });

