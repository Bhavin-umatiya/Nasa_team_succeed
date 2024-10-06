fetch('C:\\Users\\Bhavin Umatiya\\PycharmProjects\\nasa3\\greenhouse_gas_inventory_data_data.csv') // Use actual URL of your dataset
    .then(response => response.json())
    .then(data => {
        addEmissionData(map, data); // Add data to the map
    })
    .catch(error => console.error('Error loading data:', error));
