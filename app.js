const hamburger_icon = document.querySelector(
  "#nav-bar .nav-bar .nav-list .hamburger"
);
const nav_list = document.querySelector("#nav-bar .nav-bar .nav-list");

hamburger_icon.addEventListener("click", () => {
  nav_list.classList.toggle("open");
  hamburger_icon.classList.toggle("active");
});

// popup section
var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

// scrool to button
