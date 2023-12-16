//console.log("name");
//document.getElementById("times").innerHTML = "my name is";
function displayClock() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  let display = document.getElementById("times");
  display.innerHTML = ` ${hours}   : ${minutes}   :   ${seconds}`;

  document.getElementById("times").style.fontSize = "50px";
  document.getElementById("times").style.fontWeight = "700";
}
setInterval(displayClock, 10);
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
