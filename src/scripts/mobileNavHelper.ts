export function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  const toggleBtn = document.querySelector('#toggle-nav');
  if (toggleBtn === null || navLinks === null) {
    console.log('Nav toggle button or Nav not found');
    return;
  }
  if (navLinks.classList.contains('visible')) {
    toggleBtn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="icon"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>';
  } else {
    toggleBtn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="icon"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>';
  }
  navLinks.classList.toggle('visible');
}
