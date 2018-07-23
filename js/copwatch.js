// Go
window.onload = function() {
  Fireworks.initialize();
  var howLaunched = window.location.search.substring(1).split('=')[0];
  if (howLaunched === 'homescreen') {
    var welcome = document.getElementById('welcome-back');
    welcome.style.display = 'block';
    welcome.classList.remove('isPaused');
  }
};
