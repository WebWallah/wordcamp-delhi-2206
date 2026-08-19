/* WordCamp Delhi 2026 — poster-identity page interactions */
(function () {
  'use strict';

  var sheet = document.querySelector('.poster-sheet');
  if (sheet) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { sheet.classList.add('is-visible'); });
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
      button.textContent = '✓';
      input.value = '';
      setTimeout(function () { button.textContent = original; }, 2400);
    });
  }
})();
