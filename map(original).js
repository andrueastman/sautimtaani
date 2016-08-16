function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(-1.256426, 36.843197),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
        var map = new google.maps.Map(mapCanvas, mapOptions)
		
		
		
		var mlangoKubwa = new google.maps.Marker({
		  position: new google.maps.LatLng(-1.267214, 36.843751),
		  map: map,
		  title:'Mlango Kubwa',
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
		  title:'Ngei'
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
		  title:'Baba Dogo'
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
		  title:'Kwa Reuben'
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
	  }
	  
	
	  
	  
	  
      google.maps.event.addDomListener(window, 'load', initialize);