jQuery(document).ready(function($){
	var latitude = 53.7891563,
		longitude = 87.2748808,
		map_zoom = 13;
	var marker_url = 'img/icon-location.svg';
	var style=
	[
		{
			"stylers": [
				{
					"hue": "#ff5a00"
				},
				{
					"saturation": 250
				}
			]
		},
		{
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "administrative.land_parcel",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
				{
					"lightness": 50
				},
				{
					"visibility": "simplified"
				}
			]
		}
	]
	var map_options = {
		center: new google.maps.LatLng(53.7891563, 87.2048808),
		zoom: map_zoom,
		panControl: false,
		mapTypeControl: false,
		streetViewControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		styles: style
	}
	var map = new google.maps.Map(document.getElementById('google-container'), map_options);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(latitude, longitude),
		map: map,
		visible: true,
		icon: marker_url,
	});
});