
  document.addEventListener('DOMContentLoaded', () => {
    // Cookie Banner Logic
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');
    const hasConsented = localStorage.getItem('gravity_cookie_consent');

    if (!hasConsented) {
      setTimeout(() => {
        cookieBanner.classList.add('is-visible');
      }, 1000);
    }

    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('gravity_cookie_consent', 'true');
      cookieBanner.classList.remove('is-visible');
    });

    // Form Validation Enhancement
    const form = document.querySelector('.access__form');
    form.addEventListener('submit', (e) => {
      const checkbox = form.querySelector('.form-group__checkbox-input');
      if (!checkbox.checked) {
        e.preventDefault();
        alert('ТРЕБУЕТСЯ СОГЛАСИЕ. ПОДТВЕРДИТЕ ОБРАБОТКУ ДАННЫХ ДЛЯ ПРОДОЛЖЕНИЯ.');
      }
    });
  });
