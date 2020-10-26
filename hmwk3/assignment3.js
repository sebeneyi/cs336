//this changes the display aka visibilit of whatever has the id
//block means show and none means no show
function showHint() {
  document.getElementById("hint").style.display = "block";
  document.getElementById("button").style.display = "none";
  document.getElementById("hide").style.display = "block";
}

//this changes the display aka visibilit of whatever has the id
//block means show and none means no show
function hideHint() {
  document.getElementById("hint").style.display = "none";
  document.getElementById("button").style.display = "block";
  document.getElementById("hide").style.display = "none";
}
