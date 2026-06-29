/* ============================================
   ÁLAINN PAINTING CLASSES — script.js v2
   Production-ready, accessible
   ============================================ */

(function () {
  'use strict';

  // ── Helpers ────────────────────────────────
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  document.addEventListener('DOMContentLoaded', () => {

    // ── 1. Mobile nav ───────────────────────
    const nav        = $('.al-nav');
    const hamburger  = $('.al-nav__hamburger');
    const mobileNav  = $('.al-nav__mobile');

    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', () => {
        const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!isOpen));
        mobileNav.classList.toggle('open', !isOpen);
        document.body.style.overflow = isOpen ? '' : 'hidden';
      });

      // Close on link click or outside click
      $$('a', mobileNav).forEach(link => {
        link.addEventListener('click', closeMobileNav);
      });

      document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !mobileNav.contains(e.target)) {
          closeMobileNav();
        }
      });

      // Keyboard: close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileNav();
      });
    }

    function closeMobileNav() {
      if (!hamburger) return;
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav && mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }

    // ── 2. Nav scroll shadow ────────────────
    if (nav) {
      const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 8);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll(); // initial check
    }

    // ── 3. Active nav link (aria-current) ───
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    $$('.al-nav__links a, .al-nav__mobile a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.setAttribute('aria-current', 'page');
      }
    });

    // ── 4. Scroll reveal ────────────────────
    const revealEls = $$('.reveal');

    if (revealEls.length > 0 && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });
      revealEls.forEach(el => observer.observe(el));
    } else {
      // Fallback: show all immediately
      revealEls.forEach(el => el.classList.add('visible'));
    }

    // ── 5. Select field enhancement ─────────
    $$('.form-field select').forEach(select => {
      const updateStyle = () => {
        select.classList.toggle('has-value', select.value !== '');
      };
      select.addEventListener('change', updateStyle);
      updateStyle();
    });

    // ── 6. Contact form ─────────────────────
    const form = $('.contact__form');
    const feedback = $('#form-feedback');

    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    function handleSubmit(e) {
      e.preventDefault();

      // Clear previous errors
      $$('.form-field input, .form-field select, .form-field textarea', form).forEach(f => {
        f.classList.remove('error');
        f.removeAttribute('aria-invalid');
        f.removeAttribute('aria-describedby');
      });
      $$('.form-field__error', form).forEach(el => el.classList.remove('visible'));

      // Validate required fields
      const requiredFields = $$('[required]', form);
      let firstError = null;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('error');
          field.setAttribute('aria-invalid', 'true');
          const errorEl = field.closest('.form-field')?.querySelector('.form-field__error');
          if (errorEl) {
            errorEl.classList.add('visible');
            const id = `err-${field.id || Math.random().toString(36).slice(2)}`;
            errorEl.id = id;
            field.setAttribute('aria-describedby', id);
          }
          if (!firstError) firstError = field;
        }
      });

      // Email format check
      const emailField = $('#email', form);
      if (emailField && emailField.value.trim() && !isValidEmail(emailField.value)) {
        emailField.classList.add('error');
        emailField.setAttribute('aria-invalid', 'true');
        const errorEl = emailField.closest('.form-field')?.querySelector('.form-field__error');
        if (errorEl) {
          errorEl.textContent = 'Please enter a valid email address.';
          errorEl.classList.add('visible');
        }
        if (!firstError) firstError = emailField;
      }

      if (firstError) {
        firstError.focus();
        if (feedback) {
          feedback.textContent = 'Please correct the highlighted fields.';
          feedback.setAttribute('role', 'alert');
        }
        return;
      }

      // Success
      const btn = $('.form-submit', form);
      const originalText = btn.textContent;
      btn.textContent = 'Sent ♡';
      btn.disabled = true;
      if (feedback) {
        feedback.textContent = 'Sarah will get back to you as soon as possible ♡';
        feedback.setAttribute('role', 'status');
      }

      // Reset after delay
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        form.reset();
        $$('select', form).forEach(s => s.classList.remove('has-value'));
        if (feedback) feedback.textContent = '';
      }, 5000);
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ── 7. Smooth scroll for anchor links ───
    $$('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const target = $(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.focus({ preventScroll: true });
        }
      });
    });

  });

})();
