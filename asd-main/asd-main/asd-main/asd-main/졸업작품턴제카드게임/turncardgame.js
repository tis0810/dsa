'use strict';
let cost = 0;
function button(){
  let num = document.getElementById("cost").value;  
  if (cost == 10){
    cost = 10;
  } else if (cost <10){
    cost++;
  }
  document.getElementById("cost").innerHTML = cost;
  //alert("턴을 종료하였습니다");
}

/*
function button(){
  let num = document.getElementById("my-cost").value;  
  if (cost == 10){
    cost = 10;
  } else if (cost <10){
    cost++;
  }
  document.getElementById("my-cost").innerHTML = cost;
  //alert("턴을 종료하였습니다");
}
*/


