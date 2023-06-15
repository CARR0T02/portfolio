export function getColorScheme() {
  const container = document.documentElement;
  let theme = localStorage.getItem('data-theme');
  if (theme === null) {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      localStorage.setItem('data-theme', 'light');
      theme = 'light';
    } else {
      localStorage.setItem('data-theme', 'dark');
      theme = 'dark';
    }
  }
  container.setAttribute('data-theme', theme);
}

export function toggleColorScheme() {
  const container = document.body;
  let theme = container.getAttribute('data-theme');
  if (theme === null) {
    return;
  }
  if (theme === 'light') {
    theme = 'dark';
  } else if (theme === 'dark') {
    theme = 'light';
  }
  localStorage.setItem('data-theme', theme);
  container.setAttribute('data-theme', theme);
}
