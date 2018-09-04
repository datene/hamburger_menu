var hamburger = document.getElementById('hamburger');
var hamburgerNav = document.querySelector('.hamburger-nav');
var tabs = document.querySelectorAll('.tab');
var tabContents = document.querySelectorAll('.tab-content');


hamburger.addEventListener('click', function(event) {
  if (hamburgerNav.classList.contains('expanded')) {
    hamburgerNav.classList.remove('expanded')
  } else {
    hamburgerNav.classList.add('expanded')
  }
})

tabContents.forEach(function(tabContent) {
  populateGiphies(tabContent);
})

tabs.forEach(function(item) {
  item.addEventListener('click', function(event) {
    var target = event.currentTarget.dataset.target;
    var targetElement = document.getElementById(target);
    var currentElement = event.currentTarget;
    removeExpanded();
    clearTabContents();
    targetElement.classList.remove('hidden');
    clearTabs();
    currentElement.classList.add('active');
  })
})

document.querySelector('.header-container-xs').addEventListener('click', function(event) {
  clearTabs();
  document.querySelector('.tab:first-child').classList.add('active');
  clearTabContents();
  document.querySelector('.tab-content:first-child').classList.remove('hidden');
})

function removeExpanded() {
  if (hamburgerNav.classList.contains('expanded')) {
    hamburgerNav.classList.remove('expanded')
  }
}

function clearTabs() {
  tabs.forEach(function(item) {
    item.classList.remove('active');
  })
}

function clearTabContents() {
  tabContents.forEach(function(item) {
    item.classList.add('hidden');
  })
}

function populateGiphies(tabContent) {
  fetch("https://api.giphy.com/v1/gifs/random?api_key=mdOEurpRKHYZZilfsXO7DV1vbdDsZSdU&tag=computer+cats")
  .then(function(response) { return response.json() })
  .then(function(data) {
    tabContent.querySelector('img').src = data.data.image_url;
  });
}
