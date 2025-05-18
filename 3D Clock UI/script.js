const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');
const digitalTime = document.getElementById('digitalTime');

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const isAM = hours < 12;
  const ampm = isAM ? 'AM' : 'PM';
  const displayHours = hours % 12 === 0 ? 12 : hours % 12;

  const hh = displayHours.toString().padStart(2, '0');
  const mm = minutes.toString().padStart(2, '0');
  const ss = seconds.toString().padStart(2, '0');

  digitalTime.textContent = `${hh}:${mm}:${ss} ${ampm}`;

  const secDeg = seconds * 6;
  const minDeg = minutes * 6 + seconds * 0.1;
  const hrDeg = (hours % 12) * 30 + minutes * 0.5;

  secondHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
