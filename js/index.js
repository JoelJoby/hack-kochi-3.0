
function wait(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


var q = 0;
var txt = 'Make. Break. Innovate';
var speed = 100;
document.getElementById("mbi").innerHTML = " ";


function typeWriter() {

  if (q < txt.length) {
	  if(document.getElementById("mbi").innerHTML == " Make." || document.getElementById("mbi").innerHTML == " Make. Break.")
{
wait(200);
}
    document.getElementById("mbi").innerHTML += txt.charAt(q);
    q++;
    setTimeout(typeWriter, speed);
  }
  

}
typeWriter();





var countDownDate = new Date("Nov 6, 2020 12:00:00").getTime();






// Update the count down every 1 second
var x = setInterval(function() {

	if(document.getElementById("timer").innerHTML == '&nbsp;')
	{
		wait(4000);
	}
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(hours > 12)
  {
       hours -= 12;
  }
  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s left!";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "The hunt has begun!";
  }
}, 1000);
