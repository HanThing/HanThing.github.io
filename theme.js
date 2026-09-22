(() => {
  'use strict';
  // Share Quartz's saved-theme attribute, storage key, and themechange event.
  const root = document.documentElement;
  const validTheme = value => value === 'light' ? 'light' : 'dark';
  function apply(theme) {
    root.setAttribute('saved-theme', theme);
    document.body?.classList.remove('theme-light', 'theme-dark');
    document.body?.classList.add(`theme-${theme}`);
    const label = theme === 'dark' ? '밝은 화면으로 전환' : '어두운 화면으로 전환';
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.textContent = theme === 'dark' ? '밝게' : '어둡게';
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
    });
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#050505' : '#f6f4ee');
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }
  let theme = 'dark';
  try { theme = validTheme(localStorage.getItem('theme')); } catch {}
  apply(theme);
  document.addEventListener('DOMContentLoaded', () => apply(root.getAttribute('saved-theme')));
  document.addEventListener('click', event => {
    if (!event.target.closest('[data-theme-toggle]')) return;
    const next = root.getAttribute('saved-theme') === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', next); } catch {}
    apply(next);
  });
  window.addEventListener('storage', event => {
    if (event.key === 'theme') apply(validTheme(event.newValue));
  });
})();
