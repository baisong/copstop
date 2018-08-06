// Go
window.onload = function() {
  var howLaunched = window.location.search.substring(1).split('=')[0];
  if (howLaunched === 'homescreen') {
    var welcome = document.getElementById('welcome-back');
    welcome.style.display = 'block';
    welcome.classList.remove('isPaused');
  }
};

// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  document.addEventListener('touchstart', onTouchStart, supportsPassive ? { passive: true } : false);
} catch (e) {}