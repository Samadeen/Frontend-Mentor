var countDownDate = new Date('August 29, 2022 00:00:00').getTime();
const x = setInterval(() => {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   console.log(days, hours, minutes, seconds);

  document.querySelector('.days').innerHTML = days;
  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.days').innerHTML = '00';
    document.querySelector('.hours').innerHTML = '00';
    document.querySelector('.minutes').innerHTML = '00';
    document.querySelector('.seconds').innerHTML = '00';
  }
}, 1000);
