const clock = document.querySelector("h2#clock");

function sayHello() {
  const time = new Date();

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
sayHello();
setInterval(sayHello, 1000);
