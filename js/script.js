// Running the fish 1 & 2 random movement
randomMovement("#fish1Id"); // Orange fish movement
randomMovement("#fish2Id"); // Blue fish movement


// Function for looping the bubbles
function myloopedFunction(bubbleRef) {
    $(bubbleRef).click(function () {
        $(bubbleRef).stop().fadeOut(function () {
            myloopedFunction(bubbleRef)
        });
    });
    var pos1 = Math.round(Math.random() * 1500);
    var speed1 = Math.round(Math.random() * 10000 + 1500);
    $(bubbleRef).show().css({position: 'absolute', left: pos1, bottom: 0}); 
          
    
    $(bubbleRef).animate({bottom: 665}, speed1, 'linear', function () {myloopedFunction(bubbleRef)});
}

// Running the looping bubbles
myloopedFunction("#bubble1Id"); //Bubble 1 movement
myloopedFunction("#bubble2Id"); //Bubble 2 movement
myloopedFunction("#bubble3Id"); //Bubble 3 movement


// Orange fish moves to mouse click
$("#fish1Id").click(function () {});
$(document).click(function (event) {
    var x = event.pageX; 
    var y = event.pageY;
    $("#fish1Id").stop().animate({top: y-150, left: x-150}, 1000, function() {randomMovement("#fish1Id")});
});


// Orange fish resizing
$("#fish1Id").dblclick(function () {  
    $("#fish1Id").stop(true).animate({height: 376, width: 376}).delay(2000).animate({height: 250,width: 250}, function() {randomMovement("#fish1Id")});  
});


// Blue fish escapes from the mouse coursor
$("#fish2Id").on("mouseover", function() {
   var maxLeft = $(document).width() - $(this).width();
   var maxTop = $(document).height() - $(this).height();
   var leftPos = Math.floor(Math.random() * maxLeft);
   var topPos = Math.floor(Math.random() * maxTop);
    $("#fish2Id").stop().animate({left: leftPos, top: topPos}, function() {randomMovement('#fish2Id')});
});

// Fish random movement function
function randomMovement(element){    
    var h = $(window).height() - 150;
    var w = $(window).width() - 200;

    var newH = Math.floor(Math.random() * h);
    var newW = Math.floor(Math.random() * w);

    var speed = 5000;

    $(element).animate({ top: newH, left: newW }, speed, function(){
     randomMovement(element);        
    });
};


