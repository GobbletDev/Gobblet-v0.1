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
