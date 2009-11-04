PacMacro.GeolocationModel = function() { return {

	init:function() {
		// Because we are using a geolocation service we need to make sure sensor=true
		this.findLocation();
	},
	
	findLocation: function() {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.successCallback,this.errorCallback);
		} else {
			document.getElementById("location").innerHTML = "Your browser doesn't support geolocation services";
		}
	},
	
	successCallback: function(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		document.getElementById("location").innerHTML = "latitude: " + latitude + ", longitude:" + longitude;

	 // Display the map
		var map = new GMap2(document.getElementById('map'));

		// Centre the map around the latitude and longitude
		var latlng = new google.maps.LatLng(latitude, longitude);
		var zoom=16;
		map.setCenter(latlng, zoom);

		// display the default controls
		map.setUIToDefault();

		// Add a marker
		var point = new GLatLng(latitude, longitude);
		map.addOverlay(new GMarker(point));
	},
	
	errorCallback:function() {
		document.getElementById("location").innerHTML = "Sorry, we couldn't find your location";
	}

} };

PacMacro.geolocationModel = new PacMacro.GeolocationModel();
