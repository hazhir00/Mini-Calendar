const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

date.textContent = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
day.textContent = weekDays[today.getDay()];
month.textContent = allMonths[today.getMonth()];
year.textContent = today.getFullYear();
