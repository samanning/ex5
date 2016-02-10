//Javascript

//call to jQuery ready function
//make sure html and css are loaded
var myAudio = document.createElement('audio');
myAudio.controls = true;
myAudio.src = 'media/clink.mp3';

$(document).ready(function () {

    console.log('ready');
    $('.object').draggable({
        cursor: 'grab',
        opacity: 0.6,
        //helper:'clone',
    });
    $('.bowl').droppable({
        //activeClass:'highlight',
        //hoverClass:  "hover",
        drop: function (event, ui) {
            myAudio.play();
        }
    });

    //reset objects back to original position
$('a#reset').click(function(){
    $('.object').animate({
        top: 0,
        left: 0,
    });
});              

}); //end of ready function