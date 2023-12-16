//console.log("name");
//document.getElementById("times").innerHTML = "my name is";

let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
minutes = checkTime(minutes);
seconds = checkTime(seconds);
let display = document.getElementById("times");
display.innerHTML = ` ${hours}   : ${minutes}   :   ${seconds}`;
let t = setTimeout(500);
document.getElementById("times").style.fontSize = "50px";
document.getElementById("times").style.fontWeight = "700";

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
