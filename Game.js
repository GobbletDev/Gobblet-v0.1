
var turn = 0;
var place = 0;

//board size config
$(window).load(function() {
  var config = {
    width: 3,
    height: 3
  }

//Creating the Board
  for (var i = 0; i < config.height; i++) {
    var $row = $("<div>").addClass("row");
    for (var j = 0; j < config.width; j++) {
      var $box = $("<div>").addClass("box");
      $row.append($box);
    }
    $(".board").append($row);
}

var $gobblerBig = $("<div>").addClass("gobblerBig");

var $gobblerBig2 = $("<div>").addClass("gobblerBig2");
$(".board").append($gobblerBig,$gobblerBig2);
//Creating 2d array and zero it
var GameBoard = [];
for (var i = 0; i < config.height; i++) {
  GameBoard[i]= [];
}
for (var i = 0; i < config.height; i++) {
  for (var j = 0; j < config.width; j++) {
    var s = new square();
    GameBoard[i][j]=s;
  }
}
console.log(GameBoard);
$(".box").click(function (){
  place = $(".box").index(this);
  var x=Math.floor(place/config.width);
  var y = place % config.width;
   console.log($(".box").index(this));
   console.log(x+','+y);
 });


});
