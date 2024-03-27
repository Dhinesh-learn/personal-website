const menu = document.querySelector(".menu");
const menuList = document.querySelector("nav ul");
menu.addEventListener("click", () => {
  console.log("clicked here", menuList);
  menuList.classList.toggle("showmenu");
});
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("header1").classList.add("fixed-top");
      navbar_height = document.querySelector(".header1").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("header1").classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  });
});
var typed = new Typed("#typed", {
  strings: ["Frontend Developer"],
  typeSpeed: 40,
  backSpeed: 40,
  fadeOut: false,
  loop: true,
});
var currentBannerIndex = 0;
var banners = document.querySelectorAll(".banner-leader");
// Show the initial banner
banners[currentBannerIndex].style.display = "block";
// Function to switch to the next banner
function showNextBanner() {
  banners[currentBannerIndex].style.display = "none";
  currentBannerIndex = (currentBannerIndex + 1) % banners.length;
  banners[currentBannerIndex].style.display = "block";
}
// Auto-scrolling interval
var intervalId = setInterval(showNextBanner, 3000);

const contactform = document.querySelector("#submit-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message-box");

contactform.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateInputs()) {
  }
});
function validateInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const messageVal = message.value.trim();

  let success = true;

  if (usernameVal === "") {
    success = false;
    setError(username, "username is required");
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    success = false;
    setError(email, "email is required");
  } else if (!validateEmail(emailVal)) {
    success = false;
    setError(email, "please enter valid email");
  } else {
    setSuccess(email);
  }

  if (phoneVal === "") {
    success = false;
    setError(phone, "phone number is required");
  } else if (phoneVal.length < 10) {
    success = false;
    setError(phoneVal, "phone number must have 10 characters");
  } else {
    setSuccess(phone);
  }

  if (messageVal === "") {
    success = false;
    setError(message, "message is required");
  } else {
    setSuccess(message);
  }

  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  console.log("inputGroup", inputGroup);
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
