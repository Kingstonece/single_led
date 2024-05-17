const ledBulb = document.getElementById('led-bulb');
const toggleButton = document.getElementById('checkbox');

toggleButton.addEventListener('change', function() {
  ledBulb.classList.toggle('on', this.checked);
});
