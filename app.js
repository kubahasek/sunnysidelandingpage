var hamburger_menu = document
  .querySelector(".hamburger--menu")
  .addEventListener("click", handleClick);

var menu = document.querySelector(".mobile--menu");

function handleClick() {
  console.log("ran");
  menu.classList.toggle("visible");
}
