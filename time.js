const date = document.querySelector("#date");

function time() {
  let today = new Date();
  let hours = String(today.getHours()).padStart(2, "0");
  let min = String(today.getMinutes()).padStart(2, "0");
  let sec = String(today.getSeconds()).padStart(2, "0");
  date.innerText = `${hours}:${min}:${sec}`;
}

time();
setInterval(time, 1000);
