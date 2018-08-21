$(document).ready(function() {
    // initiate Google maps
    initialize();
    // make a .hover event
    
	// $('#markers_info .marker').mouseover(function(){
		// var index = $('#markers_info .marker').index(this);
		// markers[index].setIcon(highlightedIcon());
	// });
	
	// $('#markers_info .marker').mouseout(function(){
		// var index = $('#markers_info .marker').index(this);
		// markers[index].setIcon(normalIcon());
	// });
  });
  /**
    Google Maps stuff
  */
    var markerData = [   // the order of these markers must be the same as the <div class="marker"></div> elements
		{  lat: 29.849, lng: 31.255 , radius: 15000 ,title: 'Memphis'},
		{  lat: 29.532, lng: 30.669 , radius: 15000 ,title: 'Soknopaiou Nesos'},
		{  lat: 29.529, lng: 30.821 , radius: 15000 ,title: 'Neiloupolis'},
		{  lat: 29.454, lng: 31.080 , radius: 15000 ,title: 'Philadelpheia'},
		{  lat: 29.309, lng: 30.844 , radius: 15000 ,title: 'Fayyum'},
		{  lat: 29.254, lng: 30.896 , radius: 15000 ,title: 'Hawara'},
		{  lat: 29.107, lng: 30.763 , radius: 15000 ,title: 'Tebtunis'},
		{  lat: 28.767, lng: 30.917 , radius: 15000 ,title: 'El-Hibe'},
		{  lat: 28.650, lng: 30.867 , radius: 15000 ,title: 'Qarara'},
		{  lat: 27.778, lng: 30.804 , radius: 15000 ,title: 'Hermopolis'},
		{  lat: 27.184, lng: 31.187 , radius: 15000 ,title: 'Siut'},
		{  lat: 26.571, lng: 31.634 , radius: 15000 ,title: 'Idfa'},
		{  lat: 26.564, lng: 31.744 , radius: 15000 ,title: 'Akhmim'},
		{  lat: 26.016, lng: 32.283 , radius: 15000 ,title: 'Diospolis (Hou)'},
		{  lat: 25.958, lng: 32.729 , radius: 15000 ,title: 'Pallas'},
		{  lat: 25.631, lng: 32.560 , radius: 15000 ,title: 'Thebes'},
		{  lat: 25.596, lng: 32.462 , radius: 15000 ,title: 'Krokodilopolis (Amwer)'},
		{  lat: 25.550, lng: 32.508 , radius: 15000 ,title: 'Armant'},
		{  lat: 25.370, lng: 32.474 , radius: 15000 ,title: 'Gebelein'},
		{  lat: 24.978, lng: 32.872 , radius: 15000 ,title: 'Edfu'},
		{  lat: 24.09, lng: 32.889 , radius: 15000 ,title: 'Elephantine'}


    ];
	
    var map;
    var markers = [];
    var mapOptions = {
      zoom: 6.5,
      center: new google.maps.LatLng(27.778, 30.804),  // Brussels, Belgium
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    function initialize() {
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      for (var i=0; i<markerData.length; i++) {
	marker = 
          new google.maps.Marker({
            position: new google.maps.LatLng(markerData[i].lat, markerData[i].lng),
            title: markerData[i].title,
            map: map,
            icon: highlightedIcon()
          });
	
	var circle = new google.maps.Circle({
	      map: map,
	      radius: markerData[i].radius,
	      fillColor: '#AA0000'
	    });
	var circle1 = new google.maps.Circle({
	  map: map,
	  radius: 8,
	  fillColor: '#FFFFFF'
	});
	circle.bindTo('center', marker, 'position');
	circle1.bindTo('center', marker, 'position');
	
	markers.push(marker);
	
      }
    }
    // functions that return icons.  Make or find your own markers.
    function normalIcon() {
      return {
        url:''
      };
    }
    function highlightedIcon() {
      return {
        url: 'img2.png'
      };
    }
//    google.maps.event.addDomListener(window, 'load', initialize);
//url: 'http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png'