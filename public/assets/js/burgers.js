// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    
      // var newFood = {
      //   name: ,
      // };
  
      // // Send the PUT request.
      // $.ajax("/api/burgers/" + id, {
      //   type: "PUT",
      //   data: newFood
      // }).then(
      //   function() {
      //     console.log("added new Item", item);
      //     // Reload the page to get the updated list
      //     location.reload();
      //   }
      // );
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#name").val().trim(),
      };
  
      // Send the POST request.
      $.ajax({
        type: "POST",
        url: "/burgers",
        data: newBurger
      }).then(
        function() {
          console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/burgers/:" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });


  