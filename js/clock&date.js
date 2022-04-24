const clock = document.querySelector("h2#clock");
const date = document.querySelector("h2#date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

function getDate() {
  const today = new Date();
  const year = String(today.getFullYear());
  const month = String(today.getMonth() + 1);
  const date2 = String(today.getDate());
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = weekday[today.getDay()];

  date.innerText = `${year} / ${month} / ${date2} / ${day}`;
}

getDate();
getClock();
setInterval(getClock, 1000);
