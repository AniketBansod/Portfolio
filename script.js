// Aniket Bansod · portfolio
// Progressive enhancement only: the page is fully usable without this file.

(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var nav = document.querySelector('.nav');
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  var links = menu ? Array.prototype.slice.call(menu.querySelectorAll('a[href^="#"]')) : [];

  // Mobile menu
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Nav shadow after scrolling past the hero top
  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Highlight the section currently in view
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var current = null;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) current = entry.target.id;
      });
      links.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  // Short rise animation when a section below the fold scrolls into view.
  // Nothing is ever hidden: without JS, or before it runs, every section is
  // already fully visible.
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.section, .contact');
  if (!reduce && 'IntersectionObserver' in window) {
    targets.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) return; // already visible: leave it alone
      el.classList.add('reveal');
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
