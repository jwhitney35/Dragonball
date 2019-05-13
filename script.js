// this is the script jQuery file for the Goku webpage

// make sure to run and jQuery code after the html is loaded
//can also be written as $(function(){});
$(function() {});

//$(".gokuBase").click(function() {
//    $(".gokuBase").fadeOut(500);
//    $(".gokuSS1").fadeIn(1000);
//});

//$(".gokuSS1").click(function() {
//    $(".gokuSS1").fadeOut("fast");
//    $(".gokuBase").fadeIn("slow");
//});


$("#BASE").click(function() {
    $(".gokuSS1").fadeOut("fast");
    $(".gokuSS2").fadeOut("fast");
    $(".gokuSS3").fadeOut("fast");
    $(".gokuGOD").fadeOut("fast");
    $(".gokuBLUE").fadeOut("fast");
    $(".gokuSS4").fadeOut("fast");
    $(".gokuBase").fadeIn("slow");
    $(".gokuBase").css("display", "block");

});

$("#SS1").click(function() {
    $(".gokuBase").fadeOut("fast");
    $(".gokuSS2").fadeOut("fast");
    $(".gokuSS3").fadeOut("fast");
    $(".gokuGOD").fadeOut("fast");
    $(".gokuBLUE").fadeOut("fast");
    $(".gokuSS4").fadeOut("fast");
    $(".gokuSS1").fadeIn("slow");
    $(".gokuSS1").css("display", "block");

});

$("#SS2").click(function() {
    $(".gokuBase").fadeOut("fast");
    $(".gokuSS1").fadeOut("fast");
    $(".gokuSS3").fadeOut("fast");
    $(".gokuGOD").fadeOut("fast");
    $(".gokuBLUE").fadeOut("fast");
    $(".gokuSS4").fadeOut("fast");
    $(".gokuSS2").fadeIn("slow");
    $(".gokuSS2").css("display", "block");

});

$("#SS3").click(function() {
    $(".gokuBase").fadeOut("fast");
    $(".gokuSS1").fadeOut("fast");
    $(".gokuSS2").fadeOut("fast");
    $(".gokuGOD").fadeOut("fast");
    $(".gokuBLUE").fadeOut("fast");
    $(".gokuSS4").fadeOut("fast");
    $(".gokuSS3").fadeIn("slow");
    $(".gokuSS3").css("display", "block");

});

$("#GOD").click(function() {
    $(".gokuBase").fadeOut("fast");
    $(".gokuSS1").fadeOut("fast");
    $(".gokuSS2").fadeOut("fast");
    $(".gokuSS3").fadeOut("fast");
    $(".gokuBLUE").fadeOut("fast");
    $(".gokuSS4").fadeOut("fast");
    $(".gokuGOD").fadeIn("slow");
    $(".gokuGOD").css("display", "block");

});

$("#BLUE").click(function() {
    $(".gokuBase").fadeOut("fast");
    $(".gokuSS1").fadeOut("fast");
    $(".gokuSS2").fadeOut("fast");
    $(".gokuSS3").fadeOut("fast");
    $(".gokuGOD").fadeOut("fast");
    $(".gokuSS4").fadeOut("fast");
    $(".gokuBLUE").fadeIn("slow");
    $(".gokuBLUE").css("display", "block");

});

$("#SS4").click(function() {
    $(".gokuBase").fadeOut("fast");
    $(".gokuSS1").fadeOut("fast");
    $(".gokuSS2").fadeOut("fast");
    $(".gokuSS3").fadeOut("fast");
    $(".gokuGOD").fadeOut("fast");
    $(".gokuBLUE").fadeOut("fast");
    $(".gokuSS4").fadeIn("slow");
    $(".gokuSS4").css("display", "block");

});