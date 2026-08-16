/* WordCamp Delhi 2026 — poster-identity page interactions */
(function () {
  'use strict';

  var card = document.querySelector('.poster-card');
  if (card) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { card.classList.add('is-visible'); });
    });
  }

  var form = document.querySelector('.poster-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var button = form.querySelector('button');
      if (!input.value) return;
      var original = button.textContent;
      button.textContent = 'Done ✓';
      input.value = '';
      setTimeout(function () { button.textContent = original; }, 2400);
    });
  }
})();
