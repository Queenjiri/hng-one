// const currentTime = new Date();
// let time = currentTime.getUTCDate();
// document.querySelector(".currentTime").textContent = time;

// const currentDay = getTime.getDay();
// console.log(currentDay);

// const d = new Date();
// let day = d.getDay();
//  document.querySelector(".currentDay").textContent = day;

//  const d = new Date("July 21, 1983 01:15:00");
//  let day = d.getDay();

//  const d = new Date();
//  let day = d.getUTCDate();

const getTime = new Date();
let time = getTime;
document.querySelector(".currentTime").innerHTML = time;

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDay = new Date();
let day = weekday[currentDay.getDay()];
document.querySelector(".currentday").innerHTML = day;
