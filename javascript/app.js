    //define global variables
    var $color = $('.selected').css("background-color");
    var $canvas = $('canvas');
    var $context = $canvas[0].getContext("2d");
    var lastEvent;
    var mouseDown = false;

$('#colorlist').on('click', 'li', function(){
    
    var $color = $( this ).css("background-color");
  
    //first remove class from all ...
    $(this).siblings().removeClass('selected');
    //... and then add it to THIS clicked li element
    $(this).addClass('selected');
    // assign the color to THIS li's background-color
    $color = $( this ).css('background-color');
    //set the strokestyle to be the current color in use
    $context.strokeStyle= ""+ $color +"";
    });

    /*drawing happens here, first check if mouse is pressed down on canvas
      set lastly clicked location to lastEvent, mouseDown to true to monitor if it's still
      pressed down, currently yes
    */
        $canvas.mousedown(function(e) {
        lastEvent = e;
        mouseDown = true;
        /*if still pressed draw, begin -> follow mouse with lastEvent aka last pressed              location with lastEvent.offsetX && Y draw line there and finnish with stroke. 
         set lastEvent to new location aka Init it back. If mouse not pressed end drawing*/
    }).mousemove(function(e){
        if(mouseDown){
        $context.beginPath();
        $context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        $context.lineTo(e.offsetX, e.offsetY);
        $context.stroke();
        lastEvent = e;
        }else{
        mouseDown = false;
        }
    }).mouseup(function(){
        mouseDown = false;  
    }).mouseout(function(e){
        mouseDown = false;
    });
