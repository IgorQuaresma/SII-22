var map = L.map('map').setView([51.266,7.175], 13);   //Breitengrad und Längengrad von Wuppertal, eigentliche Breitengrad und Längengrad sind [51.2562 , 7.1508]

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);


    
    L.marker([51.266,7.175], 13).addTo(map)
        .bindPopup('Wuppertal')
        .openPopup();
    //L.marker(pos).addTo(map)
      //  .bindPopup('You are here.')
        //.openPopup();
    
