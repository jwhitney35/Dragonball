// this is the script jQuery file for the Ada's Goku webpage

// make sure to run and jQuery code after the html is loaded
//can also be written as $(function(){});
$(function() {});

$(".gokuBase").click(function() {
    $(".gokuBase").fadeOut(500);
    $(".gokuSS1").fadeIn(1000);
});

$(".gokuSS1").click(function() {
    $(".gokuSS1").fadeOut("fast");
    $(".gokuBase").fadeIn("slow");
});