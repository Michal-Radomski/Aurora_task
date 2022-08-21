// Input -> console.log
const nameInput = document.getElementById("inputName");
document.querySelector(".form--input").addEventListener("submit", function (event) {
  //prevent the normal submission of the form
  event.preventDefault();
  console.log(nameInput.value);
});

// Open/ Close menu + button animation
const menu = document.querySelectorAll(".menu--navigation > .link");
const bars = document.querySelectorAll(".icon--hamburger > .bar");
function openCloseMenu() {
  menu.forEach((elem) => elem.classList.toggle("responsive"));
  bars.forEach((elem) => elem.classList.toggle("active"));
}

// Close menu on menu link click
menu.forEach((elem) => elem.addEventListener("click", removeResponsive));
function removeResponsive() {
  menu.forEach((elem) => elem.classList.remove("responsive"));
}
