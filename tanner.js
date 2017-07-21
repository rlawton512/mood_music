//grab input for image url
//perform ajax call to SkyBio
$('#submitImgUrl').on('click',function(){
	var userUrl = $('#inputImgUrl').val().trim();
	var APIKey='dae956b6026544528d9a145149191299';
	var APISecret = '3d1c30b4f5d746dab0f467e44a1041f4';
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
		}
		$('#resultsDiv').prepend(newDiv);

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
	

	//split music call into conditions based on emotional results
	if (mostFitting[1]==="happiness"||mostFitting[1]==="surprise"){
		var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=happy&limit=3&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
		//creates AJAX call for the topics being clicked 
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			var musicResponse = response
			console.log("success got data", musicResponse);		
		})
	}else if(mostFitting[1]==="anger"||mostFitting[1]==="disgust"){
		var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=angry&limit=3&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
		//creates AJAX call for the topics being clicked 
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			var musicResponse = response
			console.log("success got data", musicResponse);		
		})
	}else if(mostFitting[1]==="sadness"||mostFitting[1]==="fear"){
		var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=sad&limit=3&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
		//creates AJAX call for the topics being clicked 
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			var musicResponse = response
			console.log("success got data", musicResponse);		
		})
	}else{
		var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=chill&limit=3&api_key=b164494922abda22f8cd2e53cc25ab4e&format=json"
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			var musicResponse = response
			console.log("success got data", musicResponse);		
		})
	};
	});
});