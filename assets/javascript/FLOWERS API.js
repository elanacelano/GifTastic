 //   var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?q=" + flower + "&api_key=dc6zaTOxFJmzC",
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });
      // Initial array of flower
      var flower = [];

      // displayflowerInfo function re-renders the HTML to display the appropriate content
      function displayflowerInfo() {

        var flower = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + flower + "&api_key=dc6zaTOxFJmzC"; 
        // Creating an AJAX call for the specific flower button being clicked
        $.ajax({
          url: "http://api.giphy.com/v1/gifs/search?q=" + flower + "&api_key=dc6zaTOxFJmzC",
          method: "GET"
        }).done(function(response) {

          // Creating a div to hold the flower
          var flowerDiv = $("<div class='flower'>");

          // Retrieving the URL for the image
          var imgURL = response.Picture;

          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);

          // Appending the image
          flowerDiv.append(image);

          // Putting the entire flower above the previous flower
          $("#flower-view").prepend(flowerDiv);
        });

      }

      // Function for displaying flower data
      function renderButtons() {

        // Deleting the flower prior to adding new flower
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of flower
        for (var i = 0; i < flower.length; i++) {

          // Then dynamicaly generating buttons for each flower in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of flower to our button
          a.addClass("flower");
          // Adding a data-attribute
          a.attr("data-name", flower[i]);
          // Providing the initial button text
          a.text(flower[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a flower button is clicked
      $("#add-flower").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var flower = $("#flower-input").val().trim();

        // Adding flower from the textbox to our array
        flower.push(flower);

        // Calling renderButtons which handles the processing of our flower array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "flower"
      $(document).on("click", ".flower", displayflowerInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();

    GET requests the API and logging the responses to the console