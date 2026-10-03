// Project cards: clicking a card opens its hidden .project-detail content in a dialog.
const dialog = document.getElementById('project-dialog');
const content = dialog.querySelector('.dialog-content');

document.querySelectorAll('.project-card').forEach((card) => {
  const detail = card.querySelector('.project-detail');
  card.querySelector('.card-trigger').addEventListener('click', () => {
    content.innerHTML = detail.innerHTML;
    content.scrollTop = 0;
    dialog.showModal();
  });
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());

// Clicking the dimmed backdrop (outside the panel) closes it too.
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});

// Dark mode toggle. The <head> inline script already set the initial
// data-theme attribute before paint (using a saved choice or the OS
// preference); this just handles switching it and remembering the choice.
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}