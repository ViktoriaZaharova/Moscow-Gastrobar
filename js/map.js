function initMap() {
	// Styles a map in night mode.
	var map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 53.20005770182444, lng: 45.018738255946616 },
		zoom: 16,
		styles: [
			{ elementType: "geometry", stylers: [{ color: "#060606" }] },
			{ elementType: "labels.text.stroke", stylers: [{ color: "#2f2f2f" }] },
			{ elementType: "labels.text.fill", stylers: [{ color: "#2f2f2f" }] },
			{
				featureType: "administrative.locality",
				elementType: "labels.text.fill",
				stylers: [{ color: "#292929" }],
			},
			{
				featureType: "poi",
				elementType: "labels.text.fill",
				stylers: [{ color: "#aeaeae" }],
			},
			{
				featureType: "poi.park",
				elementType: "geometry",
				stylers: [{ color: "#292929" }],
			},
			{
				featureType: "poi.park",
				elementType: "labels.text.fill",
				stylers: [{ color: "#6b9a76" }],
			},
			{
				featureType: "road",
				elementType: "geometry",
				stylers: [{ color: "#2c2c2c" }],
			},
			{
				featureType: "road",
				elementType: "geometry.stroke",
				stylers: [{ color: "#2c2c2c" }],
			},
			{
				featureType: "road",
				elementType: "labels.text.fill",
				stylers: [{ color: "#868686" }],
			},
			{
				featureType: "road.highway",
				elementType: "geometry",
				stylers: [{ color: "#2c2c2c" }],
			},
			{
				featureType: "road.highway",
				elementType: "geometry.stroke",
				stylers: [{ color: "#2c2c2c" }],
			},
			{
				featureType: "road.highway",
				elementType: "labels.text.fill",
				stylers: [{ color: "#868686" }],
			},
			{
				featureType: "transit",
				elementType: "geometry",
				stylers: [{ color: "#2c2c2c" }],
			},
			{
				featureType: "transit.station",
				elementType: "labels.text.fill",
				stylers: [{ color: "#2f2f2f" }],
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [{ color: "#4d4d4d" }],
			},
			{
				featureType: "water",
				elementType: "labels.text.fill",
				stylers: [{ color: "#868686" }],
			},
			{
				featureType: "water",
				elementType: "labels.text.stroke",
				stylers: [{ color: "#868686" }],
			},
		],
	});

	addMarker({ lat: 53.20005770182444, lng: 45.018738255946616 });

	// ф-ия маркера 1 карты
	function addMarker(coordinates) {
		var marker = new google.maps.Marker({
			position: coordinates,
			map: map,
			icon: 'img/location-map.svg'
		});
	}

}

window.initMap = initMap;