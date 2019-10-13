$(document).ready(function(){
  $(".selection").click(function(){
    var myID = $(this).attr('id')
    alert("you clicked the selection: " + myID);
    //start AJAX Post request to post data to the server

    //end of post request

    $.post("post.php", {
      selection: myID
    }, function(data,status){

      $("#message").html("User selected this gift card: " + selection);
    });
    //end of AJAX post method

  });
  //end of click event for button selections
});
