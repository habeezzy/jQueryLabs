$(document).ready(function() {

$(".available").click(function() {
        $(".formBox").css("visibility", "visible");

    });

$(".reserved").click(function() {
        $(this).css("cursor", "not-allowed");
    });

$(".x").click(function() {
        $(".formBox").css("display", "none");

    });

$(".button").click(function() {
  $("available").addClassByClick("reserved");
});

$("available").mouseover(function(){
  $("available").fadeTo("slow", "0.5");
});


});
