console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('#more').click(function() {
      // $(this).hide();
      $("#mySidenav").addClass('sidenav-open');
  })

  $('.closebtn').click(function() {
      // $('#more').show();
      $("#mySidenav").removeClass('sidenav-open');
  })



//LIGHT BOX FOR PHOTOGRAPHY
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $caption = $("<p></p>");

  //and image to overlay
  $overlay.append($image);
  //add caption
  $overlay.append($caption);
  //add overlay
  $("body").append($overlay);

  //capture the click event on the link to an image
  $("#imageGallery a").click(function(){
    	event.preventDefault();
    	var imageLocation = $(this).attr("href");
    //update overlay w/ the image linked in the link
    	$image.attr("src", imageLocation);
    //show the overlay
    	$overlay.show();
    //get childs alt attr. Add caption, alt attribute
    	var captionText = $(this).children("img").attr("alt");
    	$caption.text(captionText);

    	console.log(captionText);
  });

  $overlay.click(function() {

  	$overlay.hide();
  });


});
