// Initialize the map and set its view to a global perspective (default is the world)
var map = L.map('map').setView([20.0, 0.0], 2); // Global view

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Function to assign colors based on emission levels
function getColor(emissions) {
    return emissions > 90 ? '#800026' :
           emissions > 70 ? '#BD0026' :
           emissions > 50 ? '#E31A1C' :
           emissions > 30 ? '#FC4E2A' :
           emissions > 10 ? '#FD8D3C' :
                            '#FEB24C';
}

// Function to add circles to the map for each data point
function addEmissionData(map, data) {
    data.forEach(function (locationData) {
        var circle = L.circle(locationData.location, {
            color: getColor(locationData.emissions),
            fillColor: getColor(locationData.emissions),
            fillOpacity: 0.7,
            radius: locationData.emissions * 10000 // Adjust the scaling factor for a larger radius
        }).addTo(map);

        // Bind a popup to display additional information
        circle.bindPopup(`<b>${locationData.city}</b><br>Emissions: ${locationData.emissions} CO2 (tons)`);
    });
}

// Example data, to be replaced with real data or fetched from a file
var climateEmissionData = [
    { "location": [40.7128, -74.0060], "city": "New York", "emissions": 120 },
    { "location": [51.5074, -0.1278], "city": "London", "emissions": 85 },
    { "location": [35.6895, 139.6917], "city": "Tokyo", "emissions": 95 },
    { "location": [48.8566, 2.3522], "city": "Paris", "emissions": 70 },
    { "location": [34.0522, -118.2437], "city": "Los Angeles", "emissions": 65 },
    { "location": [-33.8688, 151.2093], "city": "Sydney", "emissions": 50 },
    { "location": [55.7558, 37.6173], "city": "Moscow", "emissions": 40 }
];

// Add the climate data to the map
addEmissionData(map, climateEmissionData);

// Add a legend to the map
var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'legend'),
        grades = [10, 30, 50, 70, 90],
        labels = [];

    div.innerHTML = '<strong>CO2 Emissions (tons)</strong><br>';

    // Loop through intervals and generate labels
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    return div;
};

legend.addTo(map);
