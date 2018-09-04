var hamburger = document.getElementById('hamburger');
var hamburgerNav = document.querySelector('.hamburger-nav');
var tabs = document.querySelectorAll('.tab');
var tabContents = document.querySelectorAll('.tab-content');


hamburger.addEventListener('click', function(event) {
  if (hamburgerNav.style.display === "none" || hamburgerNav.style.display === "") {
    hamburgerNav.style.display = "block";
  } else {
    hamburgerNav.style.display = "none";
  }
})

tabs.forEach(function(item) {
  item.addEventListener('click', function(event) {
    var target = event.currentTarget.dataset.target;
    tabContents.forEach(function(item) {
      item.classList.add('hidden');
    })
    document.getElementById(target).classList.remove('hidden');
    tabs.forEach(function(item) {
      item.classList.remove('active');
    })
    event.currentTarget.classList.add('active');
  })
})
