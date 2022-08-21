const nameInput = document.getElementById("inputName");
document.querySelector(".form--input").addEventListener("submit", function (event) {
  //prevent the normal submission of the form
  event.preventDefault();
  console.log(nameInput.value);
});
