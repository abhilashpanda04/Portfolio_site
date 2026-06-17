(function() {
  'use strict';

  const menuButton = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');
  const nav = document.getElementById('main-nav');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      const isHidden = mobileMenu.hidden;
      mobileMenu.hidden = !isHidden;
      mobileMenu.classList.toggle('hidden', !isHidden);
      menuButton.setAttribute('aria-expanded', String(isHidden));
      if (iconMenu && iconClose) {
        iconMenu.classList.toggle('hidden', isHidden);
        iconClose.classList.toggle('hidden', !isHidden);
      }
    });
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && mobileMenu) {
      mobileMenu.hidden = true;
      mobileMenu.classList.add('hidden');
      if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
      if (iconMenu && iconClose) {
        iconMenu.classList.remove('hidden');
        iconClose.classList.add('hidden');
      }
    }
  });

  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    if (!nav) return;
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > 50) {
      nav.classList.add('bg-bg/85', 'backdrop-blur-xl', 'border-border');
      nav.classList.remove('border-transparent');
    } else {
      nav.classList.remove('bg-bg/85', 'backdrop-blur-xl', 'border-border');
      nav.classList.add('border-transparent');
    }

    if (currentScroll <= 0) {
      nav.classList.remove('nav-hidden');
      lastScroll = 0;
      return;
    }

    if (currentScroll > lastScroll && !nav.classList.contains('nav-hidden')) {
      nav.classList.add('nav-hidden');
    } else if (currentScroll < lastScroll && nav.classList.contains('nav-hidden')) {
      nav.classList.remove('nav-hidden');
    }

    lastScroll = currentScroll;
  });

  // Scroll reveal
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(function(el) { observer.observe(el); });
  } else {
    revealElements.forEach(function(el) { el.classList.add('is-visible'); });
  }
})();
