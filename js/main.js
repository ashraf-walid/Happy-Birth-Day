let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let counter = setInterval(() => {
  let restOfTime = new Date("Aug 23 2024 23:59:59").getTime() - new Date().getTime();
  const milliSecondOfDay = 1000 * 60 * 60 * 24;
  const restOfDay = restOfTime / milliSecondOfDay;
  const pureRestOfDays = Math.floor(restOfDay);
  const restOfHours = (restOfDay - pureRestOfDays) * 24;
  const restOfMinutes = (restOfHours - Math.floor(restOfHours)) * 60;
  const restOfSeconds = (restOfMinutes - Math.floor(restOfMinutes)) * 60;

  days.innerHTML = pureRestOfDays < 10 ? `0${Math.floor(pureRestOfDays)}` : Math.floor(pureRestOfDays);
  hours.innerHTML = Math.floor(restOfHours) < 10 ? `0${Math.floor(restOfHours)}` : Math.floor(restOfHours);
  minutes.innerHTML = Math.floor(restOfMinutes) < 10 ? `0${Math.floor(restOfMinutes)}` : Math.floor(restOfMinutes);
  seconds.innerHTML = Math.floor(restOfSeconds) < 10 ? `0${Math.floor(restOfSeconds)}` : Math.floor(restOfSeconds);

  if (restOfTime <= 0) {
    clearInterval(counter);
    alert("Happy Birthday! 🎉🎂");
  }
}, 1000);
