
function changeP() {
  var pColor = document.getElementById("fontColor").value;
  var bColor = document.getElementById("borderColor").value;
  var bSize = document.getElementById("borderSize").value;
  if(pColor == "red" || pColor == "blue" || pColor == "green"){
    document.getElementById("mainText").style.color=pColor;
}

  if(bColor == "red" || bColor == "blue" || bColor == "green"){
    document.getElementById("mainText").style.borderColor=bColor;
}

  if(bSize != ''){
    document.getElementById("mainText").style.borderWidth=bSize;
}
  document.getElementById("fontColor").value="";
  document.getElementById("borderColor").value="";
  document.getElementById("borderSize").value="";

}
