var apiKey = "253c5ca4319c93987b2b8f4e312be156";
var token = "f12b102d6b6a40ab99fc25886ed25f37";
var tag = "new"

// var apiSignature = md5("api_key253c5ca4319c93987b2b8f4e312be156methodauth.getSessiontokenf12b102d6b6a40ab99fc25886ed25f37mysecret");

$("#api-1").on("click", function() {

  var queryURL = "http://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&tag=" + tag + "&limt=3" +  "&api_key=" + apiKey + "&format=json"

  $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

    console.log(response);

        });
      });