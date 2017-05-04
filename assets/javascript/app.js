$(document).ready(function() {
   //Giphy API
  var flower = " . ";
  var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

  $.ajax({
      url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
      method: 'GET'
  }).done(function(response) {
      console.log("WooHoo");
  }); 

  function getFlower(flowerName) {
    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?q=" + flowerName + "&api_key=dc6zaTOxFJmzC",
      method: 'GET'
    }).done(function(response) {
      // Array of images
      var images = response.data;
      console.log("We got some images!", images);

      for(var i = 0; i < images.length; i++){
        var url = images[i].url;
        console.log(url); 

        // make a new image tag
        // set src attr to url
        // append to the DOM
      }
    });
  }

  $("#flower-buttons").on("click", "button.flower", function(){
    console.log($(this).attr("data-name"));

    var name = $(this).attr("data-name");
    
    getFlower(name);
  });
});