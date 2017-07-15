$(document).ready(function(){


var APIKey = "a5gkHawN_9QRfm3-xbiEukr6RH0quaTi";	
var APISecret = "T6m_6i7TTZZU0t8Ldq9-RnMDYGd64k9B";
var image1 = "assets/images/rgos1.jpg";	

function jax(){
	$.ajax({
        type: 'POST',
        url: 'https://api-us.faceplusplus.com/facepp/v3/detect',
        crossDomain: true,
        cache: false,
        async: true,
        data: {"api_key": APIKey, "api_secret": APISecret, "image_file": image1},
        dataType: 'jsonp',
        success: function(responseData) {
           alert(JSON.stringify(responseData));
        },
        error: function (responseData, textStatus, errorThrown) {
            alert(JSON.stringify(responseData));
        }
    });
};

jax(); 

});




