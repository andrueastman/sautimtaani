function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(-1.2503642, 36.8909401),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
        var map = new google.maps.Map(mapCanvas, mapOptions)
		
		
		
		var mlangoKubwa = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.267214, 36.843751),
		  map: map,
		  title:'Mlango Kubwa',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=1&color=5680FC'
		});
		
		var mlangoKubwainfowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/mlangokubwa/">Mlango Kubwa</a>'
		});
		google.maps.event.addListener(mlangoKubwa, 'click', function() {
			mlangoKubwainfowindow.open(map,mlangoKubwa);
			map.setZoom(15);
    		map.setCenter(mlangoKubwa.getPosition());
		});


		
		
		
		var ngei = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.2537264, 36.8693129),
		  map: map,
		  title:'Ngei',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=2&color=5680FC'
		});
		
		var ngeiinfowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/ngei/">Ngei</a>'
		});
		google.maps.event.addListener(ngei, 'click', function() {
			ngeiinfowindow.open(map,ngei);
			map.setZoom(15);
    		map.setCenter(ngei.getPosition());
		});
		
			
		
		
		
		
		var babaDogo = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.2456719, 36.8815276),
		  map: map,
		  title:'Baba Dogo',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=3&color=5680FC'
		});

		var babaDogoinfowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/babadogo/">Baba Dogo</a>'
		});
		google.maps.event.addListener(babaDogo, 'click', function() {
			babaDogoinfowindow.open(map,babaDogo);
			map.setZoom(15);
    		map.setCenter(babaDogo.getPosition());
		});




		
		
		var korogocho = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.2503642, 36.8909401),
		  map: map,
		  title:'Korogocho',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=4&color=5680FC '
		});

		var korogochoinfowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/korogocho/">Korogocho</a>'
		});
		google.maps.event.addListener(korogocho, 'click', function() {
			korogochoinfowindow.open(map,korogocho);
			map.setZoom(15);
    		map.setCenter(korogocho.getPosition());
			
		});		
		
		
		
		
		
		var kwaReuben = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.31333, 36.871694),
		  map: map,
		  title:'Kwa Reuben',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=5&color=5680FC '
		});

		var kwaReubeninfowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/kwareuben/">Kwa Reuben</a>'
		});
		google.maps.event.addListener(kwaReuben, 'click', function() {
			kwaReubeninfowindow.open(map,kwaReuben);
			map.setZoom(15);
    		map.setCenter(kwaReuben.getPosition());
		});			
		
		
		
		
		
		var lainiSaba = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.312912, 36.789312),
		  map: map,
		  title:'Laini Saba',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=6&color=5680FC '
		});
		
		var lainiSabainfowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/lainisaba/">Laini Saba</a>'
		});
		google.maps.event.addListener(lainiSaba, 'click', function() {
			lainiSabainfowindow.open(map,lainiSaba);
			map.setZoom(15);
    		map.setCenter(lainiSaba.getPosition());
		});	
		
		
		
		
		
		var kahawa = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.1872338, 36.9030401),
		  map: map,
		  title:'Kahawa',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=7&color=5680FC '
		});
		
		var kahawainfowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/kahawa/">Kahawa</a>'
		});
		google.maps.event.addListener(kahawa, 'click', function() {
			kahawainfowindow.open(map,kahawa);
			map.setZoom(15);
    		map.setCenter(kahawa.getPosition());

		});
		
		
		
		
		var karura = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.256426, 36.843197),
		  map: map,
		  title:'Karura',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=8&color=5680FC '
		});	
		
		var karurainfowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/karura/">Karura</a>'
		});
		
		google.maps.event.addListener(karura, 'click', function() {
			karurainfowindow.open(map,karura);
			map.setZoom(15);
    		map.setCenter(karura.getPosition());
		});
		
		
		
		
		

		var kasarani = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.2152316, 36.9024397),
		  map: map,
		  title:'Kasarani',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=9&color=5680FC '
		});
		
		var kasaraniinfowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/kasarani/">Kasarani</a>'
		});
		
		google.maps.event.addListener(kasarani, 'click', function() {
			kasaraniinfowindow.open(map,kasarani);
			map.setZoom(15);
    		map.setCenter(kasarani.getPosition());
		});
		
		
		
		
		var roysambu = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.2184586, 36.8869064),
		  map: map,
		  title:'Roysambu',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=10&color=5680FC '
		});

		var roysambuinfowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/roysambu/">Roysambu</a>'
		});
		
		google.maps.event.addListener(roysambu, 'click', function() {
			roysambuinfowindow.open(map,roysambu);
			map.setZoom(15);
    		map.setCenter(roysambu.getPosition());
		});		
		
		
		
		
		
		var umoja2 = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.27783, 36.89741),
		  map: map,
		  title:'Umoja 2',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=11&color=5680FC '
		});
		
		var umoja2infowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/umoja2/">Umoja 2</a>'
		});
		
		google.maps.event.addListener(umoja2, 'click', function() {
			umoja2infowindow.open(map,umoja2);
			map.setZoom(15);
    		map.setCenter(umoja2.getPosition());
		});	
		
		
		

		var Zimmerman = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.210542, 36.8976626),
		  map: map,
		  title:'Zimmerman',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=12&color=5680FC '
		});	

		var Zimmermaninfowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/zimmerman/">Zimmerman</a>'
		});
		
		google.maps.event.addListener(Zimmerman, 'click', function() {
			Zimmermaninfowindow.open(map,Zimmerman);
			map.setZoom(15);
    		map.setCenter(Zimmerman.getPosition());
		});		

		

		var dandora3 = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.2482059, 36.9043843),
		  map: map,
		  title:'Dandora 3',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=13&color=5680FC '
		});

		var dandora3infowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/dandora3/">Dandora III</a>'
		});
		
		google.maps.event.addListener(dandora3, 'click', function() {
			dandora3infowindow.open(map,dandora3);
			map.setZoom(15);
    		map.setCenter(dandora3.getPosition());
		});		

		
		
		var pipeline = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.316759, 36.892401),
		  map: map,
		  title:'Pipeline',
		  icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=14&color=5680FC'
		});	

		var pipelineinfowindow = new google.maps.InfoWindow({
			content: '<a href="http://sautimtaani.co.ke/main/ward-page/pipeline/">Pipeline</a>'
		});
		
		google.maps.event.addListener(pipeline, 'click', function() {
			pipelineinfowindow.open(map,pipeline);
			map.setZoom(15);
    		map.setCenter(pipeline.getPosition());
		});	
		
		  google.maps.event.addListener(map, 'center_changed', function() {
		    // 3 seconds after the center of the map has changed, pan back to the
		    // marker.
		    window.setTimeout(function() {
		      map.panTo(karura.getPosition());
		      map.setZoom(12);
		    }, 30000);
 	 	});
		
		var icons = {
          one: {
            name: 'Mlango Kubwa',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=1&color=5680FC '
          },
          two: {
            name: 'Ngei',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=2&color=5680FC'
          },
          three: {
            name: 'Baba Dogo',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=3&color=5680FC '
          },
		  four: {
            name: 'Korogocho',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=4&color=5680FC'
          },
		  five: {
            name: 'Kwa Reuben',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=5&color=5680FC '
          },
		  six: {
            name: 'Laini Saba',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=6&color=5680FC '
          },
		  seven: {
            name: 'Kahawa',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=7&color=5680FC '
          },
		  eight: {
            name: 'Karura',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=8&color=5680FC '
          },
		  nine: {
            name: 'Kasarani',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=9&color=5680FC '
          },
		  ten: {
            name: 'Roysambu',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=10&color=5680FC '
          },
		  eleven: {
            name: 'Umoja 2',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=11&color=5680FC '
          },
		  twelve: {
            name: 'Zimmerman',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=12&color=5680FC '
          },
		  thirteen: {
            name: 'Dandora 3',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=13&color=5680FC '
          },
		  fourteen: {
            name: 'Pipeline',
            icon: 'http://thydzik.com/thydzikGoogleMap/markerlink.php?text=14&color=5680FC '
          }
        };
		
		var legend = document.getElementById('legend');
		for (var key in icons) {
          var type = icons[key];
          var name = type.name;
          var icon = type.icon;
          var div = document.createElement('div');
          div.innerHTML = '<img src="' + icon + '"> ' + name;
          legend.appendChild(div);
        }
		map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'));
	  } 
	  
      google.maps.event.addDomListener(window, 'load', initialize);
	  