
/*
  IMPORTANT:
  Set this to your actual reveal date and time.
  Example below: October 16, 2026 at 7:00 PM IST.
*/
const deadline = new Date("2026-10-26T09:33:00+05:30").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const footerMessage = document.getElementById("footer-message");

function updateCountdown() {
  const now = Date.now();
  const remaining = deadline - now;

  if (remaining <= 0) {
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";

    document.querySelector("h1").innerHTML =
      "It's time! ♡";

    document.querySelector(".message").textContent =
      "Your surprise is ready. I hope it makes you smile.";

    footerMessage.textContent =
      "The wait is over. ♡";

    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remaining / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (remaining / (1000 * 60)) % 60
  );
  const seconds = Math.floor(
    (remaining / 1000) % 60
  );

  daysElement.textContent = String(days).padStart(2, "0");
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

const timerInterval = setInterval(updateCountdown, 1000);
