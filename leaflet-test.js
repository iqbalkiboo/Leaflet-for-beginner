
$( window ).on('load',function() {
var mymap = L.map('mapid').setView([-6.861768, 107.592712], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

var marker;

//function onMapClick(e) {
 //  if (marker) {
 //       mymap.removeLayer(marker);
  //  }
//	
//	marker = L.marker(e.latlng).addTo(mymap);
//	marker.bindPopup('tah ieu latlong na: ' + e.latlng);
//}

//mymap.on('click', onMapClick);

var data = [{
	'kota': 'Bandung',
	'lat': '-6.914744',
	'lng': '107.609810',
	'value': '100'
}, {
	'kota': 'Jakarta',
	'lat': '-6.121435',
	'lng': '106.774124',
	'value': '15'
}, {
	'kota': 'Tasikmalaya',
	'lat': '-7.319563',
	'lng': '108.202972',
	'value': '8'
}];

$.each(data, function(index){
//	console.log(data[index].kota);
	var circle = L.circle([data[index].lat, data[index].lng], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: data[index].value * 500
	}).addTo(mymap).bindPopup(data[index].kota + '<br />Jumlah Data: ' + data[index].value);
});
  });