function colorChecker() {
  var array = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
  var colours = "#";
  for (var i=0; i<6; i++) {
    var index = Math.floor(Math.random()*array.length)
    colours += array[index]
  }
  return colours;
}
function backgroundColor() {
  var newColor = colorChecker();
  document.body.style.backgroundColor = newColor
  document.getElementById("result").innerText= "current color : " + newColor;
}