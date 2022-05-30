let hourHand = document.querySelector("[data-hour-hand]");
let minuteHand = document.querySelector("[data-minute-hand]");
let secondHand = document.querySelector("[data-second-hand]");

setInterval(setClock, 1000);

function setClock() {
  let currentDate = new Date();
  let secondRatio = currentDate.getSeconds() / 60;
  let minutesRatio = (secondRatio + currentDate.getMinutes()) / 60;
  let hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}
function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
setClock();
