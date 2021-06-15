$(document).ready(function() {
    $('h2').addClass('underline'); // underlines all h2 elements
    $('ul').addClass('border'); // adds a border
});

// custom functions for when event triggers = known as 'event handlers'

$(document).ready(function() { // jquery should only trigger when DOM loads
    $("#stream1_btn").on("click", function() { //function called when btn clicked
        $(".stream1").show(); // shows hidden elements such as a div/img
        $(".stream1").show('slow'); // tells jquery how fast to show the animation
        $(".stream1").show('medium');
        $(".stream1").show('fast');
        $(".stream1").show(1000); // 1000 represents 1000 milliseconds
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").hide(); // hide an element
        $(".stream2").hide('slow'); 
        $(".stream1").hide('medium');
        $(".stream1").hide('fast');
        $(".stream1").hide(1000);
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").toggle(); // toggles visibility, e.g. if it's shown it will be hidden and vice versa
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").slideDown(); // slides down a hidden HTML element
        $(".stream1").slideDown(1000); // can also set speed as parameter to function like in others
        $(".stream1").slideDown(); // opposite of slideDown
        $(".stream1").slideToggle(); // slide on off button
        $(".stream1").fadeIn(); // fades in a hidden HTML ement
        $(".stream1").fadeOut(); // fades out a visible HTML ement
        $(".stream1").fadeToggle(); // on/off fade element


        // fadeTo enables you to fade a HTML element partially in or out, making it transparent
        $(".stream1").fadeTo(1000, 0.5); // first parameter is speed[milliseconds], second is opacity[0 = fully transparent, 1 = fully opaque]
    });
}); 

// METHOD CHAINING

// in jquery most of the methods return an object that you can then use to call another method
// allows you to do command chaining, performing multiple methods on same set of elements

$('#myButton').removeClass('blueBox').addClass('border');

// chaining with events:
$('#myButton').slideUp(2000).slideDown(2000);

// 'attr' function can get the attributes of an element and set them, a 'setter and getter'
$('a').attr('href','http://www.example.com');

// importance of 'this'
