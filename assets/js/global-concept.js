/* WordCamp Delhi 2026 — "Signal" concept homepage interactions */
(function () {
  'use strict';

  var header = document.getElementById('siteHeader');
  var navToggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');
  var backToTop = document.getElementById('backToTop');

  function onScroll() {
    var scrolled = window.scrollY > 12;
    header.classList.toggle('is-scrolled', scrolled);
    backToTop.classList.toggle('is-visible', window.scrollY > 480);
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function closeMobileNav() {
    mobileNav.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  navToggle.addEventListener('click', function () {
    var isOpen = mobileNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  var revealTargets = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  var counters = document.querySelectorAll('[data-count]');
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var duration = 1200;
    var start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window && counters.length) {
    var countIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) { countIO.observe(el); });
  }

  /* Agenda day tabs */
  var tabs = document.querySelectorAll('.agenda-tab');
  var panels = document.querySelectorAll('[data-day-panel]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('is-active'); });
      tab.classList.add('is-active');
      var day = tab.getAttribute('data-day');
      panels.forEach(function (panel) {
        panel.style.display = panel.getAttribute('data-day-panel') === day ? 'grid' : 'none';
      });
    });
  });

  /* FAQ accordion */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(function (openItem) {
        openItem.classList.remove('is-open');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('is-open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  var form = document.querySelector('.newsletter-form');
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
