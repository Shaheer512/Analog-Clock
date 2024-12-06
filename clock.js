const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

function clockTick(){

let date = new Date();
let hours =   date.getHours();
let minutes = date.getMinutes();
let seconds =  date.getSeconds();

let hoursRotation = 30*hours + minutes/2;
let minuteRotation = 6*minutes;
let secondRotation = 6*seconds;

hourHand.style.transform = `rotate(${hoursRotation}deg)`;
minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
secondHand.style.transform = `rotate(${secondRotation}deg)`;

};
setInterval(clockTick, 1000);


