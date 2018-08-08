// JS not working on other pages if map ID is not present
// If statement fixes bug

if (document.getElementById('mapid')) {

	var mymap = L.map('mapid', {
		zoomControl : false
	}).setView([51.505, -0.09], 13);
	
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets',
		zoomControl: false,
	}).addTo(mymap);
	
	L.control.zoom({
		 position:'topright'
	}).addTo(mymap);
}