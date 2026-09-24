// Pequenos aprimoramentos de acessibilidade e experiência.
(() => {
  const theme = document.getElementById('themeBtn');
  const stored = localStorage.getItem('dlp-theme');
  if (stored === 'dark') { document.body.classList.add('dark'); theme.textContent = '☀'; }
  theme?.addEventListener('click', () => { const dark = document.body.classList.toggle('dark'); theme.textContent = dark ? '☀' : '☾'; localStorage.setItem('dlp-theme', dark ? 'dark' : 'light'); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') document.querySelectorAll('.modal:not(.hidden)').forEach(modal => modal.classList.add('hidden')); });
  document.querySelectorAll('.modal').forEach(modal => modal.addEventListener('click', e => { if (e.target === modal) modal.classList.add('hidden'); }));
  const original = window.alert;
  window.alert = message => { const toast = document.createElement('div'); toast.className = 'dlp-toast'; toast.textContent = message; document.body.appendChild(toast); setTimeout(() => toast.remove(), 2800); };
})();
