let map;
let geocoder;

function initMap() {
    // Configuração inicial do mapa
    const mapOptions = {
        center: { lat: -23.5505, lng: -46.6333 }, // Coordenadas iniciais (São Paulo)
        zoom: 12,
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    geocoder = new google.maps.Geocoder(); // Inicializa o Geocoder
}

function handleSearch() {
    const query = document.getElementById('searchInput').value;

    if (query) {
        // Usando o Geocoder para converter o endereço em coordenadas
        geocoder.geocode({ address: query }, (results, status) => {
            if (status === 'OK') {
                // Pega a primeira resposta
                const location = results[0].geometry.location;

                // Ajusta o mapa para a nova localização
                map.setCenter(location);
                map.setZoom(14); // Ajuste o nível de zoom conforme necessário

                // Adiciona um marcador na nova localização
                new google.maps.Marker({
                    position: location,
                    map: map,
                    title: query,
                });
            } else {
                alert('Não foi possível encontrar a localização: ' + status);
            }
        });
    } else {
        alert('Por favor, insira um termo de pesquisa.');
    }
}

// Adiciona o manipulador de eventos ao botão de pesquisa
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchButton').addEventListener('click', handleSearch);
});
