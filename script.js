// script.js
// Calculate remaining time until wedding date
var weddingDate = new Date("09/09/2023").getTime();
var countdownInterval = setInterval(function() {
  var now = new Date().getTime();
  var timeDifference = weddingDate - now;
  
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);
  
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "It's our wedding day!";
  }
}, 1000);

// Helper function to format time with leading zero
function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time;
}
