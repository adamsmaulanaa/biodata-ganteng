// Preloader fade out
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500);
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️';
  } else {
    darkModeToggle.textContent = '🌙';
  }
});

// Toggle Siapa Saya
const toggleBtn = document.getElementById('toggleButton');
const fotoContainer = document.getElementById('fotoContainer');

toggleBtn.addEventListener('click', () => {
  const isShown = fotoContainer.classList.toggle('show');
  if (isShown) {
    fotoContainer.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.textContent = 'Tutup Siapa Saya?';
  } else {
    fotoContainer.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.textContent = 'Siapa Saya?';
  }
});
