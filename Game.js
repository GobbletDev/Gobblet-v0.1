
var turn = 0;
var place = 0;
var gobblerSend = 0;
var x = 0;
var y= 0;

//board size config
$(window).load(function() {
  var config = {
    width: 3,
    height: 3
  }
  //Drawing the Blue Gobblers
  var $row2 = $("<div>").addClass("row");
  var $gobblerBig2 = $("<div>").addClass("gobblerBig2");
  var $gobblerMed2 = $("<div>").addClass("gobblerMed2");
  var $gobblerSml2 = $("<div>").addClass("gobblerSml2");
  $row2.append($gobblerBig2,$gobblerMed2,$gobblerSml2);
  $(".board").append($row2);

//Creating the Board
  for (var i = 0; i < config.height; i++) {
    var $row = $("<div>").addClass("row");
    for (var j = 0; j < config.width; j++) {
      var $box = $("<div>").addClass("box");
      $row.append($box);
    }
    $(".board").append($row);
}
//Drawing the Red Gobblers
var $row = $("<div>").addClass("row");
var $gobblerBig = $("<div>").addClass("gobblerBig");
var $gobblerMed = $("<div>").addClass("gobblerMed");
var $gobblerSml = $("<div>").addClass("gobblerSml");
$row.append($gobblerBig,$gobblerMed,$gobblerSml);
$(".board").append($row);

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
//boxclick
$(".box").click(function (){
  place = $(".box").index(this);
   x=Math.floor(place/config.width);
   y = place % config.width;
   console.log(GameBoard[x][y].setMove(gobblerSend));
   console.log($(".box").index(this));
   console.log(x+','+y);
 });

 $(".gobblerBig").click(function (){
   gobblerSend = 6;
   console.log("Red Gobbler");
 });

});
