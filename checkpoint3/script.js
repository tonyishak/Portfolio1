$(document).ready(function() {
var counter = 0;
var increment = 2;
    $('#moveleft').click(function() {
      doincrement();
        $('#pterodactyl').animate({
        'marginLeft' : "-=" + counter + "px" //moves left
        });
    });
    $('#moveright').click(function() {
      doincrement();
        $('#pterodactyl').animate({
        'marginLeft' : "+=" + counter + "px" //moves right
        });
    });
    $('#movedown').click(function() {
      doincrement();
        $('#pterodactyl').animate({
        'marginTop' : "+=" + counter + "px"//moves down
        });
    });
    $('#moveup').click(function() {
      doincrement();
        $('#pterodactyl').animate({
        'marginTop' : "-=" + counter + "px" //moves up
        });
    });
    $('#reset').click(function(){
      $("pterodactyl").attr("marginTop", '200px');
      $("pterodactyl").attr("marginLeft", '200px');
    });
    // I simply can not get the reset button to work. I tried a number of things but none worked. I ended up just bringing back the orginal because it seems to be the most likely to work. It's just frustrating.
    function doincrement(){
      counter += increment;
      $("#counter").text(counter);
      if(counter > 20){
        increment = 3;
      }else if (counter > 40) {
        increment = 4;
      }
    }
});
// $(document).ready(function(){
// 		var counter=0
// 		var increment = 1;
//
// 	$("#counter").click(function(){
// 		counter += increment;
// 		$("#counter").html("<h1>Your pterodactyl has "+counter+" flaps</h1>");
// 	if (counter>=1000){
// 		increment = 2;
// 	}
// 	})
// 	})
