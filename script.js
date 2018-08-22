$(document).ready(function() {
    // initiate Google maps
    initialize();
    
  });
	
    var map;
    var markers = [];

	function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
    }
      

	function highlight(lat,lng,year){
		setMapOnAll(null);
		var index = [lat,lng];
		// console.log(index);
		
		var marker = new google.maps.Marker({
	            position: new google.maps.LatLng(lat, lng),
	            // title: markerData[i].title,
	            map: map,
	            icon: highlightedIcon()
	          });

	markers.push(marker);

	};

	function remove(map){
		setMapOnAll(null);
	}


	var data = [

		{ year: -115 , lat: 29.849 , lng: 31.255 , img: 'images/3522.png' } ,
		{ year: -540 , lat: 29.849 , lng: 31.255 , img: 'images/45953.png' } ,
		{ year: -500 , lat: 29.849 , lng: 31.255 , img: 'images/45967.png' } ,
		{ year: -391 , lat: 29.849 , lng: 31.255 , img: 'images/46400.png' } ,
		{ year: -204 , lat: 29.849 , lng: 31.255 , img: 'images/2994.png' } ,
		{ year: -160 , lat: 29.849 , lng: 31.255 , img: 'images/2850.png' } ,
		{ year: -132 , lat: 29.849 , lng: 31.255 , img: 'images/45942.png' } ,
		{ year: -131 , lat: 29.849 , lng: 31.255 , img: 'images/3520.png' } ,
		{ year: -78 , lat: 29.849 , lng: 31.255 , img: 'images/43705.png' } ,
		{ year: -64 , lat: 29.849 , lng: 31.255 , img: 'images/2852.png' } ,
		{ year: -256 , lat: 29.849 , lng: 31.255 , img: 'images/2851.png' } ,
		{ year: -180 , lat: 29.454 , lng: 31.080 , img: 'images/43083.png' } ,
		{ year: -244 , lat: 29.454 , lng: 31.080 , img: 'images/8523B1.png' } ,
		{ year: -228 , lat: 29.309 , lng: 30.844 , img: 'images/5633.png' } ,
		{ year: -81 , lat: 29.309 , lng: 30.844 , img: 'images/44540.png' } ,
		{ year: -365 , lat: 29.254 , lng: 30.896 , img: 'images/41454.png' } ,
		{ year: -331 , lat: 29.254 , lng: 30.896 , img: 'images/8609.png' } ,
		{ year: -311 , lat: 29.254 , lng: 30.896 , img: 'images/8610.png' } ,
		{ year: -292 , lat: 29.254 , lng: 30.896 , img: 'images/8611.png' } ,
		{ year: -259 , lat: 29.254 , lng: 30.896 , img: 'images/8613.png' } ,
		{ year: -245 , lat: 29.254 , lng: 30.896 , img: 'images/8614.png' } ,
		{ year: -243 , lat: 29.254 , lng: 30.896 , img: 'images/8616.png' } ,
		{ year: -221 , lat: 29.254 , lng: 30.896 , img: 'images/8618.png' } ,
		{ year: -232 , lat: 29.107 , lng: 30763 , img: 'images/3544.png' } ,
		{ year: -145 , lat: 29.107 , lng: 30763 , img: 'images/2774.png' } ,
		{ year: -157 , lat: 29.107 , lng: 30763 , img: 'images/2775.png' } ,
		{ year: -124 , lat: 29.107 , lng: 30763 , img: 'images/43276.png' } ,
		{ year: -124 , lat: 29.107 , lng: 30763 , img: 'images/43277.png' } ,
		{ year: -78 , lat: 29.107 , lng: 30763 , img: 'images/43284.png' } ,
		{ year: -98 , lat: 29.107 , lng: 30763 , img: 'images/43285.png' } ,
		{ year: -137 , lat: 29.107 , lng: 30763 , img: 'images/2776.png' } ,
		{ year: -119 , lat: 29.107 , lng: 30763 , img: 'images/43291.png' } ,
		{ year: -105 , lat: 29.107 , lng: 30763 , img: 'images/43415.png' } ,
		{ year: -130 , lat: 28.650 , lng: 30.867 , img: 'images/45932.png' } ,
		{ year: -543 , lat: 27.184 , lng: 31.187 , img: 'images/45567.png' } ,
		{ year: -522 , lat: 27.184 , lng: 31.187 , img: 'images/45568.png' } ,
		{ year: -230 , lat: 26.564 , lng: 31.744 , img: 'images/2770.png' } ,
		{ year: -485 , lat: 26.016 , lng: 32.283 , img: 'images/46431.png' } ,
		{ year: -497 , lat: 26.016 , lng: 32.283 , img: 'images/46429.png' } ,
		{ year: -489 , lat: 26.016 , lng: 32.283 , img: 'images/46434.png' } ,
		{ year: -547 , lat: 25.631 , lng: 32.560 , img: 'images/46082.png' } ,
		{ year: -544 , lat: 25.631 , lng: 32.560 , img: 'images/45793.png' } ,
		{ year: -683 , lat: 25.631 , lng: 32.560 , img: 'images/46083.png' } ,
		{ year: -686 , lat: 25.631 , lng: 32.560 , img: 'images/48663.png' } ,
		{ year: -678 , lat: 25.631 , lng: 32.560 , img: 'images/46086.png' } ,
		{ year: -337 , lat: 25.631 , lng: 32.560 , img: 'images/46108.png' } ,
		{ year: -117 , lat: 25.631 , lng: 32.560 , img: 'images/5609.png' } ,
		{ year: -552 , lat: 25.631 , lng: 32.560 , img: 'images/46320.png' } ,
		{ year: -140 , lat: 25.550 , lng: 32.508 , img: 'images/3577.png' } ,
		{ year: -140 , lat: 25.550 , lng: 32.508 , img: 'images/43725.png' } ,
		{ year: -103 , lat: 25.550 , lng: 32.508 , img: 'images/3584.png' } ,
		{ year: -265 , lat: 24.978 , lng: 32.872 , img: 'images/2804A.png' } ,
		{ year: -265 , lat: 24.978 , lng: 32.872 , img: 'images/2804B.png' } ,
		{ year: -245 , lat: 24.978 , lng: 32.872 , img: 'images/8491A.png' } ,
		{ year: -245 , lat: 24.978 , lng: 32.872 , img: 'images/8491B.png' } ,
		{ year: -220 , lat: 24.978 , lng: 32.872 , img: 'images/8493.png' } ,
		{ year: -243 , lat: 24.978 , lng: 32.872 , img: 'images/2806A.png' } ,
		{ year: -243 , lat: 24.978 , lng: 32.872 , img: 'images/2806B.png' } ,
		{ year: -240 , lat: 24.978 , lng: 32.872 , img: 'images/2807A.png' } ,
		{ year: -240 , lat: 24.978 , lng: 32.872 , img: 'images/2807B.png' } ,
		{ year: -240 , lat: 24.978 , lng: 32.872 , img: 'images/2808A.png' } ,
		{ year: -240 , lat: 24.978 , lng: 32.872 , img: 'images/2808B.png' } ,
		{ year: -224 , lat: 24.978 , lng: 32.872 , img: 'images/2810.png' } ,
		{ year: -213 , lat: 24.978 , lng: 32.872 , img: 'images/2812.png' } ,
		{ year: -215 , lat: 24.978 , lng: 32.872 , img: 'images/2813.png' } 


	]

	for(var d in data){
		// console.log('test');
		var elem = "<div class='col-3' onmouseover='highlight("+data[d].lat+","+data[d].lng+","+data[d].year + ")'><img class='images' src='"+data[d].img+"'></div>";
		$("#markers_info").append(elem);
	};

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
	
    var mapOptions = {
      zoom: 6.5,
      center: new google.maps.LatLng(27.778, 30.804),
      
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // center: new google.maps.LatLng(50.84848913, 4.354053363),  // Brussels, Belgium

    function initialize() {
      	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      	for (var i=0; i<markerData.length; i++) {
			marker = new google.maps.Marker({
	            position: new google.maps.LatLng(markerData[i].lat, markerData[i].lng),
	            title: markerData[i].title,
	            map: map,
	            icon: {
	            	path: google.maps.SymbolPath.CIRCLE,
			        scale: 8.5,
			        fillColor: "#F00",
			        fillOpacity: 0.4,
			        strokeWeight: 0.4
			    }
	          });
	
          
			var circle = new google.maps.Circle({
			      map: map,
			      radius: markerData[i].radius,
			      fillColor: '#AA0000'
			    });
	
			circle.bindTo('center', marker, 'position');
	
      }



    }

    function highlightedIcon() {
      return {
        url: 'img2.png'
      };
    }
