$(document).ready(function() {

$(".available").click(function() {
  $(".formBox").css("visibility", "visible");
  });

$(".reserved").click(function() {
 $(this).css("cursor", "not-allowed");
  });

$("h6").click(function() {
  $(".formBox").css("display", "none");
  });
$("h6").on("mouseover", function() {
  $(this).css("cursor", "pointer");
});

$("button").click(function() {
  $(".available").addClassByClick(".reserved");
 });

$(".available").on("mouseover", function() {
 $(this).css("cursor", "pointer" );
});

$(".available").hover(function(){
    $(this).fadeToggle("slow");
});


});




$(".container").on("click", function(event) {
  container = $(this);
  $("form").fadeIn(2000);
});
