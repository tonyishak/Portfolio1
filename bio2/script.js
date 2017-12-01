// var figure = $(".video").hover( hoverVideo, hideVideo );
//
// function hoverVideo(e) {
//     $('video', this).get(0).play();
// }
//
// function hideVideo(e) {
//     $('video', this).get(0).pause();
// }

// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
//
// ctx.strokeStyle = "rgb(150, 0, 0)";
// ctx.fillRect(25, 25, 100, 100);
//
// //Circle
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(75,75,30,0,2*Math.PI);
// ctx.stroke();
//
// //text
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.font = "15px Arial";
// ctx.strokeText("Hello World",35,40);

var canvas = document.getElementById('canvas');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');
ctx.fillRect(10,10,100,100);
ctx.fillStyle = ('green');
ctx.strokeRect(100,30,50,50);
