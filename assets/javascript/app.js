//grab input for image url
//perform ajax call to SkyBio


$('#submitImgUrl').on('click',function(){
	var userUrl = $('#inputImgUrl').val().trim();
	var APIKey='3a9ca945f04a44bf8f8767ff021d37bc';
	var APISecret = 'affb8c62eade4475bea1118afb5aa2cf';
	var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.skybiometry.com/fc/faces/detect?api_key="+APIKey+"&api_secret="+APISecret+"&urls="+userUrl+"&attributes=all",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "7cfb77df-6049-346b-87d8-63ba7649762f"
  }
	}

	$.ajax(settings).done(function (response) {
		var resp = response;
		console.log(resp);
		var respObj = {
			anger:resp.photos[0].tags[0].attributes.anger,
			disgust:resp.photos[0].tags[0].attributes.disgust,
			fear:resp.photos[0].tags[0].attributes.fear,
			happiness:resp.photos[0].tags[0].attributes.happiness,
			neutral_mood:resp.photos[0].tags[0].attributes.neutral_mood,
			sadness:resp.photos[0].tags[0].attributes.sadness,
			surprise:resp.photos[0].tags[0].attributes.surprise
		};
		console.log(respObj);

		//create a div with the submitted image and the product of the analysis
		var newDiv = $('<div>');
		var newImg = $('<img>');
		$(newImg).attr('src',userUrl);
		$(newImg).attr('width',320);
		$(newImg).attr('hight',400);
		$(picDisplay).html(newImg);
		var emotions=['anger', 'disgust', 'fear', 'happiness', 
					  'neutral_mood', 'sadness', 'surprise'];
		var emoResp =[respObj.anger.confidence, respObj.disgust.confidence, 
					   respObj.fear.confidence, respObj.happiness.confidence, 
					   respObj.neutral_mood.confidence, respObj.sadness.confidence,
					   respObj.surprise.confidence];
		for (i=0; i<emotions.length; i++){
			var newPara = $('<p>');
			$(newPara).text(emotions[i]+": "+emoResp[i]);
			$(newDiv).append(newPara);

		google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
        	for (i=0; i<emotions.length; i++){
   //      		var newPara = $('<p>');
			// $(newPara).text(emotions[i]+": "+emoResp[i]);
			// $(newDiv).append(newPara);
          var data = google.visualization.arrayToDataTable([
            ["Element", "Density", { role: "style" } ],
            [emotions[0], emoResp[0], "#b87333"],
            [emotions[1], emoResp[1], "silver"],
            [emotions[2], emoResp[2], "gold"],
            [emotions[3], emoResp[3], "color: #8a2be2"],
            [emotions[4], emoResp[4], "color: #7fff00"],
            [emotions[5], emoResp[5], "color: #ff7f50"],
            [emotions[6], emoResp[6], "color: #f5f5f5"],
          ]);

          var view = new google.visualization.DataView(data);
          view.setColumns([0, 1,
                           { calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation" },
                           2]);

          var options = {
            title: "Your Mood",
            width: 360,
            height: 300,
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
          };
          var chart = new google.visualization.BarChart(document.getElementById("resultsDiv"));
          chart.draw(view, options);
      }
  }

		}
		//$('#resultsDiv').prepend(newDiv);

		//interpret the emotional analysis as numbers, compare the numbers to find the highest,
		//and report the highest number/emotion
		var emoInt=[];
		var mostFitting=[];
		for (i=0; i<emoResp.length; i++){
			var confidenceValue = parseInt(emoResp[i]);
			emoInt.push(confidenceValue);
		}
		var mostFittingA=Math.max.apply(Math,emoInt);
		var emotionPosition = $.inArray(mostFittingA,emoInt);
		var mostFittingB = emotions[emotionPosition];
		mostFitting.push(mostFittingA);
		mostFitting.push(mostFittingB);
		console.log(mostFitting);
		var songsDiv = $('<div>');


	

	//split music call into conditions based on emotional results
	if (mostFitting[1]==="happiness"||mostFitting[1]==="surprise"){
		var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=happy&limit=10&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
		 
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			var musicResponse = response
			console.log("success got data", musicResponse);
			var randomNo = Math.floor(Math.random()*10);
			for (var i = 0; i < 9; i++) {
				songsDiv.append(`<br><a href=${musicResponse.tracks.track[i].url} target="_blank"> ${musicResponse.tracks.track[i].artist.name +", "+ musicResponse.tracks.track[i].name}</a><br>`);
				// $('#resultsDiv').html(newDiv);
				$('#displaySongs').html(songsDiv);	
			}	
		})
	}else if(mostFitting[1]==="anger"||mostFitting[1]==="disgust"){
		var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=angry&limit=10&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
		 
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			var musicResponse = response
			console.log("success got data", musicResponse);
			var randomNo = Math.floor(Math.random()*10);
			for (var i = 0; i < 9; i++) {
				songsDiv.append(`<br><a href=${musicResponse.tracks.track[i].url} target="_blank"> ${musicResponse.tracks.track[i].artist.name +", "+ musicResponse.tracks.track[i].name}</a>`);
				// $('#resultsDiv').html(newDiv);
				$('#displaySongs').html(songsDiv);	
			}	
		})
	}else if(mostFitting[1]==="sadness"||mostFitting[1]==="fear"){
		var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=sad&limit=3&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
		 
		$.ajax({
			url: queryURL,q
			method: "GET"
		}).done(function(response){
			var musicResponse = response
			console.log("success got data", musicResponse);
			var randomNo = Math.floor(Math.random()*10);
			for (var i = 0; i < 9; i++) {
				songsDiv.append(`<br><a href=${musicResponse.tracks.track[i].url} target="_blank"> ${musicResponse.tracks.track[i].artist.name +", "+ musicResponse.tracks.track[i].name}</a>`);
				// $('#resultsDiv').html(newDiv);
				$('#displaySongs').html(songsDiv);	
			}
				
		})
	}else{
		var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=chill&limit=3&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			var musicResponse = response
			console.log("success got data", musicResponse);
			var randomNo = Math.floor(Math.random()*10);
			for (var i = 0; i < 9; i++) {
				songsDiv.append(`<br><a href=${musicResponse.tracks.track[i].url} target="_blank"> ${musicResponse.tracks.track[i].artist.name +", "+ musicResponse.tracks.track[i].name}</a>`);
				// $('#resultsDiv').html(newDiv);
				$('#displaySongs').html(songsDiv);	
			}		
		})
	};
	});



	$('#inputImgUrl').val('');

});

$( document ).ready(function() {
    console.log( "ready!" );

$(document).on('click' , "#addSong" , function(event){
 
        event.preventDefault();
        
	 var baseUrl = 'http://www.youtube.com/embed?listType=search&list=';
	 var searchField = $("#yourTextField").val();
	 var targetUrl = baseUrl + searchField + "&autoplay=1";
	 
	 $("#yourIframe").attr("src", targetUrl);
 	});
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





