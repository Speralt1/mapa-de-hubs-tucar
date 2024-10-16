// Crear el mapa y centrarlo en una ubicación inicial (por ejemplo, Madrid)
var map = L.map('map').setView([40.4168, -3.7038], 13);

// Agregar el mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

// Función para agregar un marcador y un radio alrededor de la ubicación
function addCircle(lat, lng, radius) {
    var marker = L.marker([lat, lng]).addTo(map);
    var circle = L.circle([lat, lng], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: radius
    }).addTo(map);
}

// Evento para agregar círculos al hacer clic en el mapa
map.on('click', function(e) {
    var radius = prompt("Introduce el radio en metros:", 500); // Ejemplo: 500 metros
    if (radius) {
        addCircle(e.latlng.lat, e.latlng.lng, radius);
    }
});
