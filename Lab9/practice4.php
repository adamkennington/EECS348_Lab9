<?php
$size = $_POST["size"];


echo("<table style='border-width:1px;border-style:solid;border-color:black;border-collapse:collapse;'>");
for($i=1;$i<=$size;$i++){
  if($i==1){
    echo("<tr>");
    echo("<td style='border-width:1px;border-style:solid;border-color:black;'> </td>");
    for($k=1;$k<=$size;$k++){
      echo("<td style='border-width:1px;border-style:solid;border-color:black;'>".$k."</td>");
    }
    echo("</tr>");
  }
  echo("<tr>");
  for($j=1;$j<=$size;$j++){
    if($j==1){
      echo("<td style='border-width:1px;border-style:solid;border-color:black;'>".$i."</td>");
    }
   echo("<td style='border-width:1px;border-style:solid;border-color:black;'>".$i*$j."</td>");
  }
  echo("</tr>");
}
echo("</table>");





?>
