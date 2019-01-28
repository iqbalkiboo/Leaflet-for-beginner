
$( window ).on('load',function() {
var mymap = L.map('mapid').setView([-6.861768, 107.592712], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

var marker;

function onMapClick(e) {
  if (marker) {
       mymap.removeLayer(marker);
   }
	
	marker = L.marker(e.latlng).addTo(mymap);
	marker.bindPopup('tah ieu latlong na: ' + e.latlng);
}

mymap.on('click', onMapClick);
