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

  // Theme toggle
  function updateThemeIcons(theme) {
    const darkIcon = document.getElementById('theme-icon-dark');
    const lightIcon = document.getElementById('theme-icon-light');
    const toggle = document.getElementById('theme-toggle');
    if (darkIcon && lightIcon) {
      darkIcon.classList.toggle('hidden', theme !== 'dark');
      lightIcon.classList.toggle('hidden', theme === 'dark');
    }
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'light'));
    }
  }

  function initTheme() {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return stored || (prefersDark ? 'dark' : 'light');
  }

  const initialTheme = initTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);
  updateThemeIcons(initialTheme);

  document.querySelectorAll('#theme-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcons(next);
    });
  });

  // Constellation generative geometry
  function initConstellation() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const svg = document.getElementById('constellation-canvas');
    if (!svg) return;

    let width = svg.clientWidth || 0;
    let height = svg.clientHeight || 0;
    if (!width || !height) return;

    const nodeCount = 32;
    const connectionDistance = 140;
    const nodeRadius = 2;
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        el: document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      });
    }

    nodes.forEach(function(node) {
      node.el.setAttribute('class', 'constellation__node');
      node.el.setAttribute('r', nodeRadius);
      svg.appendChild(node.el);
    });

    const linePool = [];
    function getLine() {
      if (linePool.length) return linePool.pop();
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('class', 'constellation__line');
      svg.appendChild(line);
      return line;
    }

    function releaseLine(line) {
      line.removeAttribute('x1');
      line.removeAttribute('y1');
      line.removeAttribute('x2');
      line.removeAttribute('y2');
      line.setAttribute('display', 'none');
      linePool.push(line);
    }

    let activeLines = [];

    function resize() {
      const rect = svg.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
    }

    function wrap(value, max) {
      if (value < 0) return max + value;
      if (value > max) return value - max;
      return value;
    }

    let rafId;
    function tick() {
      nodes.forEach(function(node) {
        node.x = wrap(node.x + node.vx, width);
        node.y = wrap(node.y + node.vy, height);
        node.el.setAttribute('cx', node.x.toFixed(1));
        node.el.setAttribute('cy', node.y.toFixed(1));
      });

      activeLines.forEach(releaseLine);
      activeLines = [];

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < connectionDistance * connectionDistance) {
            const line = getLine();
            line.setAttribute('x1', nodes[i].x.toFixed(1));
            line.setAttribute('y1', nodes[i].y.toFixed(1));
            line.setAttribute('x2', nodes[j].x.toFixed(1));
            line.setAttribute('y2', nodes[j].y.toFixed(1));
            line.setAttribute('display', 'block');
            activeLines.push(line);
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener('resize', resize);
    tick();

    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        tick();
      }
    });
  }

  initConstellation();
})();
