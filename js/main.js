//Navbar JQuery
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});
    
//Typed.JS
$(function(){$("#typed").typed({
    strings: ["build products.", "talk to users.", "have a coffee.", "brainstorm new ideas.", "go for a run.", "craft a strategy.","hang out with my dog.", "grow."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
	typeSpeed: 50,
	// time before typing starts
	startDelay: 1000,
	// backspacing speed
	backSpeed: 30,
	// time before backspacing
	backDelay: 500,
	// loop
	loop: true,
	// false = infinite
	loopCount: 1,
	// show cursor
	showCursor: true,
	// attribute to type (null == text)
	attr: null,
	// either html or text
	contentType: 'html',
	// call when done callback function
	callback: function() {},
	// starting callback function before each string
	preStringTyped: function() {},
	//callback for every typed string
	onStringTyped: function() {},
	// callback for reset
	resetCallback: function() {}
    });
});

//Fade in Waypoints Jquery  
/*$(document).ready(function () {
  // hide our element on page load
    $('#big-hello-1').css('opacity', 0);
    $('#big-hello-1').waypoint(function () {
        $('#big-hello-1').addClass('oh-hello');
    }, { offset: '60%'});

    $('#big-hello-2').css('opacity', 0);
    $('#big-hello-2').waypoint(function () {
        $('#big-hello-2').addClass('oh-hello');
    }, { offset: '60%'});
    
    $('#big-hello-3').css('opacity', 0);
    $('#big-hello-3').waypoint(function () {
        $('#big-hello-3').addClass('oh-hello');
    }, { offset: '60%'});
    
    $('#big-hello-4').css('opacity', 0);
    $('#big-hello-4').waypoint(function () {
        $('#big-hello-4').addClass('oh-hello');
    }, { offset: '60%'});
    
    $('#big-hello-5').css('opacity', 0);
    $('#big-hello-5').waypoint(function () {
        $('#big-hello-5').addClass('oh-hello');
    }, { offset: '60%'});
    
    $('#big-hello-6').css('opacity', 0);
    $('#big-hello-6').waypoint(function () {
        $('#big-hello-6').addClass('oh-hello');
    }, { offset: '60%'});
    
    $('#big-hello-7').css('opacity', 0);
    $('#big-hello-7').waypoint(function () {
        $('#big-hello-7').addClass('oh-hello');
    }, { offset: '60%'});
    
    $('#big-hello-8').css('opacity', 0);
    $('#big-hello-8').waypoint(function () {
        $('#big-hello-8').addClass('oh-hello');
    }, { offset: '60%'});
    
    $('#big-hello-9').css('opacity', 0);
    $('#big-hello-9').waypoint(function () {
        $('#big-hello-9').addClass('oh-hello');
    }, { offset: '60%'}); 
});*/