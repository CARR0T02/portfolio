export function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  const toggleBtn = document.querySelector('#toggle-nav');
  if (toggleBtn === null || navLinks === null) {
    console.log('Nav toggle button or Nav not found');
    return;
  }
  navLinks.classList.toggle('visible');
  if (navLinks.classList.contains('visible')) {
    toggleBtn.setAttribute('aria-expanded', 'true');
  } else {
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
}
