// method of finding elements through DOM tree
// is known as 'traversing' mt.DOM

// traversing the DOM tree with parent method (going 'up')
// direct parent element with parent method
$(".myButton").parent();

// traversing down with children function
// returns ALL DIRECT children of element down ONE LEVEL
$("div").children();

// returns specific child/children of element down one level
$("div").children("p");

// traversing sideways (siblings)

// returns next sibling element in the DOM after the selected element
$("div").next();

$("div").next();
var firstDiv = $(".contentDiv").first()firstDiv.next().css("background-color", "yellow");

// returns previous sibling element in the DOM after the selected element
$("div").prev();

// toggles a class on and off on selected element, v useful in event handlers
$("div").toggleClass("bigBorder");

$("button").click(function() {
	$(this).next().slideToggle('slow');
});

// other traversing methods

// first() returns the first element in the selected SET of elements, e.g. tag/class

$("div").first();

// last 
$("div").last();

// siblings. all elements except selected element that share the same parent
$("div").siblings().fadeTo('slow');
$("div").siblings("p").show(1000);

// filter. specifies criteria. elements that don't match the criteria
// are removed from the selection, so that the code only
// returns those that match criteria
$("p").filter(".intro").addClass("highlight");

// variables (containers for storing data values). DO NOT PUT IN QUOTE MARKS
var panelColor = $(this).css("background-color");
$(".resetButton").css("background-color", panelColor);
