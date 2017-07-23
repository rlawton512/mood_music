var APIKey='3a9ca945f04a44bf8f8767ff021d37bc';
var APISecret = 'affb8c62eade4475bea1118afb5aa2cf';


$("#happy").on("click", function() {
		var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=happy&limit=10&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
		var songsDiv = $('<div>'); 
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			var musicResponse = response
			console.log("success got data", musicResponse);
			var randomNo = Math.floor(Math.random()*10);
			for (var i = 0; i < 9; i++) {
				songsDiv.append(`<br><a href=${musicResponse.tracks.track[i].url} target="_blank"> ${musicResponse.tracks.track[i].artist.name +", "+ musicResponse.tracks.track[i].name}</a>`);
				$('#displaySongs').html(songsDiv);
				$('#resultsDiv').html('<a class="media" ><img src="assets/images/pic-1.gif" alt="happy/cool"></a>');
			}	
		})
	});

$("#sad").on("click", function() {
		var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=sad&limit=10&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
		var songsDiv = $('<div>'); 
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			var musicResponse = response
			console.log("success got data", musicResponse);
			var randomNo = Math.floor(Math.random()*10);
			for (var i = 0; i < 9; i++) {
				songsDiv.append(`<br><a href=${musicResponse.tracks.track[i].url} target="_blank"> ${musicResponse.tracks.track[i].artist.name +", "+ musicResponse.tracks.track[i].name}</a>`);
				$('#displaySongs').html(songsDiv);
				$('#resultsDiv').html('<a class="media" ><img src="assets/images/pic-2.gif" alt="sad"></a>');
			}		
		})
	});

$("#chill").on("click", function() {
		var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=happy&limit=10&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
		var songsDiv = $('<div>'); 
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			var musicResponse = response
			console.log("success got data", musicResponse);
			var randomNo = Math.floor(Math.random()*10);
			for (var i = 0; i < 9; i++) {
				songsDiv.append(`<br><a href=${musicResponse.tracks.track[i].url} target="_blank"> ${musicResponse.tracks.track[i].artist.name +", "+ musicResponse.tracks.track[i].name}</a>`);
				$('#displaySongs').html(songsDiv);	
				$('#resultsDiv').html('<a class="media" ><img src="assets/images/pic-3.gif" alt="chill"></a>');
			}	
		})
	});

$("#anger").on("click", function() {
		var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=angry&limit=10&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
		var songsDiv = $('<div>'); 
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			var musicResponse = response
			console.log("success got data", musicResponse);
			var randomNo = Math.floor(Math.random()*10);
			for (var i = 0; i < 9; i++) {
				songsDiv.append(`<br><a href=${musicResponse.tracks.track[i].url} target="_blank"> ${musicResponse.tracks.track[i].artist.name +", "+ musicResponse.tracks.track[i].name}</a>`);
				$('#displaySongs').html(songsDiv);	
				$('#resultsDiv').html('<a class="media" ><img src="assets/images/pic-4.gif" alt="anger"></a>');
			}	
		})
	});














































// $("#happy").on("click", function() {
// 	var newDiv = $('<div>');
// 	var userUrl = $('#inputImgUrl').val().trim();
// 	var APIKey='dae956b6026544528d9a145149191299';
// 	var APISecret = '3d1c30b4f5d746dab0f467e44a1041f4';
// 	var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "http://api.skybiometry.com/fc/faces/detect?api_key="+APIKey+"&api_secret="+APISecret+"&urls="+userUrl+"&attributes=all",
//   "method": "POST",
//   "headers": {
//     "cache-control": "no-cache",
//     "postman-token": "7cfb77df-6049-346b-87d8-63ba7649762f"
//   }
// 	}

// 	$.ajax(settings).done(function (response) {
// 		var resp = response;
// 		console.log(resp);
// 		var respObj = {
// 			anger:resp.photos[0].tags[0].attributes.anger,
// 			disgust:resp.photos[0].tags[0].attributes.disgust,
// 			fear:resp.photos[0].tags[0].attributes.fear,
// 			happiness:resp.photos[0].tags[0].attributes.happiness,
// 			neutral_mood:resp.photos[0].tags[0].attributes.neutral_mood,
// 			sadness:resp.photos[0].tags[0].attributes.sadness,
// 			surprise:resp.photos[0].tags[0].attributes.surprise
// 		};
// 		console.log(respObj);

// 		//create a div with the submitted image and the product of the analysis
// 		var newDiv = $('<div>');
// 		var newImg = $('<img>');
// 		$(newImg).attr('src',userUrl);
// 		$(newImg).attr('width',320);
// 		$(picDisplay).html(newImg);

// 		$.ajax({
// 			url: queryURL,
// 			method: "GET"
// 		}).done(function(response){
// 			var musicResponse = response
// 			console.log("success got data", musicResponse);
// 			var randomNo = Math.floor(Math.random()*10);
// 			console.log(musicResponse.tracks.track[randomNo].url)
// 			$(newDiv).append(`<a href=${musicResponse.tracks.track[randomNo].url} target="_blank"> ${musicResponse.tracks.track[randomNo].artist.name +", "+ musicResponse.tracks.track[randomNo].name}</a>`);
// 			$('#resultsDiv').html(newDiv);		
// 		})
// 	});

// 		var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=sad&limit=3&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
// 		var randomNo = Math.floor(Math.random()*10);

// 		$.ajax({
// 			url: queryURL,
// 			method: "GET"
// 		}).done(function(response){
// 			var musicResponse = response
// 			console.log("success got data", musicResponse);
// 			var randomNo = Math.floor(Math.random()*10);
// 			// console.log(musicResponse.tracks.track[randomNo].queryURL)
// 			$(newDiv).append(`<a href=${musicResponse.tracks.track[randomNo].url} target="_blank"> ${musicResponse.tracks.track[randomNo].artist.name +", "+ musicResponse.tracks.track[randomNo].name}</a>`);
// 			$('#resultsDiv').html(newDiv);		
// 		})

// 	});