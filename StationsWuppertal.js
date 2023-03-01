var map = L.map("map").setView([51.266, 7.175], 13); //Breitengrad und Längengrad von Wuppertal, eigentliche Breitengrad und Längengrad sind [51.2562 , 7.1508]

var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});

osm.addTo(map);

L.marker([51.266, 7.175], 13).addTo(map).bindPopup("Wuppertal").openPopup();
//L.marker(pos).addTo(map)
//  .bindPopup('You are here.')
//.openPopup();

// wms request
// charging stations
var wmsLayer = L.Geoserver.wms("http://localhost:8080/geoserver/wms", {
  layers: "SII:ChargingStationsWuppertal",
});

// gas stations
var wmsLayer2 = L.Geoserver.wms("http://localhost:8080/geoserver/wms", {
  layers: "SII:GasStationsWuppertal",
});

wmsLayer.addTo(map);
wmsLayer2.addTo(map);

// Add legend

var layerLegend = L.Geoserver.legend("http://localhost:8080/geoserver/wms", {
  layers: "SII:ChargingStationsWuppertal",
});
layerLegend.title = "Charging Station";

/* var layerLegend2 = L.Geoserver.legend("http://localhost:8080/geoserver/wms", {
  layers: "SII:GasStationsWuppertal",
}); */
// did that by changing the sld file direct instead since this other approach was not working

layerLegend.addTo(map);
layerLegend2.addTo(map);
