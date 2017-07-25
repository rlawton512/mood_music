var APIKey='3a9ca945f04a44bf8f8767ff021d37bc';
var APISecret = 'affb8c62eade4475bea1118afb5aa2cf';


$("#happy").on("click", function() {
		var queryURL = "https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=happy&limit=10&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
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
		var queryURL = "https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=sad&limit=10&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
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
		var queryURL = "https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=happy&limit=10&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
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
		var queryURL = "https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=angry&limit=10&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
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