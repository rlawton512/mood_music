//Function to pull song from search
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