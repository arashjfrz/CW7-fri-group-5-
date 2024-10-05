function time() {
  let a = new Date();
  let hour = a.getHours();
  let minute = a.getMinutes();
  let second = a.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
}

time();

setInterval(time, 1000);
