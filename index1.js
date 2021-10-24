function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let secs = Math.floor((t / 1000) % 60);
  let mins = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'mins': mins,
    'secs': secs
  };
}
 
function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minsSpan = clock.querySelector('.mins');
  let secsSpan = clock.querySelector('.secs');
 
  function updateClock() {
    let t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minsSpan.innerHTML = ('0' + t.mins).slice(-2);
    secsSpan.innerHTML = ('0' + t.secs).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}
 
let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('timer', deadline);