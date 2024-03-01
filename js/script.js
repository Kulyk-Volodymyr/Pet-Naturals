/* ==================== Burger Menu ==================== */
const burgerBtn = document.getElementById("burger-button");
const navbar = document.getElementById("header-navbar");
const navbarItems = document.getElementById("navbar-items");
let mobileNavIsOpen = false;

function burgerClick() {
  burgerBtn.classList.toggle("burger-toggle");
  if (mobileNavIsOpen) {
    navbar.classList.add("hide-header-navbar");
    navbarItems.classList.remove("show-navbar-items");
    navbar.classList.remove("show-header-navbar");
    mobileNavIsOpen = false;
  } else {
    navbar.classList.add("show-header-navbar");
    navbarItems.classList.add("show-navbar-items");
    navbar.classList.remove("hide-header-navbar");
    mobileNavIsOpen = true;
  }
}

window.onclick = function (event) {
  if (
    event.target.matches("#burger-button") ||
    event.target.matches("#burger-button *")
  ) {
    burgerClick();
  } else {
    if (mobileNavIsOpen) burgerClick();
  }
};

/* ==================== Phone Mask ===================== */
$("#form-tel").inputmask({ mask: "+38(099)999-99-99" });

/* ==================== Today date ===================== */
const todayDate = document.getElementById("today");
const today = new Date();
let todayMonth = (today.getMonth() + 1).toString();
if (todayMonth.length === 1) todayMonth = 0 + todayMonth;

todayDate.innerText =
  today.getDate() + "." + todayMonth + "." + today.getFullYear();

/* ================== Countdown Timer ================== */
const countdownTimer = document.getElementById("countdown-timer");
let [hours, minutes, seconds] = [2, 0, 0];

const countTime = () => {
  let timer;
  timer = setInterval(() => {
    seconds--;
    let formattedMinutes;
    let formattedSeconds;

    if (hours === 0 && minutes === 0 && seconds === 0) clearInterval(timer);
    if (seconds === -1) {
      seconds = 59;
      if (minutes === 0) {
        minutes = 60;
        hours--;
      }
      minutes--;
    }

    minutes < 10
      ? (formattedMinutes = "0" + minutes)
      : (formattedMinutes = minutes);
    seconds < 10
      ? (formattedSeconds = "0" + seconds)
      : (formattedSeconds = seconds);

    countdownTimer.innerText = `${hours}:${formattedMinutes}:${formattedSeconds}`;
  }, 1000);
};

window.onload = countTime;

/* ================== Scroll Animation ================= */
const aboutCards = document.getElementsByClassName("about__card");
const resultsInfo = document.getElementById("results-info");
const resultsInfoImg = document.getElementById("results-info-img");

function moveCards() {
  if (aboutCards[0].getBoundingClientRect().top < window.innerHeight - 300) {
    for (let i = 0; i < aboutCards.length; i++) {
      aboutCards[i].classList.add("about-card-move");
      aboutCards[i].style.transitionDelay = `${0.1 * i}s`;
    }
  }
  if (aboutCards[0].getBoundingClientRect().top > window.innerHeight - 100) {
    for (let i = 0; i < aboutCards.length; i++) {
      aboutCards[i].classList.remove("about-card-move");
    }
  }

  if (resultsInfo.getBoundingClientRect().top < window.innerHeight - 300) {
    resultsInfo.classList.add("results-info-move");
    resultsInfoImg.classList.add("results-info-move");
  }
  if (resultsInfo.getBoundingClientRect().top > window.innerHeight - 100) {
    resultsInfo.classList.remove("results-info-move");
    resultsInfoImg.classList.remove("results-info-move");
  }
}

window.addEventListener("scroll", moveCards);
