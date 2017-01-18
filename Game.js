<<<<<<< HEAD
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
$(".board").append($gobblerBig);
var GameBoard = [];
for (var i = 0; i < config.height; i++) {
  GameBoard[i]= [];
}

for (var i = 0; i < config.height; i++) {
  for (var j = 0; j < config.width; j++) {
    GameBoard[i][j]=0;

  }
}
console.log(GameBoard);
});
=======
$(window).load(function() {
  var config = {
    width: 3,
    height: 3
  }


  for (var i = 0; i < config.height; i++) {
    var $row = $("<div>").addClass("row");
    for (var j = 0; j < config.width; j++) {
      var $box = $("<div>").addClass("box");
      $row.append($box);
    }
    $(".board").append($row);
    var $gobblerBig = $("<div>").addClass("gobblerBig");
    $(".board").append($gobblerBig);

}
});
>>>>>>> origin/master
