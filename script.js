const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const targetDateInput = document.getElementById("target-date");
const setDateButton = document.getElementById("set-date-button");
const resetDateButton = document.getElementById("reset-date-button");

let targetDate;

function updateCountdown() {
    const currentDate = new Date();
    const timeLeft = targetDate - currentDate;

    if (timeLeft < 0) {
        // Countdown is complete
        clearInterval(intervalId);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}

setDateButton.addEventListener("click", function () {
    targetDate = new Date(targetDateInput.value);
    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
});

resetDateButton.addEventListener("click", function () {
    clearInterval(intervalId);
    targetDate = null;
    daysElement.innerHTML = "00";
    hoursElement.innerHTML = "00";
    minutesElement.innerHTML = "00";
    secondsElement.innerHTML = "00";
});