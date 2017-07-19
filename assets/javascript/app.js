$(document).ready(function(){

//some global variables and test images
var APIKey = 'a5gkHawN_9QRfm3-xbiEukr6RH0quaTi';	
var APISecret = 'T6m_6i7TTZZU0t8Ldq9-RnMDYGd64k9B';
var image1;

$('#submit').on('click', function(){
        image1 = $('#image_url').val().trim();
    });

var image2 = 'https://static01.nyt.com/images/2016/01/12/arts/music/20160112_BOWIE_HP-slide-DMXR/20160112_BOWIE_HP-slide-DMXR-videoSixteenByNine3000-v2.jpg';	
var tokenOne;

//straight from postman with no modification
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api-us.faceplusplus.com/facepp/v3/detect?api_secret=T6m_6i7TTZZU0t8Ldq9-RnMDYGd64k9B&api_key=a5gkHawN_9QRfm3-xbiEukr6RH0quaTi&image_url=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2016%2F01%2F12%2Farts%2Fmusic%2F20160112_BOWIE_HP-slide-DMXR%2F20160112_BOWIE_HP-slide-DMXR-videoSixteenByNine3000-v2.jpg",
  "method": "POST",
  "headers": {
    "Access-Control-Allow-Origin": true,
    "cache-control": "no-cache",
    "postman-token": "5da6cb75-455b-d385-a67a-a1bfee6c6223"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api-us.faceplusplus.com/facepp/v3/face/analyze?api_key=a5gkHawN_9QRfm3-xbiEukr6RH0quaTi&api_secret=T6m_6i7TTZZU0t8Ldq9-RnMDYGd64k9B&face_tokens=3ddd5eb1630d9d8d5b2a6e9d0e9e14e2&return_attributes=gender%2Cage%2Cethnicity%2Cemotion%2Ceyestatus",
  "method": "POST",
  "headers": {
    "Access-Control-Allow-Origin": true,
    "cache-control": "no-cache",
    "postman-token": "357af3aa-6c97-a0ed-3b89-066f013c8159"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

// postman replication

$('#goJax').on('click',function(){
    event.preventDefault();

    function jax(){
    var tokenOne;
    var settings = { 
        "async": true,
        "crossDomain": true,
        "url": 'https://api-us.faceplusplus.com/facepp/v3/detect?api_secret='+APISecret+'&api_key='+APIKey+'&image_url='+image1,
        "method": "POST",
        "headers": {
            "Access-Control-Allow-Origin": true,
            "cache-control": "no-cache",
        }
    }

    $.ajax(settings).done(function (response) {
        tokenOne=response.faces[0].face_token;
  

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": 'https://api-us.faceplusplus.com/facepp/v3/face/analyze?'
            +'api_key='+APIKey+'&api_secret='+APISecret+'&face_tokens='+tokenOne+'&return_attributes='
            +'gender%2Cage%2Cethnicity%2Cemotion%2Ceyestatus',
            "method": "POST",
            "headers": {
                "Access-Control-Allow-Origin": true,
                "cache-control": "no-cache",
            }
        }       

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });

    };

    jax();

})

});

// example on the website using cURL
//curl -X POST "https://api-us.faceplusplus.com/facepp/v3/face/analyze" \
//-F "api_key=<api_key>" \
//-F "api_secret=<api_secret>" \
//-F "return_landmark=1" \
//-F "face_tokens=c2fc0ad7c8da3af5a34b9c70ff764da0"

