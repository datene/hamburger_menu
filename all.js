var hamburger = document.getElementById('hamburger');
var hamburgerNav = document.querySelector('.hamburger-nav');

hamburger.addEventListener('click', function(event) {
  if (hamburgerNav.style.display === "none" || hamburgerNav.style.display === "") {
    hamburgerNav.style.display = "block";
  } else {
    hamburgerNav.style.display = "none";
  }
})