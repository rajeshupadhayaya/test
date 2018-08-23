$(document).ready(function() {
    // initiate Google maps
    initialize();

    //create list
    create_list();
  });
	
var map;
var markers = [];
var marker_index = [];

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
}
  
//higligh marker in map and slider canvas in the year of found
function highlight(lat,lng,year,title=null){
	setMapOnAll(null);
	var index = [lat,lng];
	x = (year/2) + 350;
	movehair(x);
	var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            title: title,
            map: map,
            icon: highlightedIcon()
          });
	markers.push(marker);
	map.setCenter(google.maps.LatLng(lat, lng));
};


function remove(map){
	setMapOnAll(null);
}


var data = [

	{ year : -115, lat : 29.849 , lng : 31.255, color : 'yellow', img : 'images/3522.png', title: 'Memphis' },
	{ year : -540, lat : 29.849 , lng : 31.255, color : 'grey', img : 'images/45953.png', title: 'Memphis' },
	{ year : -180, lat : 29.454 , lng : 31.08, color : 'orange', img : 'images/43083.png', title: 'Philadelpheia' },
	{ year : -228, lat : 29.309 , lng : 30.844, color : 'orange', img : 'images/5633.png', title: 'Fayyum' },
	{ year : -232, lat : 29.107 , lng : 30.763, color : 'orange', img : 'images/3544.png', title: 'Tebtunis' },
	{ year : -145, lat : 29.107 , lng : 30.763, color : 'yellow', img : 'images/2774.png', title: 'Tebtunis' },
	{ year : -157, lat : 29.107 , lng : 30.763, color : 'yellow', img : 'images/2775.png', title: 'Tebtunis' },
	{ year : -124, lat : 29.107 , lng : 30.763, color : 'yellow', img : 'images/43276.png', title: 'Tebtunis' },
	{ year : -124, lat : 29.107 , lng : 30.763, color : 'yellow', img : 'images/43277.png', title: 'Tebtunis' },
	{ year : -78, lat : 29.107 , lng : 30.763, color : 'yellow', img : 'images/43284.png', title: 'Tebtunis' },
	{ year : -98, lat : 29.107 , lng : 30.763, color : 'yellow', img : 'images/43285.png', title: 'Tebtunis' },
	{ year : -137, lat : 29.107 , lng : 30.763, color : 'yellow', img : 'images/2776.png', title: 'Tebtunis' },
	{ year : -119, lat : 29.107 , lng : 30.763, color : 'yellow', img : 'images/43291.png', title: 'Tebtunis' },
	{ year : -105, lat : 29.107 , lng : 30.763, color : 'yellow', img : 'images/43415.png', title: 'Tebtunis' },
	{ year : -230, lat : 26.564 , lng : 31.744, color : 'orange', img : 'images/2770.png', title: 'Akhmim' },
	{ year : -485, lat : 26.016 , lng : 32.283, color : 'skyblue', img : 'images/46431.png', title: 'Diospolis (Hou)' },
	{ year : -497, lat : 26.016 , lng : 32.283, color : 'skyblue', img : 'images/46429.png', title: 'Diospolis (Hou)' },
	{ year : -489, lat : 26.016 , lng : 32.283, color : 'skyblue', img : 'images/46434.png', title: 'Diospolis (Hou)' },
	{ year : -547, lat : 25.631 , lng : 32.56, color : 'grey', img : 'images/46082.png', title: 'Thebes' },
	{ year : -544, lat : 25.631 , lng : 32.56, color : 'grey', img : 'images/45793.png', title: 'Thebes' },
	{ year : -683, lat : 25.631 , lng : 32.56, color : 'grey', img : 'images/46083.png', title: 'Thebes' },
	{ year : -686, lat : 25.631 , lng : 32.56, color : 'grey', img : 'images/48663.png', title: 'Thebes' },
	{ year : -678, lat : 25.631 , lng : 32.56, color : 'grey', img : 'images/46086.png', title: 'Thebes' },
	{ year : -140, lat : 25.55 , lng : 32.508, color : 'yellow', img : 'images/3577.png', title: 'Armant' },
	{ year : -140, lat : 25.55 , lng : 32.508, color : 'yellow', img : 'images/43725.png', title: 'Armant' },
	{ year : -103, lat : 25.55 , lng : 32.508, color : 'yellow', img : 'images/3584.png', title: 'Armant' },
	{ year : -265, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/2804A.png', title: 'Edfu' },
	{ year : -265, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/2804B.png', title: 'Edfu' },
	{ year : -245, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/8491A.png', title: 'Edfu' },
	{ year : -245, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/8491B.png', title: 'Edfu' },
	{ year : -220, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/8493.png', title: 'Edfu' },
	{ year : -243, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/2806A.png', title: 'Edfu' },
	{ year : -243, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/2806B.png', title: 'Edfu' },
	{ year : -240, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/2807A.png', title: 'Edfu' },
	{ year : -240, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/2807B.png', title: 'Edfu' },
	{ year : -240, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/2808A.png', title: 'Edfu' },
	{ year : -240, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/2808B.png', title: 'Edfu' },
	{ year : -224, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/2810.png', title: 'Edfu' },
	{ year : -213, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/2812.png', title: 'Edfu' },
	{ year : -215, lat : 24.978 , lng : 32.872, color : 'orange', img : 'images/2813.png', title: 'Edfu' }
]

function create_list(){

	//create header

	for(i=0; i<marker_index.length; i++){
		
		var elem = '<div class="list-header" ><h4>' + marker_index[i] + '</h4></div><div class="row list" id="list_no_'+ i + '"></div>';
		
		$("#markers_info").append(elem);
	}

	for(var d in data){
		var div_id = marker_index.indexOf(data[d].title);

		var elem = '<div class="col-3 image-box " onmouseover="highlight('+data[d].lat+','+data[d].lng+','+data[d].year + ',\'' +data[d].title + '\')"><img class="images" style="border-color:'+ data[d].color + '" src="'+data[d].img+'"></div>';

		$("#list_no_"+div_id).append(elem);
	};	
}


/**
Google Maps stuff
*/
var markerData = [   // the order of these markers must be the same as the <div class="marker"></div> elements
		{ lat: 29.849, lng: 31.255, radius: 2000, title: 'Memphis' },
		{ lat: 29.454, lng: 31.080, radius: 1000, title: 'Philadelpheia' },
		{ lat: 29.309, lng: 30.844, radius: 1000, title: 'Fayyum' },
		{ lat: 29.107, lng: 30.763, radius: 10000, title: 'Tebtunis' },
		{ lat: 26.564, lng: 31.744, radius: 1000, title: 'Akhmim' },
		{ lat: 26.016, lng: 32.283, radius: 3000, title: 'Diospolis (Hou)' },
		{ lat: 25.631, lng: 32.560, radius: 5000, title: 'Thebes' },
		{ lat: 25.550, lng: 32.508, radius: 3000, title: 'Armant' },
		{ lat: 24.978, lng: 32.872, radius: 14000, title: 'Edfu' }
];

var mapOptions = {
  zoom: 6.5,
  center: new google.maps.LatLng(27.778, 30.804),
  
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

function initialize() {
  	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  	for (var i=0; i<markerData.length; i++) {

  		marker_index.push(markerData[i].title);

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