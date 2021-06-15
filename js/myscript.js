$('p').click(function(){
    // if we use the ('p') syntax, both paragraphs
    // disappear at the same time. we don't want this
    // so we use 'this' and that targets individual elements
    $(this).slideToggle('slow');
});

$('button').mouseenter(function(){
    $(this).removeClass('makeRed').addClass('makeBlue');
});

$('button').mouseleave(function(){
    $(this).removeClass('makeBlue').addClass('makeRed');
});

$(document).ready(function(){
    $('.box').click(function(){
        var classNames = $(this).attr("class").split(" "); // we're saying we're splitting them by the spaces between the classes, will give us two strings
        $('.' + classNames[1].css("background-color"))
    });

// if we want specific box to change colour when pressed, such an 'if' statement

    var classNames = $(this).attr("class").split(" ");
    var boxNames = classNames[0];
    var classname = classNames[1];
    if ($(this).css("background-color") == "rbg(255, 0, 0)") {
        // if this object is already red, turn it black
        $("." + className).css('background-color', '#000');
    } else {
        // else turns all elements with a box class black
        // then change the colour of all emenets
        // with the same class name as the clicked element
        // to red. 
        $('.' + boxClass).css('background-color', '#000');
        $('.' + className).css('background-color', 'red');

    }
});

