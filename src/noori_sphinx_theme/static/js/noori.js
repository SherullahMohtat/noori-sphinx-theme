/**
 * Noori Sphinx Theme - Interactive Enhancements
 */

(function () {
  'use strict';

  // 1. Theme Management (Dark / Light)
  const THEME_STORAGE_KEY = 'noori-theme-preference';
  const DIR_STORAGE_KEY = 'noori-direction-preference';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }

  function getPreferredDirection() {
    const stored = localStorage.getItem(DIR_STORAGE_KEY);
    if (stored) return stored;
    return document.documentElement.getAttribute('data-default-dir') || 'ltr';
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem(DIR_STORAGE_KEY, dir);
  }

  // Apply immediately to prevent flicker
  applyTheme(getPreferredTheme());
  applyDirection(getPreferredDirection());

  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('noori-theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
      });
    }

    const dirToggleBtn = document.getElementById('noori-direction-toggle');
    if (dirToggleBtn) {
      dirToggleBtn.addEventListener('click', function () {
        const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
        const nextDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        applyDirection(nextDir);
      });
    }

    // 2. Mobile Sidebar Drawer & Backdrop
    const sidebarToggle = document.getElementById('noori-sidebar-toggle');
    const sidebar = document.getElementById('noori-sidebar');
    const backdrop = document.getElementById('noori-backdrop');

    function openSidebar() {
      if (sidebar) sidebar.classList.add('is-open');
      if (backdrop) backdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
      if (sidebar) sidebar.classList.remove('is-open');
      if (backdrop) backdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        if (sidebar && sidebar.classList.contains('is-open')) {
          closeSidebar();
        } else {
          openSidebar();
        }
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeSidebar);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeSidebar();
      }
    });

    // 3. Search Keyboard Shortcut (Cmd+K / Ctrl+K)
    const searchInputs = document.querySelectorAll('.noori-search-input, .noori-sidebar-search-input');
    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const primarySearch = searchInputs[0];
        if (primarySearch) {
          primarySearch.focus();
          primarySearch.select();
        }
      }
    });

    // 4. Copy Code Snippet Button
    const codeBlocks = document.querySelectorAll('div.highlight');
    codeBlocks.forEach(function (block) {
      const btn = document.createElement('button');
      btn.className = 'noori-copy-code-btn';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Copy code snippet');
      btn.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span>Copy</span>
      `;

      btn.addEventListener('click', async function () {
        const pre = block.querySelector('pre');
        if (!pre) return;

        // Clone to exclude line numbers if present
        const clone = pre.cloneNode(true);
        const linenos = clone.querySelector('.linenos');
        if (linenos) linenos.remove();

        const text = clone.innerText.trim();

        try {
          await navigator.clipboard.writeText(text);
          btn.classList.add('is-copied');
          btn.innerHTML = `
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Copied!</span>
          `;
          setTimeout(function () {
            btn.classList.remove('is-copied');
            btn.innerHTML = `
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy</span>
            `;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      });

      block.appendChild(btn);
    });

    // 5. Back to Top Button
    const backToTopBtn = document.getElementById('noori-back-to-top');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 6. ScrollSpy for Right TOC
    const headings = Array.from(document.querySelectorAll('.noori-article h2, .noori-article h3'));
    const tocLinks = Array.from(document.querySelectorAll('.noori-page-toc a'));

    if (headings.length > 0 && tocLinks.length > 0) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              if (!id) return;
              tocLinks.forEach(function (link) {
                const href = link.getAttribute('href');
                if (href === '#' + id) {
                  link.style.color = 'var(--noori-cyan)';
                  link.style.fontWeight = '600';
                } else {
                  link.style.color = '';
                  link.style.fontWeight = '';
                }
              });
            }
          });
        },
        { rootMargin: '0px 0px -70% 0px' }
      );

      headings.forEach(function (h) {
        observer.observe(h);
      });
    }
  });
})();
