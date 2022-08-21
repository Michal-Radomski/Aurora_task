// Input -> console.log
const nameInput = document.getElementById("inputName");
document.querySelector(".form--input").addEventListener("submit", function (event) {
  //prevent the normal submission of the form
  event.preventDefault();
  console.log(nameInput.value);
});

// Open/ Close menu
const menu = document.querySelectorAll(".menu--navigation > .link");
// console.log({menu});
function openCloseMenu() {
  menu.forEach((elem) => elem.classList.toggle("responsive"));
}

// Close menu on menu link click
menu.forEach((elem) => elem.addEventListener("click", removeResponsive));

function removeResponsive() {
  menu.forEach((elem) => elem.classList.remove("responsive"));
}
