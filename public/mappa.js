    // Inizializzazione della mappa
    var map = L.map('map', {
        crs: L.CRS.Simple, // Coordinate CRS semplice (per immagini statiche)
        minZoom: -2 // Permette di fare zoom indietro per visualizzare tutta l'immagine
    });

    // Carica l'immagine della mappa (inserisci qui il percorso corretto)
    var imageUrl = '../src/img/chernarus2.jpg'; // L'immagine della mappa del gioco
    var imageBounds = [[0, 0], [1000, 1000]]; // Le dimensioni della tua immagine

    // Aggiunge l'immagine alla mappa
    L.imageOverlay(imageUrl, imageBounds).addTo(map);

    // Imposta la vista iniziale della mappa
    map.fitBounds(imageBounds);

    // Aggiungi un marker con popup
    var marker = L.marker([400, 235]).addTo(map) // Le coordinate del marker sulla mappa
        .bindPopup('Green Mountain')
        .openPopup();

    // Aggiungi un altro marker
    var anotherMarker = L.marker([300, 700]).addTo(map)
        .bindPopup('un punto a minchia')
        .openPopup();

          // Aggiungi un altro marker
    var anotherMarker = L.marker([250, 100]).addTo(map)
        .bindPopup('Aircraft Market')
        .openPopup();

               // Aggiungi un altro marker
    var anotherMarker = L.marker([870, 948]).addTo(map)
        .bindPopup('Black Market')
        .openPopup();
